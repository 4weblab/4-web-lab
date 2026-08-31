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

/**
 * Beasties' `preload: 'swap'` still leaves a plain `<link rel="stylesheet">`
 * (with a no-op onload) in the document, which Lighthouse counts as
 * render-blocking. Convert those tags — outside <noscript> — into
 * media="print" + onload swap so they load without blocking first paint.
 */
function deblockStylesheets(html) {
  const parts = html.split(/(<noscript>[\s\S]*?<\/noscript>)/i);
  return parts
    .map((part) => {
      if (/^<noscript>/i.test(part)) return part;
      return part.replace(/<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi, (tag) => {
        if (/\bmedia=/i.test(tag)) return tag;
        return tag
          .replace(/\s*onload=(["'])[\s\S]*?\1/i, '')
          .replace(/\s*\/?>$/, ` media="print" onload="this.media='all'">`);
      });
    })
    .join('');
}

const htmlFiles = await walk(distDir);
let processed = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const out = deblockStylesheets(await beasties.process(html));
  await writeFile(file, out, 'utf8');
  processed++;
}
console.log(`[inline-critical-css] Processed ${processed} HTML file(s).`);