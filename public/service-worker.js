importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js"
);

if (workbox) {
  self.__WB_DISABLE_DEV_LOGS = true;

  console.log("✅ Workbox loaded successfully!");

  workbox.setConfig({
    debug: false,
  });

  workbox.precaching.cleanupOutdatedCaches();

  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

  workbox.routing.registerRoute(
    ({ request }) => ["style", "script", "image"].includes(request.destination),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "static-assets",
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
        }),
      ],
    })
  );

  workbox.routing.registerRoute(
    ({ request }) => request.destination === "font",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "font-assets",
    })
  );

  workbox.routing.setCatchHandler(async ({ event }) => {
    if (event.request.destination === "document") {
      return caches.match("/offline.html");
    }
    return Response.error();
  });
} else {
  console.error("❌ Workbox failed to load.");
}
