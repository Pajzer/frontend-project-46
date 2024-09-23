import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('compare two json files', () => {
  const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  const expectedResult = readFile('expected _result.txt');
  expect(result).toEqual(expectedResult);
});

test('compare two yaml files', () => {
  const result = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
  const expectedResult = readFile('expected _result.txt');
  expect(result).toEqual(expectedResult);
});
