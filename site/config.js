// Réglages de la page webaa (web-android-auto). Rien d'obligatoire.
//   addrs : adresses où chercher l'app, essayées dans l'ordre (la dernière qui a marché d'abord).
//           - 7.7.7.1 : l'adresse de service posée par le VPN de webaa (défaut) ;
//           - webaa.local : mDNS activé (option CONF.), résolu vers l'IP réelle du hotspot. Chromium
//             seulement (Firefox ne résout pas .local). ?a=webaa.local pour forcer.
//   port  : port WebTransport de l'app (UDP, QUIC).
window.WEBSTREAM_CONFIG = {
  addrs: ['7.7.7.1', 'webaa.local'],
  port: 3334,
};
