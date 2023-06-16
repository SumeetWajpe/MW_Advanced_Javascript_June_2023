self.addEventListener("install", e => {
  console.log(`Service Worker : Installed !`);
  // configure the cache
  e.waitUntil(
    caches
      .open("C1") // cacheName
      .then(cache => cache.addAll(["Index.html", "About.html"]))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", () => {
  console.log(`Service Worker : Activated !`);
});

self.addEventListener("fetch", e => {
  console.log(`Service Worker : Fetching !`);
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

// e.request -> url
