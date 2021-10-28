const cachename = 'ecommerce-nft'

const recursosCacheados = [
    "./",
    "./favicon.ico",
    "./index.html",
    "./logar.html",
    "./quemsomos.html",
    "./registrar.html",
    "./index.js",
    "./manifest.json",
    "./icons/apple-icon-57x57.png",
    "./icons/apple-icon-60x60.png",
    "./icons/apple-icon-72x72.png",
    "./icons/apple-icon-76x76.png",
    "./icons/apple-icon-114x114.png",
    "./icons/apple-icon-120x120.png",
    "./icons/apple-icon-144x144.png",
    "./icons/apple-icon-152x152.png",
    "./icons/apple-icon-180x180.png",
    "./icons/favicon-512x512.png",
    "./icons/android-icon-192x192.png",
    "./icons/favicon-32x32.png",
    "./icons/favicon-96x96.png",
    "./icons/favicon-16x16.png",
    "./icons/ms-icon-144x144.png",
    "./img/imgf.png",
];

self.addEventListener("install", function(event) {
    console.log("Service Worker instalado!");
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            cache.addAll(recursosCacheados);
        })
    );
});

self.addEventListener("fetch", function(event) {
    console.log(`Request para o recurso ${event.request.url}`);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                console.log(`Recurso encontrado no cache: ${event.request.url}`);
                return response;
            } else {
                console.log(
                    `Recurso não encontrado no cache. Fazendo request para ${event.request.url}`
                );
                return fetch(event.request).catch(function(erro) {
                    console.log(`Deu erro ${erro}`)
                });
            }
        })
    )
})

self.addEventListener("activate", function() {
    console.log("Service worker ativado!");
})