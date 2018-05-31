export const tableDefinition = {
  main: {
    properties: [
      "Cantidad",
      "Precio de Venta",
      "% Costo Variable",
      "Cantidad para Canibalización",
      "Precio para Canibalización",
      "% Costo por Canibalización",
      "Cantidad Sinergia",
      "Precio de Venta Sinergia",
      "% Costo por Sinergia",
      "Costo Oportunidad"
    ],
    keys: [
      "cantidad",
      "precioVenta",
      "costoVariable",
      "cantidadCan",
      "precioCan",
      "costoCan",
      "cantidadSin",
      "precioSin",
      "costoSin",
      "costoOport"
    ],
    extraColumn: false
  },
  flujoInversion: {
    properties: ["Flujo de Inversion"],
    keys: ["flujoInv"],
    extraColumn: false
  },
  flujoIncremental: {
    properties: [
      "Periodo Inventarios",
      "Periodo Cuentas por Cobrar",
      "Periodo Cuentas por Pagar"
    ],
    keys: ["pi", "pcxc", "pcxp"],
    singleValue: true
  },
  resultados: {
    properties: [
      "Costo Fijo incremental",
      "CMV",
      "Costo de Venta",
      "Gastos Comercialización",
      "Gastos Administración",
      "Gastos Varios",
      "Amortización"
    ],
    keys: [
      "costoFijo",
      "cmv",
      "costoVenta",
      "gastoCom",
      "gastoAdm",
      "gastoVar",
      "amortizacion"
    ],
    extraColumn: false
  },
  activoFijo: {
    properties: [
      "Ingresar Valor Compra Maquinaria",
      "Ingresar Valor Venta Maquinaria"
    ],
    keys: ["compraMaq", "ventaMaq"],
    singleValue: true
  },
  betaUnleverage: {
    properties: ["Beta", "Debt/Equity"],
    keys: ["beta", "ratioUnleverage"],
    singleValue: true
  },
  betaLeverage: {
    properties: [
      "Debt/Equity",
      "Ingresat Tasa en USD de Interes Anual por Deuda (%)"
    ],
    keys: ["ratioLeverage", "tasa"],
    singleValue: true
  },
  riesgoPais: {
    properties: ["Riesgo Pais", "Risk Free", "Prima"],
    keys: ["riesgoPais", "riskFree", "prima"],
    singleValue: true
  }
};

export const resultDefinition = {
  table: {
    properties: [
      "Ventas Incrementales",
      "Costos Variables Incrementales",
      "Costos Fijos Incrementales",
      "CMV",
      "Costos de Venta",
      "Gastos Comercializacion",
      "Gastos Administrativos",
      "Gastos Varios",
      "Amortización",
      "Utilidades Antes de Impuestos",
      "Taxes",
      "Resultado Neto",
      "Depreciacion",
      "FEO",
      "Flujo Inversion CTN",
      "Varianza Activos Fijos",
      "Efectos colaterales Positivos",
      "Efectos colaterales Negativos",
      "Costo de Oportunidad"
    ]
  },
  trabajoNeto: {
    properties: [
      "Inventario",
      "Cuentas por Cobrar",
      "Cuentas por Pagar",
      "CTN Requerido",
      "Variación CTN"
    ]
  }
};

export const financialAnalysis = {
  datos: {
    properties: [
      "Activo Corriente",
      "Activo No Corriente",
      "Activo Total",
      "Pasivo Corriente",
      "Pasivo No Corriente",
      "Pasivo Total",
      "Patrimonio Neto",
      "Inventarios",
      "Ventas",
      "CMV",
      "Utilidad Neta"
    ],
    keys: [
      "activoCorriente",
      "activoNoCorriente",
      "activoTotal",
      "pasivoCorriente",
      "pasivoNoCorriente",
      "pasivoTotal",
      "patrimonioNeto",
      "inventarios",
      "ventas",
      "cmv",
      "utilidadNeta"
    ]
  },
  ratios: {
    properties: [
      "Liquidez Corriente",
      "Endeudamiento sobre PN",
      "Endeudamiento sobre Activo",
      "Rotacion de Inventarios",
      "Rotacion de Activo Total",
      "Margen de Utilidad",
      "ROA",
      "ROE"
    ],
    keys: [
      "liquidezCorriente",
      "endeudamientoSobrePN",
      "endeudamientoSobreActivo",
      "rotacionDeInventarios",
      "rotacionDeActivoTotal",
      "margenDeUtilidad",
      "roa",
      "roe"
    ]
  },
  interpretacion: [
    "Medida de la capacidad de la compañía para hacer frente a sus deudas de corto plazo.",

    "Mide el grado de utilización del capital ajeno en relación al capital propio",

    "Mide el grado de utilización del capital ajeno en relación al activo total",

    "Mide el numero de veces en que el inventario es realizado en un periodo determinado",

    "Mide la eficiencia con que la empresa utiliza sus activos para generar ingresos",

    "Representa el porcentaje de utilidad neta sobre las ventas que se realizaron",

    "Mide el porcentake de rentabilidad que representa la utilidad neta sobre el activo total.",

    "Mide el porcentaje de rendiumiento que representa la utilidad neta o final después de los impuestos sobre el patrimonio neto"
  ]
};

