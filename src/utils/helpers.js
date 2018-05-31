export const generateRow = (n, type, names) => {
  const arr = [];
  for (var i = 0; i < n; i++) {
    arr.push({ value: "", name: names && names[i] });
  }
  return arr;
};

export const negative = val => val * -1;

export const n = val => {
  const result = Number(val);
  return Number.isNaN(result) ? 0 : result;
};

export const numberOf = val => {
  const number = Number(val);
  return Number.isNaN(number) ? 0 : number;
};

export const newArray = length =>
  Array.apply(null, {
    length
  }).map(Number.call, Number);

export const getData = (data, model) => {
  const result = {};
  Object.keys(model).forEach(table => {
    model[table].keys.forEach((prop, index) => {
      const node = data[table][index];
      if (Array.isArray(node)) {
        result[prop] = node.map(elem => numberOf(elem.value));
      } else {
        result[prop] = numberOf(node.value);
      }
    });
  });
  return result;
};
