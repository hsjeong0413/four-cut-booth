const C = "fourcut-v1", F = ["./", "index.html", "config.js", "icon.svg"];
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.addAll(F))));
// 네트워크 우선, 오프라인이면 캐시 (수정 즉시 반영)
self.addEventListener("fetch", e => {
  if (e.request.method === "GET" && new URL(e.request.url).origin === location.origin)
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
