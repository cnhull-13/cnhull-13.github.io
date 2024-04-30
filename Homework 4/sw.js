const cacheName = "thisCache";

const toCache = [
  "/index.html",
  "/indexcopy.html",
  "/style.css",
  "script.js",
  "/manifest.json",
  "/offline.html",
  "https://cdn.glitch.global/07ed32f0-6a89-4516-a3dc-31759babb276/lightgold.jpg?v=1714276860246",
  "https://cdn.glitch.global/07ed32f0-6a89-4516-a3dc-31759babb276/lightblue.jpg?v=1714276861251",
  "https://cdn.glitch.global/07ed32f0-6a89-4516-a3dc-31759babb276/icon.svg?v=1714346114640",
  "https://cdn.glitch.global/07ed32f0-6a89-4516-a3dc-31759babb276/icon1024.png?v=1714347805500",
]

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(toCache);
    })(),
  );
});



self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })(),
  );
});