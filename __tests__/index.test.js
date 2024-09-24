import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const excpectedStylish = readFile('expected _stylish.txt');

describe('compare two files', () => {
  test('json', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(genDiff(filepath1, filepath2)).toEqual(excpectedStylish);
  });

  test('yaml', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');

    expect(genDiff(filepath1, filepath2)).toEqual(excpectedStylish);
  });
});
