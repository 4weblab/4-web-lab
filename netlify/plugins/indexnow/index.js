/**
 * Netlify Build Plugin: IndexNow
 *
 * Notifies IndexNow-compatible search engines (Bing, Yandex, Seznam, Naver)
 * about new or updated URLs after a successful deploy.
 *
 * Behavior:
 *  - First run (no cached snapshot): notifies ALL urls from sitemap.xml.
 *  - Subsequent runs: diffs current sitemap.xml against the cached previous
 *    version and notifies only urls whose <lastmod> changed (or that are new).
 *  - Failures are logged as warnings and never break the deploy.
 *
 * Config (env vars, set in netlify.toml):
 *  - INDEXNOW_HOST: e.g. "4weblab.it"
 *  - INDEXNOW_KEY:  the key string (must match public/<KEY>.txt)
 */

const fs = require("fs");
const path = require("path");

const ENDPOINT = "https://api.indexnow.org/indexnow";
const SNAPSHOT_FILENAME = "sitemap-prev.xml";

function parseSitemap(xml) {
  // Lightweight regex parser: pulls out each <url> block, then loc + lastmod.
  const map = new Map();
  const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
  for (const block of urlBlocks) {
    const locMatch = block.match(/<loc>\s*([^<\s]+)\s*<\/loc>/);
    const lastmodMatch = block.match(/<lastmod>\s*([^<\s]+)\s*<\/lastmod>/);
    if (locMatch) {
      map.set(locMatch[1], lastmodMatch ? lastmodMatch[1] : "");
    }
  }
  return map;
}

function diffUrls(current, previous) {
  // Returns urls that are new or whose lastmod changed.
  const changed = [];
  for (const [url, lastmod] of current.entries()) {
    const prev = previous.get(url);
    if (prev === undefined || prev !== lastmod) changed.push(url);
  }
  return changed;
}

module.exports = {
  async onSuccess({ utils, constants }) {
    const host = process.env.INDEXNOW_HOST;
    const key = process.env.INDEXNOW_KEY;

    if (!host || !key) {
      console.warn(
        "[IndexNow] Skipped: INDEXNOW_HOST or INDEXNOW_KEY not set."
      );
      return;
    }

    // Read the freshly built sitemap from the publish directory.
    const publishDir = constants.PUBLISH_DIR || "dist";
    const sitemapPath = path.join(publishDir, "sitemap.xml");

    if (!fs.existsSync(sitemapPath)) {
      console.warn(`[IndexNow] Skipped: sitemap not found at ${sitemapPath}`);
      return;
    }

    const currentXml = fs.readFileSync(sitemapPath, "utf8");
    const currentMap = parseSitemap(currentXml);

    if (currentMap.size === 0) {
      console.warn("[IndexNow] Skipped: sitemap contains no <url> entries.");
      return;
    }

    // Restore previous snapshot from Netlify build cache (persists across deploys).
    const cacheDir = path.join(process.cwd(), ".netlify-cache-indexnow");
    await utils.cache.restore(cacheDir);

    const snapshotPath = path.join(cacheDir, SNAPSHOT_FILENAME);
    let urlsToNotify;
    let mode;

    if (fs.existsSync(snapshotPath)) {
      const previousXml = fs.readFileSync(snapshotPath, "utf8");
      const previousMap = parseSitemap(previousXml);
      urlsToNotify = diffUrls(currentMap, previousMap);
      mode = "diff";
    } else {
      urlsToNotify = Array.from(currentMap.keys());
      mode = "first-run";
    }

    if (urlsToNotify.length === 0) {
      console.log("[IndexNow] No URL changes detected. Nothing to notify.");
      // Still update snapshot in case we add/remove URLs without changing lastmod later.
      fs.mkdirSync(cacheDir, { recursive: true });
      fs.writeFileSync(snapshotPath, currentXml, "utf8");
      await utils.cache.save(cacheDir);
      return;
    }

    const payload = {
      host,
      key,
      keyLocation: `https://${host}/${key}.txt`,
      urlList: urlsToNotify,
    };

    console.log(
      `[IndexNow] Mode: ${mode}. Notifying ${urlsToNotify.length} URL(s) → ${ENDPOINT}`
    );

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      console.log(
        `[IndexNow] Response: ${res.status} ${res.statusText}`
      );
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.warn(`[IndexNow] Non-OK response body: ${text.slice(0, 500)}`);
      }
    } catch (err) {
      console.warn(`[IndexNow] Request failed: ${err.message}`);
    }

    // Persist current sitemap as the new snapshot regardless of HTTP outcome.
    // (If the request failed, next deploy will retry the same URLs.)
    try {
      fs.mkdirSync(cacheDir, { recursive: true });
      fs.writeFileSync(snapshotPath, currentXml, "utf8");
      await utils.cache.save(cacheDir);
    } catch (err) {
      console.warn(`[IndexNow] Could not save snapshot: ${err.message}`);
    }
  },
};