import fs from 'fs';
import path from 'path';
import parse from './parses.js';
import getComparison from './getComparison.js';

const getParseFile = (filePath) => {
    const fullPath = path.resolve(process.cwd(), filePath);
    const data = fs.readFileSync(fullPath, 'utf8');
    const format = path.extname(fullPath).slice(1);
    return parse(data, format);
};

const genDiff = (filepath1, filepath2) => {
    const data1 = getParseFile(filepath1);
    const data2 = getParseFile(filepath2);
    return getComparison(data1, data2);
};

export default genDiff;