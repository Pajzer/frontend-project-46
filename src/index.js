import fs from 'fs';
import path from 'path';
import getComparison from './getComparison.js';
import parse from './parses.js';
import getReport from './formatters/index.js';

const fullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath);
const getData = (filepath) => {
  const patch = fullPath(filepath);
  return parse(fs.readFileSync(patch), extractFormat(filepath));
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const tree = getComparison(data1, data2);
  return getReport(tree, format);
};

export default genDiff;
