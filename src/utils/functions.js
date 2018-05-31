import { negative, numberOf } from "./helpers";
// import { betaUnleverage } from "../data";

/*
*  FUNCTION DEFINITION MODULE
*/

// VAN FILE

const RISKFREE = 2.10037766831;
const RIESGOPAIS = 4.08556377976;
const PRIMA = 5.96942789641;

export const ventasIncrementales = (cantidad, precioVenta) =>
  cantidad * precioVenta;

export const costoVariableIncremental = (porcentaje, ventasIncrementales) =>
  porcentaje / 100 * ventasIncrementales;

/* CANIBALIZACION */

export const ventasCanibalizadas = (r, i) =>
  negative(r.cantidadCan[i] * r.precioCan[i]);

export const costoVentasCanibalizadas = (r, i) =>
  negative(ventasCanibalizadas(r, i) * (r.costoCan[i] / 100));

/* SINERGIA */

export const ventasSinergia = (r, i) => r.cantidadSin[i] * r.precioSin[i];

export const costoSinergia = (r, i) =>
  ventasSinergia(r, i) * (r.costoSin[i] / 100);

/* TAXES */

export const invertedTax = tax => 1 - tax;

/* RESULTADOS TABLA SUPERIOR DERECHA */

export const efectosColateralesPositivos = (r, i, tax) =>
  (ventasSinergia(r, i) - costoSinergia(r, i)) * invertedTax(tax / 100);

export const efectosColateralesNegativos = (r, i, tax) =>
  (ventasCanibalizadas(r, i) + costoVentasCanibalizadas(r, i)) *
  invertedTax(tax / 100);

export const costoDeOportunidad = (costo, tax) =>
  negative(costo * invertedTax(tax / 100));

/* VENTA MAQUINARIA */

export const valorContable = r => {
  r.valorContable =
    r.compraMaq - r.amortizacion.reduce((tot, val) => tot + val);
  return r.valorContable;
};

export const resultadoBrutoMaquinaria = r => {
  r.brutoMaq = r.ventaMaq - valorContable(r);
  return r.brutoMaq;
};

export const taxMaquinaria = (r, tax) => {
  r.taxMaq = r.brutoMaq * (tax / 100);
  return r.taxMaq;
};

export const flujoActivoFijo = (r, tax) => {
  r.flujoActivo =
    resultadoBrutoMaquinaria(r) < 0
      ? r.ventaMaq + negative(taxMaquinaria(r, tax))
      : r.ventaMaq - taxMaquinaria(r, tax);
  return r.flujoActivo;
};

/* UNNAMED TABLE */

export const rot = (val = 0) => 365 / val;

/* TABLA SUPERIOR IZQUIERDA */

export const utilidadPreTaxes = (r, i) => {
  let result = 0;
  if (i > 0) {
    result =
      r.ventasInc[i] -
      r.costoVariableInc[i] -
      r.costoFijo[i] -
      r.cmv[i] -
      r.costoVenta[i] -
      r.gastoCom[i] -
      r.gastoAdm[i] -
      r.gastoVar[i] -
      r.amortizacion[i];
  } else {
    result = negative(
      r.gastoCom[i] + r.gastoAdm[i] + r.gastoVar[i] + r.amortizacion[i]
    );
  }
  return result;
};

export const postTaxes = (utilidad, tax) => negative(utilidad * (tax / 100));

export const resultadoNeto = (utilidad, taxes) => utilidad + taxes;

export const feo = (resultadoNeto, amortizacion) =>
  resultadoNeto + amortizacion;

/* CAPITAL TRABAJO NETO */

const cmv = (r, i) =>
  numberOf(r.costoVariableInc[i] + r.costoFijo[i] + r.cmv[i] + r.costoVenta[i]);

export const inventario = (r, i) => {
  r.inventario[i] = r.pi ? cmv(r, i + 1) / (365 / r.pi) : 0;
  return r.inventario[i];
};

export const cuentasPorCobrar = (r, i) => {
  r.cuentasPorCobrar[i] = r.pcxc ? r.ventasInc[i] / (365 / r.pcxc) : 0;
  return r.cuentasPorCobrar[i];
};

export const cuentasPorPagar = (r, i) => {
  r.cuentasPorPagar[i] = r.pcxp ? cmv(r, i + 1) / (365 / r.pcxp) : 0;
  return r.cuentasPorPagar[i];
};

export const CTNRequerido = (r, i) => {
  r.ctnRequerido[i] = numberOf(
    inventario(r, i) + cuentasPorCobrar(r, i) - cuentasPorPagar(r, i)
  );
  return r.ctnRequerido[i];
};

export const variacion = (r, i) => {
  r.variacion[i] = CTNRequerido(r, i) - CTNRequerido(r, i - 1);
  return r.variacion[i];
};

/* RESULTADOS TABLA SUPERIOR IZQUIERDA */

export const variacionAF = r => negative(r.compraMaq);

export const flujoDeCajaDelProyecto = (r, i) =>
  r.feo[i] +
  r.variacionCTN[i] +
  r.variacionAF[i] +
  r.efectoColPos[i] +
  r.efectoColNeg[i] +
  r.costoOportNeto[i];

export const variacionCTN = (r, i, fInc) => {
  if (fInc) {
    return negative(variacion(r, i));
  } else {
    return r.flujoInv[i];
  }
};

/* VAN */

export const van = arr => arr.reduce((tot, val) => tot + val, 0);

/* PAYBACK */

export const payback = arr => {
  let i = 1;
  let acum = arr[0];
  let flujo = 0;
  while (acum < 0 && arr.length > i) {
    flujo = acum;
    acum += arr[i++];
  }
  return i == 1 ? 0 : i - 2 + flujo * -1 / arr[i - 1];
};

/* TIR */

export const getTir = arr => {
  let tir = 0.001;
  let van = arr.reduce((tot, num, i) => tot + num / Math.pow(1 + tir, i));
  while (van > 1000 || (van < -1000 && tir < 100)) {
    tir += 0.001;
    van = arr.reduce((tot, num, i) => tot + num / Math.pow(1 + tir, i));
  }
  return tir;
};

// BETA LEVERAGE FILE

const betaUnleverage = (r, tax) => {
  r.betaUnleverage = r.beta / (1 + r.ratioUnleverage * invertedTax(tax / 100));
  return r.betaUnleverage;
};
const betaLeverage = (r, tax) => {
  r.betaLeverage =
    betaUnleverage(r, tax) * (1 + r.ratioLeverage * invertedTax(tax / 100));
  return r.betaLeverage;
};

const ke = (r, tax) => {
  r.ke =
    (r.riskFree || RISKFREE) +
    betaLeverage(r, tax) * (r.prima || PRIMA) +
    (r.riesgoPais || RIESGOPAIS);
  return r.ke;
};

const we = r => 1 / (1 + r.ratioLeverage);
const wd = r => r.ratioLeverage / (1 + r.ratioLeverage);

export const wacc = (r, tax) => {
  console.log("KE", ke(r, tax) / 100);
  console.log("WE", we(r));
  console.log("TASA", r.tasa / 100);
  console.log("WD", wd(r));
  console.log("TAXES", 1 - tax / 100);
  r.wacc = ke(r, tax) / 100 * we(r) + r.tasa / 100 * wd(r) * (1 - tax / 100);
  console.log("WACC", r.wacc);
  return r.wacc;
};
