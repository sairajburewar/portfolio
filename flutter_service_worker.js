'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "40d670d59175a8ef41c0df7224b46439",
"assets/assets/1.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/campus_cover.png": "16cd821f6f079296da7f1aff0641cae0",
"assets/assets/campus_icon.png": "e8c977882a156bd791d6f92f96ed6328",
"assets/assets/campus_live_cover.png": "a538c62ff2a19dab5ae183f9a3ccd4be",
"assets/assets/campus_live_icon.png": "e008554c4698612152027d2deb77ec16",
"assets/assets/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/quran.png": "55e8a0c928bc192f682ca0e61cb61ce3",
"assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/vedai_logo.png": "0d7c78e158beed745adc23b4f2d81de2",
"assets/assets/vocal_cover.png": "38f6ed9fcec5e77118b820ba1689a9df",
"assets/assets/vocal_icon.png": "02ec2503b9f3d34a9ecb6c8b0ee27914",
"assets/assets/vocal_logo.png": "4161de1b0c6ce41004fb152a9c56b6c9",
"assets/assets/website_cover.png": "9aa9bca2a8df29ffab431946d715bf47",
"assets/assets/website_cover_lq.png": "b04fc65b80ed87dbb1a4ba5911b8643c",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d6159ada2a79249622caf04e288e825d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "61b493df9635f221d909421e8769acb0",
"fevicon.png": "caccf32a501251bdf5bebb7998d527c2",
"icons/android-icon-144x144.png": "ec88ab5519fde92087b65e748cfb4d82",
"icons/android-icon-192x192.png": "1b3d9c638d2b69cd2bc633f741081d30",
"icons/android-icon-36x36.png": "caccf32a501251bdf5bebb7998d527c2",
"icons/android-icon-48x48.png": "f18c33e4c3a799669f6ac2cf33bef08c",
"icons/android-icon-72x72.png": "7fb21e803e547da87be10f97ba01225c",
"icons/android-icon-96x96.png": "1e68441d7d9eb63d86e044c53ecb04dd",
"icons/apple-icon-114x114.png": "5b6c90e3d1acc36e84c653aec2dd8375",
"icons/apple-icon-120x120.png": "b633d292679a4ae2ed917c8d2f5c3c73",
"icons/apple-icon-144x144.png": "ec88ab5519fde92087b65e748cfb4d82",
"icons/apple-icon-152x152.png": "e8e86d4edac553396c52653a570a21ee",
"icons/apple-icon-180x180.png": "dd3467610b6df93f81361c42c84e270e",
"icons/apple-icon-57x57.png": "057152b250a42ef4cf73114b712e2f2d",
"icons/apple-icon-60x60.png": "f54f086dcb1d0052c28085ed88d21543",
"icons/apple-icon-72x72.png": "7fb21e803e547da87be10f97ba01225c",
"icons/apple-icon-76x76.png": "481fa987d0fc00d945f4ee73e7de918e",
"icons/apple-icon-precomposed.png": "10cb952863c2195fcc78866b93ae00bf",
"icons/apple-icon.png": "10cb952863c2195fcc78866b93ae00bf",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "65e5160152399045e74fe019aeb9dacb",
"icons/favicon-32x32.png": "bc6d1a8d25a3feb07df6d79a9dccb603",
"icons/favicon-96x96.png": "1e68441d7d9eb63d86e044c53ecb04dd",
"icons/favicon.ico": "f000b3b4540a5a72709c634e30be3619",
"icons/Icon-192.png": "002516a4b23f153b7ac2928347c377b1",
"icons/Icon-512.png": "84780d2dfe97536ad1b68213079cc78b",
"icons/ms-icon-144x144.png": "ec88ab5519fde92087b65e748cfb4d82",
"icons/ms-icon-150x150.png": "a398f9f0efacd1045c6ea02474906396",
"icons/ms-icon-310x310.png": "76060656faeec82476359663738925aa",
"icons/ms-icon-70x70.png": "9c0305e2515b3ed47287368ffa7037c2",
"index.html": "9d76e042397ab5a91fe709d0e448376f",
"/": "9d76e042397ab5a91fe709d0e448376f",
"main.dart.js": "4d8921ccbf7d7af6f19d42c3be2f3d3b",
"manifest.json": "24f44e36afa6fd739583787ed2a8fc62",
"version.json": "1cefaf2a48f42633ff4b37ffe0e9de96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
