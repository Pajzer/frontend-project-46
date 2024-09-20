import fs from 'fs';
import path from 'path';
import parse from './parses.js';

const extractFormat = (filepath) => path.extname(filepath).slice(1);

const getParseFile = (filePath) => {
    const fullPath = path.resolve(process.cwd(), filePath);
    const data = fs.readFileSync(fullPath, 'utf8');
    const format = extractFormat(fullPath);
    return parse(data, format);
};

const genDiff = (filepath1, filepath2) => {
    const data1 = getParseFile(filepath1);
    const data2 = getParseFile(filepath2);
    console.log(data1);
    console.log(data2);
};

export default genDiff;