export const betaUnleverage = [
  {
    industry: "Advertising",
    beta: 1.15,
    ratio: 0.7387
  },
  {
    industry: "Aerospace / Defense",
    beta: 1.08,
    ratio: 0.1846
  },
  {
    industry: "Air Transport",
    beta: 1.01,
    ratio: 0.71
  },
  {
    industry: "Apparel",
    beta: 1.02,
    ratio: 0.3418
  },
  {
    industry: "Auto & Truck",
    beta: 1.2,
    ratio: 1.4809
  },
  {
    industry: "Auto Parts",
    beta: 1.04,
    ratio: 0.283
  },
  {
    industry: "Bank(Money Center)",
    beta: 0.64,
    ratio: 1.5726
  },
  {
    industry: "Banks(Regional)",
    beta: 0.5,
    ratio: 0.5868
  },
  {
    industry: "Beverage(Alcoholic)",
    beta: 1.33,
    ratio: 0.2614
  },
  {
    industry: "Beverage(Soft)",
    beta: 0.7,
    ratio: 0.2306
  },
  {
    industry: "Broadcasting",
    beta: 1.12,
    ratio: 1.1217
  },
  {
    industry: "Brokerage & Investment Banking",
    beta: 1.24,
    ratio: 2.1992
  },
  {
    industry: "Building Materials",
    beta: 1.11,
    ratio: 0.2146
  },
  {
    industry: "Business & Consumer Services",
    beta: 1.17,
    ratio: 0.2744
  },
  {
    industry: "Cable TV",
    beta: 0.92,
    ratio: 0.5305
  },
  {
    industry: "Chemical(Basic)",
    beta: 1.2,
    ratio: 0.4128
  },
  {
    industry: "Chemical(Diversified)",
    beta: 2.03,
    ratio: 0.2719
  },
  {
    industry: "Chemical(Specialty)",
    beta: 1.11,
    ratio: 0.29
  },
  {
    industry: "Coal & Related Energy",
    beta: 1.25,
    ratio: 0.4541
  },
  {
    industry: "Computer Services",
    beta: 1.1,
    ratio: 0.3083
  },
  {
    industry: "Computers / Peripherals",
    beta: 1.01,
    ratio: 0.1817
  },
  {
    industry: "Construction Supplies",
    beta: 1.12,
    ratio: 0.3247
  },
  {
    industry: "Diversified",
    beta: 1.19,
    ratio: 0.3249
  },
  {
    industry: "Drugs(Biotechnology)",
    beta: 1.44,
    ratio: 0.1583
  },
  {
    industry: "Drugs(Pharmaceutical)",
    beta: 1.21,
    ratio: 0.1463
  },
  {
    industry: "Education",
    beta: 1.15,
    ratio: 0.3883
  },
  {
    industry: "Electrical Equipment",
    beta: 1.08,
    ratio: 0.1585
  },
  {
    industry: "Electronics(Consumer & Office)",
    beta: 1.09,
    ratio: 0.0694
  },
  {
    industry: "Electronics(General)",
    beta: 0.94,
    ratio: 0.1497
  },
  {
    industry: "Engineering / Construction",
    beta: 1.27,
    ratio: 0.2972
  },
  {
    industry: "Entertainment",
    beta: 1.15,
    ratio: 0.3374
  },
  {
    industry: "Environmental & Waste Services",
    beta: 0.88,
    ratio: 0.3487
  },
  {
    industry: "Farming / Agriculture",
    beta: 0.74,
    ratio: 0.5554
  },
  {
    industry: "Financial Svcs. (Non - bank & Insurance)",
    beta: 0.61,
    ratio: 10.3219
  },
  {
    industry: "Food Processing",
    beta: 0.68,
    ratio: 0.3082
  },
  {
    industry: "Food Wholesalers",
    beta: 1.79,
    ratio: 0.3746
  },
  {
    industry: "Furn / Home Furnishings",
    beta: 0.79,
    ratio: 0.2786
  },
  {
    industry: "Green & Renewable Energy",
    beta: 1.2,
    ratio: 0.9823
  },
  {
    industry: "Healthcare Products",
    beta: 0.94,
    ratio: 0.1708
  },
  {
    industry: "Healthcare Support Services",
    beta: 0.9,
    ratio: 0.2483
  },

  {
    industry: "Heathcare Information and Technology",
    beta: 0.98,
    ratio: 0.193
  },
  {
    industry: "Homebuilding",
    beta: 1.11,
    ratio: 0.3965
  },
  {
    industry: "Hospitals / Healthcare Facilities",
    beta: 1.18,
    ratio: 1.7651
  },
  {
    industry: "Hotel / Gaming",
    beta: 0.94,
    ratio: 0.3991
  },
  {
    industry: "Household Products",
    beta: 1.0,
    ratio: 0.2103
  },
  {
    industry: "Information Services",
    beta: 0.88,
    ratio: 0.1571
  },
  {
    industry: "Insurance(General)",
    beta: 0.78,
    ratio: 0.385
  },
  {
    industry: "Insurance(Life)",
    beta: 1.01,
    ratio: 0.5706
  },
  {
    industry: "Insurance(Prop / Cas.)",
    beta: 0.84,
    ratio: 0.2643
  },
  {
    industry: "Investments & Asset Management",
    beta: 0.99,
    ratio: 0.4208
  },
  {
    industry: "Machinery",
    beta: 1.15,
    ratio: 0.1975
  },
  {
    industry: "Metals & Mining",
    beta: 1.1,
    ratio: 0.3054
  },
  {
    industry: "Office Equipment & Services",
    beta: 1.37,
    ratio: 0.5165
  },
  {
    industry: "Oil / Gas(Integrated)",
    beta: 1.37,
    ratio: 0.1529
  },
  {
    industry: "Oil / Gas(Production and Exploration)",
    beta: 1.26,
    ratio: 0.4191
  },
  {
    industry: "Oil / Gas Distribution",
    beta: 1.21,
    ratio: 0.9343
  },
  {
    industry: "Oilfield Svcs / Equip",
    beta: 1.23,
    ratio: 0.3098
  },
  {
    industry: "Packaging & Container",
    beta: 0.74,
    ratio: 0.5022
  },
  {
    industry: "Paper / Forest Products",
    beta: 1.2,
    ratio: 0.4001
  },
  {
    industry: "Power",
    beta: 0.5,
    ratio: 0.7636
  },
  {
    industry: "Precious Metals",
    beta: 0.96,
    ratio: 0.1785
  },
  {
    industry: "Publishing & Newspapers",
    beta: 1.02,
    ratio: 0.4449
  },
  {
    industry: "R.E.I.T.",
    beta: 0.66,
    ratio: 0.785
  },
  {
    industry: "Real Estate(Development)",
    beta: 0.75,
    ratio: 0.453
  },
  {
    industry: "Real Estate(General / Diversified)",
    beta: 0.75,
    ratio: 0.236
  },
  {
    industry: "Real Estate(Operations & Services)",
    beta: 1.02,
    ratio: 0.4671
  },
  {
    industry: "Recreation",
    beta: 0.85,
    ratio: 0.2959
  },
  {
    industry: "Reinsurance",
    beta: 0.52,
    ratio: 0.2773
  },
  {
    industry: "Restaurant / Dining",
    beta: 0.85,
    ratio: 0.3221
  },
  {
    industry: "Retail(Automotive)",
    beta: 1.01,
    ratio: 0.7596
  },
  {
    industry: "Retail(Building Supply)",
    beta: 0.86,
    ratio: 0.1786
  },
  {
    industry: "Retail(Distributors)",
    beta: 1.15,
    ratio: 0.4558
  },
  {
    industry: "Retail(General)",
    beta: 1.05,
    ratio: 0.3115
  },
  {
    industry: "Retail(Grocery and Food)",
    beta: 0.71,
    ratio: 0.8368
  },
  {
    industry: "Retail(Online)",
    beta: 1.18,
    ratio: 0.1141
  },
  {
    industry: "Retail(Special Lines)",
    beta: 1.11,
    ratio: 0.53
  },
  {
    industry: "Rubber & Tires",
    beta: 0.95,
    ratio: 0.7799
  },
  {
    industry: "Semiconductor",
    beta: 1.17,
    ratio: 0.131
  },
  {
    industry: "Semiconductor Equip",
    beta: 0.98,
    ratio: 0.1153
  },
  {
    industry: "Shipbuilding & Marine",
    beta: 1.34,
    ratio: 0.4695
  },
  {
    industry: "Shoe",
    beta: 0.88,
    ratio: 0.0965
  },
  {
    industry: "Software(Entertainment)",
    beta: 0.89,
    ratio: 0.0645
  },
  {
    industry: "Software(Internet)",
    beta: 1.2,
    ratio: 0.0332
  },
  {
    industry: "Software(System & Application)",
    beta: 1.09,
    ratio: 0.1414
  },
  {
    industry: "Steel",
    beta: 1.82,
    ratio: 0.3623
  },
  {
    industry: "Telecom(Wireless)",
    beta: 1.3,
    ratio: 1.1997
  },
  {
    industry: "Telecom.Equipment",
    beta: 1.03,
    ratio: 0.2073
  },
  {
    industry: "Telecom.Services",
    beta: 1.08,
    ratio: 0.7953
  },
  {
    industry: "Tobacco",
    beta: 1.26,
    ratio: 0.1714
  },
  {
    industry: "Transportation",
    beta: 0.95,
    ratio: 0.3002
  },
  {
    industry: "Transportation(Railroads)",
    beta: 1.01,
    ratio: 0.2266
  },
  {
    industry: "Trucking",
    beta: 1.2,
    ratio: 0.698
  },
  {
    industry: "Utility(General)",
    beta: 0.29,
    ratio: 0.6724
  },
  {
    industry: "Utility(Water)",
    beta: 0.34,
    ratio: 0.3814
  }
];
