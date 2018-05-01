/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "591b966dc0994db076281db4d9fbbf4c"
  },
  {
    "url": "build/app/app.cfiazj5v.js",
    "revision": "4003f89644721660f20ea36ddd192e9b"
  },
  {
    "url": "build/app/app.nb7cjlsg.js",
    "revision": "b9190d576feb84bd8b081239cffe9757"
  },
  {
    "url": "build/app/dfnj3uub.es5.js",
    "revision": "db7b83a1fd97712b9bfe9aaf57dc4fe3"
  },
  {
    "url": "build/app/dfnj3uub.js",
    "revision": "e6744f65fde02e02ad5aa719d8cd17c1"
  },
  {
    "url": "index.html",
    "revision": "680c23598554df1456da1c108c271916"
  },
  {
    "url": "manifest.json",
    "revision": "a2f8b5b49333c9e3550300bab8dde7aa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
