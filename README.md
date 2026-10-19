# webaa — hosted page for web-android-auto

GitHub Pages launcher for the **web-android-auto** app, reached over WebTransport. Split out of the shared
`webstream` project so each app has its own page. Address: `7.7.7.1` (VPN) or `webaa.local` (mDNS). The page
loads the app page over the link; protocol and certs are the installed APK (shared `certs.js`).

Published on push to `main`: https://karkadann.github.io/webaa/

**Triple tap** (or triple click) anywhere while the page is searching ("No stream"): opens `http://7.7.7.1`, the page served by the app itself, without WebTransport. The fallback when the link does not come up (device clock wrong after a reboot: certificate expired for the browser). Target: `local` in `config.js`.
