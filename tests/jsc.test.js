/**
 * Tests to ensure jsc remains reliable as well as being 🔥 BLAZINGLY FAST 🔥
 */

import { compile } from '..';
import fs from 'fs';


test('compiles JS files', () => {
  const inFile = './tests/assets/in.js';
  const outFile = './tests/assets/out.js';
  compile(inFile, outFile);

  expect(fs.existsSync(outFile)).toStrictEqual(true);

  // Make sure the contents of the files matches, since that shows that the
  // compilation succeeded
  expect(fs.readFileSync(outFile)).toStrictEqual(fs.readFileSync(inFile));
});


test('compiles directories', () => {
  compile('./tests/assets/in', './tests/assets/out');

  expect(fs.existsSync('./tests/assets/out')).toStrictEqual(true);

  // Make sure the contents of the directory matches, since that shows that
  // the compilation succeeded
  expect(fs.existsSync('./tests/assets/out/index.js')).toStrictEqual(true);
  expect(fs.existsSync('./tests/assets/out/otherFile.js')).toStrictEqual(true);
});


test('compiles JS files in-place', () => {
  const inFile = './tests/assets/inPlace.js';

  // Read the contents of the file beforehand
  const originalContents = fs.readFileSync(inFile);

  compile(inFile, inFile);

  // Make sure the new contents of the files matches, since that shows that the
  // compilation succeeded
  expect(fs.readFileSync(inFile)).toStrictEqual(originalContents);
});
