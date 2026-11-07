// ==UserScript==
// @name         Laboratorium klienta Margonem
// @namespace    client.lab
// @version      2.3.3
// @description  Loader lokalnego laboratorium do testowania dodatków i motywów.
// @match        https://*.margonem.pl/*
// @match        https://*.margonem.com/*
// @grant        none
// @run-at       document-idle
// @noframes
// ==/UserScript==
(()=>{"use strict";const t="https://cdn.jsdelivr.net/gh/Doiua97/Laboratoriu-dev@main/minified/",n="client-lab-main-script";if(window.top!==window.self||window.ClientLab?.version||window.__clientLabBoot||document.getElementById(n))return;if(!t){console.error("[Laboratorium klienta] Ustaw BASE_URL w loaderze na publiczny katalog zawierający Client_Lab.js i Client_Lab.css.");return}let r;try{if(r=new URL("Client_Lab.js",t.endsWith("/")?t:t+"/"),r.protocol!=="https:")throw Error("BASE_URL musi być adresem HTTPS.");r.searchParams.set("v","2.3.3")}catch(s){console.error("[Laboratorium klienta] Nieprawidłowy BASE_URL:",s);return}const e=document.createElement("script");e.id=n,e.src=r.href,e.async=!0;let a;const i=()=>{clearTimeout(a),e.onload=e.onerror=null,e.remove()},o=()=>{e.dataset.clientLabCancelled="true",i(),console.error("[Laboratorium klienta] Nie udało się pobrać Client_Lab.js. Sprawdź adres, dostępność plików i publiczny dostęp do hostingu.")};e.onload=i,e.onerror=o,a=setTimeout(o,3e4);try{(document.head||document.documentElement).append(e)}catch{o()}})();
