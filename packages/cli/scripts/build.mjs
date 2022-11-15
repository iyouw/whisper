import { build } from 'esbuild';
import process from 'node:process';

const bundle = async (format) => {
  const ext = format === 'esm' ? '.mjs' : '.js';
  const outfile = `dist/index${ext}`;
  const finish = () => console.log(`build finished: ${outfile}`);
  const onRebuild = (error) => (error ? console.log(error) : finish());
  await build({
    watch: process.argv.includes('-w') && { onRebuild },
    bundle: true,
    format,
    charset: 'utf8',
    target: ['chrome58', 'node14'],
    outfile,
    entryPoints: ['src/index.ts'],
  });
};

await bundle('cjs');
await bundle('esm');
