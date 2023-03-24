import fs from 'fs';

/**
 * Perform a 🔥 BLAZINGLY FAST 🔥 compilations of the given input and output
 * files
 * @param {string} input input file name or directory name
 * @param {string} output output file name or directory name
 */
export function compile(input, output) {
  fs.cpSync(input, output);
}
