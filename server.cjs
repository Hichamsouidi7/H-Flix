const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.wasm': 'application/wasm',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.m3u8': 'application/vnd.apple.mpegurl',
};

const server = http.createServer((req, res) => {
  const rawPath = (req.url || '/').split('?')[0].split('#')[0];
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    decodedPath = rawPath;
  }

  const candidate = path.join(ROOT_DIR, path.normalize(decodedPath).replace(/^([/\\])+/, ''));
  const isInsideRoot = candidate === ROOT_DIR || candidate.startsWith(ROOT_DIR + path.sep);

  if (isInsideRoot && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    const ext = path.extname(candidate).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    });
    return fs.createReadStream(candidate).pipe(res);
  }

  // SPA fallback
  const indexPath = path.join(ROOT_DIR, 'index.html');
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  });
  fs.createReadStream(indexPath).pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 [H-Flix Web] Serveur local démarré sur : http://localhost:${PORT}`);
  console.log(`📺 Films, Séries et Télé en direct prêts pour test et déploiement !`);
});
