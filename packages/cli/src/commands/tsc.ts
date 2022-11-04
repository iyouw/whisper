import { build, BuildOptions, Format, BuildResult, BuildFailure } from 'esbuild';
import { existsSync, fstat } from 'fs';
import { format, join } from 'path';
import { CWD } from 'src/env';

const getDefaultOption = (format: Format, watch: boolean): BuildOptions => {
  const ext = format === 'esm' ? '.mjs' : '.cjs';
  const outfile = `dist/index${ext}`;
  const finish = () => console.log(`build success: ${outfile}`);
  const onRebuild = (err: BuildFailure) => (err ? console.log(err) : finish());

  return {
    entryPoints: ['src/index.ts'],
    bundle: true,
    format,
    outfile,
  };
};

const getUserOption = async (): Promise<BuildOptions | undefined> => {
  const path = join(CWD, 'esbuild.js');
  if (existsSync(path)) {
    const module = await import(path);
    return module as unknown as BuildOptions;
  }
  return undefined;
};

export const tsc = async (): Promise<void> => {};
