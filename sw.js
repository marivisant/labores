/* Guarda la app en el móvil para que funcione sin internet */
const CACHE = 'labores-marivi-v1';
const ARCHIVOS = ['./','./index.html','./manifest.webmanifest','./icono-180.png','./icono-192.png','./icono-512.png'];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARCHIVOS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(
    caches.match(e.request).then(r=> r || fetch(e.request).then(resp=>{
      const copia = resp.clone();
      caches.open(CACHE).then(c=>c.put(e.request,copia)).catch(()=>{});
      return resp;
    }).catch(()=>caches.match('./index.html')))
  );
});
