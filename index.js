import fs from 'fs';
import path from 'path';

/**
 * Perform a 🔥 BLAZINGLY FAST 🔥 compilation of the given input file/directory
 * @param {string} input input file name or directory name
 * @param {string} output output file name or directory name
 */
export function compile(input, output) {

  const inFile = path.resolve(input);
  const outFile = path.resolve(output);

  // For in-place compilation, we need to compile to a temporary file
  if (input === output) {
    const tempDir = fs.mkdtempSync('jsc');
    const newOutFile = path.join(tempDir, path.basename(outFile));
    // Retry the compilation
    compile(input, newOutFile);
    // Then copy it back
    fs.cpSync(newOutFile, outFile);
    // Finally, clean up the temporary file
    fs.rmSync(tempDir, { recursive: true });
    return;
  } else {
    // Normal compilation
    fs.cpSync(inFile, outFile, { recursive: true });
  }
}
