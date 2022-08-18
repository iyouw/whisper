import { createServer } from 'vite';

import config from '../config/vite.site.dev.js';

export async function devSite(): Promise<void> {
  const server = await createServer(config);
  await server.listen();
  server.printUrls();
}
