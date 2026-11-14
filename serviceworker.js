// JavaScript Document
const CACHE_NAME = 'offline-site-v1';
const ASSETS_TO_CACHE = ['/', '/animalNames.html', '/profiler.css','/jquery.min.js','/jquery-ui.min.js','/bootstrap.min.js','/profiler.js','/serviceworker.js','/bootstrap.min.css', '/animal.js', '/https://smtechnology133.github.io/africaonline/images'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});