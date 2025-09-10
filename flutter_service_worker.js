'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "06f17a7376b3b25c60f8d6852eb44dfe",
"assets/AssetManifest.bin.json": "355b235557985cb3600d75ccce8d309d",
"assets/AssetManifest.json": "6d842398b03783d13bbdedff52e14e03",
"assets/assets/app_logo.png": "a90e5424e26fa34eb99891dcd41bc651",
"assets/assets/badge.png": "8f567bc14b5ac9e7ac386f1b45d4a273",
"assets/assets/dummy_profile.jpg": "69bf8c6252c4b085415c2a007dc75818",
"assets/assets/female_profile.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "62a51d6c865b832053fc7f9066b0935c",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "4da45c5cee5d56db43fd07819bafd988",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "5db3d2b3980827dae28161da22b1753a",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "b0229a479dc3ab3328283c18e279c903",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d76ccb1aa5bf679b387f48101058933a",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "1b317a90e2d9f421038a64ff976ce84d",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "8c75203c397f88159acb95fc09268a62",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "14240307333a9fce5321069a5080635c",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "8694b2396caee6c23c74064875d173f0",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "7e3a130b0433696f4d2f570122f5790d",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "6b58f9ae7ab8ad8d3a717bea330799c1",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "06582556533e597755a368f022db5f5a",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "3e12ea1e13912a297a80dcd5778e60fc",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "29cc97af5403e3251cbb586727938473",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "bafbc0b1fb65a719824724dc735ea88c",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "0672b0c029623812fb13d1b88c05b739",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "f03365b9383f96610bb69c2f92d7cb75",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "d86da029041c4acc875ab9f94506bcab",
"assets/assets/google_icon.png": "0f118259ce403274f407f5e982e681c3",
"assets/assets/login_header.png": "0b3bf621bbdc43389b29488265b9e58f",
"assets/assets/male_profile.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/premium499.png": "725e23d9e335320350c978f315b33c97",
"assets/assets/pro29.png": "1d631dfd66272b3e71696b7b4dad279c",
"assets/assets/qr_code_placeholder.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/Robot%2520Working.json": "3026eb5699d1c38214391c52cee4222d",
"assets/assets/robot.png": "960d5ffc460eb9180305077c94855436",
"assets/assets/robot_reading.jpg": "5f27040666ed7d2e1c5428467dcfacf9",
"assets/assets/robot_studying.jpg": "18066374ef92f12d2a973a47df9d1632",
"assets/assets/sidebar.lottie": "7894bed05540ab0f5e46a54d2144357e",
"assets/FontManifest.json": "28c0c9defb50eea754016d91a30e5f1f",
"assets/fonts/MaterialIcons-Regular.otf": "849608256eb6fb4b33db72270c456d01",
"assets/NOTICES": "1b6befcdb32959549d42b194d8240623",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/lucide_icons/assets/lucide.ttf": "f9ba0b4172a0beabfecd5857b55dfe72",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "a90e5424e26fa34eb99891dcd41bc651",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d42a8718e2c79b0067267a1d4f57ea83",
"icons/Icon-192.png": "a90e5424e26fa34eb99891dcd41bc651",
"icons/Icon-512.png": "a90e5424e26fa34eb99891dcd41bc651",
"icons/Icon-maskable-192.png": "a90e5424e26fa34eb99891dcd41bc651",
"icons/Icon-maskable-512.png": "a90e5424e26fa34eb99891dcd41bc651",
"index.html": "152b43b75feb0cf8295b8556f7494e65",
"/": "152b43b75feb0cf8295b8556f7494e65",
"main.dart.js": "0921619d0fc0c331e00c71cfa7fb11f9",
"manifest.json": "ae06761f803a68203e4522416f580da5",
"proxy.js": "f0cdd501134ad6c2ebe386e893ea5d89",
"sqflite_sw.js": "7695c1827b581ba64c7ef136d4cdb2c8",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"version.json": "d9fb06ccd34175cbdc6d16a4e2c7c573"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
