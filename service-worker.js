// Define the cache name and the files you want to cache
const CACHE_NAME = "portfolio-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/manifest.json",
  // Add other files to cache as needed
];

// Listen for the install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Listen for the fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If there's a match in the cache, return it
      if (response) {
        return response;
      }
      // Otherwise, fetch from the network
      return fetch(event.request);
    })
  );
});

// Listen for the activate event
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
