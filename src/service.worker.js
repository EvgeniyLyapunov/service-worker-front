const cacheName = 'MyCache_v2';

const precachedAssets = ['/img/skeleton.png', '/img/Error500.png'];

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precachedAssets)));
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isPrecachedRequest = precachedAssets.includes(url.pathname);

  try {
    if (isPrecachedRequest) {
      event.respondWith(caches.open(cacheName).then((cache) => cache.match(event.request.url)));
    } else {
      event.respondWith(fetch(event.request));
      return;
    }
  } catch (error) {
    event.respondWith(caches.open(cacheName).then((cache) => cache.match('./img/Error500.png')));
  }
});
