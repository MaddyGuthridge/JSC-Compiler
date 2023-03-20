#!/usr/bin/env node
import fs from 'fs';
import { program } from 'commander';

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

fs.cpSync(input, output);
