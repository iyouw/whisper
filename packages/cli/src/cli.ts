import { Command } from 'commander';
import process from 'process';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';

import { devSite } from './index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  readFileSync(join(__dirname, '../package.json'), 'utf-8')
);

const program = new Command();

program
  .name('whisper cli')
  .description('tools for dev starry')
  .version(pkg.version);

program
  .command('site:dev')
  .description('start vite server for development')
  .action(devSite);

program.parseAsync(process.argv);
