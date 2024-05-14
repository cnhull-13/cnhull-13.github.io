const cacheName = "thisCache";

const toCache = [
  "/index.html",
  "/style.css",
  "script.js",
  "/bg.png",
  "/cordova-10p.png",
  "/cordova-crop.png",
  "/Flutter-10p.png",
"/Flutter-crop.png",
"/react-native-10p.png",
"/react-native-crop.png",
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