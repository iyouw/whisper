import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const CWD = process.cwd();
export const DIR_SRC = join(CWD, 'src');
export const DIR_ES = join(CWD, 'es');
export const DIR_LIB = join(CWD, 'lib');
export const DIR_DIST = join(CWD, 'dist');
