import { Command } from 'commander';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

import { replace } from './index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8'));

const program = new Command();

program.name('whipser fs cli').version(pkg.version).usage('command [options]');

program
  .command('replace')
  .description('replace file content')
  .argument('<glob>', 'files to be replace')
  .option('-p,--pattern <regex>', 'search value')
  .option('-r, --replacer <string>', 'replacer')
  .option('-a, --all', 'replace all')
  .option('-e, --escape', 'escape patten regex meta chars')
  .action(async (src, { pattern, replacer, all, escape }) => {
    await replace(src, pattern, replacer, all, escape);
  });

program.parse(process.argv);
