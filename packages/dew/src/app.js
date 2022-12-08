import connect from 'connect';
import serveStatic from 'serve-static';
import history from 'connect-history-api-fallback';
import { DIR_HTML, LISTEN_PORT } from './config.js';

export const startApp = () => {
  connect().use(history()).use(serveStatic(DIR_HTML)).listen(LISTEN_PORT);
};
