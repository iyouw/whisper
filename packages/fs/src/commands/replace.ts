import glob from 'glob';
import { promises } from 'fs';

export async function replace(
  src: string,
  pattern: string,
  replacer: string,
  all: boolean
): Promise<void> {
  const files = glob.sync(src);
  const flags = all ? 'g' : '';
  const regex = new RegExp(pattern, flags);
  await Promise.all(
    files.map(async (file) => {
      let content = await promises.readFile(file, 'utf-8');
      if (!regex.test(content)) return;
      content = content.replace(regex, replacer);
      await promises.writeFile(file, content);
    })
  );
}
