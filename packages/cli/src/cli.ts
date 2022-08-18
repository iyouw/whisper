import { Command } from 'commander'
import process from 'process'
import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(readFileSync(join(__dirname,'../packages'),'utf-8'))

const program = new Command()

program
  .name('whisper cli')
  .description('tools for dev starry')
  .version(pkg.version)


program.parse(process.argv)