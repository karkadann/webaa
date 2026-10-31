// Page settings. Nothing mandatory.
//   addrs : addresses where to look for the app, tried in order (the last one that worked first).
//           - 7.7.7.1 : the app's service address (default);
//           - webaa.local : mDNS enabled in the app, resolved to the real IP of the hotspot. Chromium
//             only (Firefox does not resolve .local). ?a=webaa.local to force it.
//   port  : the app's WebTransport port (UDP, QUIC).
//   local : the page served by the app itself, opened by a triple tap (without WebTransport).
window.WEBSTREAM_CONFIG = {
  addrs: ['7.7.7.1', 'webaa.local'],
  port: 3334,
  local: 'http://7.7.7.1/',
};
