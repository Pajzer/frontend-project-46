import _ from 'lodash';

const getComparison = (obj1, obj2) => {
  const key1 = _.keys(obj1);
  const key2 = _.keys(obj2);
  const keys = _.sortBy(_.union(key1, key2));

  const result = keys.map((key) => {
    if (!Object.hasOwn(obj1, key)) return `  + ${key}: ${obj2[key]}\n`;
    if (!Object.hasOwn(obj2, key)) return `  - ${key}: ${obj1[key]}\n`;
    if (obj1[key] !== obj2[key]) return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}\n`;
    return `    ${key}: ${obj1[key]}\n`;
  });
  return `{\n${result.join('')}}`;
};

export default getComparison;
