// Service Worker simplifié pour H-Flix Web (Vercel)
// Désactivation des redirections de domaine tiers pour garantir une stabilité à 100% sur Vercel

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

// Pas d'interception réseau bloquante : le navigateur et Vercel gèrent directement les assets
self.addEventListener('fetch', () => {});
