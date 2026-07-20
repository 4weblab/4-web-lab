#!/usr/bin/env node
/**
 * Postbuild: inlines above-the-fold CSS in every generated HTML under dist/
 * and converts the render-blocking <link rel="stylesheet"> into a
 * <link rel="preload" as="style"> that swaps to a stylesheet on load,
 * with a <noscript> fallback. Keeps SSG output intact.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import Beasties from 'beasties';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const beasties = new Beasties({
  path: distDir,
  publicPath: '/',
  preload: 'swap',
  pruneSource: false,
  inlineFonts: false,
  preloadFonts: false,
  logLevel: 'warn',
});

const htmlFiles = await walk(distDir);
let processed = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const out = await beasties.process(html);
  await writeFile(file, out, 'utf8');
  processed++;
}
console.log(`[inline-critical-css] Processed ${processed} HTML file(s).`);