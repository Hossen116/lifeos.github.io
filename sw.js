// LifeOS service worker. Network-first so a new index.html is picked up; falls back to cache when offline.
var V='lifeos-1793256046';
var ASSETS=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(ASSETS)}))});
self.addEventListener('message',function(e){if(e.data==='skip')self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(V).then(function(h){h.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});
self.addEventListener('notificationclick',function(e){e.notification.close();e.waitUntil(self.clients.matchAll({type:'window'}).then(function(l){return l.length?l[0].focus():self.clients.openWindow('./')}))});
