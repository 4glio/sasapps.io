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
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2b54b1d7377d3f4585cdcdf0d2fe043d/loadbalance.gif",
    "revision": "2b54b1d7377d3f4585cdcdf0d2fe043d"
  },
  {
    "url": "404.html",
    "revision": "a32c98efdd40502f98a81e1cb65a36c5"
  },
  {
    "url": "404/index.html",
    "revision": "9b287a557032e39a15bea04ed86baa64"
  },
  {
    "url": "4b5897c1b8d7d2c8a94fbc7d34db9c2358362eef-b159e8b46b1f9172fd55.js"
  },
  {
    "url": "4b5897c1b8d7d2c8a94fbc7d34db9c2358362eef-b159e8b46b1f9172fd55.js.map",
    "revision": "bd45802fd9896b4417c31050b5aa285d"
  },
  {
    "url": "8c90a23dcf8df39e3c4353467cfcf37c9d717c90-6a2804bd40f05e65e770.js"
  },
  {
    "url": "8c90a23dcf8df39e3c4353467cfcf37c9d717c90-6a2804bd40f05e65e770.js.map",
    "revision": "6418935ea30a1d681e287b172bd62864"
  },
  {
    "url": "about/index.html",
    "revision": "4f7004378cb4c089bc990ff47eaec786"
  },
  {
    "url": "admin/config.yml",
    "revision": "11926183dceb8bc4a83a5dd08349fb7d"
  },
  {
    "url": "af-scl-developer/index.html",
    "revision": "8bb0d8f7941c27c4e5d1c54253f7e640"
  },
  {
    "url": "app-48ef67c676f5d7d3592c.js"
  },
  {
    "url": "app-48ef67c676f5d7d3592c.js.map",
    "revision": "734018c48486c050641bf273f5376558"
  },
  {
    "url": "b637e9a5-17ce509c341390668fe1.js"
  },
  {
    "url": "b637e9a5-17ce509c341390668fe1.js.map",
    "revision": "08e3d319a4eab790aef03bee48c481e1"
  },
  {
    "url": "blog/index.html",
    "revision": "1f764246f7ed46e2abdc8cd3dda54da8"
  },
  {
    "url": "chunk-map.json",
    "revision": "e2db7a4db39bfe4d24fdc63203ae1114"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js.map",
    "revision": "33c532a785c69768b20d5d80ea6bec8b"
  },
  {
    "url": "component---src-pages-404-tsx-ad1414166f2c53dbac42.js"
  },
  {
    "url": "component---src-pages-404-tsx-ad1414166f2c53dbac42.js.map",
    "revision": "22701504b8ae9d105718d412015cc00e"
  },
  {
    "url": "component---src-pages-about-tsx-ffa0326e67cc79c42436.js"
  },
  {
    "url": "component---src-pages-about-tsx-ffa0326e67cc79c42436.js.map",
    "revision": "2791e4e434d21a1f46018b66e667fcba"
  },
  {
    "url": "component---src-pages-blog-tsx-ce3b16ca17266a2d9cda.js"
  },
  {
    "url": "component---src-pages-blog-tsx-ce3b16ca17266a2d9cda.js.map",
    "revision": "3fce7adceac6f18443c0425356757e3e"
  },
  {
    "url": "component---src-pages-contact-tsx-2da2e6e480c04247846f.js"
  },
  {
    "url": "component---src-pages-contact-tsx-2da2e6e480c04247846f.js.map",
    "revision": "4814e0a6175dbd69b90db0023799ceda"
  },
  {
    "url": "component---src-pages-index-tsx-4ee18d2511148bfebd02.js"
  },
  {
    "url": "component---src-pages-index-tsx-4ee18d2511148bfebd02.js.map",
    "revision": "5755933f20cf0952e415165cb9c3e8a5"
  },
  {
    "url": "component---src-pages-products-tsx-f26c9572a52b0aba5ffb.js"
  },
  {
    "url": "component---src-pages-products-tsx-f26c9572a52b0aba5ffb.js.map",
    "revision": "9e94672ea419d9132b8365908df4f5f5"
  },
  {
    "url": "component---src-pages-services-tsx-bb9b03b8572bf99969fd.js"
  },
  {
    "url": "component---src-pages-services-tsx-bb9b03b8572bf99969fd.js.map",
    "revision": "8f0cbfa30605a231b3e66576c737e6f6"
  },
  {
    "url": "component---src-pages-solutions-tsx-d7c53fba57eff2b1b1cb.js"
  },
  {
    "url": "component---src-pages-solutions-tsx-d7c53fba57eff2b1b1cb.js.map",
    "revision": "b5d8d2f9d8a9d62689f6b453b6dacaad"
  },
  {
    "url": "component---src-pages-tags-tsx-fb3005d3fdd11cb79056.js"
  },
  {
    "url": "component---src-pages-tags-tsx-fb3005d3fdd11cb79056.js.map",
    "revision": "46917320d57f92b224f519b1fdea1bce"
  },
  {
    "url": "component---src-templates-markdown-page-template-tsx-ba04fe16abe00b5820f6.js"
  },
  {
    "url": "component---src-templates-markdown-page-template-tsx-ba04fe16abe00b5820f6.js.map",
    "revision": "8aaf5522839b3c079baa8f45f42b2e60"
  },
  {
    "url": "component---src-templates-tags-tsx-7c096e1a80d9f3aa1206.js"
  },
  {
    "url": "component---src-templates-tags-tsx-7c096e1a80d9f3aa1206.js.map",
    "revision": "82a5b62980d8e8e3ca7e3861c50c2f22"
  },
  {
    "url": "component---src-templates-template-tsx-923251224714e7bbc7f3.js"
  },
  {
    "url": "component---src-templates-template-tsx-923251224714e7bbc7f3.js.map",
    "revision": "eb5ab344865d0cd88259864ab76bca25"
  },
  {
    "url": "contact/index.html",
    "revision": "e10d2ec6b938401b1bd933df77e9a251"
  },
  {
    "url": "csr-policy/index.html",
    "revision": "c4cf36ce3dbdff1cf103e079ef79ffe1"
  },
  {
    "url": "data-controller/index.html",
    "revision": "8b2687328ea0d8c1194d691c7108f7c2"
  },
  {
    "url": "datacontroller-on-azure/index.html",
    "revision": "90437f49a366f94d38ac66044a30b0cf"
  },
  {
    "url": "ethics-policy/index.html",
    "revision": "e378e768ccfaecc16c48f04d5af15496"
  },
  {
    "url": "euc-data-control/index.html",
    "revision": "5ac21982c742aaf5e81207ff8de5dfdc"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "1b4dc9eb04481a70d21c15ac12948eb6"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js"
  },
  {
    "url": "framework-02fcab78320a77685ff9.js.map",
    "revision": "429fadc91e9a8b0d3455ab12ac5badf5"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a2bbff933efc1e39a8549a559da42a87"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "8e2eb5291e76d333632d7533bfce0ed6"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "1d76ec8fc20e9489fdb2ff2b97cebceb"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "3a5d7bfc83546e50bdf3f193b7efc6fb"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "0a49bb6fd00e6cf4566afddca17ce495"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "b0be4730a01904cffaec68c01d7b591a"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "e005c39d747e5164c4c71603aca5c7b7"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "bbcdf6aa042785a8f51552ee11d18f01"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6c7d08bc65dd917a56833992ca51a27e"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "f29dbc6e6a95705b3d42792ec75e2b98"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "d50e7bbeed19b8052c8558cd7ba3c61b"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "b67e19268862421f0cf6c86b5665961e"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "7b80af0bfd74c9028d7a735f9691aaad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "8ac9ab48e31623082f249c2fff32a4af"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "7e3742d5f44b09782dbd305ee5fd4d41"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "cfaaf4a48bf5c891f8fcb549fff7b599"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6c7d08bc65dd917a56833992ca51a27e"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "62111edfc6bc51a5f218d1821a3bad77"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "598c27ccb929a75ee9e0fd8e83d79390"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "1209edb4f4214af55dd97e44031d3adb"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "dc73287a433f20589fce7eb5d558365e"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "7b80af0bfd74c9028d7a735f9691aaad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "3f4234e9c0752612b2c8f3bf94a78df9"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "8d3bcf9c07ecc610fedaa96880619f02"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "8d3bcf9c07ecc610fedaa96880619f02"
  },
  {
    "url": "img/browserconfig.xml",
    "revision": "653d077300a12f09a69caeea7a8947f8"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "eb9d2e3fef52dd0a7d89cdd847459a1b"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "5f3e9d8aff464e3b3d69fa05c7b4aad9"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "8ac9ab48e31623082f249c2fff32a4af"
  },
  {
    "url": "img/favicon.ico",
    "revision": "5948767183be5cba535808aee5256c39"
  },
  {
    "url": "img/logo_linkedincover.png",
    "revision": "272dfeac1d5c624002d36c585aa83f42"
  },
  {
    "url": "img/manifest.json",
    "revision": "2cb1641030856b343a54a7b78ade9295"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6c7d08bc65dd917a56833992ca51a27e"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "e9fc2834c2a31d234156f3e31bc8133d"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "165d8ff8f221cc451b9879c70964fd3a"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "100e3220838bbfc7cf137c55764b52a7"
  },
  {
    "url": "img/sas-apps.png",
    "revision": "9b310348d63af64d4e8d7e297da51a0f"
  },
  {
    "url": "img/sas-apps.svg",
    "revision": "5875bc82fac58489454474ec21eaaf54"
  },
  {
    "url": "index.html",
    "revision": "f9645bc8e029d14efa1ca8e9d16b6297"
  },
  {
    "url": "load-balancing-sasjs-server/index.html",
    "revision": "e95f49eec820d3ec627fa13a98a34837"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e76a1a695e6f14fdbceaab2e30a8f06a"
  },
  {
    "url": "modernise-legacy-apps/index.html",
    "revision": "699e16e0b1a16fc44c1bef3a65e1559c"
  },
  {
    "url": "modernising-legacy-sas-scl-af-applications/index.html",
    "revision": "87a953032acda33b844ce6255cb7d383"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9ed000679c301a5bee2813aefe2ab135"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "5e0e0be45b5aee556ef049956eaa6ca7"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "d1c4e95c77a95d043190190321db7953"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "655eecea172536262b2e7cf20af468f4"
  },
  {
    "url": "page-data/af-scl-developer/page-data.json",
    "revision": "736c8a4709551f71bb47905e392989d7"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "d1165c9441bc7484a50854a791cf34db"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "6e0ac595ddfc273addec0eb81e3c9926"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "bc697b3cab715df24b3a9a883724489f"
  },
  {
    "url": "page-data/csr-policy/page-data.json",
    "revision": "d4ef1b73663f8a9e55c3093cdec7925b"
  },
  {
    "url": "page-data/data-controller/page-data.json",
    "revision": "d6cabd63ef84e6ddf604a967c5a79845"
  },
  {
    "url": "page-data/datacontroller-on-azure/page-data.json",
    "revision": "13a6e30c93cadd826e629603cf277068"
  },
  {
    "url": "page-data/ethics-policy/page-data.json",
    "revision": "a128b40213626dbd595315c779da4290"
  },
  {
    "url": "page-data/euc-data-control/page-data.json",
    "revision": "b448eb6cbb33e4150b1f39be7a7985c3"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e6384eba56daa58dcbabc8be1fd24628"
  },
  {
    "url": "page-data/load-balancing-sasjs-server/page-data.json",
    "revision": "ea6df069d55e11b11e498e26d7606f6d"
  },
  {
    "url": "page-data/modernise-legacy-apps/page-data.json",
    "revision": "950fd489018f882964876652797111a4"
  },
  {
    "url": "page-data/modernising-legacy-sas-scl-af-applications/page-data.json",
    "revision": "a1021b7a01afe825360ac6105ccf7bd9"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pricing/page-data.json",
    "revision": "0f9aeef1ff6ef24b80985a0566deb04e"
  },
  {
    "url": "page-data/products/page-data.json",
    "revision": "c880138f351a85c6d3e25f540d04a5e4"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "c06dcbdaee59fdebe247b3d57f9c1fc3"
  },
  {
    "url": "page-data/sample-md-file/page-data.json",
    "revision": "f3a51ebc2e5403537fa09797192da431"
  },
  {
    "url": "page-data/sas-app-delivery/page-data.json",
    "revision": "2ca2efc8ab9243122c7bd7d6b8e3b7a9"
  },
  {
    "url": "page-data/sas-app-support/page-data.json",
    "revision": "7b79c5b9f7bf21b66aea16bb3785ff0f"
  },
  {
    "url": "page-data/sas-js/page-data.json",
    "revision": "4a5c0266058971893f47453b9e52a209"
  },
  {
    "url": "page-data/sas-powered-apps/page-data.json",
    "revision": "4caf2b395439446c135fe726a1871dcd"
  },
  {
    "url": "page-data/sas-sensei/page-data.json",
    "revision": "63da53e245b754f35b81ef182a846ba5"
  },
  {
    "url": "page-data/sas-streamed-apps/page-data.json",
    "revision": "cb8b3ef4163adf8b011103a1e3b9e353"
  },
  {
    "url": "page-data/sasjs-enhancements/page-data.json",
    "revision": "4701b7433fd2ca38582094770115b35d"
  },
  {
    "url": "page-data/sasjs-server-on-centos/page-data.json",
    "revision": "e8477d371d2028066e0d08f1244c7d51"
  },
  {
    "url": "page-data/sasjs-server-on-vps/page-data.json",
    "revision": "5912e18d6bd6f292f01c2e87866f01af"
  },
  {
    "url": "page-data/sasjs-web-apps-on-sas-viya/page-data.json",
    "revision": "0513d0567d20d2b380b3f711e198e726"
  },
  {
    "url": "page-data/sasjs-workshops/page-data.json",
    "revision": "dac4879d8eddc535c2c7c8383bd60654"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "b027a32998a61f276fab47dadd8dbd03"
  },
  {
    "url": "page-data/slavery-statement/page-data.json",
    "revision": "e6f1188b9b5ff8760f2314365d31c410"
  },
  {
    "url": "page-data/solutions/page-data.json",
    "revision": "ed5827a9cdeffd708c8f0c76b5abf13d"
  },
  {
    "url": "page-data/support/page-data.json",
    "revision": "bdc6bf791b4501c6880990c22efd36a8"
  },
  {
    "url": "page-data/tags/af-scl/page-data.json",
    "revision": "48404bf54e7895c2c431d1a6be29fdcf"
  },
  {
    "url": "page-data/tags/apps/page-data.json",
    "revision": "7e97c31f7864e0aed94f4032243bebdc"
  },
  {
    "url": "page-data/tags/data-governance/page-data.json",
    "revision": "b2b0ead8a87ff15560b35af54ca3630d"
  },
  {
    "url": "page-data/tags/git/page-data.json",
    "revision": "7499b1a9a52751e90aed47a3b39520a3"
  },
  {
    "url": "page-data/tags/microsoft-azure/page-data.json",
    "revision": "68fa76b0153f6ce5f99053d399bbf33c"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "3e4ca78f3f0da026ea627d45ca05ce52"
  },
  {
    "url": "page-data/tags/sa-sjs-server/page-data.json",
    "revision": "3bfde204bd1e3300eeb7347437601c13"
  },
  {
    "url": "page-data/tags/sa-sjs/page-data.json",
    "revision": "1ee1a7252cce3c65dd15126d66e719fc"
  },
  {
    "url": "page-data/tags/sas-admin/page-data.json",
    "revision": "d6ffc0668765d5f19d018998238e0180"
  },
  {
    "url": "page-data/tags/sas-intr-net/page-data.json",
    "revision": "ae773ba19680a512b11a80c3df822775"
  },
  {
    "url": "page-data/tags/sas/page-data.json",
    "revision": "2836300fc51b70296a6c309b42cb9e85"
  },
  {
    "url": "page-data/tags/viya/page-data.json",
    "revision": "2199628b6ee43269c5e3753afa9ea693"
  },
  {
    "url": "page-data/using-git-with-sas/page-data.json",
    "revision": "0c8eae6f7f16e4c3a631b465dc64636b"
  },
  {
    "url": "polyfill-39d01fc442e9f30e29e1.js"
  },
  {
    "url": "polyfill-39d01fc442e9f30e29e1.js.map",
    "revision": "b60785568710be1b9785dc3fd15a5e42"
  },
  {
    "url": "pricing/index.html",
    "revision": "876e643906ed2249cba82e56ff057c2f"
  },
  {
    "url": "products/index.html",
    "revision": "25199997e7e2f4d96ab977ef88cb1159"
  },
  {
    "url": "projects/index.html",
    "revision": "d96c2bbfa738398936a649aafc776577"
  },
  {
    "url": "robots.txt",
    "revision": "d307a31d16b65e630976d6cf4b318c01"
  },
  {
    "url": "sample-md-file/index.html",
    "revision": "32643e9eb9ae61d6de54c97fe85aa2cc"
  },
  {
    "url": "sas-app-delivery/index.html",
    "revision": "68d92b204838516a5c0d5647813f5b12"
  },
  {
    "url": "sas-app-support/index.html",
    "revision": "a62c6848d4ed85a8056a8dc6c0c00927"
  },
  {
    "url": "sas-js/index.html",
    "revision": "b78e808c5aeb6b0cc1090b52ad8f498b"
  },
  {
    "url": "sas-powered-apps/index.html",
    "revision": "4d2bd3d23f5b339c1f4a725700eb0627"
  },
  {
    "url": "sas-sensei/index.html",
    "revision": "8e431a6d1e83a67907eef1ff4408a751"
  },
  {
    "url": "sas-streamed-apps/index.html",
    "revision": "2f6a908da68edbb19eba1fb9df47cbaa"
  },
  {
    "url": "sasjs-enhancements/index.html",
    "revision": "a2d2d4251a0c9d9c8d21a784573a3f39"
  },
  {
    "url": "sasjs-server-on-centos/index.html",
    "revision": "d939d187e92b15e18f74cc8ea7ddbed3"
  },
  {
    "url": "sasjs-server-on-vps/index.html",
    "revision": "4537d6b9e0de4d2f99c5077715944cb9"
  },
  {
    "url": "sasjs-web-apps-on-sas-viya/index.html",
    "revision": "8739bd5f37f9863a4bf767740b8b1eca"
  },
  {
    "url": "sasjs-workshops/index.html",
    "revision": "f5a093d658c6820a921bc6407e10e72a"
  },
  {
    "url": "services/index.html",
    "revision": "87c52602c0a7990cb0596313cd35b880"
  },
  {
    "url": "slavery-statement/index.html",
    "revision": "724a021a88da6b87a8a34bd10eb55158"
  },
  {
    "url": "solutions/index.html",
    "revision": "b5fdadab70a697f82b478ece1bd40945"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/1d69c/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/2a4de/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/31987/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/3faba/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/46604/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/497c6/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/4dcb9/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/5e9fc/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/5ff7e/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/62d80/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/78797/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/aa440/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/d8815/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/e1953/mario.png"
  },
  {
    "url": "static/22305492b67e7dfe7d27801ca0ec182e/ee604/mario.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/0b74b/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/497c6/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/4dcb9/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/5ff7e/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/62d80/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/71ce0/loadbalance1.png"
  },
  {
    "url": "static/2231a88e4a9492cde687c77c874447a5/e1953/loadbalance1.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/1d69c/kanban.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/29114/kanban.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/4dcb9/kanban.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/5ff7e/kanban.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/78797/kanban.png"
  },
  {
    "url": "static/235cd1fcef54bbd4be30b13555a53968/aa440/kanban.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/1d69c/sasjs_server_dns.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/4dcb9/sasjs_server_dns.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/5ff7e/sasjs_server_dns.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/78797/sasjs_server_dns.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/aa440/sasjs_server_dns.png"
  },
  {
    "url": "static/3f359fdd06abf3c58f48a9b8a727986c/bfe41/sasjs_server_dns.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/0d367/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/2a4de/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/31493/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/46604/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/497c6/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/4dcb9/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/5ff7e/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/62d80/sas_scl.png"
  },
  {
    "url": "static/48967c26cb67d4a943c48b5ba875b84c/e1953/sas_scl.png"
  },
  {
    "url": "static/80428fcead9e5f0817fcc890dbccf234/2b087/sasjs_server.png"
  },
  {
    "url": "static/80428fcead9e5f0817fcc890dbccf234/62d80/sasjs_server.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/074f8/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/1d69c/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/2a4de/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/31987/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/46604/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/497c6/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/4dcb9/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/5ff7e/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/62d80/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/78797/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/7de21/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/aa440/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/d8815/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/e1953/datacontroller.png"
  },
  {
    "url": "static/868097839670d46b3de222aa69cb7fe1/ee604/datacontroller.png"
  },
  {
    "url": "static/ab87b8807346a4c857223a4130bef85e/1b1d5/security_architecture.png"
  },
  {
    "url": "static/ab87b8807346a4c857223a4130bef85e/1d69c/security_architecture.png"
  },
  {
    "url": "static/ab87b8807346a4c857223a4130bef85e/4dcb9/security_architecture.png"
  },
  {
    "url": "static/ab87b8807346a4c857223a4130bef85e/5ff7e/security_architecture.png"
  },
  {
    "url": "static/allan-731088ea09bd91d83ceb005a4206b51f.jpeg"
  },
  {
    "url": "static/analytics-platform-ea8bd9675c0382091a2c329eb9383ad2.svg"
  },
  {
    "url": "static/b0875b4e990aaefd7647b515c392a871/4dcb9/sasjs_240x120.png"
  },
  {
    "url": "static/b0875b4e990aaefd7647b515c392a871/8ff5a/sasjs_240x120.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/1d69c/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/2a4de/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/46604/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/497c6/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/4dcb9/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/5ff7e/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/62d80/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/8f331/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/9f82e/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/d8815/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/e1953/sasjs_centos.png"
  },
  {
    "url": "static/b21c900cf0752b9c48b2895b1b9318f1/ee604/sasjs_centos.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/46604/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/497c6/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/62d80/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/8c8ba/targets.png"
  },
  {
    "url": "static/bae2039bb6ef0502219a8804bfd039cf/e1953/targets.png"
  },
  {
    "url": "static/bena-51addfc1bd9aac274ccc7fcb9671c6ec.jpeg"
  },
  {
    "url": "static/business-finance-dafe6b3c382f7215f07e1399383df7c3.svg"
  },
  {
    "url": "static/c0f0ecb448f2f8289977bd9c970cf5c0/4dcb9/loadbalance2.png"
  },
  {
    "url": "static/c0f0ecb448f2f8289977bd9c970cf5c0/5ff7e/loadbalance2.png"
  },
  {
    "url": "static/c0f0ecb448f2f8289977bd9c970cf5c0/71ce0/loadbalance2.png"
  },
  {
    "url": "static/charts-9ba9f3351f80076e9254d080b1758b26.svg"
  },
  {
    "url": "static/contact-help-aa7761e849cab25dbf81959d115ea26a.svg"
  },
  {
    "url": "static/dc-logo-8f93d648cf8725f2d45aed3b2c1bda78.svg"
  },
  {
    "url": "static/dc-name-df83db79c0b0a7e886d08ec3e275086d.svg"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/1d69c/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/2a4de/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/2bef9/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/31987/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/46604/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/497c6/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/4dcb9/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/5ff7e/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/62d80/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/a8378/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/d8815/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/e1953/security_viya.png"
  },
  {
    "url": "static/df3a6d0e05fcda243975652aeb7c8060/ee604/security_viya.png"
  },
  {
    "url": "static/ea11506ab9a3d2c37f6ac9b6ad31abcf/1d69c/security_sequence.png"
  },
  {
    "url": "static/ea11506ab9a3d2c37f6ac9b6ad31abcf/4dcb9/security_sequence.png"
  },
  {
    "url": "static/ea11506ab9a3d2c37f6ac9b6ad31abcf/5ff7e/security_sequence.png"
  },
  {
    "url": "static/ea11506ab9a3d2c37f6ac9b6ad31abcf/6295b/security_sequence.png"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/46604/sasjs_square.png"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/497c6/sasjs_square.png"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/62d80/sasjs_square.png"
  },
  {
    "url": "static/f726616dfab01eae7a759ab91f47ad1c/e1953/sasjs_square.png"
  },
  {
    "url": "static/fontawesome-webfont-674f50d287a8c48dc19ba404d20fe713.eot"
  },
  {
    "url": "static/fontawesome-webfont-912ec66d7572ff821749319396470bde.svg"
  },
  {
    "url": "static/fontawesome-webfont-af7ae505a9eed503f8b8e6982036873e.woff2"
  },
  {
    "url": "static/fontawesome-webfont-b06871f281fee6b241d60582ae9369b9.ttf"
  },
  {
    "url": "static/fontawesome-webfont-fee66e712a8a08eef5805a46892932ad.woff"
  },
  {
    "url": "static/george-f1e3e93353d4dd29153ca4aec3ebbcf4.jpeg"
  },
  {
    "url": "static/Ivor-8bd8bfa9e5b455724bfbfc5483624dc4.jpg"
  },
  {
    "url": "static/js-logo-16deab4b6863af45cf7512affae91a5d.png"
  },
  {
    "url": "static/krishna-bcb8682efbc43141ef511466d06504b6.png"
  },
  {
    "url": "static/mihajlo-d63fa20a8f3b3f7da73472261639be54.png"
  },
  {
    "url": "static/photo-frame-sq-f373e3820c65c2b1bfcbb76e5a77979c.png"
  },
  {
    "url": "static/saad-24cb97b409b5bffa374adf9cc0694f98.png"
  },
  {
    "url": "static/sabir-3f35b72cb4d6248053a36696a7154134.png"
  },
  {
    "url": "static/sas-app-delivery-be2d2a06f50a041dea0d3facf47ea739.png"
  },
  {
    "url": "static/sas-app-support-15a8d9b205e93f224914589d60d72082.svg"
  },
  {
    "url": "static/sas-apps-5875bc82fac58489454474ec21eaaf54.svg"
  },
  {
    "url": "static/sasensei-logo-9729ff71f27b4b470c35c59c92de0f00.svg"
  },
  {
    "url": "static/sasensei-name-845c197a2db7a9a34ef42a29edadf452.svg"
  },
  {
    "url": "static/sasjs-enhance-c9a28422d391b8860f3f6b49e0ec4765.svg"
  },
  {
    "url": "static/yury-20414d64a447307e5a4d5bfeb8c96ac2.png"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "styles-c2fe8482057191dca484.js.map",
    "revision": "aca5b7feab278569bad07d62a5da3185"
  },
  {
    "url": "styles.94b6f988c0a60d709e1d.css"
  },
  {
    "url": "support/index.html",
    "revision": "82443bdb3c98dd9b88e978241b89b359"
  },
  {
    "url": "tags/af-scl/index.html",
    "revision": "913b499c6eddbcf28a116fa11980b198"
  },
  {
    "url": "tags/apps/index.html",
    "revision": "7a63f860f575e9f36b28672ab0311452"
  },
  {
    "url": "tags/data-governance/index.html",
    "revision": "fcdaea3f63e519da8e23ed391cb15877"
  },
  {
    "url": "tags/git/index.html",
    "revision": "b98d5e28113b2d0d1a67c6fac138c9de"
  },
  {
    "url": "tags/index.html",
    "revision": "300722fd2e36c3d4af0ce34a6e8934e5"
  },
  {
    "url": "tags/microsoft-azure/index.html",
    "revision": "be63a15c14a6892317503380627a9cc5"
  },
  {
    "url": "tags/sa-sjs-server/index.html",
    "revision": "e028e38bdfb6c53e609cebb25e4e1088"
  },
  {
    "url": "tags/sa-sjs/index.html",
    "revision": "b37ce5efb1aaf79d1903bef060aa27b3"
  },
  {
    "url": "tags/sas-admin/index.html",
    "revision": "50dcb0b40476ebab4f7c7f6691b7fba9"
  },
  {
    "url": "tags/sas-intr-net/index.html",
    "revision": "ed95c161bba89ffcc9ded23f2ff1f831"
  },
  {
    "url": "tags/sas/index.html",
    "revision": "37d1b8f3e02a512f49025fd6df06cb60"
  },
  {
    "url": "tags/viya/index.html",
    "revision": "de5fabc6bf37503802333615d187de05"
  },
  {
    "url": "using-git-with-sas/index.html",
    "revision": "bd15585c9d72b52fbc81c8f6efd6ef16"
  },
  {
    "url": "webpack-runtime-3276425dece615d4fc54.js"
  },
  {
    "url": "webpack-runtime-3276425dece615d4fc54.js.map",
    "revision": "9641d12a535f91b658c4eab7a7c258a9"
  },
  {
    "url": "webpack.stats.json",
    "revision": "ec225815423d16c32ecf61771e59192e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-48ef67c676f5d7d3592c.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
