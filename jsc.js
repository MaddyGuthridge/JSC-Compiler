#!/usr/bin/env node
/**
 * The main entrypoint to the JSC compiler, accessed by running `jsc`
 */
import { program } from 'commander';
import { compile } from './index.js';

/**
 * Main function
 */
function main() {
  program
    .name('jsc')
    .description('A 🔥 BLAZINGLY FAST 🔥, but ❄️ refreshingly simple ❄️ JavaScript to JavaScript compiler')
    .version('1.0.1')
    .argument('<input>')
    .requiredOption('-o <output>');

  program.parse();
  const options = program.opts();

  const input = program.args[0];
  const output = options.o;

  compile(input, output);
}


main();
