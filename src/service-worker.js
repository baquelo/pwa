// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

// workbox.routing.registerRoute(
//     ({request}) => request.destination === 'image',
//     new workbox.strategies.NetworkFirst()
// )

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('cache-v1')
        .then(cache => cache.addAll([
            '',
            './index.html',
            './src/index.js',
            './src/master.css'
        ]))
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open('cache-v1')
        .then(cache => cache.match(event.request))
        .then(reponse => response ?? fetch(event.request))
    )
})