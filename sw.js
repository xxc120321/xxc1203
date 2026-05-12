const CACHE_NAME = 'koko-pwa-v2';
const urlsToCache = [
  '/',
  '/index.html',
  'https://cdn.jsdelivr.net/npm/streamsaver@2.0.6/StreamSaver.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap',
  'https://bootcdn.net/ajax/libs/echarts/5.4.3/echarts.min.js',
  'https://html2canvas.hertzen.com/dist/html2canvas.min.js',
  'https://api.iconify.design/openmoji:cat-face.svg',
  'https://api.iconify.design/openmoji:rabbit-face.svg',
  'https://api.iconify.design/openmoji:shortcake.svg',
  'https://api.iconify.design/openmoji:bubble-tea.svg',
  'https://api.iconify.design/openmoji:sparkles.svg',
  'https://api.iconify.design/openmoji:cherry-blossom.svg',
  'https://api.iconify.design/openmoji:sun-with-face.svg',
  'https://api.iconify.design/openmoji:strawberry.svg',
  'https://api.iconify.design/openmoji:pancakes.svg',
  'https://api.iconify.design/openmoji:doughnut.svg',
  'https://s21.ax1x.com/2025/11/09/pZ9FrMd.png',
  'https://s21.ax1x.com/2025/11/09/pZ9F0Re.png',
  'https://i.postimg.cc/SQ3DH79X/MEITU-20250811-151831796.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('缓存失败:', err))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
