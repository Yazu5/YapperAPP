self.addEventListener('install', (event) => {
    console.log('Yapper Service Worker Installed');
});

self.addEventListener('fetch', (event) => {
    // Allows the app to work offline once loaded
});
