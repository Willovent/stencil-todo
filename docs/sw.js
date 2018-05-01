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
    "revision": "eb5bdcc4c3f71a95596cb3fbbd5a3b00"
  },
  {
    "url": "build/app/app.j09njmto.js",
    "revision": "981cd2c5db41f1813a7ebd9604f8ea95"
  },
  {
    "url": "build/app/app.nb7cjlsg.js",
    "revision": "b9190d576feb84bd8b081239cffe9757"
  },
  {
    "url": "build/app/ci4azqjy.es5.js",
    "revision": "c6d08202bdce9ecbcb9ed9aead9e2d5b"
  },
  {
    "url": "build/app/ci4azqjy.js",
    "revision": "9bfac8cfb67e657b245e8525fb27242c"
  },
  {
    "url": "index.html",
    "revision": "87e10bd43988cdcd0fc1c5a4667d7cb6"
  },
  {
    "url": "manifest.json",
    "revision": "d630ff772dd7de70ba85f6518a776d5d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
