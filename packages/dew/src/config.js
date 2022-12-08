import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const LISTEN_PORT = 80;

export const DIR_HTML = join(__dirname, '..', 'html');
export const DIR_CONFIG = join(DIR_HTML, 'config');
export const ENTRY = join(DIR_HTML, 'index.html');

export const DEFAULT_ENCODING = 'utf8';

export const DEFAULT_KEY_DECORATOR = '__';

export const NACOS_CONFIG_FILE = 'whisper_configuration.js';
export const NACOS_DEFAULT_GROUP = 'DEFAULT_GROUP';
