import type { Plugin } from 'vite';
import { AppContext } from './app-context.js';
import { Application, IApplication } from './app.js';

export function useVitePluginMd(
  configApp: (app: IApplication) => void
): Plugin {
  const app = new Application();
  configApp(app);

  const plugin: Plugin = {
    name: 'vite-plugin-whisper-md',
    resolveId(id: string): string | null {
      return null;
    },
    load(id: string): string | null {
      return null;
    },
    async transform(code: string, id: string): Promise<string | null> {
      if (id.endsWith('.md')) return null;
      const context = new AppContext(id, code);
      for (const middleware of app.middlewares) {
        await middleware(context);
      }
      return context.render(context);
    },
  };

  return plugin;
}
