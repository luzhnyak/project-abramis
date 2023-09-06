!function(){function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function i(e){return e&&e.__esModule?e.default:e}var n={},r={},s=t.parcelRequire0a78;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequire0a78=s),s.register("cs7FV",function(e,t){(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),n=()=>{let i="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!i),e.classList.toggle("is-open");let n=document.body;i?n.style.overflow="":n.style.overflow="hidden"},r=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),document.body.style.overflow=""};t.addEventListener("click",n),i.addEventListener("click",n),// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&r()});// Close the mobile menu when a link inside it is clicked
let s=e.querySelectorAll("a");s.forEach(e=>{e.addEventListener("click",r)})})()}),s.register("9VC5X",function(e,t){let i="saved-theme",n=document.querySelector("body"),r={switcher:document.querySelector(".theme"),switcherMobile:document.querySelector(".theme-mobile")};/**
  |============================
  | очистка стилів
  |============================
*/function s(){n.classList.remove("body-dark")}/**
  |============================
  | додавання стилів темної теми
  |============================
*/function o(e){(function(){let e={};(r.switcher.checked||r.switcherMobile.checked)&&(e.theme="dark"),localStorage.setItem(i,JSON.stringify(e))})(),n.classList.add("body-dark")}/**
  |============================
  | збереження останньої теми
  |============================
*/(function(){let e=localStorage.getItem(i),t=JSON.parse(e);null===t?(r.switcherMobile.checked=!1,r.switcher.checked=!1):(r.switcher.checked=!0,r.switcherMobile.checked=!0,o())})(),r.switcher.addEventListener("change",/**
      |============================
      | слухачі
      |============================
    */function(){r.switcher.checked?(o(),r.switcherMobile.checked=!0):(localStorage.removeItem("saved-theme"),s(),r.switcherMobile.checked=!1)}),r.switcherMobile.addEventListener("change",function(){r.switcherMobile.checked?(o(),r.switcher.checked=!0):(localStorage.removeItem("saved-theme"),s(),r.switcher.checked=!1)})}),s.register("d6S5l",function(e,t){var i=s("jb10H");document.querySelector(".js-funds");let n=document.querySelector(".funds-list"),r=(0,i.fundsData).map(e=>`<li class="funds-item slide">
        <a class="funds-link" href="${e.url}" target="_blank" rel="noopener noreferrer">
        <img class="funds-image" 
          src="${e.img}" 
          alt="${e.title}"
          target="_parent"
          min-width="62"
          loading="lazy">
         </a>
    </li> 
        `).join("");n.insertAdjacentHTML("beforeend",r);let o=document.querySelector(".down-scroll"),a=document.querySelector(".up-scroll");o.addEventListener("click",function(){0===l?c():(n.scrollTo({top:l,behavior:"smooth"}),l+n.clientHeight>=n.scrollHeight&&(o.classList.remove("down-scroll-anim"),o.classList.add("up-scroll-anim")),l>=n.scrollHeight&&(c(),l=0),l+=n.clientHeight)}),a.addEventListener("click",c);let l=n.clientHeight;function c(){o.classList.remove("up-scroll-anim"),o.classList.add("down-scroll-anim"),n.scrollTo({top:0,behavior:"smooth"})}}),s.register("jb10H",function(t,i){e(t.exports,"fundsData",function(){return n});let n=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:s("6ls9l")},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:s("ai99S")},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:s("4GkWj")},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:s("eY9gg")},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:s("12xAn")},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:s("7X1Ep")},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:s("en9Nz")},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:s("8Jcv3")},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:s("3yUV1")}]}),s.register("6ls9l",function(e,t){e.exports=s("aNJCr").getBundleURL("iRn4P")+s("iE7OH").resolve("bMabq")}),s.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,r={};n=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),s.register("iE7OH",function(t,i){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var n,r,s={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)s[t[i]]=e[t[i]]},r=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s.register("ai99S",function(e,t){e.exports=s("aNJCr").getBundleURL("iRn4P")+s("iE7OH").resolve("3D1R4")}),s.register("4GkWj",function(e,t){e.exports=s("aNJCr").getBundleURL("iRn4P")+s("iE7OH").resolve("b48CZ")}),s.register("eY9gg",function(e,t){e.exports=s("aNJCr").getBundleURL("iRn4P")+s("iE7OH").resolve("b3cJs")}),s.register("12xAn",function(e,t){e.exports=s("aNJCr").getBundleURL("iRn4P")+s("iE7OH").resolve("fCD20")}),s.register("7X1Ep",function(e,t){e.exports=s("aNJCr").getBundleURL("iRn4P")+s("iE7OH").resolve("cnC6U")}),s.register("en9Nz",function(e,t){e.exports=s("aNJCr").getBundleURL("iRn4P")+s("iE7OH").resolve("dWOKA")}),s.register("8Jcv3",function(e,t){e.exports=s("aNJCr").getBundleURL("iRn4P")+s("iE7OH").resolve("7bKUX")}),s.register("3yUV1",function(e,t){e.exports=s("aNJCr").getBundleURL("iRn4P")+s("iE7OH").resolve("bTXgn")}),s.register("6JpON",function(e,i){var n,r;n=void 0===t?"undefined"==typeof window?e.exports:window:t,r=function(e){if(void 0===e&&void 0===e.document)return!1;var t,i,n,r,s,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},c={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},u={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},h={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},d={Show:"Show",Ask:"Ask",Prompt:"Prompt"},p={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},f={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},m={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},g={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},y={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},_=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+o)},v=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+o)},b=function(t){return t||(t="head"),null!==e.document[t]||(_('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},w=function(t,i){if(!b("head"))return!1;if(null!==t()&&!e.document.getElementById(i)){var n=e.document.createElement("style");n.id=i,n.innerHTML=t(),e.document.head.appendChild(n)}},x=function(){var e={},t=!1,i=0;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);i<arguments.length;i++)!function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=t&&"[object Object]"===Object.prototype.toString.call(i[n])?x(e[n],i[n]):i[n])}(arguments[i]);return e},k=function(t){var i=e.document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText||""},C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},I=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},N=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},E=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},S=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},R=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},P=0,A=function(i,n,r,s){if(!b("body"))return!1;t||B.Notify.init({});var o=x(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var u={};"object"==typeof r?u=r:"object"==typeof s&&(u=s),t=x(!0,t,u)}var h=t[i.toLocaleLowerCase("en")];P++,"string"!=typeof n&&(n="Notiflix "+i),t.plainText&&(n=k(n)),!t.plainText&&n.length>t.messageMaxLength&&(t=x(!0,t,{closeButton:!0,messageMaxLength:150}),n='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),n.length>t.messageMaxLength&&(n=n.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),t.cssAnimation||(t.cssAnimationDuration=0);var d=e.document.getElementById(c.wrapID)||e.document.createElement("div");if(d.id=c.wrapID,d.style.width=t.width,d.style.zIndex=t.zindex,d.style.opacity=t.opacity,"center-center"===t.position?(d.style.left=t.distance,d.style.top=t.distance,d.style.right=t.distance,d.style.bottom=t.distance,d.style.margin="auto",d.classList.add("nx-flex-center-center"),d.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.justifyContent="center",d.style.alignItems="center",d.style.pointerEvents="none"):"center-top"===t.position?(d.style.left=t.distance,d.style.right=t.distance,d.style.top=t.distance,d.style.bottom="auto",d.style.margin="auto"):"center-bottom"===t.position?(d.style.left=t.distance,d.style.right=t.distance,d.style.bottom=t.distance,d.style.top="auto",d.style.margin="auto"):"right-bottom"===t.position?(d.style.right=t.distance,d.style.bottom=t.distance,d.style.top="auto",d.style.left="auto"):"left-top"===t.position?(d.style.left=t.distance,d.style.top=t.distance,d.style.right="auto",d.style.bottom="auto"):"left-bottom"===t.position?(d.style.left=t.distance,d.style.bottom=t.distance,d.style.top="auto",d.style.right="auto"):(d.style.right=t.distance,d.style.top=t.distance,d.style.left="auto",d.style.bottom="auto"),t.backOverlay){var p=e.document.getElementById(c.overlayID)||e.document.createElement("div");p.id=c.overlayID,p.style.width="100%",p.style.height="100%",p.style.position="fixed",p.style.zIndex=t.zindex-1,p.style.left=0,p.style.top=0,p.style.right=0,p.style.bottom=0,p.style.background=h.backOverlayColor||t.backOverlayColor,p.className=t.cssAnimation?"nx-with-animation":"",p.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(c.overlayID)||e.document.body.appendChild(p)}e.document.getElementById(c.wrapID)||e.document.body.appendChild(d);var f=e.document.createElement("div");f.id=t.ID+"-"+P,f.className=t.className+" "+h.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),f.style.fontSize=t.fontSize,f.style.color=h.textColor,f.style.background=h.background,f.style.borderRadius=t.borderRadius,f.style.pointerEvents="all",t.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on")),f.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(f.style.animationDuration=t.cssAnimationDuration+"ms");var m="";if(t.closeButton&&"function"!=typeof r&&(m='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon){if(t.useFontAwesome)f.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+n+"</span>"+(t.closeButton?m:"");else{var g="";i===l.Success?g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===l.Failure?g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===l.Warning?g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===l.Info&&(g='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),f.innerHTML=g+'<span class="nx-message nx-with-icon">'+n+"</span>"+(t.closeButton?m:"")}}else f.innerHTML='<span class="nx-message">'+n+"</span>"+(t.closeButton?m:"");if("left-bottom"===t.position||"right-bottom"===t.position){var y=e.document.getElementById(c.wrapID);y.insertBefore(f,y.firstChild)}else e.document.getElementById(c.wrapID).appendChild(f);var _=e.document.getElementById(f.id);if(_){var v,w,C=function(){_.classList.add("nx-remove");var t=e.document.getElementById(c.overlayID);t&&0>=d.childElementCount&&t.classList.add("nx-remove"),clearTimeout(v)},I=function(){if(_&&null!==_.parentNode&&_.parentNode.removeChild(_),0>=d.childElementCount&&null!==d.parentNode){d.parentNode.removeChild(d);var t=e.document.getElementById(c.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(w)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(f.id).querySelector("span.nx-close-button").addEventListener("click",function(){C();var e=setTimeout(function(){I(),clearTimeout(e)},t.cssAnimationDuration)}),("function"==typeof r||t.clickToClose)&&_.addEventListener("click",function(){"function"==typeof r&&r(),C();var e=setTimeout(function(){I(),clearTimeout(e)},t.cssAnimationDuration)}),!t.closeButton&&"function"!=typeof r){var N=function(){v=setTimeout(function(){C()},t.timeout),w=setTimeout(function(){I()},t.timeout+t.cssAnimationDuration)};N(),t.pauseOnHover&&(_.addEventListener("mouseenter",function(){_.classList.add("nx-paused"),clearTimeout(v),clearTimeout(w)}),_.addEventListener("mouseleave",function(){_.classList.remove("nx-paused"),N()}))}}if(t.showOnlyTheLastOne&&0<P)for(var T,E=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+P+"])"),S=0;S<E.length;S++)null!==(T=E[S]).parentNode&&T.parentNode.removeChild(T);t=x(!0,t,o)},L=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},O=function(t,n,r,s,o,l){if(!b("body"))return!1;i||B.Report.init({});var c,d,p,f,m,g,y,_,v={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof l&&!Array.isArray(l)){var w={};"object"==typeof o?w=o:"object"==typeof l&&(w=l),v=x(!0,i,{}),i=x(!0,i,w)}var C=i[t.toLocaleLowerCase("en")];"string"!=typeof n&&(n="Notiflix "+t),"string"!=typeof r&&(t===u.Success?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===u.Failure?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===u.Warning?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===u.Info&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof s&&(s="Okay"),i.plainText&&(n=k(n),r=k(r),s=k(s)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',s="Okay"),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',s="Okay"),s.length>i.buttonMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',s="Okay")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonMaxLength&&(s=s.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var I=e.document.createElement("div");I.id=h.ID,I.className=i.className,I.style.zIndex=i.zindex,I.style.borderRadius=i.borderRadius,I.style.fontFamily='"'+i.fontFamily+'", '+a,i.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center";var N="",T=!0===i.backOverlayClickToClose;i.backOverlay&&(N='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(T?" nx-report-click-to-close":"")+'" style="background:'+(C.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var E="";if(t===u.Success?(c=i.svgSize,d=C.svgColor,c||(c="110px"),d||(d="#32c682"),E='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+c+'" height="'+c+'" fill="'+d+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===u.Failure?(p=i.svgSize,f=C.svgColor,p||(p="110px"),f||(f="#ff5549"),E='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+p+'" height="'+p+'" fill="'+f+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===u.Warning?(m=i.svgSize,g=C.svgColor,m||(m="110px"),g||(g="#eebf31"),E='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+m+'" height="'+m+'" fill="'+g+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===u.Info&&(y=i.svgSize,_=C.svgColor,y||(y="110px"),_||(_="#26c0d3"),E='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+y+'" height="'+y+'" fill="'+_+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'),I.innerHTML=N+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+E+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+C.titleColor+';">'+n+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+C.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+C.buttonBackground+"; color:"+C.buttonColor+';">'+s+"</a></div>",!e.document.getElementById(I.id)){e.document.body.appendChild(I);var S=function(){var t=e.document.getElementById(I.id);t.classList.add("nx-remove");var n=setTimeout(function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(n)},i.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",function(){"function"==typeof o&&o(),S()}),N&&T&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",function(){S()})}i=x(!0,i,v)},D=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},M=function(t,i,r,s,o,l,c,u,h){if(!b("body"))return!1;n||B.Confirm.init({});var f=x(!0,n,{});"object"!=typeof h||Array.isArray(h)||(n=x(!0,n,h)),"string"!=typeof i&&(i="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),n.plainText&&(i=k(i),r=k(r),o=k(o),l=k(l)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",l="..."),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",l="..."),(o.length||l.length)>n.buttonsMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",l="...")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonsMaxLength&&(o=o.substring(0,n.buttonsMaxLength)+"..."),l.length>n.buttonsMaxLength&&(l=l.substring(0,n.buttonsMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var m=e.document.createElement("div");m.id=p.ID,m.className=n.className+(n.cssAnimation?" nx-with-animation nx-"+n.cssAnimationStyle:""),m.style.zIndex=n.zindex,m.style.padding=n.distance,n.rtl&&(m.setAttribute("dir","rtl"),m.classList.add("nx-rtl-on"));var g="string"==typeof n.position?n.position.trim():"center";m.classList.add("nx-position-"+g),m.style.fontFamily='"'+n.fontFamily+'", '+a;var y="";n.backOverlay&&(y='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+'" style="background:'+n.backOverlayColor+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var _="";"function"==typeof c&&(_='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+n.cancelButtonColor+";background:"+n.cancelButtonBackground+";font-size:"+n.buttonsFontSize+';">'+l+"</a>");var v="",w=null,C=void 0;if(t===d.Ask||t===d.Prompt){w=s||"";var I=t===d.Ask?Math.ceil(1.5*w.length):200<w.length?Math.ceil(1.5*w.length):250;v='<div><input id="NXConfirmValidationInput" type="text" '+(t===d.Prompt?'value="'+w+'"':"")+' maxlength="'+I+'" style="font-size:'+n.messageFontSize+";border-radius: "+n.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(m.innerHTML=y+'<div class="'+n.className+'-content" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+"ms; border-radius: "+n.borderRadius+';"><div class="'+n.className+'-head"><h5 style="color:'+n.titleColor+";font-size:"+n.titleFontSize+';">'+i+'</h5><div style="color:'+n.messageColor+";font-size:"+n.messageFontSize+';">'+r+v+'</div></div><div class="'+n.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+n.okButtonColor+";background:"+n.okButtonBackground+";font-size:"+n.buttonsFontSize+';">'+o+"</a>"+_+"</div></div>",!e.document.getElementById(m.id)){e.document.body.appendChild(m);var N=e.document.getElementById(m.id),T=e.document.getElementById("NXConfirmButtonOk"),E=e.document.getElementById("NXConfirmValidationInput");E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",function(e){var i=e.target.value;t===d.Ask&&i!==w?(e.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success")):(t===d.Ask&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&T.dispatchEvent(new Event("click")))})),T.addEventListener("click",function(e){if(t===d.Ask&&w&&E){if((E.value||"").toString()!==w)return E.focus(),E.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===d.Prompt&&E&&(C=E.value||""),c(C)),N.classList.add("nx-remove");var i=setTimeout(function(){null!==N.parentNode&&(N.parentNode.removeChild(N),clearTimeout(i))},n.cssAnimationDuration)}),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",function(){"function"==typeof u&&(t===d.Prompt&&E&&(C=E.value||""),u(C)),N.classList.add("nx-remove");var e=setTimeout(function(){null!==N.parentNode&&(N.parentNode.removeChild(N),clearTimeout(e))},n.cssAnimationDuration)})}n=x(!0,n,f)},F=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},z=function(t,i,n,s,o){if(!b("body"))return!1;r||B.Loading.init({});var l=x(!0,r,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof n&&!Array.isArray(n)){var c={};"object"==typeof i?c=i:"object"==typeof n&&(c=n),r=x(!0,r,c)}var u="";if("string"==typeof i&&0<i.length&&(u=i),s){u=u.length>r.messageMaxLength?k(u).toString().substring(0,r.messageMaxLength)+"...":k(u).toString();var h,d,p="";0<u.length&&(p='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var g="";if(t===f.Standard)g=C(r.svgSize,r.svgColor);else if(t===f.Hourglass)g=I(r.svgSize,r.svgColor);else if(t===f.Circle)g=N(r.svgSize,r.svgColor);else if(t===f.Arrows)g=T(r.svgSize,r.svgColor);else if(t===f.Dots)g=E(r.svgSize,r.svgColor);else if(t===f.Pulse)g=S(r.svgSize,r.svgColor);else if(t===f.Custom&&null!==r.customSvgCode&&null===r.customSvgUrl)g=r.customSvgCode||"";else if(t===f.Custom&&null!==r.customSvgUrl&&null===r.customSvgCode)g='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===f.Custom&&(null===r.customSvgUrl||null===r.customSvgCode))return _('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;(h=r.svgSize)||(h="60px"),g='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+h+'" height="'+h+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:#f8f8f8;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+(d="#32c682")+'" stroke="'+d+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}var y=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),v=e.innerWidth,w=y>=v?v-40+"px":y+"px",R='<div style="width:'+w+"; height:"+w+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+g+"</div>",P=e.document.createElement("div");P.id=m.ID,P.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),P.style.zIndex=r.zindex,P.style.background=r.backgroundColor,P.style.animationDuration=r.cssAnimationDuration+"ms",P.style.fontFamily='"'+r.fontFamily+'", '+a,P.style.display="flex",P.style.flexWrap="wrap",P.style.flexDirection="column",P.style.alignItems="center",P.style.justifyContent="center",r.rtl&&(P.setAttribute("dir","rtl"),P.classList.add("nx-rtl-on")),P.innerHTML=R+p,!e.document.getElementById(P.id)&&(e.document.body.appendChild(P),r.clickToClose)&&e.document.getElementById(P.id).addEventListener("click",function(){P.classList.add("nx-remove");var e=setTimeout(function(){null!==P.parentNode&&(P.parentNode.removeChild(P),clearTimeout(e))},r.cssAnimationDuration)})}else if(e.document.getElementById(m.ID))var A=e.document.getElementById(m.ID),L=setTimeout(function(){A.classList.add("nx-remove");var e=setTimeout(function(){null!==A.parentNode&&(A.parentNode.removeChild(A),clearTimeout(e))},r.cssAnimationDuration);clearTimeout(L)},o);r=x(!0,r,l)},U=function(t){"string"!=typeof t&&(t="");var i=e.document.getElementById(m.ID);if(i){if(0<t.length){t=t.length>r.messageMaxLength?k(t).substring(0,r.messageMaxLength)+"...":k(t);var n=i.getElementsByTagName("p")[0];if(n)n.innerHTML=t;else{var s=e.document.createElement("p");s.id=r.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=r.messageColor,s.style.fontSize=r.messageFontSize,s.innerHTML=t,i.appendChild(s)}}else _("Where is the new message?")}},W=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},j=0,q=function(t,i,n,r,o,l){if(Array.isArray(n)){if(1>n.length)return _("Array of HTMLElements should contains at least one HTMLElement."),!1;R=n}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,n)){if(1>n.length)return _("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;R=Array.prototype.slice.call(n)}else{if("string"!=typeof n||1>(n||"").length||1===(n||"").length&&("#"===(n||"")[0]||"."===(n||"")[0]))return _("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var c=e.document.querySelectorAll(n);if(1>c.length)return _('You called the "Notiflix.Block..." function with "'+n+'" selector, but there is no such element(s) in the document.'),!1;R=c}s||B.Block.init({});var u=x(!0,s,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var h={};"object"==typeof r?h=r:"object"==typeof o&&(h=o),s=x(!0,s,h)}var d="";"string"==typeof r&&0<r.length&&(d=r),s.cssAnimation||(s.cssAnimationDuration=0);var p=y.className;"string"==typeof s.className&&(p=s.className.trim());var f="number"==typeof s.querySelectorLimit?s.querySelectorLimit:200,m=(R||[]).length>=f?f:R.length,w="nx-block-temporary-position";if(t){for(var R,P,A=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],L=0;L<m;L++)if(P=R[L]){if(-1<A.indexOf(P.tagName.toLocaleLowerCase("en")))break;var O=P.querySelectorAll("[id^="+y.ID+"]");if(1>O.length){var D="";i&&(D=i===g.Hourglass?I(s.svgSize,s.svgColor):i===g.Circle?N(s.svgSize,s.svgColor):i===g.Arrows?T(s.svgSize,s.svgColor):i===g.Dots?E(s.svgSize,s.svgColor):i===g.Pulse?S(s.svgSize,s.svgColor):C(s.svgSize,s.svgColor));var M='<span class="'+p+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+D+"</span>",F="";0<d.length&&(d=d.length>s.messageMaxLength?k(d).substring(0,s.messageMaxLength)+"...":k(d),F='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+p+'-message">'+d+"</span>"),j++;var z=e.document.createElement("div");z.id=y.ID+"-"+j,z.className=p+(s.cssAnimation?" nx-with-animation":""),z.style.position=s.position,z.style.zIndex=s.zindex,z.style.background=s.backgroundColor,z.style.animationDuration=s.cssAnimationDuration+"ms",z.style.fontFamily='"'+s.fontFamily+'", '+a,z.style.display="flex",z.style.flexWrap="wrap",z.style.flexDirection="column",z.style.alignItems="center",z.style.justifyContent="center",s.rtl&&(z.setAttribute("dir","rtl"),z.classList.add("nx-rtl-on")),z.innerHTML=M+F;var U=e.getComputedStyle(P).getPropertyValue("position"),W="string"==typeof U?U.toLocaleLowerCase("en"):"relative",q=Math.round(1.25*parseInt(s.svgSize))+40,H=P.offsetHeight||0,V="";q>H&&(V="min-height:"+q+"px;");var $="";$=P.getAttribute("id")?"#"+P.getAttribute("id"):P.classList[0]?"."+P.classList[0]:(P.tagName||"").toLocaleLowerCase("en");var X="",K=-1>=["absolute","relative","fixed","sticky"].indexOf(W);if(K||0<V.length){if(!b("head"))return!1;K&&(X="position:relative!important;");var G='<style id="Style-'+y.ID+"-"+j+'">'+$+"."+w+"{"+X+V+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var J=Y.createContextualFragment(G);e.document.head.appendChild(J),P.classList.add(w)}P.appendChild(z)}}}else var Q=function(t){var i=setTimeout(function(){null!==t.parentNode&&t.parentNode.removeChild(t);var n=t.getAttribute("id"),r=e.document.getElementById("Style-"+n);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(i)},s.cssAnimationDuration)},Z=function(e){if(e&&0<e.length)for(var t,i=0;i<e.length;i++)(t=e[i])&&(t.classList.add("nx-remove"),Q(t));else"string"==typeof n?v('"Notiflix.Block.remove();" function called with "'+n+'" selector, but this selector does not have a "Block" element to remove.'):v('"Notiflix.Block.remove();" function called with "'+n+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},ee=function(e){var t=setTimeout(function(){e.classList.remove(w),clearTimeout(t)},s.cssAnimationDuration+300)},et=setTimeout(function(){for(var e,t=0;t<m;t++)(e=R[t])&&(ee(e),Z(O=e.querySelectorAll("[id^="+y.ID+"]")));clearTimeout(et)},l);s=x(!0,s,u)},B={Notify:{init:function(e){t=x(!0,c,e),w(R,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=x(!0,t,e)):(_("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,i){A(l.Success,e,t,i)},failure:function(e,t,i){A(l.Failure,e,t,i)},warning:function(e,t,i){A(l.Warning,e,t,i)},info:function(e,t,i){A(l.Info,e,t,i)}},Report:{init:function(e){i=x(!0,h,e),w(L,"NotiflixReportInternalCSS")},merge:function(e){return i?void(i=x(!0,i,e)):(_("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,i,n,r){O(u.Success,e,t,i,n,r)},failure:function(e,t,i,n,r){O(u.Failure,e,t,i,n,r)},warning:function(e,t,i,n,r){O(u.Warning,e,t,i,n,r)},info:function(e,t,i,n,r){O(u.Info,e,t,i,n,r)}},Confirm:{init:function(e){n=x(!0,p,e),w(D,"NotiflixConfirmInternalCSS")},merge:function(e){return n?void(n=x(!0,n,e)):(_("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,i,n,r,s,o){M(d.Show,e,t,null,i,n,r,s,o)},ask:function(e,t,i,n,r,s,o,a){M(d.Ask,e,t,i,n,r,s,o,a)},prompt:function(e,t,i,n,r,s,o,a){M(d.Prompt,e,t,i,n,r,s,o,a)}},Loading:{init:function(e){r=x(!0,m,e),w(F,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=x(!0,r,e)):(_("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){z(f.Standard,e,t,!0,0)},hourglass:function(e,t){z(f.Hourglass,e,t,!0,0)},circle:function(e,t){z(f.Circle,e,t,!0,0)},arrows:function(e,t){z(f.Arrows,e,t,!0,0)},dots:function(e,t){z(f.Dots,e,t,!0,0)},pulse:function(e,t){z(f.Pulse,e,t,!0,0)},custom:function(e,t){z(f.Custom,e,t,!0,0)},notiflix:function(e,t){z(f.Notiflix,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),z(null,null,null,!1,e)},change:function(e){U(e)}},Block:{init:function(e){s=x(!0,y,e),w(W,"NotiflixBlockInternalCSS")},merge:function(e){return s?void(s=x(!0,s,e)):(_('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,i){q(!0,g.Standard,e,t,i)},hourglass:function(e,t,i){q(!0,g.Hourglass,e,t,i)},circle:function(e,t,i){q(!0,g.Circle,e,t,i)},arrows:function(e,t,i){q(!0,g.Arrows,e,t,i)},dots:function(e,t,i){q(!0,g.Dots,e,t,i)},pulse:function(e,t,i){q(!0,g.Pulse,e,t,i)},remove:function(e,t){"number"!=typeof t&&(t=0),q(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?x(!0,e.Notiflix,{Notify:B.Notify,Report:B.Report,Confirm:B.Confirm,Loading:B.Loading,Block:B.Block}):{Notify:B.Notify,Report:B.Report,Confirm:B.Confirm,Loading:B.Loading,Block:B.Block}},"function"==typeof define&&define.amd?define([],function(){return r(n)}):"object"==typeof e.exports?e.exports=r(n):n.Notiflix=r(n)}),s.register("d0uJe",function(t,i){e(t.exports,"authVisual",function(){return u}),e(t.exports,"user",function(){return d});var n=s("yTOug");let r=document.querySelectorAll(".js-signin-btn"),o=document.querySelectorAll(".js-auth-btn"),a=document.querySelectorAll(".js-display-name"),l=document.querySelectorAll(".js-logout-btn"),c=document.querySelectorAll(".js-list_menu");function u(){d.isAuth?(c.forEach(e=>e.classList.remove("visually-hidden")),r.forEach(e=>e.classList.add("visually-hidden")),l.forEach(e=>e.classList.add("visually-hidden")),o.forEach(e=>e.classList.remove("visually-hidden")),d.userName?a.forEach(e=>e.textContent=d.userName.slice(0,8)):a.forEach(e=>e.textContent="User")):(c.forEach(e=>e.classList.add("visually-hidden")),r.forEach(e=>e.classList.remove("visually-hidden")),l.forEach(e=>e.classList.add("visually-hidden")),o.forEach(e=>e.classList.add("visually-hidden")),a.forEach(e=>e.textContent="User"))}//logout
function h(e){e.preventDefault(),d.auth.signOut().then(()=>{localStorage.removeItem("auth"),d.isAuth=!1,u(),window.location.href="./index.html"})}// let isList;
l.forEach(e=>e.addEventListener("click",h)),o.forEach(e=>e.addEventListener("click",e=>{l.forEach(e=>e.classList.toggle("visually-hidden"))}));let d=new n.FirebaseService;u()}),s.register("yTOug",function(t,n){e(t.exports,"FirebaseService",function(){return c}),// Import the functions you need from the SDKs you need
s("fkNhc");var r=s("MjY8E");s("gQOBw");var o=s("gUfF6");s("cokon");var a=s("eA2L7"),l=s("6JpON");class c{constructor(){// Your web app's Firebase configuration
this.firebaseConfig={apiKey:"AIzaSyDS0DuqLbmpznNhiwCXHv-oM-VF44DW1h0",authDomain:"bookshelf-b9aa2.firebaseapp.com",databaseURL:"https://bookshelf-b9aa2-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookshelf-b9aa2",storageBucket:"bookshelf-b9aa2.appspot.com",messagingSenderId:"40570077936",appId:"1:40570077936:web:eecbed5fd61fb7aa02f835"},// Initialize Firebase
this.app=(0,r.initializeApp)(this.firebaseConfig),// Initialize Firebase Authentication and get a reference to the service
this.auth=(0,o.o)(this.app),this.db=(0,a.getDatabase)(this.app),this.isAuth=!1,this.userName="User",this.userID,this.email;let e=localStorage.getItem("auth");if(!e)return;let t=JSON.parse(e);this.isAuth=t.isAuth,this.userName=t.userName,this.userID=t.userID}signUpUser(e,t,n,r){(0,o.a9)(this.auth,t,n).then(i=>{// Signed in
this.userName=e,console.log(i.user),this.userID=this.auth.currentUser.uid,this.email=t,this.writeUserDataToDB(this.userID,this.userName,this.email);let n={isAuth:!0,userName:this.userName,userID:this.userID};localStorage.setItem("auth",JSON.stringify(n)),r()}).catch(e=>{/*@__PURE__*/i(l).Notify.failure("This email already in use.")})}async signInUser(e,t,n){try{let i=await (0,o.aa)(this.auth,e,t);this.userID=i.user.uid,this.email=e;let r=await this.readUserData(this.userID);this.userName=r.displayName,this.isAuth=!0;let s={isAuth:!0,userName:this.userName,userID:this.userID};localStorage.setItem("auth",JSON.stringify(s)),n()}catch(e){/*@__PURE__*/i(l).Notify.failure("This user not found."),/*@__PURE__*/i(l).Notify.failure("Wrong password.")}}writeUserDataToDB(e,t,i){if(!e)return;let n=(0,a.ref)(this.db,"users/"+e);(0,a.set)(n,{displayName:t}).then(()=>{// console.log('Name added to the database successfully.');
}).catch(e=>{console.error("Error adding user to the database:",e)})}writeBooksToDB(e,t){if(!e)return;let i=(0,a.ref)(this.db,"users/"+e+"/books");(0,a.set)(i,t).then(()=>{// console.log('Book added to the database successfully.');
}).catch(e=>{console.error("Error adding book to the database:",e)})}async readUserData(e){if(!e)return;let t=(0,a.ref)(this.db),i=await (0,a.get)((0,a.child)(t,`users/${e}`));if(i.exists())return i.val();console.log("No data available")}}}),s.register("fkNhc",function(t,i){e(t.exports,"initializeApp",function(){return s("MjY8E").initializeApp}),e(t.exports,"registerVersion",function(){return s("MjY8E").registerVersion}),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,s("MjY8E").registerVersion)("firebase","10.3.1","app")}),s.register("MjY8E",function(t,i){e(t.exports,"_registerComponent",function(){return g}),e(t.exports,"_getProvider",function(){return y}),e(t.exports,"SDK_VERSION",function(){return b}),e(t.exports,"initializeApp",function(){return w}),e(t.exports,"getApp",function(){return x}),e(t.exports,"registerVersion",function(){return k});var n=s("6ExWU"),r=s("kZfxc"),o=s("2xDiJ"),a=s("ajgRO");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let c="@firebase/app",u="0.9.18",h=new r.Logger("@firebase/app"),d="[DEFAULT]",p={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},f=new Map,m=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function g(e){let t=e.name;if(m.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let i of(m.set(t,e),f.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(i){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}(i,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function y(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}let _=new o.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new n.Component("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The current SDK version.
 *
 * @public
 */let b="10.3.1";function w(e,t={}){let i=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw _.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(s)});if(i||(i=(0,o.getDefaultAppConfig)()),!i)throw _.create("no-options"/* AppError.NO_OPTIONS */);let a=f.get(s);if(a){// return the existing app if options and config deep equal the ones in the existing app.
if((0,o.deepEqual)(i,a.options)&&(0,o.deepEqual)(r,a.config))return a;throw _.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:s})}let l=new n.ComponentContainer(s);for(let e of m.values())l.addComponent(e);let c=new v(i,r,l);return f.set(s,c),c}/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function x(e=d){let t=f.get(e);if(!t&&e===d&&(0,o.getDefaultAppConfig)())return w();if(!t)throw _.create("no-app"/* AppError.NO_APP */,{appName:e});return t}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function k(e,t,i){var r;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let s=null!==(r=p[e])&&void 0!==r?r:e;i&&(s+=`-${i}`);let o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=[`Unable to register library "${s}" with version "${t}":`];o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),h.warn(e.join(" "));return}g(new n.Component(`${s}-version`,()=>({library:s,version:t}),"VERSION"/* ComponentType.VERSION */))}let C="firebase-heartbeat-store",I=null;function N(){return I||(I=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(C)}}).catch(e=>{throw _.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),I}async function T(e){try{let t=await N(),i=await t.transaction(C).objectStore(C).get(S(e));return i}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{let t=_.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}async function E(e,t){try{let i=await N(),n=i.transaction(C,"readwrite"),r=n.objectStore(C);await r.put(t,S(e)),await n.done}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{let t=_.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function S(e){return`${e.name}!${e.options.appId}`}class R{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new A(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),i=P();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),i=Date.now();return i-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=P(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let i=[],n=e.slice();for(let r of e){// Look for an existing entry with the same user agent.
let e=i.find(e=>e.agent===r.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(r.date),L(i)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
i.push({agent:r.agent,dates:[r.date]}),L(i)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
i.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=i,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n)}}function P(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await T(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return E(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return E(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function L(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}g(new n.Component("platform-logger",e=>new l(e),"PRIVATE"/* ComponentType.PRIVATE */)),g(new n.Component("heartbeat",e=>new R(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
k(c,u,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
k(c,u,"esm2017"),// Register platform SDK identifier (no version).
k("fire-js","")}),s.register("6ExWU",function(t,i){e(t.exports,"Component",function(){return r}),e(t.exports,"Provider",function(){return a}),e(t.exports,"ComponentContainer",function(){return l});var n=s("2xDiJ");/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class r{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:i,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);i===r&&t.resolve(n)}return n}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var i;let n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);let s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let n of i)try{n(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===o?void 0:e,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return i||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class l{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}}),s.register("2xDiJ",function(i,n){e(i.exports,"assert",function(){return a}),e(i.exports,"assertionError",function(){return l}),e(i.exports,"base64",function(){return h}),e(i.exports,"base64Encode",function(){return p}),e(i.exports,"base64urlEncodeWithoutPadding",function(){return f}),e(i.exports,"base64Decode",function(){return m}),e(i.exports,"deepCopy",function(){return g}),e(i.exports,"getDefaultEmulatorHost",function(){return w}),e(i.exports,"getDefaultEmulatorHostnameAndPort",function(){return x}),e(i.exports,"getDefaultAppConfig",function(){return k}),e(i.exports,"getExperimentalSetting",function(){return C}),e(i.exports,"Deferred",function(){return I}),e(i.exports,"createMockUserToken",function(){return N}),e(i.exports,"getUA",function(){return T}),e(i.exports,"isMobileCordova",function(){return E}),e(i.exports,"isBrowserExtension",function(){return S}),e(i.exports,"isReactNative",function(){return R}),e(i.exports,"isIE",function(){return P}),e(i.exports,"isNodeSdk",function(){return A}),e(i.exports,"isIndexedDBAvailable",function(){return L}),e(i.exports,"validateIndexedDBOpenable",function(){return O}),e(i.exports,"FirebaseError",function(){return D}),e(i.exports,"ErrorFactory",function(){return M}),e(i.exports,"jsonEval",function(){return z}),e(i.exports,"stringify",function(){return U}),e(i.exports,"isValidFormat",function(){return j}),e(i.exports,"isAdmin",function(){return q}),e(i.exports,"contains",function(){return B}),e(i.exports,"safeGet",function(){return H}),e(i.exports,"isEmpty",function(){return V}),e(i.exports,"map",function(){return $}),e(i.exports,"deepEqual",function(){return(/**
 * Deep equal two objects. Support Arrays and Objects.
 */function e(t,i){if(t===i)return!0;let n=Object.keys(t),r=Object.keys(i);for(let s of n){if(!r.includes(s))return!1;let n=t[s],o=i[s];if(X(n)&&X(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of r)if(!n.includes(e))return!1;return!0})}),e(i.exports,"querystring",function(){return K}),e(i.exports,"querystringDecode",function(){return G}),e(i.exports,"extractQuerystring",function(){return Y}),e(i.exports,"Sha1",function(){return J}),e(i.exports,"createSubscribe",function(){return Q}),e(i.exports,"errorPrefix",function(){return et}),e(i.exports,"stringToByteArray",function(){return ei}),e(i.exports,"stringLength",function(){return en}),e(i.exports,"getModularInstance",function(){return er});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */var r=s("6qd2L");let o={/**
     * @define {boolean} Whether this is the client Node.js SDK.
     */NODE_CLIENT:!1,/**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */NODE_ADMIN:!1,/**
     * Firebase SDK Version
     */SDK_VERSION:"${JSCORE_VERSION}"},a=function(e,t){if(!e)throw l(t)},l=function(e){return Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},c=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:((64512&r)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(// Surrogate Pair
r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128):t[i++]=r>>12|224,t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},u=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0,n=0;for(;i<e.length;){let r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){// Surrogate Pair
let s=e[i++],o=e[i++],a=e[i++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[i++],o=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},h={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,u=(3&r)<<4|o>>4,h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),n.push(i[c],i[u],i[h],i[d])}return n.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):u(this.decodeStringToByteArray(e,t)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let r=i[e.charAt(t++)],s=t<e.length,o=s?i[e.charAt(t)]:0;++t;let a=t<e.length,l=a?i[e.charAt(t)]:64;++t;let c=t<e.length,u=c?i[e.charAt(t)]:64;if(++t,null==r||null==o||null==l||null==u)throw new d;let h=r<<2|o>>4;if(n.push(h),64!==l){let e=o<<4&240|l>>2;if(n.push(e),64!==u){let e=l<<6&192|u;n.push(e)}}}return n},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */let p=function(e){let t=c(e);return h.encodeByteArray(t,!0)},f=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return p(e).replace(/\./g,"")},m=function(e){try{return h.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */function g(e){return(/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */function e(t,i){if(!(i instanceof Object))return i;switch(i.constructor){case Date:return new Date(i.getTime());case Object:void 0===t&&(t={});break;case Array:// Always copy the array source and overwrite the target.
t=[];break;default:// Not a plain Object - treat it as a scalar.
return i}for(let n in i)i.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=e(t[n],i[n]));return t}(void 0,e))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,_=()=>{if(void 0===r||void 0===r.env)return;let e=void 0;if(e)return JSON.parse(e)},v=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&m(e[1]);return t&&JSON.parse(t)},b=()=>{try{return y()||_()||v()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},w=e=>{var t,i;return null===(i=null===(t=b())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},x=e=>{let t=w(e);if(!t)return;let i=t.lastIndexOf(":");// Finding the last since IPv6 addr also has colons.
if(i<=0||i+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);// eslint-disable-next-line no-restricted-globals
let n=parseInt(t.substring(i+1),10);return"["===t[0]?[t.substring(1,i-1),n]:[t.substring(0,i),n]},k=()=>{var e;return null===(e=b())||void 0===e?void 0:e.config},C=e=>{var t;return null===(t=b())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let i=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({// Set all required fields to decent defaults
iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[f(JSON.stringify({alg:"none",type:"JWT"})),f(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */function T(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */function E(){return"undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T())}function S(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */function R(){return"object"==typeof navigator&&"ReactNative"===navigator.product}/** Detects Internet Explorer. */function P(){let e=T();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */function A(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function L(){try{return"object"==typeof indexedDB}catch(e){return!1}}/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */function O(){return new Promise((e,t)=>{try{let i=!0,n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class D extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */i){super(t),this.code=e,this.customData=i,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(F,(e,t)=>{let n=i[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`,a=new D(n,o,i);return a}}let F=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */function z(e){return JSON.parse(e)}/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */function U(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */let W=function(e){let t={},i={},n={},r="";try{let s=e.split(".");t=z(m(s[0])||""),i=z(m(s[1])||""),r=s[2],n=i.d||{},delete i.d}catch(e){}return{header:t,claims:i,data:n,signature:r}},j=function(e){let t=W(e),i=t.claims;return!!i&&"object"==typeof i&&i.hasOwnProperty("iat")},q=function(e){let t=W(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function V(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t,i){let n={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=t.call(i,e[r],r,e));return n}function X(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */function K(e){let t=[];for(let[i,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function G(e){let t={},i=e.replace(/^\?/,"").split("&");return i.forEach(e=>{if(e){let[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function Y(e){let t=e.indexOf("?");if(!t)return"";let i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 *//**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */class J{constructor(){/**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */this.chain_=[],/**
         * A buffer holding the partially computed hash result.
         * @private
         */this.buf_=[],/**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */this.W_=[],/**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */this.pad_=[],/**
         * @private {number}
         */this.inbuf_=0,/**
         * @private {number}
         */this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}/**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */compress_(e,t){let i,n;t||(t=0);let r=this.W_;// get 16 big endian words
if("string"==typeof e)for(let i=0;i<16;i++)// TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
// have a bug that turns the post-increment ++ operator into pre-increment
// during JIT compilation.  We have code that depends heavily on SHA-1 for
// correctness and which is affected by this bug, so I've removed all uses
// of post-increment ++ in which the result value is used.  We can revert
// this change once the Safari bug
// (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
// most clients have been updated.
r[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)r[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;// expand to 80 words
for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];// TODO(user): Try to unroll this loop to speed up the computation.
for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),n=1518500249):(i=o^a^l,n=1859775393):e<60?(i=o&a|l&(o|a),n=2400959708):(i=o^a^l,n=3395469782);let t=(s<<5|s>>>27)+i+c+n+r[e]&4294967295;c=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){// TODO(johnlenz): tighten the function signature and remove this check
if(null==e)return;void 0===t&&(t=e.length);let i=t-this.blockSize,n=0,r=this.buf_,s=this.inbuf_;// The outer while loop should execute at most twice.
for(;n<t;){// When we have no data in the block to top up, we can directly process the
// input buffer (assuming it contains sufficient data). This gives ~25%
// speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
// the data is provided in large chunks (or in multiples of 64 bytes).
if(0===s)for(;n<=i;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(r[s]=e.charCodeAt(n),++s,++n,s===this.blockSize){this.compress_(r),s=0;break}}else for(;n<t;)if(r[s]=e[n],++s,++n,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}/** @override */digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));// Add # bits.
for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let i=0;for(let t=0;t<5;t++)for(let n=24;n>=0;n-=8)e[i]=this.chain_[t]>>n&255,++i;return e}}/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function Q(e,t){let i=new Z(e,t);return i.subscribe.bind(i)}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class Z{/**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,// Micro-task scheduling by calling task.then().
this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,// Call the executor asynchronously so subscribers that are called
// synchronously after the creation of the subscribe function
// can still receive the very first value generated in the executor.
this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}/**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw Error("Missing Observer.");void 0===(n=!/**
 * Return true if the object passed in implements any of the named methods.
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:i}:e).next&&(n.next=ee),void 0===n.error&&(n.error=ee),void 0===n.complete&&(n.complete=ee);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){// nothing
}}),this.observers.push(n),r}// Unsubscribe is synchronous - we guarantee that no events are sent to
// any unsubscribed Observer.
unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)// Since sendOne calls asynchronously - there is no chance that
// this.observers will become undefined.
for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}// Call the Observer via one of it's callback function. We are careful to
// confirm that the observe has not been unsubscribed since this asynchronous
// function had been queued.
sendOne(e,t){// Execute the callback asynchronously
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),// Proxy is no longer needed - garbage collect references
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ee(){// do nothing
}/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */function et(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */let ei=function(e){let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);// Is this the lead surrogate in a surrogate pair?
if(r>=55296&&r<=56319){let t=r-55296;// the high 10 bits.
a(++n<e.length,"Surrogate pair missing trail surrogate.");let i=e.charCodeAt(n)-56320;// the low 10 bits.
r=65536+(t<<10)+i}r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:(r<65536?t[i++]=r>>12|224:(t[i++]=r>>18|240,t[i++]=r>>12&63|128),t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},en=function(e){let t=0;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(// Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
t+=4,i++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){return e&&e._delegate?e._delegate:e}}),s.register("6qd2L",function(e,t){// shim for using process in browser
var i,n,r,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(i===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return i(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return i.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(e){i=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c=[],u=!1,h=-1;function d(){u&&r&&(u=!1,r.length?c=r.concat(c):h=-1,c.length&&p())}function p(){if(!u){var e=l(d);u=!0;for(var t=c.length;t;){for(r=c,c=[];++h<t;)r&&r[h].run();h=-1,t=c.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return n.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return n.call(this,e)}}}(e)}}// v8 likes predictible objects
function f(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];c.push(new f(e,t)),1!==c.length||u||l(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}),s.register("kZfxc",function(t,i){var n,r;e(t.exports,"LogLevel",function(){return n}),e(t.exports,"Logger",function(){return u}),e(t.exports,"setLogLevel",function(){return h}),e(t.exports,"setUserLogHandler",function(){return d});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A container for all of the Logger instances
 */let s=[];(r=n||(n={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},c=(e,t,...i)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),r=l[t];if(r)console[r](`[${n}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=a,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=c,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}function h(e){s.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(let i of s){let r=null;t&&t.level&&(r=o[t.level]),null===e?i.userLogHandler=null:i.userLogHandler=(t,i,...s)=>{let o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");i>=(null!=r?r:t.logLevel)&&e({level:n[i].toLowerCase(),message:o,args:s,type:t.name})}}}}),s.register("ajgRO",function(t,i){e(t.exports,"openDB",function(){return r});var n=s("kKOTz");/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */function r(e,t,{blocked:i,upgrade:r,blocking:s,terminated:o}={}){let a=indexedDB.open(e,t),l=(0,n.w)(a);return r&&a.addEventListener("upgradeneeded",e=>{r((0,n.w)(a.result),e.oldVersion,e.newVersion,(0,n.w)(a.transaction),e)}),i&&a.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),l.then(e=>{o&&e.addEventListener("close",()=>o()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),l}let o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(l.get(t))return l.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=a.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||o.includes(i)))return;let s=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),r&&s.done]))[0]};return l.set(t,s),s}(0,n.r)(e=>({...e,get:(t,i,n)=>c(t,i)||e.get(t,i,n),has:(t,i)=>!!c(t,i)||e.has(t,i)}))}),s.register("kKOTz",function(t,i){let n,r;e(t.exports,"w",function(){return p}),e(t.exports,"r",function(){return d});let s=(e,t)=>t.some(t=>e instanceof t),o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,h={get(e,t,i){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return a.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}// Else transform whatever we get back.
return p(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){h=e(h)}function p(e){var t;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(e instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(p(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
u.set(t,e),t}(e);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(c.has(e))return c.get(e);let i="function"==typeof(t=e)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
t.apply(f(this),e),p(o.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return p(t.apply(f(this),e))}:function(e,...i){let n=t.call(f(this),e,...i);return l.set(n,e.sort?e.sort():[e]),p(n)}:(t instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(a.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});// Cache it for later retrieval.
a.set(e,t)}(t),s(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,h):t;return i!==e&&(c.set(e,i),u.set(i,e)),i}let f=e=>u.get(e)}),s.register("gQOBw",function(t,i){e(t.exports,"createUserWithEmailAndPassword",function(){return s("gUfF6").a9}),e(t.exports,"getAuth",function(){return s("gUfF6").o}),e(t.exports,"signInWithEmailAndPassword",function(){return s("gUfF6").aa}),s("eMcUM")}),s.register("eMcUM",function(t,i){e(t.exports,"createUserWithEmailAndPassword",function(){return s("gUfF6").a9}),e(t.exports,"getAuth",function(){return s("gUfF6").o}),e(t.exports,"signInWithEmailAndPassword",function(){return s("gUfF6").aa}),s("gUfF6"),s("2xDiJ"),s("MjY8E"),s("kZfxc"),s("6ExWU")}),s.register("gUfF6",function(t,i){e(t.exports,"a9",function(){return e2}),e(t.exports,"aa",function(){return e5}),e(t.exports,"o",function(){return t4});var n,r=s("2xDiJ"),o=s("MjY8E"),a=s("kZfxc"),l=s("4tSb9"),c=s("6ExWU");function u(e){return void 0!==e&&void 0!==e.enterprise}class h{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The reCAPTCHA enablement status of the {@link EmailAuthProvider} for the current tenant.
         */this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}function d(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let p=new r.ErrorFactory("auth","Firebase",d()),f=new a.Logger("@firebase/auth");function m(e,...t){f.logLevel<=a.LogLevel.ERROR&&f.error(`Auth (${o.SDK_VERSION}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,...t){throw _(e,...t)}function y(e,...t){return _(e,...t)}function _(e,...t){if("string"!=typeof e){let i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return p.create(e,...t)}function v(e,t,...i){if(!e)throw _(t,...i)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function b(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw m(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */class k{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||b("Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===x()||"https:"===x()||(0,r.isBrowserExtension)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){e.emulator||b("Emulator should always be set here");let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Map from errors returned by the server to errors to developer visible errors
 */let N={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},T=new k(3e4,6e4);function E(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function S(e,t,i,n,s={}){return R(e,s,async()=>{let s={},o={};n&&("GET"/* HttpMethod.GET */===t?o=n:s={body:JSON.stringify(n)});let a=(0,r.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(l["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),I.fetch()(A(e,e.config.apiHost,i,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function R(e,t,i){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},N),t);try{let t=new L(e),s=await Promise.race([i(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw O(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,o);if(s.ok&&!("errorMessage"in o))return o;{let t=s.ok?o.errorMessage:o.error.message,[i,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===i)throw O(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,o);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===i)throw O(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,o);if("USER_DISABLED"/* ServerError.USER_DISABLED */===i)throw O(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,o);let l=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw function(e,t,i){let n=Object.assign(Object.assign({},d()),{[t]:i}),s=new r.ErrorFactory("auth","Firebase",n);return s.create(t,{appName:e.name})}(e,l,a);g(e,l)}}catch(t){if(t instanceof r.FirebaseError)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
g(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function P(e,t,i,n,r={}){let s=await S(e,t,i,n,r);return"mfaPendingCredential"in s&&g(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:s}),s}function A(e,t,i,n){let r=`${t}${i}?${n}`;return e.config.emulator?C(e.config,r):`${e.config.apiScheme}://${r}`}class L{constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),T.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function O(e,t,i){let n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);let r=y(e,t,n);return(// We know customData is defined on error because errorParams is defined
r.customData._tokenResponse=i,r)}async function D(e,t){return S(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,E(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M(e,t){return S(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function F(e,t){return S(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{// Convert to date object.
let t=new Date(Number(e));// Test date is valid.
if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){// Do nothing. undefined will be returned.
}}/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function U(e,t=!1){let i=(0,r.getModularInstance)(e),n=await i.getIdToken(t),s=j(n);v(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:n,authTime:z(W(s.auth_time)),issuedAtTime:z(W(s.iat)),expirationTime:z(W(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function W(e){return 1e3*Number(e)}function j(e){let[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return m("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,r.base64Decode)(i);if(!e)return m("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return m("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof r.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
// We don't actually care what the value is but TS won't accept unknown and
// we can't cast properly in both environments.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timerId=null,this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4/* Duration.RETRY_BACKOFF_MAX */),e}{// Reset the error backoff
this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=e-Date.now()-3e5/* Duration.OFFSET */;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(/* wasError */!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e){var t;let i=e.auth,n=await e.getIdToken(),r=await q(e,F(i,{idToken:n}));v(null==r?void 0:r.users.length,i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let s=r.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,i=(0,l.__rest)(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}):[],a=function(e,t){let i=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...i,...t]}(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new H(s.createdAt,s.lastLoginAt),isAnonymous:!!c&&u};Object.assign(e,h)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function $(e){let t=(0,r.getModularInstance)(e);await V(t),// Even though the current user hasn't changed, update
// current user will trigger a persistence update w/ the
// new info.
await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t){let i=await R(e,{},async()=>{let i=(0,r.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:s}=e.config,o=A(e,n,"/v1/token"/* Endpoint.TOKEN */,`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",I.fetch()(o,{method:"POST"/* HttpMethod.POST */,headers:a,body:i})});// The response comes back in snake_case. Convert to camel:
return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */class K{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){v(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),v(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),v(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function(e){let t=j(e);return v(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),v(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),v(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(v(!this.accessToken||this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:n,expiresIn:r}=await X(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){let{refreshToken:i,accessToken:n,expirationTime:r}=t,s=new K;return i&&(v("string"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),s.refreshToken=i),n&&(v("string"==typeof n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),s.accessToken=n),r&&(v("number"==typeof r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new K,this.toJSON())}_performRefresh(){return b("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){v("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class Y{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=(0,l.__rest)(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new B(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new H(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await q(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return U(this,e)}reload(){return $(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new Y(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
v(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await V(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await q(this,M(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,s,o,a,l,c;let u=null!==(i=t.displayName)&&void 0!==i?i:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=t;v(_&&k,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let C=K.fromJSON(this.name,k);v("string"==typeof _,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),G(u,e.name),G(h,e.name),v("boolean"==typeof b,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),v("boolean"==typeof w,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),G(d,e.name),G(p,e.name),G(f,e.name),G(m,e.name),G(g,e.name),G(y,e.name);let I=new Y({uid:_,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:C,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(I.providerData=x.map(e=>Object.assign({},e))),m&&(I._redirectEventId=m),I}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,i=!1){let n=new K;n.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let r=new Y({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return(// Updates the user info and data and resolves with a user instance.
await V(r),r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J=new Map;function Q(e){e instanceof Function||b("Expected a class definition");let t=J.get(e);return t?t instanceof e||b("Instance stored in cache mismatched with class"):(t=new e,J.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t,i){return`firebase:${e}:${t}:${i}`}Z.type="NONE";class et{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:n,name:r}=this.auth;this.fullUserKey=ee(this.userKey,n.apiKey,r),this.fullPersistenceKey=ee("persistence"/* KeyName.PERSISTENCE_USER */,n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Y._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new et(Q(Z),e,i);// Eliminate any persistences that are not available
let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=n[0]||Q(Z),s=ee(i,e.config.apiKey,e.name),o=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let i of t)try{let t=await i._get(s);if(t){let n=Y._fromJSON(e,t);// throws for unparsable blob (wrong format)
i!==r&&(o=n),r=i;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let a=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length&&(r=a[0],o&&// we'll just let it bubble to surface the error.
await r._set(s,o.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new et(r,e,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Determine the browser for the purposes of reporting usage to the API
 */function ei(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(eo(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(en(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(el(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(ec(t))return"Webos"/* BrowserName.WEBOS */;if(er(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||es(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(ea(t))return"Android"/* BrowserName.ANDROID */;let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==i?void 0:i.length)===2)return i[1]}return"Other"/* BrowserName.OTHER */}function en(e=(0,r.getUA)()){return/firefox\//i.test(e)}function er(e=(0,r.getUA)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function es(e=(0,r.getUA)()){return/crios\//i.test(e)}function eo(e=(0,r.getUA)()){return/iemobile/i.test(e)}function ea(e=(0,r.getUA)()){return/android/i.test(e)}function el(e=(0,r.getUA)()){return/blackberry/i.test(e)}function ec(e=(0,r.getUA)()){return/webos/i.test(e)}function eu(e=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function eh(e=(0,r.getUA)()){// TODO: implement getBrowserName equivalent for OS.
return eu(e)||ea(e)||ec(e)||el(e)||/windows phone/i.test(e)||eo(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//*
 * Determine the SDK version string
 */function ed(e,t=[]){let i;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
i=ei((0,r.getUA)());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
i=`${ei((0,r.getUA)())}-${e}`;break;default:i=e}let n=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${i}/JsCore/${o.SDK_VERSION}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
// function that is always async.
let i=t=>new Promise((i,n)=>{try{let n=e(t);// Either resolve with existing promise or wrap a non-promise
    // return value into a promise.
    i(n)}catch(e){// Sync callback throws.
    n(e)}});// Attach the onAbort if present
i.onAbort=t,this.queue.push(i);let n=this.queue.length-1;return()=>{// Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
// indexing of other elements.
this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;// While running the middleware, build a temporary stack of onAbort
// callbacks to call if one middleware callback rejects.
let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){for(let e of(// Run all onAbort, with separate try/catch to ignore any errors and
// continue
t.reverse(),t))try{e()}catch(e){/* swallow error */}throw this.auth._errorFactory.create("login-blocked"/* AuthErrorCode.LOGIN_BLOCKED */,{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Fetches the password policy for the currently set tenant or the project if no tenant is set.
 *
 * @param auth Auth object.
 * @param request Password policy request.
 * @returns Password policy response.
 */async function ef(e,t={}){return S(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,E(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class em{constructor(e){var t,i,n,r;// Only include custom strength options defined in the response.
let s=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(n=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,n,r,s,o;let a={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),// Combine the status into single isValid property.
a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(i=a.meetsMaxPasswordLength)||void 0===i||i),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a)}/**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),n&&(t.meetsMaxPasswordLength=e.length<=n)}/**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordCharacterOptions(e,t){let i;// Assign statuses for requirements even if the password is an empty string.
this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */!1,/* containsUppercaseCharacter= */!1,/* containsNumericCharacter= */!1,/* containsNonAlphanumericCharacter= */!1);for(let n=0;n<e.length;n++)i=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */i>="a"&&i<="z",/* containsUppercaseCharacter= */i>="A"&&i<="Z",/* containsNumericCharacter= */i>="0"&&i<="9",/* containsNonAlphanumericCharacter= */this.allowedNonAlphanumericCharacters.includes(i))}/**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */updatePasswordCharacterOptionsStatuses(e,t,i,n,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new e_(this),this.idTokenSubscription=new e_(this),this.beforeStateQueue=new ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Q(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await et.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
// this will cause the iframe to load immediately in certain cases)
if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){/* Ignore the error */}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}/**
     * If the persistence is changed in another window, the user manager will let us know
     */async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){// If the same user is to be synchronized.
if(this.currentUser&&e&&this.currentUser.uid===e.uid){// Data update, simply copy data changes.
this._currentUser._assign(e),// If tokens changed from previous user tokens, this will trigger
// notifyAuthListeners_.
await this.currentUser.getIdToken();return}// Update current Auth state. Either a new login or logout.
// Skip blocking callbacks, they should not apply to a change in another tab.
await this._updateCurrentUser(e,/* skipBeforeStateCallbacks */!0)}}async initializeCurrentUser(e){var t;// First check to see if we have a pending redirect event.
let i=await this.assertedPersistence.getCurrentUser(),n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(null==o?void 0:o.user)&&(n=o.user,r=!0)}// If no user in persistence, there is no current user. Set to null.
if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(v(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
// during auth initialization. All of the normal sign in and link/reauth
// flows call back into auth and push things onto the promise queue. We
// need to await the result of the redirect sign in *inside the promise
// queue*. This presents a problem: we run into deadlock. See:
//    ┌> [Initialization] ─────┐
//    ┌> [<other queue tasks>] │
//    └─ [getRedirectResult] <─┘
//    where [] are tasks on the queue and arrows denote awaits
// Initialization will never complete because it's waiting on something
// that's waiting for initialization to complete!
//
// Instead, this method calls getRedirectResult() (stored in
// _completeRedirectFn) with an optional parameter that instructs all of
// the underlying auth operations to skip anything that mutates auth state.
let t=null;try{// We know this._popupRedirectResolver is set since redirectResolver
// is passed in. The _completeRedirectFn expects the unwrapped extern.
t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){// Swallow any errors here; the code can retrieve them in
// getRedirectResult().
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await V(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?(0,r.getModularInstance)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){// Prevent callbacks from being called again in _updateCurrentUser, as
// they were already called in the first line.
return(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Q(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await ef(this),t=new em(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Q(e)||this._popupRedirectResolver;v(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await et.create(this,[Q(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(o,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
o.then(()=>{s||r(this.currentUser)}),"function"==typeof t){let r=e.addObserver(t,i,n);return()=>{s=!0,r()}}{let i=e.addObserver(t);return()=>{s=!0,i()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=ed(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let i=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=i);// If the App Check service exists, add the App Check token in the headers
let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){f.logLevel<=a.LogLevel.WARN&&f.warn(`Auth (${o.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/**
 * Method to be used to cast down to our private implmentation of Auth.
 * It will also handle unwrapping from the compat type if necessary
 *
 * @param auth Auth object passed in from developer
 */function ey(e){return(0,r.getModularInstance)(e)}/** Helper class to wrap subscriber logic */class e_{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.createSubscribe)(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}function ev(e){// TODO: consider adding timeout support & cancellation
return new Promise((t,i)=>{var n,r;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=y("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,i(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(s)})}function eb(e){return`__${e}${Math.floor(1e6*Math.random())}`}class ew{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=ey(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,i)=>{D(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(n=>{if(void 0===n.recaptchaKey)i(Error("recaptcha Enterprise site key undefined"));else{let i=new h(n);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}}).catch(e=>{i(e)})})}function n(t,i,n){let r=window.grecaptcha;u(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{i(e)}).catch(()=>{i("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{i(this.auth).then(i=>{if(!t&&u(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}ev("https://www.google.com/recaptcha/enterprise.js?render="+i).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function ex(e,t,i,n=!1){let r;let s=new ew(e);try{r=await s.verify(i)}catch(e){r=await s.verify(i,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),o}function ek(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eC(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class eI{/** @internal */constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */e,/**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */t){this.providerId=e,this.signInMethod=t}/**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */toJSON(){return b("not implemented")}/** @internal */_getIdTokenResponse(e){return b("not implemented")}/** @internal */_linkToIdToken(e,t){return b("not implemented")}/** @internal */_getReauthenticationResolver(e){return b("not implemented")}}async function eN(e,t){return S(e,"POST"/* HttpMethod.POST */,"/v1/accounts:update"/* Endpoint.SET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(e,t){return P(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,E(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(e,t){return P(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,E(e,t))}async function eS(e,t){return P(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,E(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */class eR extends eI{/** @internal */constructor(/** @internal */e,/** @internal */t,i,/** @internal */n=null){super("password"/* ProviderId.PASSWORD */,i),this._email=e,this._password=t,this._tenantId=n}/** @internal */static _fromEmailAndPassword(e,t){return new eR(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,i=null){return new eR(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,i)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(t=e._getRecaptchaConfig())||void 0===t||!t.emailPasswordEnabled)return eT(e,i).catch(async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let t=await ex(e,i,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return eT(e,t)}});{let t=await ex(e,i,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */);return eT(e,t)}case"emailLink"/* SignInMethod.EMAIL_LINK */:return eE(e,{email:this._email,oobCode:this._password});default:g(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:return eN(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink"/* SignInMethod.EMAIL_LINK */:return eS(e,{idToken:t,email:this._email,oobCode:this._password});default:g(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(e,t){return P(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,E(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class eA extends eI{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new eA(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):g("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=(0,l.__rest)(t,["providerId","signInMethod"]);if(!i||!n)return null;let s=new eA(i,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return eP(e,t)}/** @internal */_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,eP(e,i)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eP(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.querystring)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eL(e,t){return S(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,E(e,t))}async function eO(e,t){return P(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,E(e,t))}async function eD(e,t){let i=await P(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,E(e,t));if(i.temporaryProof)throw O(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,i);return i}let eM={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function eF(e,t){let i=Object.assign(Object.assign({},t),{operation:"REAUTH"});return P(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,E(e,i),eM)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */class ez extends eI{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new ez({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new ez({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return eO(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return eD(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return eF(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new ez({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class eU{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,i,n,s,o,a;let l=(0,r.querystringDecode)((0,r.extractQuerystring)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,u=null!==(i=l.oobCode)&&void 0!==i?i:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL"/* ActionCodeOperation.RECOVER_EMAIL */;case"resetPassword":return"PASSWORD_RESET"/* ActionCodeOperation.PASSWORD_RESET */;case"signIn":return"EMAIL_SIGNIN"/* ActionCodeOperation.EMAIL_SIGNIN */;case"verifyEmail":return"VERIFY_EMAIL"/* ActionCodeOperation.VERIFY_EMAIL */;case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL"/* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */;case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION"/* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */;default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);// Validate API key, code and mode.
v(c&&u&&h,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}/**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */static parseLink(e){let t=/**
 * Helper to parse FDL links
 *
 * @param url
 */function(e){let t=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).link,i=t?(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id:null,n=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id,s=n?(0,r.querystringDecode)((0,r.extractQuerystring)(n)).link:null;return s||n||i||t||e}(e);try{return new eU(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */class eW{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=eW.PROVIDER_ID}/**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */static credential(e,t){return eR._fromEmailAndPassword(e,t)}/**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */static credentialWithLink(e,t){let i=eU.parseLink(t);return v(i,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),eR._fromEmailAndCode(e,i.code,i.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */eW.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */eW.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */eW.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */class ej{/**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */constructor(e){this.providerId=e,/** @internal */this.defaultLanguageCode=null,/** @internal */this.customParameters={}}/**
     * Set the language gode.
     *
     * @param languageCode - language code
     */setDefaultLanguage(e){this.defaultLanguageCode=e}/**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */setCustomParameters(e){return this.customParameters=e,this}/**
     * Retrieve the current list of {@link CustomParameters}.
     */getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */class eq extends ej{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}/**
     * Retrieve the current list of OAuth scopes.
     */getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class eB extends eq{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */static credential(e){return eA._fromParams({providerId:eB.PROVIDER_ID,signInMethod:eB.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return eB.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return eB.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eB.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */eB.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */eB.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class eH extends eq{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */static credential(e,t){return eA._fromParams({providerId:eH.PROVIDER_ID,signInMethod:eH.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return eH.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return eH.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return eH.credential(t,i)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */eH.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */eH.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */class eV extends eq{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return eA._fromParams({providerId:eV.PROVIDER_ID,signInMethod:eV.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return eV.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return eV.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eV.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */eV.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */eV.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */class e$ extends eq{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return eA._fromParams({providerId:e$.PROVIDER_ID,signInMethod:e$.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return e$.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return e$.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return e$.credential(t,i)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eX(e,t){return P(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signUp"/* Endpoint.SIGN_UP */,E(e,t))}/** Always set to {@link SignInMethod}.TWITTER. */e$.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */e$.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){let r=await Y._fromIdTokenResponse(e,i,n),s=eG(i),o=new eK({user:r,providerId:s,_tokenResponse:i,operationType:t});return o}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,/* reload */!0);let n=eG(i);return new eK({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function eG(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eY extends r.FirebaseError{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,eY.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new eY(e,t,i,n)}}function eJ(e,t,i,n){let r="reauthenticate"/* OperationType.REAUTHENTICATE */===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e);return r.catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw eY._fromErrorAndOperation(e,i,t,n);throw i})}async function eQ(e,t,i=!1){let n=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return eK._forOperation(e,"link"/* OperationType.LINK */,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eZ(e,t,i=!1){let{auth:n}=e,r="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let s=await q(e,eJ(n,r,t,e),i);v(s.idToken,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let o=j(s.idToken);v(o,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:a}=o;return v(e.uid===a,n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),eK._forOperation(e,r,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&g(n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(e,t,i=!1){let n="signIn"/* OperationType.SIGN_IN */,r=await eJ(e,n,t),s=await eK._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(s.user),s}/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */async function e1(e,t){return e0(ey(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Updates the password policy cached in the {@link Auth} instance if a policy is already
 * cached for the project or tenant.
 *
 * @remarks
 * We only fetch the password policy if the password did not meet policy requirements and
 * there is an existing policy cached. A developer must call validatePassword at least
 * once for the cache to be automatically updated.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @private
 */async function e6(e){let t=ey(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}/**
 * Creates a new user account associated with the specified email address and password.
 *
 * @remarks
 * On successful creation of the user account, this user will also be signed in to your application.
 *
 * User account creation can fail if the account already exists or the password is invalid.
 *
 * Note: The email address acts as a unique identifier for the user and enables an email-based
 * password reset. This function will create a new user account and set the initial user password.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param password - The user's chosen password.
 *
 * @public
 */async function e2(e,t,i){var n;let r;let s=ey(e),o={returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};if(null===(n=s._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){let e=await ex(s,o,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */);r=eX(s,e)}else r=eX(s,o).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");let e=await ex(s,o,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */);return eX(s,e)}throw e});let a=await r.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&e6(e),t}),l=await eK._fromIdTokenResponse(s,"signIn"/* OperationType.SIGN_IN */,a);return await s._updateCurrentUser(l.user),l}/**
 * Asynchronously signs in using an email and password.
 *
 * @remarks
 * Fails with an error if the email address and password do not match.
 *
 * Note: The user's password is NOT the password used to access the user's email account. The
 * email address serves as a unique identifier for the user, and the password is used to access
 * the user's account in your Firebase project. See also: {@link createUserWithEmailAndPassword}.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The users email address.
 * @param password - The users password.
 *
 * @public
 */function e5(e,t,i){return e1((0,r.getModularInstance)(e),eW.credential(t,i)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&e6(e),t})}new WeakMap;let e3="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class e4{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e3,"1"),this.storage.removeItem(e3),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class e9 extends e4{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,// Safari or iOS browser and embedded in an iframe.
this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,r.getUA)();return er(e)||eu(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=eh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
for(let t of Object.keys(this.listeners)){// Get value from localStorage.
let i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){// Key would be null in some situations, like when localStorage is cleared
if(!e.key){this.forAllChangedKeys((e,t,i)=>{this.notifyListeners(e,i)});return}let i=e.key;// Safari embedded iframe. Storage event will trigger with the delta
// changes but no changes will be applied to the iframe localStorage.
if(t?// Remove storage event listener to prevent possible event duplication.
this.detachListener():// Remove polling listener to prevent possible event duplication.
this.stopPolling(),this.safariLocalStorageNotSynced){// Get current iframe page value.
let n=this.storage.getItem(i);// Value not synchronized, synchronize manually.
if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}let n=()=>{// Keep local map up to date in case storage event is triggered before
// poll.
let e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},s=this.storage.getItem(i);(0,r.isIE)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e9.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8 extends e4{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}e8.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface class for receiving messages.
 *
 */class e7{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let i=new e7(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:i,data:n}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:i});let s=Array.from(r).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:i,response:o})}/**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}/**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}e7.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface for sending messages and waiting for a completion response.
 *
 */class tt{constructor(e){this.target=e,this.handlers=new Set}/**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}/**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */async _send(e,t,i=50/* _TimeoutDuration.ACK */){let n,r;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((o,a)=>{let l=te("",20);s.port1.start();let c=setTimeout(()=>{a(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},i);r={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(c),n=setTimeout(()=>{a(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(n),o(e.data.response);break;default:clearTimeout(c),clearTimeout(n),a(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */function ti(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return void 0!==ti().WorkerGlobalScope&&"function"==typeof ti().importScripts}async function tr(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="firebaseLocalStorageDb",to="firebaseLocalStorage",ta="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tc(e,t){return e.transaction([to],t?"readwrite":"readonly").objectStore(to)}function tu(){let e=indexedDB.open(ts,1);return new Promise((t,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(to,{keyPath:ta})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;i.objectStoreNames.contains(to)?t(i):(// Need to close the database or else you get a `blocked` event
i.close(),await function(){let e=indexedDB.deleteDatabase(ts);return new tl(e).toPromise()}(),t(await tu()))})})}async function th(e,t,i){let n=tc(e,!0).put({[ta]:t,value:i});return new tl(n).toPromise()}async function td(e,t){let i=tc(e,!1).get(t),n=await new tl(i).toPromise();return void 0===n?null:n.value}function tp(e,t){let i=tc(e,!0).delete(t);return new tl(i).toPromise()}class tf{constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await tu()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=e7._getInstance(tn()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let i=await this._poll();return{keyProcessed:i.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await tr(),!this.activeServiceWorker)return;this.sender=new tt(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let i=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await tu();return await th(e,e3,"1"),await tp(e,e3),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>th(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>td(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=tc(e,!1).getAll();return new tl(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],i=new Set;for(let{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function tm(e,t,i){var n,r,s;let o=await i.verify();try{let a;if(v("string"==typeof o,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),v("recaptcha"===i.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a){v("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},S(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,E(e,r)));return i.phoneSessionInfo.sessionInfo}{v("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;v(i,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let r=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:o}},S(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,E(e,s)));return r.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await eL(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{i._reset()}}tf.type="LOCAL",eb("rcb"),new k(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @remarks
 * `PhoneAuthProvider` does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */class tg{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=tg.PROVIDER_ID,this.auth=ey(e)}/**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */verifyPhoneNumber(e,t){return tm(this.auth,e,(0,r.getModularInstance)(t))}/**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */static credential(e,t){return ez._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return tg.credentialFromTaggedObject(e)}/**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */static credentialFromError(e){return tg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?ez._fromTokenResponse(t,i):null}}/** Always set to {@link ProviderId}.PHONE. */tg.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */tg.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends eI{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return eP(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eP(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eP(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function t_(e){return e0(e.auth,new ty(e),e.bypassAuthState)}function tv(e){let{auth:t,user:i}=e;return v(i,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),eZ(i,new ty(e),e.bypassAuthState)}async function tb(e){let{auth:t,user:i}=e;return v(i,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),eQ(i,new ty(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */class tw{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return t_;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return tb;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return tv;default:g(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||b("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||b("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tx=new k(2e3,1e4);/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class tk extends tw{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,tk.currentPopupAction&&tk.currentPopupAction.cancel(),tk.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return v(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||b("Popup operations only handle one event");let e=te();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(y(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tk.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,tx.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
tk.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
let tC=new Map;class tI extends tw{constructor(e,t,i=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,i),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=tC.get(this.auth._key());if(!e){try{let t=await tN(this.resolver,this.auth),i=t?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}tC.set(this.auth._key(),e)}return this.bypassAuthState||tC.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tN(e,t){let i=ee("pendingRedirect",t.config.apiKey,t.name),n=Q(e._redirectPersistence);if(!await n._isAvailable())return!1;let r=await n._get(i)==="true";return await n._remove(i),r}function tT(e,t){tC.set(e._key(),t)}async function tE(e,t,i=!1){let n=ey(e),r=t?Q(t):(v(n._popupRedirectResolver,n,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),n._popupRedirectResolver),s=new tI(n,r,i),o=await s.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class tS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return tP(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!tP(e)){let n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(y(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tR(e))}saveEventToCache(e){this.cachedEventUids.add(tR(e)),this.lastProcessedEventTime=Date.now()}}function tR(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tP({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(e,t={}){return S(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tO=/^https?/;async function tD(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await tA(e);for(let e of t)try{if(function(e){let t=w(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!tO.test(i))return!1;if(tL.test(e))// only contain the IP, no extra character.
return n===e;// Dots in pattern should be escaped.
let r=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(n)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
g(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tM=new k(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function tF(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=ti().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tz=null,tU=new k(5e3,15e3),tW={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tj=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function tq(e){let t=await (tz=tz||new Promise((t,i)=>{var n,r,s;// Function to run when gapi.load is ready.
function o(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
tF(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
tF(),i(y(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:tM.get()})}if(null===(r=null===(n=ti().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(s=ti().gapi)||void 0===s?void 0:s.load)o();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=eb("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
ti()[t]=()=>{gapi.load?o():i(y(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},ev(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>i(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
tz=null,e)})),i=ti().gapi;return v(i,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;v(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let i=t.emulator?C(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:o.SDK_VERSION},s=tj.get(e.config.apiHost);s&&(n.eid=s);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${i}?${(0,r.querystring)(n).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tW,dontclear:!0},t=>new Promise(async(i,n)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let r=y(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),s=ti().setTimeout(()=>{n(r)},tU.get());// Clear timer and resolve pending iframe ready promise.
    function o(){ti().clearTimeout(s),i(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(o).then(o,()=>{n(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tH{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */let tV=encodeURIComponent("fac");async function t$(e,t,i,n,s,a){v(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),v(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let l={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:o.SDK_VERSION,eventId:s};if(t instanceof ej)// TODO set additionalParams from the provider as well?
for(let[i,n]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[i]=n;if(t instanceof eq){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];// Sets the App Check token to pass to the widget
let c=await e._getAppCheckToken(),u=c?`#${tV}=${encodeURIComponent(c)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?C(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,r.querystring)(l).slice(1)}${u}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The special web storage event
 *
 */let tX="webStorageSupport",tK=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e8,this._completeRedirectFn=tE,this._overrideRedirectResult=tT}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,i,n){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||b("_initialize() not called before _openPopup()");let o=await t$(e,t,i,w(),n);return function(e,t,i,n=500,s=600){let o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",c=Object.assign(Object.assign({},tB),{width:n.toString(),height:s.toString(),top:o,left:a}),u=(0,r.getUA)().toLowerCase();i&&(l=es(u)?"_blank":i),en(u)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
c.scrollbars="yes");let h=Object.entries(c).reduce((e,[t,i])=>`${e}${t}=${i},`,"");if(function(e=(0,r.getUA)()){var t;return eu(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==l)return function(e,t){let i=document.createElement("a");i.href=e,i.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}(t||"",l),new tH(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let d=window.open(t||"",l,h);v(d,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{d.focus()}catch(e){}return new tH(d)}(e,o,te())}async _openRedirect(e,t,i,n){await this._originValidation(e);let r=await t$(e,t,i,w(),n);return ti().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(i||b("If manager is not set, promise should be"),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await tq(e),i=new tS(e);return t.register("authEvent",t=>{v(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let n=i.onEvent(t.authEvent);return{status:n?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){let i=this.iframes[e._key()];i.send(tX,{type:tX},i=>{var n;let r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[tX];void 0!==r&&t(!!r),g(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return eh()||er()||eu()}};class tG{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,i);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class tY extends tG{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new tY(e)}/** @internal */_finalizeEnroll(e,t,i){return S(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,E(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return S(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,E(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class tJ extends tG{constructor(e,t,i){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=i}/** @internal */static _fromSecret(e,t){return new tJ(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new tJ(t,e)}/** @internal */async _finalizeEnroll(e,t,i){return v(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),S(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,E(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let i={verificationCode:this.otp};return S(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,E(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class tQ{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,i,n,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=r}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new tQ(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var i;let n=!1;return(tZ(e)||tZ(t))&&(n=!0),n&&(tZ(e)&&(e=(null===(i=this.auth.currentUser)||void 0===i?void 0:i.email)||"unknownuser"),tZ(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function tZ(e){return void 0===e||(null==e?void 0:e.length)===0}var t0="@firebase/auth",t1="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let t2=(0,r.getExperimentalSetting)("authIdTokenMaxAge")||300,t5=null,t3=e=>async t=>{let i=t&&await t.getIdTokenResult(),n=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(n&&n>t2)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let r=null==i?void 0:i.token;t5!==r&&(t5=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */function t4(e=(0,o.getApp)()){let t=(0,o._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */function(e,t){let i=(0,o._getProvider)(e,"auth");if(i.isInitialized()){let e=i.getImmediate(),n=i.getOptions();if((0,r.deepEqual)(n,null!=t?t:{}))return e;g(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let n=i.initialize({options:t});return n}(e,{popupRedirectResolver:tK,persistence:[tf,e9,e8]}),n=(0,r.getExperimentalSetting)("authTokenSyncURL");if(n){let e=t3(n);(0,r.getModularInstance)(i).beforeAuthStateChanged(e,()=>e(i.currentUser)),(0,r.getModularInstance)(i).onIdTokenChanged(t=>e(t),void 0,void 0)}let s=(0,r.getDefaultEmulatorHost)("auth");return s&&/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */function(e,t,i){let n=ey(e);v(n._canInitEmulator,n,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),v(/^https?:\/\//.test(t),n,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let r=!!(null==i?void 0:i.disableWarnings),s=ek(t),{host:o,port:a}=function(e){let t=ek(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};let n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);// Strip out "username:password@".
if(r){let e=r[1];return{host:e,port:eC(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:eC(t)}}}(t),l=null===a?"":`:${a}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(i,`http://${s}`),i}n="Browser"/* ClientPlatform.BROWSER */,(0,o._registerComponent)(new(0,c.Component)("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;v(o&&!o.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:i.name});let l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:ed(n)},c=new eg(i,r,s,l);return function(e,t){let i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(Q);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(c,t),c},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,i)=>{let n=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);n.initialize()})),(0,o._registerComponent)(new(0,c.Component)("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=ey(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new t6(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),(0,o.registerVersion)(t0,t1,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";default:return}}(n)),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
(0,o.registerVersion)(t0,t1,"esm2017")}),s.register("4tSb9",function(t,i){function n(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}e(t.exports,"__rest",function(){return n}),"function"==typeof SuppressedError&&SuppressedError}),s.register("cokon",function(t,i){e(t.exports,"child",function(){return s("eA2L7").child}),e(t.exports,"get",function(){return s("eA2L7").get}),e(t.exports,"getDatabase",function(){return s("eA2L7").getDatabase}),e(t.exports,"ref",function(){return s("eA2L7").ref}),e(t.exports,"set",function(){return s("eA2L7").set}),s("eA2L7")}),s.register("eA2L7",function(t,i){let n,r,o,a,l,c,u,h,d,p,f;e(t.exports,"child",function(){return nb}),e(t.exports,"ref",function(){return nv}),e(t.exports,"set",function(){return nw}),e(t.exports,"get",function(){return nx}),e(t.exports,"getDatabase",function(){return nN});var m,g,y=s("MjY8E"),_=s("6ExWU"),v=s("2xDiJ"),b=s("kZfxc"),w=s("6qd2L");let x="@firebase/database",k="1.0.1",C="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Wraps a DOM Storage object and:
 * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
 * - prefixes names with "firebase:" to avoid collisions with app data.
 *
 * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
 * and one for localStorage.
 *
 */class I{/**
     * @param domStorage_ - The underlying storage object (e.g. localStorage or sessionStorage)
     */constructor(e){this.domStorage_=e,// Use a prefix to avoid collisions with other stuff saved by the app.
this.prefix_="firebase:"}/**
     * @param key - The key to save the value under
     * @param value - The value being stored, or null to remove the key.
     */set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,v.stringify)(t))}/**
     * @returns The value that was stored under this key, or null
     */get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,v.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory storage implementation that matches the API of DOMStorageWrapper
 * (TODO: create interface for both to implement).
 */class N{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,v.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Helper to create a DOMStorageWrapper or else fall back to MemoryStorage.
 * TODO: Once MemoryStorage and DOMStorageWrapper have a shared interface this method annotation should change
 * to reflect this type
 *
 * @param domStorageName - Name of the underlying storage object
 *   (e.g. 'localStorage' or 'sessionStorage').
 * @returns Turning off type information until a common interface is defined.
 */let T=function(e){try{// NOTE: just accessing "localStorage" or "window['localStorage']" may throw a security exception,
// so it must be inside the try/catch.
if("undefined"!=typeof window&&void 0!==window[e]){// Need to test cache. Just because it's here doesn't mean it works
let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new I(t)}}catch(e){}// Failed to create wrapper.  Just return in-memory storage.
// TODO: log?
return new N},E=T("localStorage"),S=T("sessionStorage"),R=new b.Logger("@firebase/database"),P=(f=1,function(){return f++}),A=function(e){let t=(0,v.stringToByteArray)(e),i=new v.Sha1;i.update(t);let n=i.digest();return(0,v.base64).encodeByteArray(n)},L=function(...e){let t="";for(let i=0;i<e.length;i++){let n=e[i];Array.isArray(n)||n&&"object"==typeof n&&// eslint-disable-next-line @typescript-eslint/no-explicit-any
"number"==typeof n.length?t+=L.apply(null,n):"object"==typeof n?t+=(0,v.stringify)(n):t+=n,t+=" "}return t},O=null,D=!0,M=function(e,t){(0,v.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(R.logLevel=b.LogLevel.VERBOSE,O=R.log.bind(R),t&&S.set("logging_enabled",!0)):"function"==typeof e?O=e:(O=null,S.remove("logging_enabled"))},F=function(...e){if(!0===D&&(D=!1,null===O&&!0===S.get("logging_enabled")&&M(!0)),O){let t=L.apply(null,e);O(t)}},z=function(e){return function(...t){F(e,...t)}},U=function(...e){let t="FIREBASE INTERNAL ERROR: "+L(...e);R.error(t)},W=function(...e){let t=`FIREBASE FATAL ERROR: ${L(...e)}`;throw R.error(t),Error(t)},j=function(...e){let t="FIREBASE WARNING: "+L(...e);R.warn(t)},q=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&j("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},B=function(e){return"number"==typeof e&&(e!=e||// NaN
e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},H=function(e){if((0,v.isNodeSdk)()||"complete"===document.readyState)e();else{// Modeled after jQuery. Try DOMContentLoaded and onreadystatechange (which
// fire before onload), but fall back to onload.
let t=!1,i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),// fallback to onload.
window.addEventListener("load",i,!1)):document.attachEvent&&(// IE.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&i()}),// fallback to onload.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.attachEvent("onload",i))}},V="[MIN_NAME]",$="[MAX_NAME]",X=function(e,t){if(e===t)return 0;{if(e===V||t===$)return -1;if(t===V||e===$)return 1;let i=et(e),n=et(t);return null!==i?null!==n?i-n==0?e.length-t.length:i-n:-1:null!==n?1:e<t?-1:1}},K=function(e,t){return e===t?0:e<t?-1:1},G=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+(0,v.stringify)(t))},Y=function(e){if("object"!=typeof e||null===e)return(0,v.stringify)(e);let t=[];// eslint-disable-next-line guard-for-in
for(let i in e)t.push(i);// Export as json, but with the keys sorted.
t.sort();let i="{";for(let n=0;n<t.length;n++)0!==n&&(i+=","),i+=(0,v.stringify)(t[n])+":"+Y(e[t[n]]);return i+"}"},J=function(e,t){let i=e.length;if(i<=t)return[e];let n=[];for(let r=0;r<i;r+=t)r+t>i?n.push(e.substring(r,i)):n.push(e.substring(r,r+t));return n};/**
 * Apply a function to each (key, value) pair in an object or
 * apply a function to each (index, value) pair in an array
 * @param obj - The object or array to iterate over
 * @param fn - The function to apply
 */function Q(e,t){for(let i in e)e.hasOwnProperty(i)&&t(i,e[i])}/**
 * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
 * I made one modification at the end and removed the NaN / Infinity
 * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
 * @param v - A double
 *
 */let Z=function(e){let t,i,n,r,s;(0,v.assert)(!B(e),"Invalid JSON number"),0===e?(i=0,n=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(i=// Normalized
(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,n=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(// Denormalized
i=0,n=Math.round(e/5e-324)));// Pack sign, exponent, fraction
let o=[];for(s=52;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);for(s=11;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},ee=RegExp("^-?(0*)\\d{1,10}$"),et=function(e){if(ee.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},ei=function(e){try{e()}catch(e){// Re-throw exception when it's safe.
setTimeout(()=>{// It used to be that "throw e" would result in a good console error with
// relevant context, but as of Chrome 39, you just get the firebase.js
// file/line number where we re-throw it, which is useless. So we log
// e.stack explicitly.
let t=e.stack||"";throw j("Exception was thrown by user callback.",t),e},Math.floor(0))}},en=function(){let e="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";// For now we whitelist the most popular crawlers.  We should refine this to be the set of crawlers we
// believe to support JavaScript/AJAX rendering.
// NOTE: Google Webmaster Tools doesn't really belong, but their "This is how a visitor to your website
// would have seen the page" is flaky if we don't treat it as a crawler.
return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},er=function(e,t){let i=setTimeout(e,t);return"number"==typeof i&&// @ts-ignore Is only defined in Deno environments.
"undefined"!=typeof Deno&&// @ts-ignore Deno and unrefTimer are only defined in Deno environments.
Deno.unrefTimer?Deno.unrefTimer(i):"object"==typeof i&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Abstraction around AppCheck's token fetching capabilities.
 */class es{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{// Support delayed initialization of FirebaseAppCheck. This allows our
// customers to initialize the RTDB SDK before initializing Firebase
// AppCheck and ensures that all requests are authenticated if a token
// becomes available before the timoeout below expires.
setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){j(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Abstraction around FirebaseApp's token fetching capabilities.
 */class eo{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>// TODO: Need to figure out all the cases this is raised and whether
    // this makes sense.
    e&&"auth/token-not-initialized"===e.code?(F("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,i)=>{// Support delayed initialization of FirebaseAuth. This allows our
// customers to initialize the RTDB SDK before initializing Firebase
// Auth and ensures that all requests are authenticated if a token
// becomes available before the timoeout below expires.
setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',j(e)}}/* AuthTokenProvider that supplies a constant token. Used by Admin SDK or mockUserToken with emulators. */class ea{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){// Invoke the listener immediately to match the behavior in Firebase Auth
// (see packages/auth/src/auth.js#L1807)
e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}/** A string that is treated as an admin access token by the RTDB emulator. Used by Admin SDK. */ea.OWNER="owner";// Matches console.firebase.google.com, firebase-console-*.corp.google.com and
// firebase.corp.google.com
let el=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ec="websocket",eu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A class that holds metadata about a Repo object
 */class eh{/**
     * @param host - Hostname portion of the url for the repo
     * @param secure - Whether or not this repo is accessed over ssl
     * @param namespace - The namespace represented by the repo
     * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
     * @param nodeAdmin - Whether this instance uses Admin SDK credentials
     * @param persistenceKey - Override the default session persistence storage key
     */constructor(e,t,i,n,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=E.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&E.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}/**
 * Returns the websocket URL for this repo
 * @param repoInfo - RepoInfo object
 * @param type - of connection
 * @param params - list
 * @returns The URL for this repo
 */function ed(e,t,i){let n;if((0,v.assert)("string"==typeof t,"typeof type must == string"),(0,v.assert)("object"==typeof i,"typeof params must == object"),t===ec)n=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===eu)n=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(i.ns=e.namespace);let r=[];return Q(i,(e,t)=>{r.push(e+"="+t)}),n+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Tracks a collection of stats.
 */class ep{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,v.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,v.deepCopy)(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef={},em={};function eg(e){let t=e.toString();return ef[t]||(ef[t]=new ep),ef[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * This class ensures the packets from the server arrive in order
 * This class takes data from the server and ensures it gets passed into the callbacks in order.
 */class ey{/**
     * @param onMessage_
     */constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}/**
     * Each message from the server comes with a response number, and an array of data. The responseNumber
     * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
     * browsers will respond in the same order as the requests we sent
     */handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&ei(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// URL query parameters associated with longpolling
let e_="start";/**
 * This class manages a single long-polling connection.
 */class ev{/**
     * @param connId An identifier for this connection, used for logging
     * @param repoInfo The info for the endpoint to send data to.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The AppCheck token for this client.
     * @param authToken The AuthToken to use for this connection.
     * @param transportSessionId Optional transportSessionid if we are
     * reconnecting for an existing transport session
     * @param lastSessionId Optional lastSessionId if the PersistentConnection has
     * already created a connection previously
     */constructor(e,t,i,n,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=z(e),this.stats_=eg(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),ed(t,eu,e))}/**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ey(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),// Make sure we clear the host cache
this.onClosed_(),this.connectTimeoutTimer_=null;// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(3e4)),// Ensure we delay the creation of the iframe until the DOM is loaded.
H(()=>{if(this.isClosed_)return;//Set up a callback that gets triggered once a connection is set up.
this.scriptTagHolder=new eb((...e)=>{let[t,i,n,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===e_)this.id=i,this.password=n;else if("close"===t)i?(// We aren't expecting any more data (other than what the server's already in the process of sending us
// through our already open polls), so don't send any more.
this.scriptTagHolder.sendNewPolls=!1,// arg1 in this case is the last response number sent by the server. We should try to receive
// all of the responses up to this one before closing
this.myPacketOrderer.closeAfter(i,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}// we closed the connection.
},(...e)=>{let[t,i]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,i)},()=>{this.onClosed_()},this.urlFn);//Send the initial request to connect. The serial number is simply to keep the browser from pulling previous results
//from cache.
let e={};e[e_]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&el.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{/* do nothing */})})}/**
     * Call this when a handshake has completed successfully and we want to consider the connection established
     */start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}/**
     * Forces long polling to be considered as a potential transport
     */static forceAllow(){ev.forceAllow_=!0}/**
     * Forces longpolling to not be considered as a potential transport
     */static forceDisallow(){ev.forceDisallow_=!0}// Static method, use string literal so it can be accessed in a generic way
static isAvailable(){return!(0,v.isNodeSdk)()&&(!!ev.forceAllow_||!ev.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}/**
     * No-op for polling
     */markConnectionHealthy(){}/**
     * Stops polling and cleans up the iframe
     */shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}/**
     * Triggered when this transport is closed
     */onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}/**
     * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
     * that we've left.
     */close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}/**
     * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
     * broken into chunks (since URLs have a small maximum length).
     * @param data - The JSON data to transmit.
     */send(e){let t=(0,v.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);//first, lets get the base64-encoded data
let i=(0,v.base64Encode)(t),n=J(i,1840);//Enqueue each segment for transmission. We assign each chunk a sequential ID and a total number
//of segments so that we can reassemble the packet on the server.
for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}/**
     * This is how we notify the server that we're leaving.
     * We aren't able to send requests with DHTML on a window close event, but we can
     * trigger XHR requests in some browsers (everything but Opera basically).
     */addDisconnectPingFrame(e,t){if((0,v.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");let i={};i.dframe="t",i.id=e,i.pw=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}/**
     * Used to track the bytes received by this client
     */incrementIncomingBytes_(e){// TODO: This is an annoying perf hit just to track the number of incoming bytes.  Maybe it should be opt-in.
let t=(0,v.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}/*********************************************************************************************
 * A wrapper around an iframe that is used as a long-polling script holder.
 *********************************************************************************************/class eb{/**
     * @param commandCB - The callback to be called when control commands are recevied from the server.
     * @param onMessageCB - The callback to be triggered when responses arrive from the server.
     * @param onDisconnect - The callback to be triggered when this tag holder is closed
     * @param urlFn - A function that provides the URL of the endpoint to send data to.
     */constructor(e,t,i,n){if(this.onDisconnect=i,this.urlFn=n,//We maintain a count of all of the outstanding requests, because if we have too many active at once it can cause
//problems in some browsers.
this.outstandingRequests=new Set,//A queue of the pending segments waiting for transmission to the server.
this.pendingSegs=[],//A serial number. We use this for two things:
// 1) A way to ensure the browser doesn't cache responses to polls
// 2) A way to make the server aware when long-polls arrive in a different order than we started them. The
//    server needs to release both polls in this case or it will cause problems in Opera since Opera can only execute
//    JSONP code in the order it was added to the iframe.
this.currentSerial=Math.floor(1e8*Math.random()),// This gets set to false when we're "closing down" the connection (e.g. we're switching transports but there's still
// incoming data from the server that we're waiting for).
this.sendNewPolls=!0,(0,v.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{//Each script holder registers a couple of uniquely named callbacks with the window. These are called from the
//iframes where we put the long-polling script tags. We have two callbacks:
//   1) Command Callback - Triggered for control issues, like starting a connection.
//   2) Message Callback - Triggered when new data arrives.
this.uniqueCallbackIdentifier=P(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,//Create an iframe for us to add script tags to.
this.myIFrame=eb.createIFrame_();// Set the iframe's contents.
let i="";// if we set a javascript url, it's IE and we need to set the document domain. The javascript url is sufficient
// for ie9, but ie8 needs to do it again in the document itself.
if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){let e=document.domain;i='<script>document.domain="'+e+'";</script>'}let n="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(n),this.myIFrame.doc.close()}catch(e){F("frame writing exception"),e.stack&&F(e.stack),F(e)}}}/**
     * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
     * actually use.
     */static createIFrame_(){let e=document.createElement("iframe");// This is necessary in order to initialize the document inside the iframe
if(e.style.display="none",document.body){document.body.appendChild(e);try{// If document.domain has been modified in IE, this will throw an error, and we need to set the
// domain of the iframe's document manually. We can do this via a javascript: url as the src attribute
// Also note that we must do this *after* the iframe has been appended to the page. Otherwise it doesn't work.
let t=e.contentWindow.document;t||F("No IE domain setting required")}catch(i){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else // never gets hit.
throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}/**
     * Cancel all outstanding queries and remove the frame.
     */close(){//Mark this iframe as dead, so no new requests are sent.
this.alive=!1,this.myIFrame&&(//We have to actually remove all of the html inside this iframe before removing it from the
//window, or IE will continue loading and executing the script tags we've already added, which
//can lead to some errors being thrown. Setting textContent seems to be the safest way to do this.
this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));// Protect from being called recursively.
let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}/**
     * Actually start the long-polling session by adding the first script tag(s) to the iframe.
     * @param id - The ID of this connection
     * @param pw - The password for this connection
     */startLongPoll(e,t){//send the initial request. If there are requests queued, make sure that we transmit as many as we are currently able to.
for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}/**
     * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
     * too many outstanding requests and we are still alive.
     *
     * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
     * needed.
     */newRequest_(){// We keep one outstanding request open all the time to receive data, but if we need to send data
// (pendingSegs.length > 0) then we create a new request to send the data.  The server will automatically
// close the old request.
if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{//construct our url
this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),i="",n=0;for(;this.pendingSegs.length>0;){//first, lets see if the next segment will fit.
let e=this.pendingSegs[0];if(e.d.length+30+i.length<=1870){//great, the segment will fit. Lets append it.
let e=this.pendingSegs.shift();i=i+"&seg"+n+"="+e.seg+"&ts"+n+"="+e.ts+"&d"+n+"="+e.d,n++}else break}return t+=i,this.addLongPollTag_(t,this.currentSerial),!0}}/**
     * Queue a packet for transmission to the server.
     * @param segnum - A sequential id for this packet segment used for reassembly
     * @param totalsegs - The total number of segments in this packet
     * @param data - The data for this segment.
     */enqueueSegment(e,t,i){//add this to the queue of segments to send.
this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}/**
     * Add a script tag for a regular long-poll request.
     * @param url - The URL of the script tag.
     * @param serial - The serial number of the request.
     */addLongPollTag_(e,t){//remember that we sent this request.
this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(i,Math.floor(25e3));this.addTag(e,()=>{// Request completed.  Cancel the keepalive.
clearTimeout(n),// Trigger a new request so we can continue receiving data.
i()})}/**
     * Add an arbitrary script tag to the iframe.
     * @param url - The URL for the script tag source.
     * @param loadCB - A callback to be triggered once the script has loaded.
     */addTag(e,t){(0,v.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{// if we're already closed, don't add this poll
if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,// eslint-disable-next-line @typescript-eslint/no-explicit-any
i.onload=i.onreadystatechange=function(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
let e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(// eslint-disable-next-line @typescript-eslint/no-explicit-any
i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{F("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(e){// TODO: we should make this error visible somehow
}},Math.floor(1))}}let ew=null;"undefined"!=typeof MozWebSocket?ew=MozWebSocket:"undefined"!=typeof WebSocket&&(ew=WebSocket);/**
 * Create a new websocket connection with the given callbacks.
 */class ex{/**
     * @param connId identifier for this transport
     * @param repoInfo The info for the websocket endpoint.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The App Check Token for this client.
     * @param authToken The Auth Token for this client.
     * @param transportSessionId Optional transportSessionId if this is connecting
     * to an existing transport session
     * @param lastSessionId Optional lastSessionId if there was a previous
     * connection
     */constructor(e,t,i,n,r,s,o){this.connId=e,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=z(this.connId),this.stats_=eg(t),this.connURL=ex.connectionURL_(t,s,o,n,i),this.nodeAdmin=t.nodeAdmin}/**
     * @param repoInfo - The info for the websocket endpoint.
     * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
     *                                         session
     * @param lastSessionId - Optional lastSessionId if there was a previous connection
     * @returns connection url
     */static connectionURL_(e,t,i,n,r){let s={};return s.v="5",!(0,v.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&el.test(location.hostname)&&(s.r="f"),t&&(s.s=t),i&&(s.ls=i),n&&(s.ac=n),r&&(s.p=r),ed(e,ec,s)}/**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,// Assume failure until proven otherwise.
E.set("previous_websocket_failure",!0);try{let e;if((0,v.isNodeSdk)()){let t=this.nodeAdmin?"AdminNode":"Node";// UA Format: Firebase/<wire_protocol>/<sdk_version>/<platform>/<device>
e={headers:{"User-Agent":`Firebase/5/${C}/${w.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);// Plumb appropriate http_proxy environment variable into faye-websocket if it exists.
let i={},n=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;n&&(e.proxy={origin:n})}this.mySock=new ew(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");// eslint-disable-next-line @typescript-eslint/no-explicit-any
let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}/**
     * No-op for websockets, we don't need to do anything once the connection is confirmed as open
     */start(){}static forceDisallow(){ex.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==ew&&!ex.forceDisallow_}/**
     * Returns true if we previously failed to connect with this transport.
     */static previouslyFailed(){// If our persistent storage is actually only in-memory storage,
// we default to assuming that it previously failed to be safe.
return E.isInMemoryStorage||!0===E.get("previous_websocket_failure")}markConnectionHealthy(){E.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=(0,v.jsonEval)(e);//handle the message
this.onMessage(t)}}/**
     * @param frameCount - The number of frames we are expecting from the server
     */handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}/**
     * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
     * @returns Any remaining data to be process, or null if there is none
     */extractFrameCount_(e){// TODO: The server is only supposed to send up to 9999 frames (i.e. length <= 4), but that isn't being enforced
// currently.  So allowing larger frame counts (length <= 6).  See https://app.asana.com/0/search/8688598998380/8237608042508
if((0,v.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}/**
     * Process a websocket frame that has arrived from the server.
     * @param mess - The frame data
     */handleIncomingFrame(e){if(null===this.mySock)return;// Chrome apparently delivers incoming packets even after we .close() the connection sometimes.
let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{// try to parse out a frame count, otherwise, assume 1 and process it
let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}/**
     * Send a message to the server
     * @param data - The JSON object to transmit
     */send(e){this.resetKeepAlive();let t=(0,v.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);//We can only fit a certain amount in each websocket frame, so we need to split this request
//up into multiple pieces if it doesn't fit in one request.
let i=J(t,16384);i.length>1&&this.sendString_(String(i.length));//Send the actual data in segments.
for(let e=0;e<i.length;e++)this.sendString_(i[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}/**
     * External-facing close handler.
     * Close the websocket and kill the connection.
     */close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}/**
     * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
     * the last activity.
     */resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive();// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(45e3))}/**
     * Send a string over the websocket.
     *
     * @param str - String to send.
     */sendString_(e){// Firefox seems to sometimes throw exceptions (NS_ERROR_UNEXPECTED) from websocket .send()
// calls for some unknown reason.  We treat these as an error and disconnect.
// See https://app.asana.com/0/58926111402292/68021340250410
try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}/**
 * Number of response before we consider the connection "healthy."
 */ex.responsesRequiredToBeHealthy=2,/**
 * Time to wait for the connection te become healthy before giving up.
 */ex.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Currently simplistic, this class manages what transport a Connection should use at various stages of its
 * lifecycle.
 *
 * It starts with longpolling in a browser, and httppolling on node. It then upgrades to websockets if
 * they are available.
 */class ek{/**
     * @param repoInfo - Metadata around the namespace we're connecting to
     */constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ev,ex]}/**
     * Returns whether transport has been selected to ensure WebSocketConnection or BrowserPollConnection are not called after
     * TransportManager has already set up transports_
     */static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=ex&&ex.isAvailable(),i=t&&!ex.previouslyFailed();if(e.webSocketOnly&&(t||j("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ex];else{let e=this.transports_=[];for(let t of ek.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ek.globalTransportInitialized_=!0}}/**
     * @returns The constructor for the initial transport to use
     */initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}/**
     * @returns The constructor for the next transport, or null
     */upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}// Keeps track of whether the TransportManager has already chosen a transport to use
ek.globalTransportInitialized_=!1;/**
 * Creates a new real-time connection to the server using whichever method works
 * best in the current browser.
 */class eC{/**
     * @param id - an id for this connection
     * @param repoInfo_ - the info for the endpoint to connect to
     * @param applicationId_ - the Firebase App ID for this project
     * @param appCheckToken_ - The App Check Token for this device.
     * @param authToken_ - The auth token for this session.
     * @param onMessage_ - the callback to be triggered when a server-push message arrives
     * @param onReady_ - the callback to be triggered when this connection is ready to send messages.
     * @param onDisconnect_ - the callback to be triggered when a connection was lost
     * @param onKill_ - the callback to be triggered when this connection has permanently shut down.
     * @param lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
     */constructor(e,t,i,n,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0/* RealtimeState.CONNECTING */,this.log_=z("c:"+this.id+":"),this.transportManager_=new ek(t),this.log_("Connection created"),this.start_()}/**
     * Starts a connection attempt
     */start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),// For certain transports (WebSockets), we need to send and receive several messages back and forth before we
// can consider the transport healthy.
this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,/*
         * Firefox doesn't like when code from one iframe tries to create another iframe by way of the parent frame.
         * This can occur in the case of a redirect, i.e. we guessed wrong on what server to connect to and received a reset.
         * Somehow, setTimeout seems to make this ok. That doesn't make sense from a security perspective, since you should
         * still have the context of your originating frame.
         */setTimeout(()=>{// this.conn_ gets set to null in some of the tests. Check to make sure it still exists before using it
this.conn_&&this.conn_.open(t,i)},Math.floor(0));let n=e.healthyTimeout||0;n>0&&(this.healthyTimeout_=er(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()));// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2/* RealtimeState.DISCONNECTED */!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}/**
     * @param dataMsg - An arbitrary data message to be sent to the server
     */sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(// Most likely the session wasn't valid. Abandon the switch attempt
this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=G("t",e),i=G("d",e);if("c"===t)this.onSecondaryControl_(i);else if("d"===t)this.pendingDataMessages.push(i);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(// Send a ping to make sure the connection is healthy.
this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){// tell this connection to consider itself open
this.secondaryConn_.start(),// send ack
this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),// send end packet on primary transport, switch to sending on this one
// can receive on this one, buffer responses until end received on primary transport
this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){// Must refer to parsedData properties in quotes, so closure doesn't touch them.
let t=G("t",e),i=G("d",e);"c"===t?this.onControl_(i):"d"===t&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),// We don't do anything with data messages, just kick them up a level
this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=G("t",e);if("d"in e){let i=e.d;if("h"===t){let e=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?// payload in this case is the reason for the shutdown. Generally a human-readable error
this.onConnectionShutdown_(i):"r"===t?this.onReset_(i):"e"===t?U("Server Error: "+i):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):U("Unknown control packet command: "+t)}}/**
     * @param handshake - The handshake data returned from the server
     */onHandshake_(e){let t=e.ts,i=e.v,n=e.h;this.sessionId=e.s,this.repoInfo_.host=n,0/* RealtimeState.CONNECTING */===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==i&&j("Protocol version mismatch detected"),// TODO: do we want to upgrade? when? maybe a delay?
this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),// For certain transports (WebSockets), we need to send and receive several messages back and forth before we
// can consider the transport healthy.
this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),// If we haven't successfully upgraded after UPGRADE_TIMEOUT, give up and kill the secondary.
er(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1/* RealtimeState.CONNECTED */===this.state_?this.close():(// Close whatever connections we have open and start again.
this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1/* RealtimeState.CONNECTED */,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):er(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1/* RealtimeState.CONNECTED */!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}/**
     * @param everConnected - Whether or not the connection ever reached a server. Used to determine if
     * we should flush the host cache
     */onConnectionLost_(e){this.conn_=null,e||0/* RealtimeState.CONNECTING */!==this.state_?1/* RealtimeState.CONNECTED */===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(E.remove("host:"+this.repoInfo_.host),// reset the internal host to what we would show the user, i.e. <ns>.firebaseio.com
this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),// We intentionally don't want to fire onDisconnect (kill is a different case),
// so clear the callback.
this.onDisconnect_=null,this.close()}sendData_(e){if(1/* RealtimeState.CONNECTED */!==this.state_)throw"Connection is not connected";this.tx_.send(e)}/**
     * Cleans up this connection, calling the appropriate callbacks
     */close(){2/* RealtimeState.DISCONNECTED */!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2/* RealtimeState.DISCONNECTED */,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface defining the set of actions that can be performed against the Firebase server
 * (basically corresponds to our wire protocol).
 *
 * @interface
 */class eI{put(e,t,i,n){}merge(e,t,i,n){}/**
     * Refreshes the auth token for the current connection.
     * @param token - The authentication token
     */refreshAuthToken(e){}/**
     * Refreshes the app check token for the current connection.
     * @param token The app check token
     */refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Base class to be used if you want to emit events. Call the constructor with
 * the set of allowed event names.
 */class eN{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,v.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}/**
     * To be called by derived classes to trigger events.
     */trigger(e,...t){if(Array.isArray(this.listeners_[e])){// Clone the list, since callbacks could add/remove listeners.
let i=[...this.listeners_[e]];for(let e=0;e<i.length;e++)i[e].callback.apply(i[e].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let n=this.getInitialEvent(e);n&&t.apply(i,n)}off(e,t,i){this.validateEventType_(e);let n=this.listeners_[e]||[];for(let e=0;e<n.length;e++)if(n[e].callback===t&&(!i||i===n[e].context)){n.splice(e,1);return}}validateEventType_(e){(0,v.assert)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Monitors online state (as reported by window.online/offline events).
 *
 * The expectation is that this could have many false positives (thinks we are online
 * when we're not), but no false negatives.  So we can safely use it to determine when
 * we definitely cannot reach the internet.
 */class eT extends eN{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,v.isMobileCordova)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new eT}getInitialEvent(e){return(0,v.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * An immutable object representing a parsed path.  It's immutable so that you
 * can pass them around to other functions without worrying about them changing
 * it.
 */class eE{/**
     * @param pathOrString - Path string to parse, or another path, or the raw
     * tokens array
     */constructor(e,t){if(void 0===t){this.pieces_=e.split("/");// Remove empty pieces.
let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function eS(){return new eE("")}function eR(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}/**
 * @returns The number of segments in this path
 */function eP(e){return e.pieces_.length-e.pieceNum_}function eA(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new eE(e.pieces_,t)}function eL(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}/**
 * Shallow copy of the parts of the path.
 *
 */function eO(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function eD(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let i=e.pieceNum_;i<e.pieces_.length-1;i++)t.push(e.pieces_[i]);return new eE(t,0)}function eM(e,t){let i=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)i.push(e.pieces_[t]);if(t instanceof eE)for(let e=t.pieceNum_;e<t.pieces_.length;e++)i.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&i.push(e[t])}return new eE(i,0)}/**
 * @returns True if there are no segments in this path
 */function eF(e){return e.pieceNum_>=e.pieces_.length}/**
 * @returns The path from outerPath to innerPath
 */function ez(e,t){let i=eR(e),n=eR(t);if(null===i)return t;if(i===n)return ez(eA(e),eA(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}/**
 * @returns true if paths are the same.
 */function eU(e,t){if(eP(e)!==eP(t))return!1;for(let i=e.pieceNum_,n=t.pieceNum_;i<=e.pieces_.length;i++,n++)if(e.pieces_[i]!==t.pieces_[n])return!1;return!0}/**
 * @returns True if this path is a parent of (or the same as) other
 */function eW(e,t){let i=e.pieceNum_,n=t.pieceNum_;if(eP(e)>eP(t))return!1;for(;i<e.pieces_.length;){if(e.pieces_[i]!==t.pieces_[n])return!1;++i,++n}return!0}/**
 * Dynamic (mutable) path used to count path lengths.
 *
 * This class is used to efficiently check paths for valid
 * length (in UTF8 bytes) and depth (used in path validation).
 *
 * Throws Error exception if path is ever invalid.
 *
 * The definition of a path always begins with '/'.
 */class ej{/**
     * @param path - Initial Path.
     * @param errorPrefix_ - Prefix for any error messages.
     */constructor(e,t){this.errorPrefix_=t,this.parts_=eO(e,0),/** Initialize to number of '/' chars needed in path. */this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,v.stringLength)(this.parts_[e]);eq(this)}}function eq(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+eB(e))}/**
 * String for use in error messages - uses '.' notation for path.
 */function eB(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH extends eN{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(// Opera 12.10 and Firefox 18 and later support
t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),// Initially, we always assume we are visible. This ensures that in browsers
// without page visibility support or in cases where we are never visible
// (e.g. chrome extension), we act as if we are visible, i.e. don't delay
// reconnects
this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new eH}getInitialEvent(e){return(0,v.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}/**
 * Firebase connection.  Abstracts wire protocol and handles reconnecting.
 *
 * NOTE: All JSON objects sent to the realtime connection must have property names enclosed
 * in quotes to make sure the closure compiler does not minify them.
 */class eV extends eI{/**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param applicationId_ - The Firebase App ID for this project
     * @param onDataUpdate_ - A callback for new data from the server
     */constructor(e,t,i,n,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,// Used for diagnostic logging.
this.id=eV.nextPersistentConnectionId_++,this.log_=z("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,// Before we get connected, we keep a queue of pending messages to send.
this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,v.isNodeSdk)())throw Error("Auth override specified in options, but not supported on non Node.js platforms");eH.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&eT.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let n=++this.requestNumber_,r={r:n,a:e,b:t};this.log_((0,v.stringify)(r)),(0,v.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[n]=i)}get(e){this.initConnection_();let t=new v.Deferred,i={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:i,onComplete:e=>{let i=e.d;"ok"===e.s?t.resolve(i):t.reject(i)}}),this.outstandingGetCount_++;let n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),t.promise}listen(e,t,i,n){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),(0,v.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,v.assert)(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:n,hashFn:t,query:e,tag:i};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+i+" for "+n);let r={p:i};e.tag&&(r.q=t._queryObject,r.t=e.tag),r./*hash*/h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r./*data*/d,o=r./*status*/s;// print warnings in any case...
eV.warnOnListenWarnings_(s,t);let a=this.listens.get(i)&&this.listens.get(i).get(n);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(i,n),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,v.contains)(e,"w")){// eslint-disable-next-line @typescript-eslint/no-explicit-any
let i=(0,v.safeGet)(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();j(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){// NOTE: This isn't intended to be bulletproof (a malicious developer can always just modify the client).
// Additionally, we don't bother resetting the max delay back to the default if auth fails / expires.
let t=e&&40===e.length;(t||(0,v.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}/**
     * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
     * a auth revoked (the connection is closed).
     */tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=(0,v.isValidFormat)(e)?"auth":"gauth",i={cred:e};null===this.authOverride_?i.noauth=!0:"object"==typeof this.authOverride_&&(i.authvar=this.authOverride_),this.sendRequest(t,i,t=>{let i=t./*status*/s,n=t./*data*/d||"error";this.authToken_===e&&("ok"===i?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,n))})}}/**
     * Attempts to authenticate with the given token. If the authentication
     * attempt fails, it's triggered like the token was revoked (the connection is
     * closed).
     */tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e./*status*/s,i=e./*data*/d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}/**
     * @inheritDoc
     */unlisten(e,t){let i=e._path.toString(),n=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+n),(0,v.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");let r=this.removeListen_(i,n);r&&this.connected_&&this.sendUnlisten_(i,n,e._queryObject,t)}sendUnlisten_(e,t,i,n){this.log_("Unlisten on "+e+" for "+t);let r={p:e};n&&(r.q=i,r.t=n),this.sendRequest("n",r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,n){let r={p:t,/*data*/d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{n&&setTimeout(()=>{n(e./*status*/s,e./* data */d)},Math.floor(0))})}put(e,t,i,n){this.putInternal("p",e,t,i,n)}merge(e,t,i,n){this.putInternal("m",e,t,i,n)}putInternal(e,t,i,n,r){this.initConnection_();let s={/*path*/p:t,/*data*/d:i};void 0!==r&&(s./*hash*/h=r),// TODO: Only keep track of the most recent put for a given path?
this.outstandingPuts_.push({action:e,request:s,onComplete:n}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,n=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),n&&n(i./*status*/s,i./* data */d)})}reportStats(e){// If we're not connected, we just drop the stats.
if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest(/*stats*/"s",t,e=>{let t=e./*status*/s;if("ok"!==t){let t=e./* data */d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){// this is a response
this.log_("from server: "+(0,v.stringify)(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e./*body*/b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t./*path*/p,t./*data*/d,/*isMerge*/!1,t.t):"m"===e?this.onDataUpdate_(t./*path*/p,t./*data*/d,/*isMerge=*/!0,t.t):"c"===e?this.onListenRevoked_(t./*path*/p,t./*query*/q):"ac"===e?this.onAuthRevoked_(t./*status code*/s,t./* explanation */d):"apc"===e?this.onAppCheckRevoked_(t./*status code*/s,t./* explanation */d):"sd"===e?this.onSecurityDebugPacket_(t):U("Unrecognized action received from server: "+(0,v.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,v.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),// NOTE: Even when timeout is 0, it's important to do a setTimeout to work around an infuriating "Security Error" in
// Firefox when trying to write to our long-polling iframe in some scenarios (e.g. Forge or our unit tests).
this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_();// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,// Since we don't know if our sent transactions succeeded or not, we need to cancel them.
this.cancelSentTransactions_(),// Clear out the pending requests.
this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){// If we've been connected long enough, reset reconnect delay to minimum.
let e=new Date().getTime()-this.lastConnectionEstablishedTime_;e>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),// Adjust reconnect delay for next time.
this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+eV.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,i())};this.realtime_={close:a,sendRequest:function(e){(0,v.assert)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{// First fetch auth and app check token, and establish connection after
// fetching the token was successful
let[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?F("getToken() completed but was canceled"):(F("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new eC(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,/* onKill= */e=>{j(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&// But getToken() may also just have temporarily failed, so we still want to
// continue retrying.
j(e),a())}}}interrupt(e){F("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){F("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,v.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&/*hash*/"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;i=t?t.map(e=>Y(e)).join("$"):"default";let n=this.removeListen_(e,i);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(e,t){let i;let n=new eE(e).toString();// normalize path.
if(this.listens.has(n)){let e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){F("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(// We'll wait a couple times before logging the warning / increasing the
// retry period since oauth tokens will report as "invalid" if they're
// just expired. Plus there may be transient issues that resolve themselves.
this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(// Set a long reconnect delay because recovery is unlikely
this.reconnectDelay_=3e4,// Notify the auth token provider that the token is invalid, which will log
// a warning
this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){F("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(// We'll wait a couple times before logging the warning / increasing the
// retry period since oauth tokens will report as "invalid" if they're
// just expired. Plus there may be transient issues that resolve themselves.
this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){// Puts depend on having received the corresponding data update from the server before they complete, so we must
// make sure to send listens before puts.
for(let e of(//Re-authenticate ourselves if we have a credential stored.
this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}/**
     * Sends client stats for first connection
     */sendConnectStats_(){let e={},t="js";(0,v.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+C.replace(/\./g,"-")]=1,(0,v.isMobileCordova)()?e["framework.cordova"]=1:(0,v.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=eT.getInstance().currentlyOnline();return(0,v.isEmpty)(this.interruptReasons_)&&e}}eV.nextPersistentConnectionId_=0,/**
 * Counter for number of connections created. Mainly used for tagging in the logs
 */eV.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new e$(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eX{/**
     * @returns A standalone comparison function for
     * this index
     */getCompare(){return this.compare.bind(this)}/**
     * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
     * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
     *
     *
     * @returns True if the portion of the snapshot being indexed changed between oldNode and newNode
     */indexedValueChanged(e,t){let i=new e$(V,e),n=new e$(V,t);return 0!==this.compare(i,n)}/**
     * @returns a node wrapper that will sort equal to or less than
     * any other node wrapper, using this index
     */minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return e$.MIN}}class eK extends eX{static get __EMPTY_NODE(){return n}static set __EMPTY_NODE(e){n=e}compare(e,t){return X(e.name,t.name)}isDefinedOn(e){// We could probably return true here (since every node has a key), but it's never called
// so just leaving unimplemented for now.
throw(0,v.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1;// The key for a node never changes.
}minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return e$.MIN}maxPost(){// TODO: This should really be created once and cached in a static property, but
// NamedNode isn't defined yet, so I can't use it in a static.  Bleh.
return new e$($,n)}makePost(e,t){// We just use empty node, but it'll never be compared, since our comparator only looks at name.
return(0,v.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new e$(e,n)}/**
     * @returns String representation for inclusion in a query spec
     */toString(){return".key"}}let eG=new eK;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An iterator over an LLRBNode.
 */class eY{/**
     * @param node - Node to iterate.
     * @param isReverse_ - Whether or not to iterate in reverse
     */constructor(e,t,i,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,n&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){// This node is exactly equal to our start key. Push it on the stack, but stop iterating;
this.nodeStack_.push(e);break}else // This node is greater than our start key, add it to the stack and move to the next one
this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}/**
 * Represents a node in a Left-leaning Red-Black tree.
 */class eJ{/**
     * @param key - Key associated with this node.
     * @param value - Value associated with this node.
     * @param color - Whether this node is red.
     * @param left - Left child.
     * @param right - Right child.
     */constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:eJ.RED,this.left=null!=n?n:eQ.EMPTY_NODE,this.right=null!=r?r:eQ.EMPTY_NODE}/**
     * Returns a copy of the current node, optionally replacing pieces of it.
     *
     * @param key - New key for the node, or null.
     * @param value - New value for the node, or null.
     * @param color - New color for the node, or null.
     * @param left - New left child for the node, or null.
     * @param right - New right child for the node, or null.
     * @returns The node copy.
     */copy(e,t,i,n,r){return new eJ(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}/**
     * @returns The total number of nodes in the tree.
     */count(){return this.left.count()+1+this.right.count()}/**
     * @returns True if the tree is empty.
     */isEmpty(){return!1}/**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     *   node.  If it returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}/**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}/**
     * @returns The minimum node in the tree.
     */min_(){return this.left.isEmpty()?this:this.left.min_()}/**
     * @returns The maximum key in the tree.
     */minKey(){return this.min_().key}/**
     * @returns The maximum key in the tree.
     */maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}/**
     * @param key - Key to insert.
     * @param value - Value to insert.
     * @param comparator - Comparator.
     * @returns New tree, with the key/value added.
     */insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp_()}/**
     * @returns New tree, with the minimum key removed.
     */removeMin_(){if(this.left.isEmpty())return eQ.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}/**
     * @param key - The key of the item to remove.
     * @param comparator - Comparator.
     * @returns New tree, with the specified item removed.
     */remove(e,t){let i,n;if(i=this,0>t(e,i.key))i.left.isEmpty()||i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),i.right.isEmpty()||i.right.isRed_()||i.right.left.isRed_()||(i=i.moveRedRight_()),0===t(e,i.key)){if(i.right.isEmpty())return eQ.EMPTY_NODE;n=i.right.min_(),i=i.copy(n.key,n.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}/**
     * @returns Whether this is a RED node.
     */isRed_(){return this.color}/**
     * @returns New tree after performing any needed rotations.
     */fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}/**
     * @returns New tree, after moveRedLeft.
     */moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}/**
     * @returns New tree, after moveRedRight.
     */moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}/**
     * @returns New tree, after rotateLeft.
     */rotateLeft_(){let e=this.copy(null,null,eJ.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}/**
     * @returns New tree, after rotateRight.
     */rotateRight_(){let e=this.copy(null,null,eJ.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}/**
     * @returns Newt ree, after colorFlip.
     */colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}/**
     * For testing.
     *
     * @returns True if all is well.
     */checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}eJ.RED=!0,eJ.BLACK=!1;/**
 * An immutable sorted map implementation, based on a Left-leaning Red-Black
 * tree.
 */class eQ{/**
     * @param comparator_ - Key comparator.
     * @param root_ - Optional root node for the map.
     */constructor(e,t=eQ.EMPTY_NODE){this.comparator_=e,this.root_=t}/**
     * Returns a copy of the map, with the specified key/value added or replaced.
     * (TODO: We should perhaps rename this method to 'put')
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @returns New map, with item added.
     */insert(e,t){return new eQ(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,eJ.BLACK,null,null))}/**
     * Returns a copy of the map, with the specified key removed.
     *
     * @param key - The key to remove.
     * @returns New map, with item removed.
     */remove(e){return new eQ(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,eJ.BLACK,null,null))}/**
     * Returns the value of the node with the given key, or null.
     *
     * @param key - The key to look up.
     * @returns The value of the node with the given key, or null if the
     * key doesn't exist.
     */get(e){let t;let i=this.root_;for(;!i.isEmpty();){if(0===(t=this.comparator_(e,i.key)))return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}/**
     * Returns the key of the item *before* the specified key, or null if key is the first item.
     * @param key - The key to find the predecessor of
     * @returns The predecessor key.
     */getPredecessorKey(e){let t,i=this.root_,n=null;for(;!i.isEmpty();){if(0===(t=this.comparator_(e,i.key))){if(i.left.isEmpty()){if(n)return n.key;// first item.
return null}for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}t<0?i=i.left:t>0&&(n=i,i=i.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}/**
     * @returns True if the map is empty.
     */isEmpty(){return this.root_.isEmpty()}/**
     * @returns The total number of nodes in the map.
     */count(){return this.root_.count()}/**
     * @returns The minimum key in the map.
     */minKey(){return this.root_.minKey()}/**
     * @returns The maximum key in the map.
     */maxKey(){return this.root_.maxKey()}/**
     * Traverses the map in key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */inorderTraversal(e){return this.root_.inorderTraversal(e)}/**
     * Traverses the map in reverse key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns True if the traversal was aborted.
     */reverseTraversal(e){return this.root_.reverseTraversal(e)}/**
     * Returns an iterator over the SortedMap.
     * @returns The iterator.
     */getIterator(e){return new eY(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new eY(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new eY(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new eY(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eZ(e,t){return X(e.name,t.name)}function e0(e,t){return X(e,t)}/**
 * Always use the same empty node, to reduce memory.
 */eQ.EMPTY_NODE=new /**
 * Represents an empty node (a leaf node in the Red-Black Tree).
 */class{/**
     * Returns a copy of the current node.
     *
     * @returns The node copy.
     */copy(e,t,i,n,r){return this}/**
     * Returns a copy of the tree, with the specified key/value added.
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @param comparator - Comparator.
     * @returns New tree, with item added.
     */insert(e,t,i){return new eJ(e,t,null)}/**
     * Returns a copy of the tree, with the specified key removed.
     *
     * @param key - The key to remove.
     * @param comparator - Comparator.
     * @returns New tree, with item removed.
     */remove(e,t){return this}/**
     * @returns The total number of nodes in the tree.
     */count(){return 0}/**
     * @returns True if the tree is empty.
     */isEmpty(){return!0}/**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */inorderTraversal(e){return!1}/**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}/**
     * @returns Whether this node is red.
     */isRed_(){return!1}};let e1=function(e){return"number"==typeof e?"number:"+Z(e):"string:"+e},e6=function(e){if(e.isLeafNode()){let t=e.val();(0,v.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,v.contains)(t,".sv"),"Priority must be a string or number.")}else(0,v.assert)(e===r||e.isEmpty(),"priority of unexpected type.");// Don't call getPriority() on MAX_NODE to avoid hitting assertion.
(0,v.assert)(e===r||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
 * implements Node and stores the value of the node (a string,
 * number, or boolean) accessible via getValue().
 */class e2{/**
     * @param value_ - The value to store in this leaf node. The object type is
     * possible in the event of a deferred value
     * @param priorityNode_ - The priority of this node.
     */constructor(e,t=e2.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,v.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),e6(this.priorityNode_)}static set __childrenNodeConstructor(e){o=e}static get __childrenNodeConstructor(){return o}/** @inheritDoc */isLeafNode(){return!0}/** @inheritDoc */getPriority(){return this.priorityNode_}/** @inheritDoc */updatePriority(e){return new e2(this.value_,e)}/** @inheritDoc */getImmediateChild(e){return(// Hack to treat priority as a regular child
".priority"===e?this.priorityNode_:e2.__childrenNodeConstructor.EMPTY_NODE)}/** @inheritDoc */getChild(e){return eF(e)?this:".priority"===eR(e)?this.priorityNode_:e2.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}/** @inheritDoc */getPredecessorChildName(e,t){return null}/** @inheritDoc */updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:e2.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}/** @inheritDoc */updateChild(e,t){let i=eR(e);return null===i?t:t.isEmpty()&&".priority"!==i?this:((0,v.assert)(".priority"!==i||1===eP(e),".priority must be the last token in a path"),this.updateImmediateChild(i,e2.__childrenNodeConstructor.EMPTY_NODE.updateChild(eA(e),t)))}/** @inheritDoc */isEmpty(){return!1}/** @inheritDoc */numChildren(){return 0}/** @inheritDoc */forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}/** @inheritDoc */hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+e1(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=Z(this.value_):e+=this.value_,this.lazyHash_=A(e)}return this.lazyHash_}/**
     * Returns the value of the leaf node.
     * @returns The value of the node.
     */getValue(){return this.value_}compareTo(e){return e===e2.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof e2.__childrenNodeConstructor?-1:((0,v.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}/**
     * Comparison specifically for two leaf nodes
     */compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,n=e2.VALUE_TYPE_ORDER.indexOf(t),r=e2.VALUE_TYPE_ORDER.indexOf(i);return((0,v.assert)(n>=0,"Unknown leaf type: "+t),(0,v.assert)(r>=0,"Unknown leaf type: "+i),n!==r)?r-n:// Same type, compare values
"object"===i?0:// Note that this works because true > false, all others are number or string comparisons
this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}/**
 * The sort order for comparing leaf nodes of different types. If two leaf nodes have
 * the same type, the comparison falls back to their value
 */e2.VALUE_TYPE_ORDER=["object","boolean","number","string"];let e5=new class extends eX{compare(e,t){let i=e.node.getPriority(),n=t.node.getPriority(),r=i.compareTo(n);return 0===r?X(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return e$.MIN}maxPost(){return new e$($,new e2("[PRIORITY-POST]",l))}makePost(e,t){let i=a(e);return new e$(t,new e2("[PRIORITY-POST]",i))}/**
     * @returns String representation for inclusion in a query spec
     */toString(){return".priority"}},e3=Math.log(2);class e4{constructor(e){this.count=parseInt(Math.log(e+1)/e3,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){//noinspection JSBitwiseOperatorUsage
let e=!(this.bits_&1<<this.current_);return this.current_--,e}}/**
 * Takes a list of child nodes and constructs a SortedSet using the given comparison
 * function
 *
 * Uses the algorithm described in the paper linked here:
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
 *
 * @param childList - Unsorted list of children
 * @param cmp - The comparison method to be used
 * @param keyFn - An optional function to extract K from a node wrapper, if K's
 * type is not NamedNode
 * @param mapSortFn - An optional override for comparator used by the generated sorted map
 */let e9=function(e,t,i,n){e.sort(t);let r=function(t,n){let s,o;let a=n-t;if(0===a)return null;if(1===a)return s=e[t],o=i?i(s):s,new eJ(o,s.node,eJ.BLACK,null,null);{// eslint-disable-next-line @typescript-eslint/no-explicit-any
let l=parseInt(a/2,10)+t,c=r(t,l),u=r(l+1,n);return s=e[l],o=i?i(s):s,new eJ(o,s.node,eJ.BLACK,c,u)}},s=new e4(e.length),o=function(t){let n=null,s=null,o=e.length,a=function(t,n){let s=o-t,a=o;o-=t;let c=r(s+1,a),u=e[s],h=i?i(u):u;l(new eJ(h,u.node,n,null,c))},l=function(e){n?n.left=e:s=e,n=e};for(let e=0;e<t.count;++e){let i=t.nextBitIsOne(),n=Math.pow(2,t.count-(e+1));i?a(n,eJ.BLACK):(// current == 2
a(n,eJ.BLACK),a(n,eJ.RED))}return s}(s);// eslint-disable-next-line @typescript-eslint/no-explicit-any
return new eQ(n||t,o)},e8={};class e7{constructor(e,t){this.indexes_=e,this.indexSet_=t}/**
     * The default IndexMap for nodes without a priority
     */static get Default(){return(0,v.assert)(e8&&e5,"ChildrenNode.ts has not been loaded"),c=c||new e7({".priority":e8},{".priority":e5})}get(e){let t=(0,v.safeGet)(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof eQ?t:null}hasIndex(e){return(0,v.contains)(this.indexSet_,e.toString())}addIndex(e,t){let i;(0,v.assert)(e!==eG,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let n=[],r=!1,s=t.getIterator(e$.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=s.getNext();i=r?e9(n,e.getCompare()):e8;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let c=Object.assign({},this.indexes_);return c[a]=i,new e7(c,l)}/**
     * Ensure that this node is properly tracked in any indexes that we're maintaining
     */addToIndexes(e,t){let i=(0,v.map)(this.indexes_,(i,n)=>{let r=(0,v.safeGet)(this.indexSet_,n);if((0,v.assert)(r,"Missing index implementation for "+n),i===e8){// Check to see if we need to index everything
if(!r.isDefinedOn(e.node))return e8;{// We need to build this index
let i=[],n=t.getIterator(e$.Wrap),s=n.getNext();for(;s;)s.name!==e.name&&i.push(s),s=n.getNext();return i.push(e),e9(i,r.getCompare())}}{let n=t.get(e.name),r=i;return n&&(r=r.remove(new e$(e.name,n))),r.insert(e,e.node)}});return new e7(i,this.indexSet_)}/**
     * Create a new IndexMap instance with the given value removed
     */removeFromIndexes(e,t){let i=(0,v.map)(this.indexes_,i=>{if(i===e8)return i;{let n=t.get(e.name);return n?i.remove(new e$(e.name,n)):i}});return new e7(i,this.indexSet_)}}/**
 * ChildrenNode is a class for storing internal nodes in a DataSnapshot
 * (i.e. nodes with children).  It implements Node and stores the
 * list of children in the children property, sorted by child name.
 */class te{/**
     * @param children_ - List of children of this node..
     * @param priorityNode_ - The priority of this node (as a snapshot node).
     */constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&e6(this.priorityNode_),this.children_.isEmpty()&&(0,v.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return u||(u=new te(new eQ(e0),null,e7.Default))}/** @inheritDoc */isLeafNode(){return!1}/** @inheritDoc */getPriority(){return this.priorityNode_||u}/** @inheritDoc */updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}/** @inheritDoc */getImmediateChild(e){// Hack to treat priority as a regular child
if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?u:t}}/** @inheritDoc */getChild(e){let t=eR(e);return null===t?this:this.getImmediateChild(t).getChild(eA(e))}/** @inheritDoc */hasChild(e){return null!==this.children_.get(e)}/** @inheritDoc */updateImmediateChild(e,t){if((0,v.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let i,n;let r=new e$(e,t);t.isEmpty()?(i=this.children_.remove(e),n=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),n=this.indexMap_.addToIndexes(r,this.children_));let s=i.isEmpty()?u:this.priorityNode_;return new te(i,s,n)}}/** @inheritDoc */updateChild(e,t){let i=eR(e);if(null===i)return t;{(0,v.assert)(".priority"!==eR(e)||1===eP(e),".priority must be the last token in a path");let n=this.getImmediateChild(i).updateChild(eA(e),t);return this.updateImmediateChild(i,n)}}/** @inheritDoc */isEmpty(){return this.children_.isEmpty()}/** @inheritDoc */numChildren(){return this.children_.count()}/** @inheritDoc */val(e){if(this.isEmpty())return null;let t={},i=0,n=0,r=!0;if(this.forEachChild(e5,(s,o)=>{t[s]=o.val(e),i++,r&&te.INTEGER_REGEXP_.test(s)?n=Math.max(n,Number(s)):r=!1}),e||!r||!(n<2*i))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{// convert to array.
let e=[];// eslint-disable-next-line guard-for-in
for(let i in t)e[i]=t[i];return e}}/** @inheritDoc */hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+e1(this.getPriority().val())+":"),this.forEachChild(e5,(t,i)=>{let n=i.hash();""!==n&&(e+=":"+t+":"+n)}),this.lazyHash_=""===e?"":A(e)}return this.lazyHash_}/** @inheritDoc */getPredecessorChildName(e,t,i){let n=this.resolveIndex_(i);if(!n)return this.children_.getPredecessorKey(e);{let i=n.getPredecessorKey(new e$(e,t));return i?i.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new e$(t,this.children_.get(t)):null}/**
     * Given an index, return the key name of the largest value we have, according to that index
     */getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new e$(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,e=>e);{let i=this.children_.getIteratorFrom(e.name,e$.Wrap),n=i.peek();for(;null!=n&&0>t.compare(n,e);)i.getNext(),n=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,e=>e);{let i=this.children_.getReverseIteratorFrom(e.name,e$.Wrap),n=i.peek();for(;null!=n&&t.compare(n,e)>0;)i.getNext(),n=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tt?-1:0}withIndex(e){if(e===eG||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===eG||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(e5),i=e.getIterator(e5),n=t.getNext(),r=i.getNext();for(;n&&r;){if(n.name!==r.name||!n.node.equals(r.node))return!1;n=t.getNext(),r=i.getNext()}return null===n&&null===r}}/**
     * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
     * instead.
     *
     */resolveIndex_(e){return e===eG?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;/**
 * Marker that will sort higher than any other snapshot.
 */let tt=new class extends te{constructor(){super(new eQ(e0),te.EMPTY_NODE,e7.Default)}compareTo(e){return e===this?0:1}equals(e){// Not that we every compare it, but MAX_NODE is only ever equal to itself
return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}};/**
 * Constructs a snapshot node representing the passed JSON and returns it.
 * @param json - JSON to create a node for.
 * @param priority - Optional priority to use.  This will be ignored if the
 * passed JSON contains a .priority property.
 */function ti(e,t=null){if(null===e)return te.EMPTY_NODE;// Valid leaf nodes include non-objects or server-value wrapper objects
if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,v.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){let i=e;return new e2(i,ti(t))}if(e instanceof Array){let i=te.EMPTY_NODE;return Q(e,(t,n)=>{if((0,v.contains)(e,t)&&"."!==t.substring(0,1)){// ignore metadata nodes.
let e=ti(n);(e.isLeafNode()||!e.isEmpty())&&(i=i.updateImmediateChild(t,e))}}),i.updatePriority(ti(t))}{let i=[],n=!1,r=e;if(Q(r,(e,t)=>{if("."!==e.substring(0,1)){// Ignore metadata nodes
let r=ti(t);r.isEmpty()||(n=n||!r.getPriority().isEmpty(),i.push(new e$(e,r)))}}),0===i.length)return te.EMPTY_NODE;let s=e9(i,eZ,e=>e.name,e0);if(!n)return new te(s,ti(t),e7.Default);{let e=e9(i,e5.getCompare());return new te(s,ti(t),new e7({".priority":e},{".priority":e5}))}}}Object.defineProperties(e$,{MIN:{value:new e$(V,te.EMPTY_NODE)},MAX:{value:new e$($,tt)}}),/**
 * Reference Extensions
 */eK.__EMPTY_NODE=te.EMPTY_NODE,e2.__childrenNodeConstructor=te,r=tt,l=tt,a=ti;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends eX{constructor(e){super(),this.indexPath_=e,(0,v.assert)(!eF(e)&&".priority"!==eR(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),n=this.extractChild(t.node),r=i.compareTo(n);return 0===r?X(e.name,t.name):r}makePost(e,t){let i=ti(e),n=te.EMPTY_NODE.updateChild(this.indexPath_,i);return new e$(t,n)}maxPost(){let e=te.EMPTY_NODE.updateChild(this.indexPath_,tt);return new e$($,e)}toString(){return eO(this.indexPath_,0).join("/")}}let tr=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends eX{compare(e,t){let i=e.node.compareTo(t.node);return 0===i?X(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return e$.MIN}maxPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return e$.MAX}makePost(e,t){let i=ti(e);return new e$(t,i)}/**
     * @returns String representation for inclusion in a query spec
     */toString(){return".value"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e){return{type:"value"/* ChangeType.VALUE */,snapshotNode:e}}function to(e,t){return{type:"child_added"/* ChangeType.CHILD_ADDED */,snapshotNode:t,childName:e}}function ta(e,t){return{type:"child_removed"/* ChangeType.CHILD_REMOVED */,snapshotNode:t,childName:e}}function tl(e,t,i){return{type:"child_changed"/* ChangeType.CHILD_CHANGED */,snapshotNode:t,childName:e,oldSnap:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Doesn't really filter nodes but applies an index to the node and keeps track of any changes
 */class tc{constructor(e){this.index_=e}updateChild(e,t,i,n,r,s){(0,v.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return(// Check if anything actually changed.
o.getChild(n).equals(i.getChild(n))&&o.isEmpty()===i.isEmpty()?e:(null!=s&&(i.isEmpty()?e.hasChild(t)?s.trackChildChange(ta(t,o)):(0,v.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(to(t,i)):s.trackChildChange(tl(t,i,o))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_))}updateFullNode(e,t,i){return null==i||(e.isLeafNode()||e.forEachChild(e5,(e,n)=>{t.hasChild(e)||i.trackChildChange(ta(e,n))}),t.isLeafNode()||t.forEachChild(e5,(t,n)=>{if(e.hasChild(t)){let r=e.getImmediateChild(t);r.equals(n)||i.trackChildChange(tl(t,n,r))}else i.trackChildChange(to(t,n))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Filters nodes by range and uses an IndexFilter to track any changes after filtering the node
 */class tu{constructor(e){this.indexedFilter_=new tc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=tu.getStartPost_(e),this.endPost_=tu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?0>=this.index_.compare(this.getStartPost(),e):0>this.index_.compare(this.getStartPost(),e),i=this.endIsInclusive_?0>=this.index_.compare(e,this.getEndPost()):0>this.index_.compare(e,this.getEndPost());return t&&i}updateChild(e,t,i,n,r,s){return this.matches(new e$(t,i))||(i=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,n,r,s)}updateFullNode(e,t,i){t.isLeafNode()&&(t=te.EMPTY_NODE);let n=t.withIndex(this.index_);// Don't support priorities on queries
n=n.updatePriority(te.EMPTY_NODE);let r=this;return t.forEachChild(e5,(e,t)=>{r.matches(new e$(e,t))||(n=n.updateImmediateChild(e,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,n,i)}updatePriority(e,t){// Don't support priorities on queries
return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Applies a limit and a range to a node and uses RangedFilter to do the heavy lifting where possible
 */class th{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new tu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,n,r,s){return(this.rangedFilter_.matches(new e$(t,i))||(i=te.EMPTY_NODE),e.getImmediateChild(t).equals(i))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,n,r,s):this.fullLimitUpdateChild_(e,t,i,r,s)}updateFullNode(e,t,i){let n;if(t.isLeafNode()||t.isEmpty())n=te.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;// Easier to build up a snapshot, since what we're given has more than twice the elements we want
n=te.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let i=0;for(;e.hasNext()&&i<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t)){if(this.withinDirectionalEnd(t))n=n.updateImmediateChild(t.name,t.node),i++;else break}}}else{let e;// Don't support priorities on queries
n=// The snap contains less than twice the limit. Faster to delete from the snap than build up a new one
(n=t.withIndex(this.index_)).updatePriority(te.EMPTY_NODE),e=this.reverse_?n.getReverseIterator(this.index_):n.getIterator(this.index_);let i=0;for(;e.hasNext();){let t=e.getNext(),r=i<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);r?i++:n=n.updateImmediateChild(t.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,n,i)}updatePriority(e,t){// Don't support priorities on queries
return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,n,r){let s;if(this.reverse_){let e=this.index_.getCompare();s=(t,i)=>e(i,t)}else s=this.index_.getCompare();(0,v.assert)(e.numChildren()===this.limit_,"");let o=new e$(t,i),a=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),l=this.rangedFilter_.matches(o);if(e.hasChild(t)){let c=e.getImmediateChild(t),u=n.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=u&&(u.name===t||e.hasChild(u.name));)// been applied to the limited filter yet. Ignore this next child which will be updated later in
// the limited filter...
u=n.getChildAfterChild(this.index_,u,this.reverse_);let h=null==u?1:s(u,o),d=l&&!i.isEmpty()&&h>=0;if(d)return null!=r&&r.trackChildChange(tl(t,i,c)),e.updateImmediateChild(t,i);{null!=r&&r.trackChildChange(ta(t,c));let i=e.updateImmediateChild(t,te.EMPTY_NODE),n=null!=u&&this.rangedFilter_.matches(u);return n?(null!=r&&r.trackChildChange(to(u.name,u.node)),i.updateImmediateChild(u.name,u.node)):i}}return i.isEmpty()?e:l&&s(a,o)>=0?(null!=r&&(r.trackChildChange(ta(a.name,a.node)),r.trackChildChange(to(t,i))),e.updateImmediateChild(t,i).updateImmediateChild(a.name,te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
 * range to be returned for a particular location. It is assumed that validation of parameters is done at the
 * user-facing API level, so it is not done here.
 *
 * @internal
 */class td{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=e5}hasStart(){return this.startSet_}/**
     * @returns True if it would return from left.
     */isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"/* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT */===this.viewFrom_}/**
     * Only valid to call if hasStart() returns true
     */getIndexStartValue(){return(0,v.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}/**
     * Only valid to call if hasStart() returns true.
     * Returns the starting key name for the range defined by these query parameters
     */getIndexStartName(){return((0,v.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:V}hasEnd(){return this.endSet_}/**
     * Only valid to call if hasEnd() returns true.
     */getIndexEndValue(){return(0,v.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}/**
     * Only valid to call if hasEnd() returns true.
     * Returns the end key name for the range defined by these query parameters
     */getIndexEndName(){return((0,v.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:$}hasLimit(){return this.limitSet_}/**
     * @returns True if a limit has been set and it has been explicitly anchored
     */hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}/**
     * Only valid to call if hasLimit() returns true
     */getLimit(){return(0,v.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===e5}copy(){let e=new td;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}/**
 * Returns a set of REST query string parameters representing this query.
 *
 * @returns query string parameters
 */function tp(e){let t;let i={};if(e.isDefault())return i;if(e.index_===e5?t="$priority"/* REST_QUERY_CONSTANTS.PRIORITY_INDEX */:e.index_===tr?t="$value"/* REST_QUERY_CONSTANTS.VALUE_INDEX */:e.index_===eG?t="$key"/* REST_QUERY_CONSTANTS.KEY_INDEX */:((0,v.assert)(e.index_ instanceof tn,"Unrecognized index type!"),t=e.index_.toString()),i.orderBy=(0,v.stringify)(t),e.startSet_){let t=e.startAfterSet_?"startAfter"/* REST_QUERY_CONSTANTS.START_AFTER */:"startAt"/* REST_QUERY_CONSTANTS.START_AT */;i[t]=(0,v.stringify)(e.indexStartValue_),e.startNameSet_&&(i[t]+=","+(0,v.stringify)(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore"/* REST_QUERY_CONSTANTS.END_BEFORE */:"endAt"/* REST_QUERY_CONSTANTS.END_AT */;i[t]=(0,v.stringify)(e.indexEndValue_),e.endNameSet_&&(i[t]+=","+(0,v.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?i.limitToFirst=e.limit_:i.limitToLast=e.limit_),i}function tf(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let i=e.viewFrom_;""===i&&(i=e.isViewFromLeft()?"l"/* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT */:"r"/* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_RIGHT */),t.vf=i}return e.index_!==e5&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An implementation of ServerActions that communicates with the server via REST requests.
 * This is mostly useful for compatibility with crawlers, where we don't want to spin up a full
 * persistent connection (using WebSockets or long-polling)
 */class tm extends eI{/**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param onDataUpdate_ - A callback for new data from the server
     */constructor(e,t,i,n){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=n,/** @private {function(...[*])} */this.log_=z("p:rest:"),/**
         * We don't actually need to track listens, except to prevent us calling an onComplete for a listen
         * that's been removed. :-/
         */this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,v.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}/** @inheritDoc */listen(e,t,i,n){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);// Mark this listener so we can tell if it's removed.
let s=tm.getListenId_(e,i),o={};this.listens_[s]=o;let a=tp(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,/*isMerge=*/!1,i),(0,v.safeGet)(this.listens_,s)===o&&n(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}/** @inheritDoc */unlisten(e,t){let i=tm.getListenId_(e,t);delete this.listens_[i]}get(e){let t=tp(e._queryParams),i=e._path.toString(),n=new v.Deferred;return this.restRequest_(i+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(i,r,/*isMerge=*/!1,/*tag=*/null),n.resolve(r)):n.reject(Error(r))}),n.promise}/** @inheritDoc */refreshAuthToken(e){// no-op since we just always call getToken.
}/**
     * Performs a REST request to the given path, with the provided query string parameters,
     * and any auth credentials we have.
     */restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(/*forceRefresh=*/!1),this.appCheckTokenProvider_.getToken(/*forceRefresh=*/!1)]).then(([n,r])=>{n&&n.accessToken&&(t.auth=n.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,v.querystring)(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(i&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=(0,v.jsonEval)(o.responseText)}catch(e){j("Failed to parse JSON response for "+s+": "+o.responseText)}i(null,e)}else 401!==o.status&&404!==o.status&&j("Got unsuccessful REST response for "+s+" Status: "+o.status),i(o.status);i=null}},o.open("GET",s,/*asynchronous=*/!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Mutable object which basically just stores a reference to the "latest" immutable snapshot.
 */class tg{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(){return{value:null,children:new Map}}/**
 * Recursively iterates through all of the stored tree and calls the
 * callback on each one.
 *
 * @param prefixPath - Path to look up node for.
 * @param func - The function to invoke for each tree.
 */function t_(e,t,i){null!==e.value?i(t,e.value):/**
 * Iterates through each immediate child and triggers the callback.
 * Only seems to be used in tests.
 *
 * @param func - The function to invoke for each child.
 */function(e,t){e.children.forEach((e,i)=>{t(i,e)})}(e,(e,n)=>{let r=new eE(t.toString()+"/"+e);t_(n,r,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns the delta from the previous call to get stats.
 *
 * @param collection_ - The collection to "listen" to.
 */class tv{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Q(this.last_,(e,i)=>{t[e]=t[e]-i}),this.last_=e,t}}class tb{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new tv(e),er(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;Q(e,(e,n)=>{n>0&&(0,v.contains)(this.statsToReport_,e)&&(t[e]=n,i=!0)}),i&&this.server_.reportStats(t),// queue our next run.
er(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function tw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tx(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tk(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(m=g||(g={}))[m.OVERWRITE=0]="OVERWRITE",m[m.MERGE=1]="MERGE",m[m.ACK_USER_WRITE=2]="ACK_USER_WRITE",m[m.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{/**
     * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
     */constructor(/** @inheritDoc */e,/** @inheritDoc */t,/** @inheritDoc */i){this.path=e,this.affectedTree=t,this.revert=i,/** @inheritDoc */this.type=g.ACK_USER_WRITE,/** @inheritDoc */this.source=tw()}operationForChild(e){if(!eF(this.path))return(0,v.assert)(eR(this.path)===e,"operationForChild called for unrelated child."),new tC(eA(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)// All child locations are affected as well; just return same operation.
return(0,v.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new eE(e));return new tC(eS(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t){this.source=e,this.path=t,/** @inheritDoc */this.type=g.LISTEN_COMPLETE}operationForChild(e){return eF(this.path)?new tI(this.source,eS()):new tI(this.source,eA(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,/** @inheritDoc */this.type=g.OVERWRITE}operationForChild(e){return eF(this.path)?new tN(this.source,eS(),this.snap.getImmediateChild(e)):new tN(this.source,eA(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(/** @inheritDoc */e,/** @inheritDoc */t,/** @inheritDoc */i){this.source=e,this.path=t,this.children=i,/** @inheritDoc */this.type=g.MERGE}operationForChild(e){if(!eF(this.path))return(0,v.assert)(eR(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tT(this.source,eA(this.path),this.children);{let t=this.children.subtree(new eE(e));return t.isEmpty()?null:t.value?new tN(this.source,eS(),t.value):new tT(this.source,eS(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A cache node only stores complete children. Additionally it holds a flag whether the node can be considered fully
 * initialized in the sense that we know at one point in time this represented a valid state of the world, e.g.
 * initialized with data from the server, or a complete overwrite by the client. The filtered flag also tracks
 * whether a node potentially had children removed due to a filter.
 */class tE{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}/**
     * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
     */isFullyInitialized(){return this.fullyInitialized_}/**
     * Returns whether this node is potentially missing children due to a filter applied to the node
     */isFiltered(){return this.filtered_}isCompleteForPath(e){if(eF(e))return this.isFullyInitialized()&&!this.filtered_;let t=eR(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An EventGenerator is used to convert "raw" changes (Change) as computed by the
 * CacheDiffer into actual events (Event) that can be raised.  See generateEventsForChanges()
 * for details.
 *
 */class tS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}/**
 * Given changes of a single change type, generate the corresponding events.
 */function tR(e,t,i,n,r,s){let o=n.filter(e=>e.type===i);o.sort((t,i)=>(function(e,t,i){if(null==t.childName||null==i.childName)throw(0,v.assertionError)("Should only compare child_ events.");let n=new e$(t.childName,t.snapshotNode),r=new e$(i.childName,i.snapshotNode);return e.index_.compare(n,r)})(e,t,i)),o.forEach(i=>{let n=("value"===i.type||"child_removed"===i.type||(i.prevName=s.getPredecessorChildName(i.childName,i.snapshotNode,e.index_)),i);r.forEach(r=>{r.respondsTo(i.type)&&t.push(r.createEvent(n,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(e,t){return{eventCache:e,serverCache:t}}function tA(e,t,i,n){return tP(new tE(t,i,n),e.serverCache)}function tL(e,t,i,n){return tP(e.eventCache,new tE(t,i,n))}function tO(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tD(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * Singleton empty children collection.
 *
 */let tM=()=>(h||(h=new eQ(K)),h);/**
 * A tree with immutable elements.
 */class tF{constructor(e,t=tM()){this.value=e,this.children=t}static fromObject(e){let t=new tF(null);return Q(e,(e,i)=>{t=t.set(new eE(e),i)}),t}/**
     * True if the value is empty and there are no children
     */isEmpty(){return null===this.value&&this.children.isEmpty()}/**
     * Given a path and predicate, return the first node and the path to that node
     * where the predicate returns true.
     *
     * TODO Do a perf test -- If we're creating a bunch of `{path: value:}`
     * objects on the way back out, it may be better to pass down a pathSoFar obj.
     *
     * @param relativePath - The remainder of the path
     * @param predicate - The predicate to satisfy to return a node
     */findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:eS(),value:this.value};if(eF(e))return null;{let i=eR(e),n=this.children.get(i);if(null===n)return null;{let r=n.findRootMostMatchingPathAndValue(eA(e),t);if(null==r)return null;{let e=eM(new eE(i),r.path);return{path:e,value:r.value}}}}}/**
     * Find, if it exists, the shortest subpath of the given path that points a defined
     * value in the tree
     */findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}/**
     * @returns The subtree at the given path
     */subtree(e){if(eF(e))return this;{let t=eR(e),i=this.children.get(t);return null!==i?i.subtree(eA(e)):new tF(null)}}/**
     * Sets a value at the specified path.
     *
     * @param relativePath - Path to set value at.
     * @param toSet - Value to set.
     * @returns Resulting tree.
     */set(e,t){if(eF(e))return new tF(t,this.children);{let i=eR(e),n=this.children.get(i)||new tF(null),r=n.set(eA(e),t),s=this.children.insert(i,r);return new tF(this.value,s)}}/**
     * Removes the value at the specified path.
     *
     * @param relativePath - Path to value to remove.
     * @returns Resulting tree.
     */remove(e){if(eF(e))return this.children.isEmpty()?new tF(null):new tF(null,this.children);{let t=eR(e),i=this.children.get(t);if(!i)return this;{let n;let r=i.remove(eA(e));return(n=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&n.isEmpty())?new tF(null):new tF(this.value,n)}}}/**
     * Gets a value from the tree.
     *
     * @param relativePath - Path to get value for.
     * @returns Value at path, or null.
     */get(e){if(eF(e))return this.value;{let t=eR(e),i=this.children.get(t);return i?i.get(eA(e)):null}}/**
     * Replace the subtree at the specified path with the given new tree.
     *
     * @param relativePath - Path to replace subtree for.
     * @param newTree - New tree.
     * @returns Resulting tree.
     */setTree(e,t){if(eF(e))return t;{let i;let n=eR(e),r=this.children.get(n)||new tF(null),s=r.setTree(eA(e),t);return i=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new tF(this.value,i)}}/**
     * Performs a depth first fold on this tree. Transforms a tree into a single
     * value, given a function that operates on the path to a node, an optional
     * current value, and a map of child names to folded subtrees
     */fold(e){return this.fold_(eS(),e)}/**
     * Recursive helper for public-facing fold() method
     */fold_(e,t){let i={};return this.children.inorderTraversal((n,r)=>{i[n]=r.fold_(eM(e,n),t)}),t(e,this.value,i)}/**
     * Find the first matching value on the given path. Return the result of applying f to it.
     */findOnPath(e,t){return this.findOnPath_(e,eS(),t)}findOnPath_(e,t,i){let n=!!this.value&&i(t,this.value);if(n)return n;if(eF(e))return null;{let n=eR(e),r=this.children.get(n);return r?r.findOnPath_(eA(e),eM(t,n),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,eS(),t)}foreachOnPath_(e,t,i){if(eF(e))return this;{this.value&&i(t,this.value);let n=eR(e),r=this.children.get(n);return r?r.foreachOnPath_(eA(e),eM(t,n),i):new tF(null)}}/**
     * Calls the given function for each node in the tree that has a value.
     *
     * @param f - A function to be called with the path from the root of the tree to
     * a node, and the value at that node. Called in depth-first order.
     */foreach(e){this.foreach_(eS(),e)}foreach_(e,t){this.children.inorderTraversal((i,n)=>{n.foreach_(eM(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * This class holds a collection of writes that can be applied to nodes in unison. It abstracts away the logic with
 * dealing with priority writes and multiple nested writes. At any given path there is only allowed to be one write
 * modifying that path. Any write to an existing path or shadowing an existing path will modify that existing write
 * to reflect the write added.
 */class tz{constructor(e){this.writeTree_=e}static empty(){return new tz(new tF(null))}}function tU(e,t,i){if(eF(t))return new tz(new tF(i));{let n=e.writeTree_.findRootMostValueAndPath(t);if(null!=n){let r=n.path,s=n.value,o=ez(r,t);return s=s.updateChild(o,i),new tz(e.writeTree_.set(r,s))}{let n=new tF(i),r=e.writeTree_.setTree(t,n);return new tz(r)}}}function tW(e,t,i){let n=e;return Q(i,(e,i)=>{n=tU(n,eM(t,e),i)}),n}/**
 * Will remove a write at the given path and deeper paths. This will <em>not</em> modify a write at a higher
 * location, which must be removed by calling this method with that path.
 *
 * @param compoundWrite - The CompoundWrite to remove.
 * @param path - The path at which a write and all deeper writes should be removed
 * @returns The new CompoundWrite with the removed path
 */function tj(e,t){if(eF(t))return tz.empty();{let i=e.writeTree_.setTree(t,new tF(null));return new tz(i)}}/**
 * Returns whether this CompoundWrite will fully overwrite a node at a given location and can therefore be
 * considered "complete".
 *
 * @param compoundWrite - The CompoundWrite to check.
 * @param path - The path to check for
 * @returns Whether there is a complete write at that path
 */function tq(e,t){return null!=tB(e,t)}/**
 * Returns a node for a path if and only if the node is a "complete" overwrite at that path. This will not aggregate
 * writes from deeper paths, but will return child nodes from a more shallow path.
 *
 * @param compoundWrite - The CompoundWrite to get the node from.
 * @param path - The path to get a complete write
 * @returns The node if complete at that path, or null otherwise.
 */function tB(e,t){let i=e.writeTree_.findRootMostValueAndPath(t);return null!=i?e.writeTree_.get(i.path).getChild(ez(i.path,t)):null}/**
 * Returns all children that are guaranteed to be a complete overwrite.
 *
 * @param compoundWrite - The CompoundWrite to get children from.
 * @returns A list of all complete children.
 */function tH(e){let t=[],i=e.writeTree_.value;return null!=i?i.isLeafNode()||i.forEachChild(e5,(e,i)=>{t.push(new e$(e,i))}):e.writeTree_.children.inorderTraversal((e,i)=>{null!=i.value&&t.push(new e$(e,i.value))}),t}function tV(e,t){if(eF(t))return e;{let i=tB(e,t);return new tz(null!=i?new tF(i):e.writeTree_.subtree(t))}}/**
 * Returns true if this CompoundWrite is empty and therefore does not modify any nodes.
 * @returns Whether this CompoundWrite is empty
 */function t$(e){return e.writeTree_.isEmpty()}/**
 * Applies this CompoundWrite to a node. The node is returned with all writes from this CompoundWrite applied to the
 * node
 * @param node - The node to apply this CompoundWrite to
 * @returns The node with all writes applied
 */function tX(e,t){return function e(t,i,n){if(null!=i.value)return n.updateChild(t,i.value);{let r=null;return i.children.inorderTraversal((i,s)=>{".priority"===i?(// Apply priorities at the end so we don't update priorities for either empty nodes or forget
// to apply priorities to empty nodes that are later filled
(0,v.assert)(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):n=e(eM(t,i),s,n)}),n.getChild(t).isEmpty()||null===r||(n=n.updateChild(eM(t,".priority"),r)),n}}(eS(),e.writeTree_,t)}/**
 * The default filter used when constructing the tree. Keep everything that's visible.
 */function tK(e){return e.visible}/**
 * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
 * event data at that path.
 */function tG(e,t,i){let n=tz.empty();for(let r=0;r<e.length;++r){let s=e[r];// Theory, a later set will either:
// a) abort a relevant transaction, so no need to worry about excluding it from calculating that transaction
// b) not be relevant to a transaction (separate branch), so again will not affect the data for that transaction
if(t(s)){let e;let t=s.path;if(s.snap)eW(i,t)?n=tU(n,e=ez(i,t),s.snap):eW(t,i)&&(e=ez(t,i),n=tU(n,eS(),s.snap.getChild(e)));else if(s.children){if(eW(i,t))n=tW(n,e=ez(i,t),s.children);else if(eW(t,i)){if(eF(e=ez(t,i)))n=tW(n,eS(),s.children);else{let t=(0,v.safeGet)(s.children,eR(e));if(t){// There exists a child in this node that matches the root path
let i=t.getChild(eA(e));n=tU(n,eS(),i)}}}}else throw(0,v.assertionError)("WriteRecord should have .snap or .children")}}return n}/**
 * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
 * writes), attempt to calculate a complete snapshot for the given path
 *
 * @param writeIdsToExclude - An optional set to be excluded
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */function tY(e,t,i,n,r){if(n||r){let s=tV(e.visibleWrites,t);if(!r&&t$(s))return i;// If the server cache is null, and we don't have a complete cache, we need to return null
if(!r&&null==i&&!tq(s,eS()))return null;{let s=tG(e.allWrites,function(e){return(e.visible||r)&&(!n||!~n.indexOf(e.writeId))&&(eW(e.path,t)||eW(t,e.path))},t),o=i||te.EMPTY_NODE;return tX(s,o)}}{let n=tB(e.visibleWrites,t);if(null!=n)return n;{let n=tV(e.visibleWrites,t);if(t$(n))return i;{if(null==i&&!tq(n,eS()))return null;let e=i||te.EMPTY_NODE;return tX(n,e)}}}}/**
 * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
 * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
 * can lead to a more expensive calculation.
 *
 * @param writeIdsToExclude - Optional writes to exclude.
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */function tJ(e,t,i,n){return tY(e.writeTree,e.treePath,t,i,n)}/**
 * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
 * mix of the given server data and write data.
 *
 */function tQ(e,t){return(/**
 * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
 * Used when creating new views, to pre-fill their complete event children snapshot.
 */function(e,t,i){let n=te.EMPTY_NODE,r=tB(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(e5,(e,t)=>{n=n.updateImmediateChild(e,t)}),n;if(i){// Layer any children we have on top of this
// We know we don't have a top-level set, so just enumerate existing children
let r=tV(e.visibleWrites,t);return i.forEachChild(e5,(e,t)=>{let i=tX(tV(r,new eE(e)),t);n=n.updateImmediateChild(e,i)}),// Add any complete children we have from the set
tH(r).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}{// We don't have anything to layer on top of. Layer on any children we have
// Note that we can return an empty snap if we have a defined delete
let i=tV(e.visibleWrites,t);return tH(i).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}}(e.writeTree,e.treePath,t))}/**
 * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
 * if anything, needs to be applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events should be raised
 *
 * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
 *
 *
 */function tZ(e,t,i,n){return(/**
 * Given that the underlying server data has updated, determine what, if anything, needs to be
 * applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events
 *
 * Either existingEventSnap or existingServerSnap must exist
 */function(e,t,i,n,r){(0,v.assert)(n||r,"Either existingEventSnap or existingServerSnap must exist");let s=eM(t,i);if(tq(e.visibleWrites,s))// May need to check visibility while doing the findRootMostValueAndPath call
return null;{// No complete shadowing. We're either partially shadowing or not shadowing at all.
let t=tV(e.visibleWrites,s);return t$(t)?r.getChild(i):tX(t,r.getChild(i))}}(e.writeTree,e.treePath,t,i,n))}/**
 * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
 * a higher path, this will return the child of that write relative to the write and this path.
 * Returns null if there is no write at this path.
 *
 */function t0(e,t){var i,n;return i=e.writeTree,n=eM(e.treePath,t),tB(i.visibleWrites,n)}/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */function t1(e,t,i){return(/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */function(e,t,i,n){let r=eM(t,i),s=tB(e.visibleWrites,r);if(null!=s)return s;if(!n.isCompleteForChild(i))return null;{let t=tV(e.visibleWrites,r);return tX(t,n.getNode().getImmediateChild(i))}}(e.writeTree,e.treePath,t,i))}/**
 * Return a WriteTreeRef for a child.
 */function t6(e,t){return t2(eM(e.treePath,t),e.writeTree)}function t2(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;(0,v.assert)("child_added"/* ChangeType.CHILD_ADDED */===t||"child_changed"/* ChangeType.CHILD_CHANGED */===t||"child_removed"/* ChangeType.CHILD_REMOVED */===t,"Only child changes supported for tracking"),(0,v.assert)(".priority"!==i,"Only non-priority child changes can be tracked.");let n=this.changeMap.get(i);if(n){let r=n.type;if("child_added"/* ChangeType.CHILD_ADDED */===t&&"child_removed"/* ChangeType.CHILD_REMOVED */===r)this.changeMap.set(i,tl(i,e.snapshotNode,n.snapshotNode));else if("child_removed"/* ChangeType.CHILD_REMOVED */===t&&"child_added"/* ChangeType.CHILD_ADDED */===r)this.changeMap.delete(i);else if("child_removed"/* ChangeType.CHILD_REMOVED */===t&&"child_changed"/* ChangeType.CHILD_CHANGED */===r)this.changeMap.set(i,ta(i,n.oldSnap));else if("child_changed"/* ChangeType.CHILD_CHANGED */===t&&"child_added"/* ChangeType.CHILD_ADDED */===r)this.changeMap.set(i,to(i,e.snapshotNode));else if("child_changed"/* ChangeType.CHILD_CHANGED */===t&&"child_changed"/* ChangeType.CHILD_CHANGED */===r)this.changeMap.set(i,tl(i,e.snapshotNode,n.oldSnap));else throw(0,v.assertionError)("Illegal combination of changes: "+e+" occurred after "+n)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * Singleton instance.
 */let t3=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An implementation of CompleteChildSource that never returns any additional children
 */// eslint-disable-next-line @typescript-eslint/naming-convention
class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}};/**
 * An implementation of CompleteChildSource that uses a WriteTree in addition to any other server data or
 * old event caches available to calculate complete children.
 */class t4{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new tE(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return t1(this.writes_,e,t)}}getChildAfterChild(e,t,i){var n;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tD(this.viewCache_),s=/**
 * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
 * the window, but may now be in the window.
 */function(e,t,i,n,r,s,o){let a;let l=tV(e.visibleWrites,t),c=tB(l,eS());if(null!=c)a=c;else{if(null==i)return[];a=tX(l,i)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),i=s?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o),r=i.getNext();for(;r&&e.length<1;)0!==t(r,n)&&e.push(r),r=i.getNext();return e}}((n=this.writes_).writeTree,n.treePath,r,t,0,i,e);return 0===s.length?null:s[0]}}function t9(e,t,i,n,r,s){let o=t.eventCache;if(null!=t0(n,i))return t;{let a,l;if(eF(i)){if(// TODO: figure out how this plays with "sliding ack windows"
(0,v.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){// We need to special case this, because we need to only apply writes to complete children, or
// we might end up raising events for incomplete children. If the server data is filtered deep
// writes cannot be guaranteed to be complete
let i=tD(t),r=i instanceof te?i:te.EMPTY_NODE,o=tQ(n,r);a=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{let i=tJ(n,tD(t));a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}}else{let c=eR(i);if(".priority"===c){(0,v.assert)(1===eP(i),"Can't have a priority with additional path components");let r=o.getNode();l=t.serverCache.getNode();// we might have overwrites for this priority
let s=tZ(n,i,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let u;let h=eA(i);if(o.isCompleteForChild(c)){l=t.serverCache.getNode();let e=tZ(n,i,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=t1(n,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,r,s):o.getNode()}}return tA(t,a,o.isFullyInitialized()||eF(i),e.filter.filtersNodes())}}function t8(e,t,i,n,r,s,o,a){let l;let c=t.serverCache,u=o?e.filter:e.filter.getIndexedFilter();if(eF(i))l=u.updateFullNode(c.getNode(),n,null);else if(u.filtersNodes()&&!c.isFiltered()){// we want to filter the server node, but we didn't filter the server node yet, so simulate a full update
let e=c.getNode().updateChild(i,n);l=u.updateFullNode(c.getNode(),e,null)}else{let e=eR(i);if(!c.isCompleteForPath(i)&&eP(i)>1)return t;let r=eA(i),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,n);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,t3,null)}let h=tL(t,l,c.isFullyInitialized()||eF(i),u.filtersNodes()),d=new t4(r,h,s);return t9(e,h,i,r,d,a)}function t7(e,t,i,n,r,s,o){let a,l;let c=t.eventCache,u=new t4(r,t,s);if(eF(i))l=e.filter.updateFullNode(t.eventCache.getNode(),n,o),a=tA(t,l,!0,e.filter.filtersNodes());else{let r=eR(i);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),n),a=tA(t,l,c.isFullyInitialized(),c.isFiltered());else{let s;let l=eA(i),h=c.getNode().getImmediateChild(r);if(eF(l))s=n;else{let e=u.getCompleteChild(r);// server will send down the priority in the update, so ignore for now
s=null!=e?".priority"===eL(l)&&e.getChild(eD(l)).isEmpty()?e:e.updateChild(l,n):te.EMPTY_NODE}if(h.equals(s))a=t;else{let i=e.filter.updateChild(c.getNode(),r,s,l,u,o);a=tA(t,i,c.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function ie(e,t){return e.eventCache.isCompleteForChild(t)}function it(e,t,i){return i.foreach((e,i)=>{t=t.updateChild(e,i)}),t}function ii(e,t,i,n,r,s,o,a){let l;// If we don't have a cache yet, this merge was intended for a previously listen in the same location. Ignore it and
// wait for the complete data update coming soon.
if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;// HACK: In the case of a limit query, there may be some changes that bump things out of the
// window leaving room for new items.  It's important we process these changes first, so we
// iterate the changes twice, first processing any that affect items currently in view.
// TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
// and event snap.  I'm not sure if this will result in edge cases when a child is in one but
// not the other.
let c=t;l=eF(i)?n:new tF(null).setTree(i,n);let u=t.serverCache.getNode();return l.children.inorderTraversal((i,n)=>{if(u.hasChild(i)){let l=t.serverCache.getNode().getImmediateChild(i),u=it(e,l,n);c=t8(e,c,new eE(i),u,r,s,o,a)}}),l.children.inorderTraversal((i,n)=>{let l=!t.serverCache.isCompleteForChild(i)&&null===n.value;if(!u.hasChild(i)&&!l){let l=t.serverCache.getNode().getImmediateChild(i),u=it(e,l,n);c=t8(e,c,new eE(i),u,r,s,o,a)}}),c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A view represents a specific location and query that has 1 or more event registrations.
 *
 * It does several things:
 *  - Maintains the list of event registrations for this location/query.
 *  - Maintains a cache of the data visible for this location/query.
 *  - Applies new operations (via applyOperation), updates the cache, and based on the event
 *    registrations returns the set of events to be raised.
 */class ir{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let i=this.query_._queryParams,n=new tc(i.getIndex()),r=i.loadsAllData()?new tc(i.getIndex()):i.hasLimit()?new th(i):new tu(i);this.processor_={filter:r};let s=t.serverCache,o=t.eventCache,a=n.updateFullNode(te.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(te.EMPTY_NODE,o.getNode(),null),c=new tE(a,s.isFullyInitialized(),n.filtersNodes()),u=new tE(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=tP(u,c),this.eventGenerator_=new tS(this.query_)}get query(){return this.query_}}function is(e){return 0===e.eventRegistrations_.length}/**
 * @param eventRegistration - If null, remove all callbacks.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns Cancel events, if cancelError was provided.
 */function io(e,t,i){let n=[];if(i){(0,v.assert)(null==t,"A cancel should cancel all event registrations.");let r=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(i,r);t&&n.push(t)})}if(t){let i=[];for(let n=0;n<e.eventRegistrations_.length;++n){let r=e.eventRegistrations_[n];if(r.matches(t)){if(t.hasAnyCallback()){// We're removing just this one
i=i.concat(e.eventRegistrations_.slice(n+1));break}}else i.push(r)}e.eventRegistrations_=i}else e.eventRegistrations_=[];return n}/**
 * Applies the given Operation, updates our cache, and returns the appropriate events.
 */function ia(e,t,i,n){var r,s;t.type===g.MERGE&&null!==t.source.queryId&&((0,v.assert)(tD(e.viewCache_),"We should always have a full cache before handling merges"),(0,v.assert)(tO(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,i,n,r){let s,o;let a=new t5;if(i.type===g.OVERWRITE)i.source.fromUser?s=t7(e,t,i.path,i.snap,n,r,a):((0,v.assert)(i.source.fromServer,"Unknown source."),// We filter the node if it's a tagged update or the node has been previously filtered  and the
// update is not at the root in which case it is ok (and necessary) to mark the node unfiltered
// again
o=i.source.tagged||t.serverCache.isFiltered()&&!eF(i.path),s=t8(e,t,i.path,i.snap,n,r,o,a));else if(i.type===g.MERGE){var l,c;let u;i.source.fromUser?(l=i.path,c=i.children,u=t,c.foreach((i,s)=>{let o=eM(l,i);ie(t,eR(o))&&(u=t7(e,u,o,s,n,r,a))}),c.foreach((i,s)=>{let o=eM(l,i);ie(t,eR(o))||(u=t7(e,u,o,s,n,r,a))}),s=u):((0,v.assert)(i.source.fromServer,"Unknown source."),// We filter the node if it's a tagged update or the node has been previously filtered
o=i.source.tagged||t.serverCache.isFiltered(),s=ii(e,t,i.path,i.children,n,r,o,a))}else if(i.type===g.ACK_USER_WRITE)s=i.revert?function(e,t,i,n,r,s){let o;if(null!=t0(n,i))return t;{let a;let l=new t4(n,t,r),c=t.eventCache.getNode();if(eF(i)||".priority"===eR(i)){let i;if(t.serverCache.isFullyInitialized())i=tJ(n,tD(t));else{let e=t.serverCache.getNode();(0,v.assert)(e instanceof te,"serverChildren would be complete if leaf node"),i=tQ(n,e)}a=e.filter.updateFullNode(c,i,s)}else{let r=eR(i),u=t1(n,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=c.getImmediateChild(r)),(a=null!=u?e.filter.updateChild(c,r,u,eA(i),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,te.EMPTY_NODE,eA(i),l,s):c).isEmpty()&&t.serverCache.isFullyInitialized()&&// We might have reverted all child writes. Maybe the old event was a leaf node
(o=tJ(n,tD(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=t0(n,eS()),tA(t,a,o,e.filter.filtersNodes())}}(e,t,i.path,n,r,a):function(e,t,i,n,r,s,o){if(null!=t0(r,i))return t;// Only filter server node if it is currently filtered
let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=n.value){// This is an overwrite.
if(eF(i)&&l.isFullyInitialized()||l.isCompleteForPath(i))return t8(e,t,i,l.getNode().getChild(i),r,s,a,o);if(!eF(i))return t;{// This is a goofy edge case where we are acking data at this location but don't have full data.  We
// should just re-apply whatever we have in our cache as a merge.
let n=new tF(null);return l.getNode().forEachChild(eG,(e,t)=>{n=n.set(new eE(e),t)}),ii(e,t,i,n,r,s,a,o)}}{// This is a merge.
let c=new tF(null);return n.foreach((e,t)=>{let n=eM(i,e);l.isCompleteForPath(n)&&(c=c.set(e,l.getNode().getChild(n)))}),ii(e,t,i,c,r,s,a,o)}}(e,t,i.path,i.affectedTree,n,r,a);else if(i.type===g.LISTEN_COMPLETE)s=function(e,t,i,n,r){let s=t.serverCache,o=tL(t,s.getNode(),s.isFullyInitialized()||eF(i),s.isFiltered());return t9(e,o,i,n,t3,r)}(e,t,i.path,n,a);else throw(0,v.assertionError)("Unknown operation type: "+i.type);let u=a.getChanges();return function(e,t,i){let n=t.eventCache;if(n.isFullyInitialized()){let r=n.getNode().isLeafNode()||n.getNode().isEmpty(),s=tO(e);!(i.length>0)&&e.eventCache.isFullyInitialized()&&(!r||n.getNode().equals(s))&&n.getNode().getPriority().equals(s.getPriority())||i.push(ts(tO(t)))}}(t,s,u),{viewCache:s,changes:u}}(e.processor_,o,t,i,n);return r=e.processor_,s=a.viewCache,(0,v.assert)(s.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),(0,v.assert)(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),(0,v.assert)(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,il(e,a.changes,a.viewCache.eventCache.getNode(),null)}function il(e,t,i,n){let r=n?[n]:e.eventRegistrations_;return(/**
 * Given a set of raw changes (no moved events and prevName not specified yet), and a set of
 * EventRegistrations that should be notified of these changes, generate the actual events to be raised.
 *
 * Notes:
 *  - child_moved events will be synthesized at this time for any child_changed events that affect
 *    our index.
 *  - prevName will be calculated based on the index ordering.
 */function(e,t,i,n){let r=[],s=[];return t.forEach(t=>{if("child_changed"/* ChangeType.CHILD_CHANGED */===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var i;s.push((i=t.childName,{type:"child_moved"/* ChangeType.CHILD_MOVED */,snapshotNode:t.snapshotNode,childName:i}))}}),tR(e,r,"child_removed"/* ChangeType.CHILD_REMOVED */,t,n,i),tR(e,r,"child_added"/* ChangeType.CHILD_ADDED */,t,n,i),tR(e,r,"child_moved"/* ChangeType.CHILD_MOVED */,s,n,i),tR(e,r,"child_changed"/* ChangeType.CHILD_CHANGED */,t,n,i),tR(e,r,"value"/* ChangeType.VALUE */,t,n,i),r}(e.eventGenerator_,t,i,r))}/**
 * SyncPoint represents a single location in a SyncTree with 1 or more event registrations, meaning we need to
 * maintain 1 or more Views at this location to cache server data and raise appropriate events for server changes
 * and user writes (set, transaction, update).
 *
 * It's responsible for:
 *  - Maintaining the set of 1 or more views necessary at this location (a SyncPoint with 0 views should be removed).
 *  - Proxying user / server operations to the views as appropriate (i.e. applyServerOverwrite,
 *    applyUserOverwrite, etc.)
 */class ic{constructor(){/**
         * The Views being tracked at this location in the tree, stored as a map where the key is a
         * queryId and the value is the View for that query.
         *
         * NOTE: This list will be quite small (usually 1, but perhaps 2 or 3; any more is an odd use case).
         */this.views=new Map}}function iu(e,t,i,n){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return(0,v.assert)(null!=s,"SyncTree gave us an op for an invalid query."),ia(s,t,i,n)}{let r=[];for(let s of e.views.values())r=r.concat(ia(s,t,i,n));return r}}/**
 * Get a view for the specified query.
 *
 * @param query - The query to return a view for
 * @param writesCache
 * @param serverCache
 * @param serverCacheComplete
 * @returns Events to raise.
 */function ih(e,t,i,n,r){let s=t._queryIdentifier,o=e.views.get(s);if(!o){// TODO: make writesCache take flag for complete server node
let e=tJ(i,r?n:null),s=!1;e?s=!0:(e=n instanceof te?tQ(i,n):te.EMPTY_NODE,s=!1);let o=tP(new tE(e,s,!1),new tE(n,r,!1));return new ir(t,o)}return o}function id(e){let t=[];for(let i of e.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}/**
 * @param path - The path to the desired complete snapshot
 * @returns A complete cache, if it exists
 */function ip(e,t){let i=null;for(let n of e.views.values())i=i||function(e,t){let i=tD(e.viewCache_);return i&&(e.query._queryParams.loadsAllData()||!eF(t)&&!i.getImmediateChild(eR(t)).isEmpty())?i.getChild(t):null}(n,t);return i}function im(e,t){let i=t._queryParams;if(i.loadsAllData())return iy(e);{let i=t._queryIdentifier;return e.views.get(i)}}function ig(e){return null!=iy(e)}function iy(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * Static tracker for next query tag.
 */let i_=1;/**
 * SyncTree is the central class for managing event callback registration, data caching, views
 * (query processing), and event generation.  There are typically two SyncTree instances for
 * each Repo, one for the normal Firebase data, and one for the .info data.
 *
 * It has a number of responsibilities, including:
 *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
 *  - Applying and caching data changes for user set(), transaction(), and update() calls
 *    (applyUserOverwrite(), applyUserMerge()).
 *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
 *    applyServerMerge()).
 *  - Generating user-facing events for server and user changes (all of the apply* methods
 *    return the set of events that need to be raised as a result).
 *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
 *    to the correct set of paths and queries to satisfy the current set of user event
 *    callbacks (listens are started/stopped using the provided listenProvider).
 *
 * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
 * events are returned to the caller rather than raised synchronously.
 *
 */class iv{/**
     * @param listenProvider_ - Used by SyncTree to start / stop listening
     *   to server data.
     */constructor(e){this.listenProvider_=e,/**
         * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
         */this.syncPointTree_=new tF(null),/**
         * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
         */this.pendingWriteTree_={visibleWrites:tz.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}/**
 * Apply the data changes for a user-generated set() or transaction() call.
 *
 * @returns Events to raise.
 */function ib(e,t,i,n,r){var s,o;return(s=e.pendingWriteTree_,o=r,(0,v.assert)(n>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:n,visible:o}),o&&(s.visibleWrites=tU(s.visibleWrites,t,i)),s.lastWriteId=n,r)?iN(e,new tN(tw(),t,i)):[]}/**
 * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
 *
 * @param revert - True if the given write failed and needs to be reverted
 * @returns Events to raise.
 */function iw(e,t,i=!1){let n=function(e,t){for(let i=0;i<e.allWrites.length;i++){let n=e.allWrites[i];if(n.writeId===t)return n}return null}(e.pendingWriteTree_,t),r=/**
 * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
 * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
 *
 * @returns true if the write may have been visible (meaning we'll need to reevaluate / raise
 * events as a result).
 */function(e,t){// Note: disabling this check. It could be a transaction that preempted another transaction, and thus was applied
// out of order.
//const validClear = revert || this.allWrites_.length === 0 || writeId <= this.allWrites_[0].writeId;
//assert(validClear, "Either we don't have this write, or it's the first one in the queue");
let i=e.allWrites.findIndex(e=>e.writeId===t);(0,v.assert)(i>=0,"removeWrite called with nonexistent writeId.");let n=e.allWrites[i];e.allWrites.splice(i,1);let r=n.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=i&&function(e,t){if(e.snap)return eW(e.path,t);for(let i in e.children)if(e.children.hasOwnProperty(i)&&eW(eM(e.path,i),t))return!0;return!1}(t,n.path)?r=!1:eW(n.path,t.path)&&(s=!0)),o--}if(!r)return!1;if(s)return e.visibleWrites=tG(e.allWrites,tK,eS()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1,!0;// There's no shadowing.  We can safely just remove the write(s) from visibleWrites.
if(n.snap)e.visibleWrites=tj(e.visibleWrites,n.path);else{let t=n.children;Q(t,t=>{e.visibleWrites=tj(e.visibleWrites,eM(n.path,t))})}return!0}(e.pendingWriteTree_,t);if(!r)return[];{let t=new tF(null);return null!=n.snap?t=t.set(eS(),!0):Q(n.children,e=>{t=t.set(new eE(e),!0)}),iN(e,new tC(n.path,t,i))}}/**
 * Apply new server data for the specified path..
 *
 * @returns Events to raise.
 */function ix(e,t,i){return iN(e,new tN(tx(),t,i))}/**
 * Remove event callback(s).
 *
 * If query is the default query, we'll check all queries for the specified eventRegistration.
 * If eventRegistration is null, we'll remove all callbacks for the specified query/queries.
 *
 * @param eventRegistration - If null, all callbacks are removed.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @param skipListenerDedup - When performing a `get()`, we don't add any new listeners, so no
 *  deduping needs to take place. This flag allows toggling of that behavior
 * @returns Cancel events, if cancelError was provided.
 */function ik(e,t,i,n,r=!1){// Find the syncPoint first. Then deal with whether or not it has matching listeners
let s=t._path,o=e.syncPointTree_.get(s),a=[];// A removal on a default query affects all queries at that location. A removal on an indexed query, even one without
// other query constraints, does *not* affect all queries at that location. So this check must be for 'default', and
// not loadsAllData().
if(o&&("default"===t._queryIdentifier||null!=im(o,t))){let l=/**
 * Remove event callback(s).  Return cancelEvents if a cancelError is specified.
 *
 * If query is the default query, we'll check all views for the specified eventRegistration.
 * If eventRegistration is null, we'll remove all callbacks for the specified view(s).
 *
 * @param eventRegistration - If null, remove all callbacks.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns removed queries and any cancel events
 */function(e,t,i,n){let r=t._queryIdentifier,s=[],o=[],a=ig(e);if("default"===r)for(let[t,r]of e.views.entries())o=o.concat(io(r,i,n)),is(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{// remove the callback from the specific view.
let t=e.views.get(r);t&&(o=o.concat(io(t,i,n)),is(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!ig(e)&&s.push(new((0,v.assert)(d,"Reference.ts has not been loaded"),d)(t._repo,t._path)),{removed:s,events:o}}(o,t,i,n);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let c=l.removed;if(a=l.events,!r){/**
             * We may have just removed one of many listeners and can short-circuit this whole process
             * We may also not have removed a default listener, in which case all of the descendant listeners should already be
             * properly set up.
             */// Since indexed queries can shadow if they don't have other query constraints, check for loadsAllData(), instead of
// queryId === 'default'
let i=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),r=e.syncPointTree_.findOnPath(s,(e,t)=>ig(t));if(i&&!r){let t=e.syncPointTree_.subtree(s);// There are potentially child listeners. Determine what if any listens we need to send before executing the
// removal
if(!t.isEmpty()){// We need to fold over our subtree and collect the listeners to send
let i=t.fold((e,t,i)=>{if(t&&ig(t)){let e=iy(t);return[e]}{// No complete view here, flatten any deeper listens into an array
let e=[];return t&&(e=id(t)),Q(i,(t,i)=>{e=e.concat(i)}),e}});// Ok, we've collected all the listens we need. Set them up.
for(let t=0;t<i.length;++t){let n=i[t],r=n.query,s=iT(e,n);e.listenProvider_.startListening(iL(r),iE(e,r),s.hashFn,s.onComplete)}}// Otherwise there's nothing below us, so nothing we need to start listening on
}r||!(c.length>0)||n||(i?e.listenProvider_.stopListening(iL(t),null):c.forEach(t=>{let i=e.queryToTagMap.get(iS(t));e.listenProvider_.stopListening(iL(t),i)}))}// Now, clear all of the tags we're tracking for the removed listens
(function(e,t){for(let i=0;i<t.length;++i){let n=t[i];if(!n._queryParams.loadsAllData()){// We should have a tag for this
let t=iS(n),i=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(i)}}})(e,c)}return a}/**
 * Apply new server data for the specified tagged query.
 *
 * @returns Events to raise.
 */function iC(e,t,i,n){let r=iR(e,n);if(null==r)return[];{let n=iP(r),s=n.path,o=n.queryId,a=ez(s,t),l=new tN(tk(o),a,i);return iA(e,s,l)}}/**
 * Returns a complete cache, if we have one, of the data at a particular path. If the location does not have a
 * listener above it, we will get a false "null". This shouldn't be a problem because transactions will always
 * have a listener above, and atomic operations would correctly show a jitter of <increment value> ->
 *     <incremented total> as the write is applied locally and then acknowledged at the server.
 *
 * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
 *
 * @param path - The path to the data we want
 * @param writeIdsToExclude - A specific set to be excluded
 */function iI(e,t,i){let n=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,i)=>{let n=ez(e,t),r=ip(i,n);if(r)return r});return tY(n,t,r,i,!0)}/**
 * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
 *
 * NOTES:
 * - Descendant SyncPoints will be visited first (since we raise events depth-first).
 *
 * - We call applyOperation() on each SyncPoint passing three things:
 *   1. A version of the Operation that has been made relative to the SyncPoint location.
 *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
 *   3. A snapshot Node with cached server data, if we have it.
 *
 * - We concatenate all of the events returned by each SyncPoint and return the result.
 */function iN(e,t){var i;return(/**
 * Recursive helper for applyOperationToSyncPoints_
 */function e(t,i,n,r){if(eF(t.path))return(/**
 * Recursive helper for applyOperationToSyncPoints_
 */function e(t,i,n,r){let s=i.get(eS());null==n&&null!=s&&(n=ip(s,eS()));let o=[];return i.children.inorderTraversal((i,s)=>{let a=n?n.getImmediateChild(i):null,l=t6(r,i),c=t.operationForChild(i);c&&(o=o.concat(e(c,s,a,l)))}),s&&(o=o.concat(iu(s,t,r,n))),o}(t,i,n,r));{let s=i.get(eS());null==n&&null!=s&&(n=ip(s,eS()));let o=[],a=eR(t.path),l=t.operationForChild(a),c=i.children.get(a);if(c&&l){let t=n?n.getImmediateChild(a):null,i=t6(r,a);o=o.concat(e(l,c,t,i))}return s&&(o=o.concat(iu(s,t,r,n))),o}}(t,e.syncPointTree_,/*serverCache=*/null,(i=e.pendingWriteTree_,t2(eS(),i))))}function iT(e,t){let i=t.query,n=iE(e,i);return{hashFn:()=>{let e=t.viewCache_.serverCache.getNode()||te.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t){var r;return n?/**
 * Apply a listen complete for a tagged query
 *
 * @returns Events to raise.
 */function(e,t,i){let n=iR(e,i);if(!n)return[];{let i=iP(n),r=i.path,s=i.queryId,o=ez(r,t),a=new tI(tk(s),o);return iA(e,r,a)}}(e,i._path,n):(r=i._path,iN(e,new tI(tx(),r)))}{// If a listen failed, kill all of the listeners here, not just the one that triggered the error.
// Note that this may need to be scoped to just this listener if we change permissions on filtered children
let n=/**
 * Converts a server error code to a Javascript Error
 */function(e,t){let i="Unknown Error";"too_big"===e?i="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?i="Client doesn't have permission to access the desired data.":"unavailable"===e&&(i="The service is unavailable");let n=Error(e+" at "+t._path.toString()+": "+i);return(// eslint-disable-next-line @typescript-eslint/no-explicit-any
n.code=e.toUpperCase(),n)}(t,i);return ik(e,i,/*eventRegistration*/null,n)}}}}/**
 * Return the tag associated with the given query.
 */function iE(e,t){let i=iS(t);return e.queryToTagMap.get(i)}/**
 * Given a query, computes a "queryKey" suitable for use in our queryToTagMap_.
 */function iS(e){return e._path.toString()+"$"+e._queryIdentifier}/**
 * Return the query associated with the given tag, if we have one
 */function iR(e,t){return e.tagToQueryMap.get(t)}/**
 * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
 */function iP(e){let t=e.indexOf("$");return(0,v.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new eE(e.substr(0,t))}}/**
 * A helper method to apply tagged operations
 */function iA(e,t,i){let n=e.syncPointTree_.get(t);(0,v.assert)(n,"Missing sync point for query tag that we're tracking");let r=t2(t,e.pendingWriteTree_);return iu(n,i,r,null)}/**
 * Normalizes a query to a query we send the server for listening
 *
 * @returns The normalized query
 */function iL(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,v.assert)(p,"Reference.ts has not been loaded"),p)(e._repo,e._path):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new iO(t)}node(){return this.node_}}class iD{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=eM(this.path_,e);return new iD(this.syncTree_,t)}node(){return iI(this.syncTree_,this.path_)}}/**
 * Value to use when firing local events. When writing server values, fire
 * local events with an approximate value, otherwise return value as-is.
 */let iM=function(e,t,i){return e&&"object"==typeof e?((0,v.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?iF(e[".sv"],t,i):"object"==typeof e[".sv"]?iz(e[".sv"],t):void(0,v.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},iF=function(e,t,i){if("timestamp"===e)return i.timestamp;(0,v.assert)(!1,"Unexpected server value: "+e)},iz=function(e,t,i){e.hasOwnProperty("increment")||(0,v.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let n=e.increment;"number"!=typeof n&&(0,v.assert)(!1,"Unexpected increment value: "+n);let r=t.node();// Incrementing a non-number sets the value to the incremented amount
if((0,v.assert)(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;let s=r.getValue();return"number"!=typeof s?n:s+n},iU=function(e,t,i){return iW(e,new iO(t),i)};function iW(e,t,i){let n;let r=e.getPriority().val(),s=iM(r,t.getImmediateChild(".priority"),i);if(!e.isLeafNode())return n=e,s!==e.getPriority().val()&&(n=n.updatePriority(new e2(s))),e.forEachChild(e5,(e,r)=>{let s=iW(r,t.getImmediateChild(e),i);s!==r&&(n=n.updateImmediateChild(e,s))}),n;{let n=iM(e.getValue(),t,i);return n!==e.getValue()||s!==e.getPriority().val()?new e2(n,ti(s)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A light-weight tree, traversable by path.  Nodes can have both values and children.
 * Nodes are not enumerated (by forEachChild) unless they have a value or non-empty
 * children.
 */class ij{/**
     * @param name - Optional name of the node.
     * @param parent - Optional parent node.
     * @param node - Optional node to wrap.
     */constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}/**
 * Returns a sub-Tree for the given path.
 *
 * @param pathObj - Path to look up.
 * @returns Tree for path.
 */function iq(e,t){// TODO: Require pathObj to be Path?
let i=t instanceof eE?t:new eE(t),n=e,r=eR(i);for(;null!==r;){let e=(0,v.safeGet)(n.node.children,r)||{children:{},childCount:0};n=new ij(r,n,e),r=eR(i=eA(i))}return n}/**
 * Returns the data associated with this tree node.
 *
 * @returns The data or null if no data exists.
 */function iB(e){return e.node.value}/**
 * Sets data to this tree node.
 *
 * @param value - Value to set.
 */function iH(e,t){e.node.value=t,/**
 * Adds or removes this child from its parent based on whether it's empty or not.
 */function e(t){null!==t.parent&&/**
 * Adds or removes the passed child to this tree node, depending on whether it's empty.
 *
 * @param childName - The name of the child to update.
 * @param child - The child to update.
 */function(t,i,n){let r=void 0===iB(n)&&!iV(n),s=(0,v.contains)(t.node.children,i);r&&s?(delete t.node.children[i],t.node.childCount--,e(t)):r||s||(t.node.children[i]=n.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}/**
 * @returns Whether the tree has any children.
 */function iV(e){return e.node.childCount>0}/**
 * Calls action for each child of this tree node.
 *
 * @param action - Action to be called for each child.
 */function i$(e,t){Q(e.node.children,(i,n)=>{t(new ij(i,e,n))})}/**
 * @returns The path of this tree node, as a Path.
 */function iX(e){return new eE(null===e.parent?e.name:iX(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * True for invalid Firebase keys
 */let iK=/[\[\].#$\/\u0000-\u001F\u007F]/,iG=/[\[\].#$\u0000-\u001F\u007F]/,iY=function(e){return"string"==typeof e&&0!==e.length&&!iK.test(e)},iJ=function(e){return"string"==typeof e&&0!==e.length&&!iG.test(e)},iQ=function(e,t,i,n){n&&void 0===t||iZ((0,v.errorPrefix)(e,"value"),t,i)},iZ=function(e,t,i){let n=i instanceof eE?new ej(i,e):i;if(void 0===t)throw Error(e+"contains undefined "+eB(n));if("function"==typeof t)throw Error(e+"contains a function "+eB(n)+" with contents = "+t.toString());if(B(t))throw Error(e+"contains "+t.toString()+" "+eB(n));// Check max leaf size, but try to avoid the utf8 conversion if we can.
if("string"==typeof t&&t.length>10485760/3&&(0,v.stringLength)(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+eB(n)+" ('"+t.substring(0,50)+"...')");// TODO = Perf = Consider combining the recursive validation of keys into NodeFromJSON
// to save extra walking of large objects.
if(t&&"object"==typeof t){let i=!1,r=!1;if(Q(t,(t,s)=>{if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!iY(t)))throw Error(e+" contains an invalid key ("+t+") "+eB(n)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(t),n.byteLength_+=(0,v.stringLength)(t),eq(n),iZ(e,s,n),function(e){let t=e.parts_.pop();e.byteLength_-=(0,v.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(n)}),i&&r)throw Error(e+' contains ".value" child '+eB(n)+" in addition to actual children.")}},i0=function(e,t,i,n){if((!n||void 0!==i)&&!iJ(i))throw Error((0,v.errorPrefix)(e,t)+'was an invalid path = "'+i+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},i1=function(e,t,i,n){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),i0(e,t,i,n)},i6=function(e,t){if(".info"===eR(t))throw Error(e+" failed = Can't modify data under /.info/")},i2=function(e,t){var i;// TODO = Validate server better.
let n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!iY(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&((i=n)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),!iJ(i)))throw Error((0,v.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The event queue serves a few purposes:
 * 1. It ensures we maintain event order in the face of event callbacks doing operations that result in more
 *    events being queued.
 * 2. raiseQueuedEvents() handles being called reentrantly nicely.  That is, if in the course of raising events,
 *    raiseQueuedEvents() is called again, the "inner" call will pick up raising events where the "outer" call
 *    left off, ensuring that the events are still raised synchronously and in order.
 * 3. You can use raiseEventsAtPath and raiseEventsForChangedPath to ensure only relevant previously-queued
 *    events are raised synchronously.
 *
 * NOTE: This can all go away if/when we move to async events.
 *
 */class i5{constructor(){this.eventLists_=[],/**
         * Tracks recursion depth of raiseQueuedEvents_, for debugging purposes.
         */this.recursionDepth_=0}}/**
 * @param eventDataList - The new events to queue.
 */function i3(e,t){// We group events by path, storing them in a single EventList, to make it easier to skip over them quickly.
let i=null;for(let n=0;n<t.length;n++){let r=t[n],s=r.getPath();null===i||eU(s,i.path)||(e.eventLists_.push(i),i=null),null===i&&(i={events:[],path:s}),i.events.push(r)}i&&e.eventLists_.push(i)}/**
 * Queues the specified events and synchronously raises all events (including previously queued ones) for
 * locations related to the specified change path (i.e. all ancestors and descendants).
 *
 * It is assumed that the new events are all related (ancestor or descendant) to the specified path.
 *
 * @param changedPath - The path to raise events for.
 * @param eventDataList - The events to raise
 */function i4(e,t,i){i3(e,i),function(e,t){e.recursionDepth_++;let i=!0;for(let n=0;n<e.eventLists_.length;n++){let r=e.eventLists_[n];if(r){let s=r.path;t(s)?(/**
 * Iterates through the list and raises each event
 */function(e){for(let t=0;t<e.events.length;t++){let i=e.events[t];if(null!==i){e.events[t]=null;let n=i.getEventRunner();O&&F("event: "+i.toString()),ei(n)}}}(e.eventLists_[n]),e.eventLists_[n]=null):i=!1}}i&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>eW(e,t)||eW(t,e))}/**
 * A connection to a single data repository.
 */class i9{constructor(e,t,i,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new i5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,/** A list of data pieces and paths to be set when this client disconnects. */this.onDisconnect_=ty(),/** Stores queues of outstanding transactions for Firebase locations. */this.transactionQueueTree_=new ij,// TODO: This should be @private but it's used by test_access.js and internal.js
this.persistentConnection_=null,// This key is intentionally not updated if RepoInfo is later changed or replaced
this.key=this.repoInfo_.toURLString()}/**
     * @returns The URL corresponding to the root of this Firebase.
     */toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}/**
 * Generate ServerValues using some variables from the repo object.
 */function i8(e){var t;return(t=t={timestamp:/**
 * @returns The time in milliseconds, taking the server offset into account if we have one.
 */function(e){let t=e.infoData_.getNode(new eE(".info/serverTimeOffset")),i=t.val()||0;return new Date().getTime()+i}(e)}).timestamp=t.timestamp||new Date().getTime(),t}/**
 * Called by realtime when we get new messages from the server.
 */function i7(e,t,i,n,r){// For testing.
e.dataUpdateCount++;let s=new eE(t);i=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,i):i;let o=[];if(r){if(n){let t=(0,v.map)(i,e=>ti(e));o=/**
 * Apply server data to be merged in for the specified tagged query.
 *
 * @returns Events to raise.
 */function(e,t,i,n){let r=iR(e,n);if(!r)return[];{let n=iP(r),s=n.path,o=n.queryId,a=ez(s,t),l=tF.fromObject(i),c=new tT(tk(o),a,l);return iA(e,s,c)}}(e.serverSyncTree_,s,t,r)}else{let t=ti(i);o=iC(e.serverSyncTree_,s,t,r)}}else if(n){let t=(0,v.map)(i,e=>ti(e));o=/**
 * Apply new server data to be merged in at the specified path.
 *
 * @returns Events to raise.
 */function(e,t,i){let n=tF.fromObject(i);return iN(e,new tT(tx(),t,n))}(e.serverSyncTree_,s,t)}else{let t=ti(i);o=ix(e.serverSyncTree_,s,t)}let a=s;o.length>0&&// is a proxy for some change having occurred.
(a=ns(e,s)),i4(e.eventQueue_,a,o)}function ne(e,t){nt(e,"connected",t),!1===t&&/**
 * Applies all of the changes stored up in the onDisconnect_ tree.
 */function(e){nn(e,"onDisconnectEvents");let t=i8(e),i=ty();t_(e.onDisconnect_,eS(),(n,r)=>{var s;let o=(s=e.serverSyncTree_,iW(r,new iD(s,n),t));!/**
 * Stores the given node at the specified path. If there is already a node
 * at a shallower path, it merges the new data into that snapshot node.
 *
 * @param path - Path to look up snapshot for.
 * @param data - The new data, or null.
 */function e(t,i,n){if(eF(i))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(i,n);else{let r=eR(i);t.children.has(r)||t.children.set(r,ty());let s=t.children.get(r);e(s,i=eA(i),n)}}(i,n,o)});let n=[];t_(i,eS(),(t,i)=>{n=n.concat(ix(e.serverSyncTree_,t,i));let r=nc(e,t);ns(e,r)}),e.onDisconnect_=ty(),i4(e.eventQueue_,eS(),n)}(e)}function nt(e,t,i){let n=new eE("/.info/"+t),r=ti(i);e.infoData_.updateSnapshot(n,r);let s=ix(e.infoSyncTree_,n,r);i4(e.eventQueue_,n,s)}function ni(e){return e.nextWriteId_++}function nn(e,...t){let i="";e.persistentConnection_&&(i=e.persistentConnection_.id+":"),F(i,...t)}/**
 * @param excludeSets - A specific set to exclude
 */function nr(e,t,i){return iI(e.serverSyncTree_,t,i)||te.EMPTY_NODE}/**
 * Finds all transactions dependent on the data at changedPath and reruns them.
 *
 * Should be called any time cached data changes.
 *
 * Return the highest path that was affected by rerunning transactions. This
 * is the path at which events need to be raised for.
 *
 * @param changedPath - The path in mergedData that changed.
 * @returns The rootmost path that was affected by rerunning transactions.
 */function ns(e,t){let i=no(e,t),n=iX(i),r=na(e,i);return(/**
 * Does all the work of rerunning transactions (as well as cleans up aborted
 * transactions and whatnot).
 *
 * @param queue - The queue of transactions to run.
 * @param path - The path the queue is for.
 */function(e,t,i){if(0===t.length)return;// Nothing to do!
// Queue up the callbacks and fire them after cleaning up all of our
// transaction state, since the callback could trigger more transactions or
// sets.
let n=[],r=[],s=t.filter(e=>0/* TransactionStatus.RUN */===e.status),o=s.map(e=>e.currentWriteId);for(let s=0;s<t.length;s++){let a=t[s],l=ez(i,a.path),c=!1,u;if((0,v.assert)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4/* TransactionStatus.NEEDS_ABORT */===a.status)c=!0,u=a.abortReason,r=r.concat(iw(e.serverSyncTree_,a.currentWriteId,!0));else if(0/* TransactionStatus.RUN */===a.status){if(a.retryCount>=25)c=!0,u="maxretry",r=r.concat(iw(e.serverSyncTree_,a.currentWriteId,!0));else{// This code reruns a transaction
let i=nr(e,a.path,o);a.currentInputSnapshot=i;let n=t[s].update(i.val());if(void 0!==n){iZ("transaction failed: Data returned ",n,a.path);let t=ti(n),s="object"==typeof n&&null!=n&&(0,v.contains)(n,".priority");s||(t=t.updatePriority(i.getPriority()));let l=a.currentWriteId,c=i8(e),u=iU(t,i,c);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=u,a.currentWriteId=ni(e),// Mutates setsToIgnore in place
o.splice(o.indexOf(l),1),r=(r=r.concat(ib(e.serverSyncTree_,a.path,u,a.currentWriteId,a.applyLocally))).concat(iw(e.serverSyncTree_,l,!0))}else c=!0,u="nodata",r=r.concat(iw(e.serverSyncTree_,a.currentWriteId,!0))}}i4(e.eventQueue_,i,r),r=[],c&&(// Abort.
t[s].status=2/* TransactionStatus.COMPLETED */,setTimeout(t[s].unwatcher,Math.floor(0)),t[s].onComplete&&("nodata"===u?n.push(()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot)):n.push(()=>t[s].onComplete(Error(u),!1,null))))}// Clean up completed transactions.
nl(e,e.transactionQueueTree_);// Now fire callbacks, now that we're in a good, known state.
for(let e=0;e<n.length;e++)ei(n[e]);// Try to send the transaction result to the server.
/**
 * Sends any already-run transactions that aren't waiting for outstanding
 * transactions to complete.
 *
 * Externally it's called with no arguments, but it calls itself recursively
 * with a particular transactionQueueTree node to recurse through the tree.
 *
 * @param node - transactionQueueTree node to start at.
 */(function e(t,i=t.transactionQueueTree_){if(i||nl(t,i),iB(i)){let n=na(t,i);(0,v.assert)(n.length>0,"Sending zero length transaction queue");let r=n.every(e=>0/* TransactionStatus.RUN */===e.status);r&&/**
 * Given a list of run transactions, send them to the server and then handle
 * the result (success or failure).
 *
 * @param path - The location of the queue.
 * @param queue - Queue of transactions under the specified location.
 */function(t,i,n){// Mark transactions as sent and increment retry count!
let r=n.map(e=>e.currentWriteId),s=nr(t,i,r),o=s,a=s.hash();for(let e=0;e<n.length;e++){let t=n[e];(0,v.assert)(0/* TransactionStatus.RUN */===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1/* TransactionStatus.SENT */,t.retryCount++;let r=ez(i,t.path);// If we've gotten to this point, the output snapshot must be defined.
o=o.updateChild(r/** @type {!Node} */,t.currentOutputSnapshotRaw)}let l=o.val(!0);// Send the put.
t.server_.put(i.toString(),l,r=>{nn(t,"transaction put response",{path:i.toString(),status:r});let s=[];if("ok"===r){// Queue up the callbacks and fire them after cleaning up all of our
// transaction state, since the callback could trigger more
// transactions or sets.
let r=[];for(let e=0;e<n.length;e++)n[e].status=2/* TransactionStatus.COMPLETED */,s=s.concat(iw(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&// transaction is complete, it should be set
r.push(()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved)),n[e].unwatcher();// Now remove the completed transactions.
nl(t,iq(t.transactionQueueTree_,i)),// There may be pending transactions that we can now send.
e(t,t.transactionQueueTree_),i4(t.eventQueue_,i,s);// Finally, trigger onComplete callbacks.
for(let e=0;e<r.length;e++)ei(r[e])}else{// transactions are no longer sent.  Update their status appropriately.
if("datastale"===r)for(let e=0;e<n.length;e++)3/* TransactionStatus.SENT_NEEDS_ABORT */===n[e].status?n[e].status=4/* TransactionStatus.NEEDS_ABORT */:n[e].status=0/* TransactionStatus.RUN */;else{j("transaction at "+i.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4/* TransactionStatus.NEEDS_ABORT */,n[e].abortReason=r}ns(t,i)}},a)}(t,iX(i),n)}else iV(i)&&i$(i,i=>{e(t,i)})})(e,e.transactionQueueTree_)}(e,r,n),n)}/**
 * Returns the rootmost ancestor node of the specified path that has a pending
 * transaction on it, or just returns the node for the given path if there are
 * no pending transactions on any ancestor.
 *
 * @param path - The location to start at.
 * @returns The rootmost node with a transaction.
 */function no(e,t){let i;// Start at the root and walk deeper into the tree towards path until we
// find a node with pending transactions.
let n=e.transactionQueueTree_;for(i=eR(t);null!==i&&void 0===iB(n);)n=iq(n,i),i=eR(t=eA(t));return n}/**
 * Builds the queue of all transactions at or below the specified
 * transactionNode.
 *
 * @param transactionNode
 * @returns The generated queue.
 */function na(e,t){// Walk any child transaction queues and aggregate them into a single queue.
let i=[];return function e(t,i,n){let r=iB(i);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);i$(i,i=>{e(t,i,n)})}(e,t,i),// Sort them by the order the transactions were created.
i.sort((e,t)=>e.order-t.order),i}/**
 * Remove COMPLETED transactions at or below this node in the transactionQueueTree_.
 */function nl(e,t){let i=iB(t);if(i){let e=0;for(let t=0;t<i.length;t++)2/* TransactionStatus.COMPLETED */!==i[t].status&&(i[e]=i[t],e++);i.length=e,iH(t,i.length>0?i:void 0)}i$(t,t=>{nl(e,t)})}/**
 * Aborts all transactions on ancestors or descendants of the specified path.
 * Called when doing a set() or update() since we consider them incompatible
 * with transactions.
 *
 * @param path - Path for which we want to abort related transactions.
 */function nc(e,t){let i=iX(no(e,t)),n=iq(e.transactionQueueTree_,t);return(/**
 * Calls action on each ancestor node.
 *
 * @param action - Action to be called on each parent; return
 *   true to abort.
 * @param includeSelf - Whether to call action on this node as well.
 * @returns true if the action callback returned true.
 */function(e,t,i){let n=e.parent;for(;null!==n;){if(t(n))return!0;n=n.parent}}(n,t=>{nu(e,t)}),nu(e,n),/**
 * Does a depth-first traversal of this node's descendants, calling action for each one.
 *
 * @param action - Action to be called for each child.
 * @param includeSelf - Whether to call action on this node as well. Defaults to
 *   false.
 * @param childrenFirst - Whether to call action on children before calling it on
 *   parent.
 */function e(t,i,n,r){n&&!r&&i(t),i$(t,t=>{e(t,i,!0,r)}),n&&r&&i(t)}(n,t=>{nu(e,t)}),i)}/**
 * Abort transactions stored in this transaction queue node.
 *
 * @param node - Node to abort transactions for.
 */function nu(e,t){let i=iB(t);if(i){// Queue up the callbacks and fire them after cleaning up all of our
// transaction state, since the callback could trigger more transactions
// or sets.
let n=[],r=[],s=-1;for(let t=0;t<i.length;t++)3/* TransactionStatus.SENT_NEEDS_ABORT */===i[t].status||(1/* TransactionStatus.SENT */===i[t].status?((0,v.assert)(s===t-1,"All SENT items should be at beginning of queue."),s=t,// Mark transaction for abort when it comes back.
i[t].status=3/* TransactionStatus.SENT_NEEDS_ABORT */,i[t].abortReason="set"):((0,v.assert)(0/* TransactionStatus.RUN */===i[t].status,"Unexpected transaction status in abort"),// We can abort it immediately.
i[t].unwatcher(),r=r.concat(iw(e.serverSyncTree_,i[t].currentWriteId,!0)),i[t].onComplete&&n.push(i[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?iH(t,void 0):i.length=s+1,// Now fire the callbacks.
i4(e.eventQueue_,iX(t),r);for(let e=0;e<n.length;e++)ei(n[e])}}let nh=function(e,t){let i=nd(e),n=i.namespace;"firebase.com"===i.domain&&W(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===i.domain||W("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||q();let r="ws"===i.scheme||"wss"===i.scheme;return{repoInfo:new eh(i.host,i.secure,n,r,t,/*persistenceKey=*/"",/*includeNamespaceInQueryParams=*/n!==i.subdomain),path:new eE(i.pathString)}},nd=function(e){// Default to empty strings in the event of a malformed string.
let t="",i="",n="",r="",s="",o=!0,a="https",l=443;// Don't do any validation here. The caller is responsible for validating the result of parsing.
if("string"==typeof e){// Parse scheme.
let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));// Parse host, path, and query string.
let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="",i=e.split("/");for(let e=0;e<i.length;e++)if(i[e].length>0){let n=i[e];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch(e){}t+="/"+n}return t}(e.substring(u,h)));let d=/**
 * @returns key value hash
 */function(e){let t={};for(let i of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===i.length)continue;let n=i.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):j(`Invalid query segment '${i}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));// If we have a port, use scheme for determining if it's secure.
(c=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;let p=t.slice(0,c);if("localhost"===p.toLowerCase())i="localhost";else if(p.split(".").length<=2)i=p;else{// Interpret the subdomain of a 3 or more component URL as the namespace name.
let e=t.indexOf(".");n=t.substring(0,e).toLowerCase(),i=t.substring(e+1),// Normalize namespaces to lowercase to share storage / connection.
s=n}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:i,subdomain:n,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Encapsulates the data needed to raise an event
 */class np{/**
     * @param eventType - One of: value, child_added, child_changed, child_moved, child_removed
     * @param eventRegistration - The function to call to with the event data. User provided
     * @param snapshot - The data backing the event
     * @param prevName - Optional, the name of the previous child for child_* events.
     */constructor(e,t,i,n){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=n}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,v.stringify)(this.snapshot.exportVal())}}class nf{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A wrapper class that converts events from the database@exp SDK to the legacy
 * Database SDK. Events are not converted directly as event registration relies
 * on reference comparison of the original user callback (see `matches()`) and
 * relies on equality of the legacy SDK's `context` object.
 */class nm{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,v.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @internal
 */class ng{/**
     * @hideconstructor
     */constructor(e,t,i,n){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=n}get key(){return eF(this._path)?null:eL(this._path)}get ref(){return new ny(this._repo,this._path)}get _queryIdentifier(){let e=tf(this._queryParams),t=Y(e);return"{}"===t?"default":t}/**
     * An object representation of the query parameters used by this Query.
     */get _queryObject(){return tf(this._queryParams)}isEqual(e){if(!((e=(0,v.getModularInstance)(e))instanceof ng))return!1;let t=this._repo===e._repo,i=eU(this._path,e._path),n=this._queryIdentifier===e._queryIdentifier;return t&&i&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let i=e.pieceNum_;i<e.pieces_.length;i++)""!==e.pieces_[i]&&(t+="/"+encodeURIComponent(String(e.pieces_[i])));return t||"/"}(this._path)}}/**
 * @internal
 */class ny extends ng{/** @hideconstructor */constructor(e,t){super(e,t,new td,!1)}get parent(){let e=eD(this._path);return null===e?null:new ny(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}/**
 * A `DataSnapshot` contains data from a Database location.
 *
 * Any time you read data from the Database, you receive the data as a
 * `DataSnapshot`. A `DataSnapshot` is passed to the event callbacks you attach
 * with `on()` or `once()`. You can extract the contents of the snapshot as a
 * JavaScript object by calling the `val()` method. Alternatively, you can
 * traverse into the snapshot by calling `child()` to return child snapshots
 * (which you could then call `val()` on).
 *
 * A `DataSnapshot` is an efficiently generated, immutable copy of the data at
 * a Database location. It cannot be modified and will never change (to modify
 * data, you always call the `set()` method on a `Reference` directly).
 */class n_{/**
     * @param _node - A SnapshotNode to wrap.
     * @param ref - The location this snapshot came from.
     * @param _index - The iteration order for this snapshot
     * @hideconstructor
     */constructor(e,/**
     * The location of this DataSnapshot.
     */t,i){this._node=e,this.ref=t,this._index=i}/**
     * Gets the priority value of the data in this `DataSnapshot`.
     *
     * Applications need not use priority but can order collections by
     * ordinary properties (see
     * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data |Sorting and filtering data}
     * ).
     */get priority(){// typecast here because we never return deferred values or internal priorities (MAX_PRIORITY)
return this._node.getPriority().val()}/**
     * The key (last part of the path) of the location of this `DataSnapshot`.
     *
     * The last token in a Database location is considered its key. For example,
     * "ada" is the key for the /users/ada/ node. Accessing the key on any
     * `DataSnapshot` will return the key for the location that generated it.
     * However, accessing the key on the root URL of a Database will return
     * `null`.
     */get key(){return this.ref.key}/** Returns the number of child properties of this `DataSnapshot`. */get size(){return this._node.numChildren()}/**
     * Gets another `DataSnapshot` for the location at the specified relative path.
     *
     * Passing a relative path to the `child()` method of a DataSnapshot returns
     * another `DataSnapshot` for the location at the specified relative path. The
     * relative path can either be a simple child name (for example, "ada") or a
     * deeper, slash-separated path (for example, "ada/name/first"). If the child
     * location has no data, an empty `DataSnapshot` (that is, a `DataSnapshot`
     * whose value is `null`) is returned.
     *
     * @param path - A relative path to the location of child data.
     */child(e){let t=new eE(e),i=nb(this.ref,e);return new n_(this._node.getChild(t),i,e5)}/**
     * Returns true if this `DataSnapshot` contains any data. It is slightly more
     * efficient than using `snapshot.val() !== null`.
     */exists(){return!this._node.isEmpty()}/**
     * Exports the entire contents of the DataSnapshot as a JavaScript object.
     *
     * The `exportVal()` method is similar to `val()`, except priority information
     * is included (if available), making it suitable for backing up your data.
     *
     * @returns The DataSnapshot's contents as a JavaScript value (Object,
     *   Array, string, number, boolean, or `null`).
     */// eslint-disable-next-line @typescript-eslint/no-explicit-any
exportVal(){return this._node.val(!0)}/**
     * Enumerates the top-level children in the `IteratedDataSnapshot`.
     *
     * Because of the way JavaScript objects work, the ordering of data in the
     * JavaScript object returned by `val()` is not guaranteed to match the
     * ordering on the server nor the ordering of `onChildAdded()` events. That is
     * where `forEach()` comes in handy. It guarantees the children of a
     * `DataSnapshot` will be iterated in their query order.
     *
     * If no explicit `orderBy*()` method is used, results are returned
     * ordered by key (unless priorities are used, in which case, results are
     * returned by priority).
     *
     * @param action - A function that will be called for each child DataSnapshot.
     * The callback can return true to cancel further enumeration.
     * @returns true if enumeration was canceled due to your callback returning
     * true.
     */forEach(e){if(this._node.isLeafNode())return!1;let t=this._node;// Sanitize the return value to a boolean. ChildrenNode.forEachChild has a weird return type...
return!!t.forEachChild(this._index,(t,i)=>e(new n_(i,nb(this.ref,t),e5)))}/**
     * Returns true if the specified child path has (non-null) data.
     *
     * @param path - A relative path to the location of a potential child.
     * @returns `true` if data exists at the specified child path; else
     *  `false`.
     */hasChild(e){let t=new eE(e);return!this._node.getChild(t).isEmpty()}/**
     * Returns whether or not the `DataSnapshot` has any non-`null` child
     * properties.
     *
     * You can use `hasChildren()` to determine if a `DataSnapshot` has any
     * children. If it does, you can enumerate them using `forEach()`. If it
     * doesn't, then either this snapshot contains a primitive value (which can be
     * retrieved with `val()`) or it is empty (in which case, `val()` will return
     * `null`).
     *
     * @returns true if this snapshot has any children; else false.
     */hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}/**
     * Returns a JSON-serializable representation of this object.
     */toJSON(){return this.exportVal()}/**
     * Extracts a JavaScript value from a `DataSnapshot`.
     *
     * Depending on the data in a `DataSnapshot`, the `val()` method may return a
     * scalar type (string, number, or boolean), an array, or an object. It may
     * also return null, indicating that the `DataSnapshot` is empty (contains no
     * data).
     *
     * @returns The DataSnapshot's contents as a JavaScript value (Object,
     *   Array, string, number, boolean, or `null`).
     */// eslint-disable-next-line @typescript-eslint/no-explicit-any
val(){return this._node.val()}}/**
 *
 * Returns a `Reference` representing the location in the Database
 * corresponding to the provided path. If no path is provided, the `Reference`
 * will point to the root of the Database.
 *
 * @param db - The database instance to obtain a reference for.
 * @param path - Optional path representing the location the returned
 *   `Reference` will point. If not provided, the returned `Reference` will
 *   point to the root of the Database.
 * @returns If a path is provided, a `Reference`
 *   pointing to the provided path. Otherwise, a `Reference` pointing to the
 *   root of the Database.
 */function nv(e,t){return(e=(0,v.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?nb(e._root,t):e._root}/**
 * Gets a `Reference` for the location at the specified relative path.
 *
 * The relative path can either be a simple child name (for example, "ada") or
 * a deeper slash-separated path (for example, "ada/name/first").
 *
 * @param parent - The parent location.
 * @param path - A relative path from this location to the desired child
 *   location.
 * @returns The specified child location.
 */function nb(e,t){return null===eR((e=(0,v.getModularInstance)(e))._path)?i1("child","path",t,!1):i0("child","path",t,!1),new ny(e._repo,eM(e._path,t))}/**
 * Writes data to this Database location.
 *
 * This will overwrite any data at this location and all child locations.
 *
 * The effect of the write will be visible immediately, and the corresponding
 * events ("value", "child_added", etc.) will be triggered. Synchronization of
 * the data to the Firebase servers will also be started, and the returned
 * Promise will resolve when complete. If provided, the `onComplete` callback
 * will be called asynchronously after synchronization has finished.
 *
 * Passing `null` for the new value is equivalent to calling `remove()`; namely,
 * all data at this location and all child locations will be deleted.
 *
 * `set()` will remove any priority stored at this location, so if priority is
 * meant to be preserved, you need to use `setWithPriority()` instead.
 *
 * Note that modifying data with `set()` will cancel any pending transactions
 * at that location, so extreme care should be taken if mixing `set()` and
 * `transaction()` to modify the same data.
 *
 * A single `set()` will generate a single "value" event at the location where
 * the `set()` was performed.
 *
 * @param ref - The location to write to.
 * @param value - The value to be written (string, number, boolean, object,
 *   array, or null).
 * @returns Resolves when write to server is complete.
 */function nw(e,t){i6("set",(e=(0,v.getModularInstance)(e))._path),iQ("set",t,e._path,!1);let i=new v.Deferred;return function(e,t,i,n,r){nn(e,"set",{path:t.toString(),value:i,priority:n});// TODO: Optimize this behavior to either (a) store flag to skip resolving where possible and / or
// (b) store unresolved paths on JSON parse
let s=i8(e),o=ti(i,n),a=iI(e.serverSyncTree_,t),l=iU(o,a,s),c=ni(e),u=ib(e.serverSyncTree_,t,l,c,!0);i3(e.eventQueue_,u),e.server_.put(t.toString(),o.val(/*export=*/!0),(i,n)=>{let s="ok"===i;s||j("set at "+t+" failed: "+i);let o=iw(e.serverSyncTree_,c,!s);i4(e.eventQueue_,t,o),r&&ei(()=>{if("ok"===i)r(null);else{let e=(i||"error").toUpperCase(),t=e;n&&(t+=": "+n);let s=Error(t);// eslint-disable-next-line @typescript-eslint/no-explicit-any
s.code=e,r(s)}})});let h=nc(e,t);ns(e,h),// We queued the events above, so just flush the queue here
i4(e.eventQueue_,h,[])}(e._repo,e._path,t,/*priority=*/null,i.wrapCallback(()=>{})),i.promise}/**
 * Gets the most up-to-date result for this query.
 *
 * @param query - The query to run.
 * @returns A `Promise` which resolves to the resulting DataSnapshot if a value is
 * available, or rejects if the client is unable to return a value (e.g., if the
 * server is unreachable and there is nothing cached).
 */function nx(e){e=(0,v.getModularInstance)(e);let t=new nm(()=>{}),i=new nk(t);return(/**
 * The purpose of `getValue` is to return the latest known value
 * satisfying `query`.
 *
 * This method will first check for in-memory cached values
 * belonging to active listeners. If they are found, such values
 * are considered to be the most up-to-date.
 *
 * If the client is not connected, this method will wait until the
 *  repo has established a connection and then request the value for `query`.
 * If the client is not able to retrieve the query result for another reason,
 * it reports an error.
 *
 * @param query - The query to surface a value for.
 */(function(e,t,i){// Only active queries are cached. There is no persisted cache.
let n=function(e,t){var i;let n=t._path,r=null;// Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
// Consider optimizing this once there's a better understanding of what actual behavior will be.
e.syncPointTree_.foreachOnPath(n,(e,t)=>{let i=ez(e,n);r=r||ip(t,i)});let s=e.syncPointTree_.get(n);s?r=r||ip(s,eS()):(s=new ic,e.syncPointTree_=e.syncPointTree_.set(n,s));let o=null!=r,a=o?new tE(r,!0,!1):null,l=(i=e.pendingWriteTree_,t2(t._path,i)),c=ih(s,t,l,o?a.getNode():te.EMPTY_NODE,o);return tO(c.viewCache_)}(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{let r;let s=ti(n).withIndex(t._queryParams.getIndex());if(/**
         * Below we simulate the actions of an `onlyOnce` `onValue()` event where:
         * Add an event registration,
         * Update data at the path,
         * Raise any events,
         * Cleanup the SyncTree
         *//**
 * Add an event callback for the specified query.
 *
 * @returns Events to raise.
 */function(e,t,i,n=!1){let r;let s=t._path,o=null,a=!1;// Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
// Consider optimizing this once there's a better understanding of what actual behavior will be.
e.syncPointTree_.foreachOnPath(s,(e,t)=>{let i=ez(e,s);o=o||ip(t,i),a=a||ig(t)});let l=e.syncPointTree_.get(s);if(l?(a=a||ig(l),o=o||ip(l,eS())):(l=new ic,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=o)r=!0;else{r=!1,o=te.EMPTY_NODE;let t=e.syncPointTree_.subtree(s);t.foreachChild((e,t)=>{let i=ip(t,eS());i&&(o=o.updateImmediateChild(e,i))})}let c=null!=im(l,t);if(!c&&!t._queryParams.loadsAllData()){// We need to track a tag for this query
let i=iS(t);(0,v.assert)(!e.queryToTagMap.has(i),"View does not exist, but we have a tag");let n=i_++;e.queryToTagMap.set(i,n),e.tagToQueryMap.set(n,i)}let u=t2(s,e.pendingWriteTree_),h=/**
 * Add an event callback for the specified query.
 *
 * @param query
 * @param eventRegistration
 * @param writesCache
 * @param serverCache - Complete server cache, if we have it.
 * @param serverCacheComplete
 * @returns Events to raise.
 */function(e,t,i,n,r,s){let o=ih(e,t,n,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),// This is guaranteed to exist now, we just created anything that was missing
function(e,t){e.eventRegistrations_.push(t)}(o,i),function(e,t){let i=e.viewCache_.eventCache,n=[];if(!i.getNode().isLeafNode()){let e=i.getNode();e.forEachChild(e5,(e,t)=>{n.push(to(e,t))})}return i.isFullyInitialized()&&n.push(ts(i.getNode())),il(e,n,i.getNode(),t)}(o,i)}(l,t,i,u,o,r);if(!c&&!a&&!n){let i=im(l,t);h=h.concat(/**
 * For a given new listen, manage the de-duplication of outstanding subscriptions.
 *
 * @returns This method can return events to support synchronous data sources
 */function(e,t,i){let n=t._path,r=iE(e,t),s=iT(e,i),o=e.listenProvider_.startListening(iL(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(n);// The root of this subtree has our query. We're here because we definitely need to send a listen for that, but we
// may need to shadow other listens as well.
if(r)(0,v.assert)(!ig(a.value),"If we're adding a query, it shouldn't be shadowed");else{// Shadow everything at or below this location, this is a default listener.
let t=a.fold((e,t,i)=>{if(!eF(e)&&t&&ig(t))return[iy(t).query];{// No default listener here, flatten any deeper queries into an array
let e=[];return t&&(e=e.concat(id(t).map(e=>e.query))),Q(i,(t,i)=>{e=e.concat(i)}),e}});for(let i=0;i<t.length;++i){let n=t[i];e.listenProvider_.stopListening(iL(n),iE(e,n))}}return o}(e,t,i))}}(e.serverSyncTree_,t,i,!0),t._queryParams.loadsAllData())r=ix(e.serverSyncTree_,t._path,s);else{let i=iE(e.serverSyncTree_,t);r=iC(e.serverSyncTree_,t._path,s,i)}return(/*
         * We need to raise events in the scenario where `get()` is called at a parent path, and
         * while the `get()` is pending, `onValue` is called at a child location. While get() is waiting
         * for the data, `onValue` will register a new event. Then, get() will come back, and update the syncTree
         * and its corresponding serverCache, including the child location where `onValue` is called. Then,
         * `onValue` will receive the event from the server, but look at the syncTree and see that the data received
         * from the server is already at the SyncPoint, and so the `onValue` callback will never get fired.
         * Calling `eventQueueRaiseEventsForChangedPath()` is the correct way to propagate the events and
         * ensure the corresponding child events will get fired.
         */i4(e.eventQueue_,t._path,r),ik(e.serverSyncTree_,t,i,null,!0),s)},i=>(nn(e,"get for query "+(0,v.stringify)(t)+" failed: "+i),Promise.reject(Error(i))))})(e._repo,e,i).then(t=>new n_(t,new ny(e._repo,e._path),e._queryParams.getIndex())))}/**
 * Represents registration for 'value' events.
 */class nk{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let i=t._queryParams.getIndex();return new np("value",this,new n_(e.snapshotNode,new ny(t._repo,t._path),i))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new nf(this,e,t):null}matches(e){return e instanceof nk&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}(0,v.assert)(!d,"__referenceConstructor has already been defined"),d=ny,(0,v.assert)(!p,"__referenceConstructor has already been defined"),p=ny;/**
 * Creates and caches `Repo` instances.
 */let nC={};/**
 * Class representing a Firebase Realtime Database.
 */class nI{/** @hideconstructor */constructor(e,/** The {@link @firebase/app#FirebaseApp} associated with this Realtime Database instance. */t){this._repoInternal=e,this.app=t,/** Represents a `Database` instance. */this.type="database",/** Track if the instance has been used (root or repo accessed) */this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,i){if(e.stats_=eg(e.repoInfo_),e.forceRestClient_||en())e.server_=new tm(e.repoInfo_,(t,i,n,r)=>{i7(e,t,i,n,r)},e.authTokenProvider_,e.appCheckProvider_),// Minor hack: Fire onConnect immediately, since there's no actual connection.
setTimeout(()=>ne(e,/* connectStatus= */!0),0);else{// Validate authOverride
if(null!=i){if("object"!=typeof i)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,v.stringify)(i)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new eV(e.repoInfo_,t,(t,i,n,r)=>{i7(e,t,i,n,r)},t=>{ne(e,t)},t=>{Q(t,(t,i)=>{nt(e,t,i)})},e.authTokenProvider_,e.appCheckProvider_,i),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),// In the case of multiple Repos for the same repoInfo (i.e. there are multiple Firebase.Contexts being used),
// we only want to create one StatsReporter.  As such, we'll report stats over the first Repo created.
e.statsReporter_=function(e,t){let i=e.toString();return em[i]||(em[i]=t()),em[i]}(e.repoInfo_,()=>new tb(e.stats_,e.server_)),// Used for .info.
e.infoData_=new tg,e.infoSyncTree_=new iv({startListening:(t,i,n,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ix(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),nt(e,"connected",!1),e.serverSyncTree_=new iv({startListening:(t,i,n,r)=>(e.server_.listen(t,n,i,(i,n)=>{let s=r(i,n);i4(e.eventQueue_,t._path,s)}),[]),stopListening:(t,i)=>{e.server_.unlisten(t,i)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ny(this._repo,eS())),this._rootInternal}_delete(){return null!==this._rootInternal&&(/**
 * Remove the repo and make sure it is disconnected.
 *
 */function(e,t){let i=nC[t];i&&i[e.key]===e||W(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete i[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&W("Cannot call "+e+" on a deleted database.")}}/**
 * Returns the instance of the Realtime Database SDK that is associated
 * with the provided {@link @firebase/app#FirebaseApp}. Initializes a new instance with
 * with default settings if no instance exists or if the existing instance uses
 * a custom database URL.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} instance that the returned Realtime
 * Database instance is associated with.
 * @param url - The URL of the Realtime Database instance to connect to. If not
 * provided, the SDK connects to the default instance of the Firebase App.
 * @returns The `Database` instance of the provided app.
 */function nN(e=(0,y.getApp)(),t){let i=(0,y._getProvider)(e,"database").getImmediate({identifier:t});if(!i._instanceStarted){let e=(0,v.getDefaultEmulatorHostnameAndPort)("database");e&&/**
 * Modify the provided instance to communicate with the Realtime Database
 * emulator.
 *
 * <p>Note: This method must be called before performing any other operation.
 *
 * @param db - The instance to modify.
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 8080)
 * @param options.mockUserToken - the mock auth token to use for unit testing Security Rules
 */function(e,t,i,n={}){var r;let s;(e=(0,v.getModularInstance)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&W("Cannot call useEmulator() after instance has already been initialized.");let o=e._repoInternal;if(o.repoInfo_.nodeAdmin)n.mockUserToken&&W('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ea(ea.OWNER);else if(n.mockUserToken){let t="string"==typeof n.mockUserToken?n.mockUserToken:(0,v.createMockUserToken)(n.mockUserToken,e.app.options.projectId);s=new ea(t)}r=s,o.repoInfo_=new eh(`${t}:${i}`,/* secure= */!1,o.repoInfo_.namespace,o.repoInfo_.webSocketOnly,o.repoInfo_.nodeAdmin,o.repoInfo_.persistenceKey,o.repoInfo_.includeNamespaceInQueryParams,/*isUsingEmulator=*/!0),r&&(o.authTokenProvider_=r)}(i,...e)}return i}// eslint-disable-next-line @typescript-eslint/no-explicit-any
eV.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},// eslint-disable-next-line @typescript-eslint/no-explicit-any
eV.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},C=y.SDK_VERSION,(0,y._registerComponent)(new(0,_.Component)("database",(e,{instanceIdentifier:t})=>{let i=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return(/**
 * This function should only ever be called to CREATE a new database instance.
 * @internal
 */function(e,t,i,n,r){var s,o;let a,l,c,u,h=n||e.options.databaseURL;void 0===h&&(e.options.projectId||W("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),F("Using default host for project ",e.options.projectId),h=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=nh(h,r),p=d.repoInfo;void 0!==w&&w.env&&(c=w.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(u=!0,p=(d=nh(h=`http://${c}?ns=${p.namespace}`,r)).repoInfo):u=!d.repoInfo.secure;let f=r&&u?new ea(ea.OWNER):new eo(e.name,e.options,t);i2("Invalid Firebase Database URL",d),eF(d.path)||W("Database URL must point to the root of a Firebase Database (not including a child path).");let m=(s=p,o=new es(e.name,i),(a=nC[e.name])||(a={},nC[e.name]=a),(l=a[s.toURLString()])&&W("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new i9(s,!1,f,o),a[s.toURLString()]=l,l);return new nI(m,e)}(i,n,r,t))},"PUBLIC"/* ComponentType.PUBLIC */).setMultipleInstances(!0)),(0,y.registerVersion)(x,k,void 0),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
(0,y.registerVersion)(x,k,"esm2017")}),s.register("23Ajj",function(e,t){window.addEventListener("scroll",function(){document.body.scrollTop>30||document.documentElement.scrollTop>30?i.style.display="flex":i.style.display="none"});let i=document.querySelector(".scroll-to-top");i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}),s.register("7hKzD",function(e,t){var n=s("dyT35"),r=s("ijBw2");let o=document.querySelector(".btn-footer"),a=n.create('<div class="modal-team"></div>',{onShow:()=>{document.addEventListener("keydown",c),document.body.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",c),document.body.style.overflow="visible"}});function l(e){a.close()}function c(e){"Escape"===e.code&&a.close()}o.addEventListener("click",function(){a.show();let e=document.querySelector(".modal-team");e.innerHTML=`<div class="modal modal-our-team container">
    <section class="our-team">
      <button class="modal-close-btn" type="button" aria-label="close">
        <img class="modal-close-svg" src="${/*@__PURE__*/i(r)}" alt="" width="24" height="24" loading="lazy"/>
      </button>
       <h2 class = "title-team">Team <span class = "title-shark">JS Sharks</span></h2>
      <ul class="list team-list">
      <li class = "team-item">
      <h3 class = "team-name">Oleh Luzhniak</h3>
      <p class = "team-position">Team leader, developed authorization feature</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Anna Matsarska</h3>

      <p class = "team-position">Scrum master, developed API connection, "Scroll Up" button, styles of shopping list page</p>

      </li>
      <li class = "team-item">
      <h3 class = "team-name">Anna Boichuk</h3>
      <p class = "team-position">Developed dark theme feature, footer, modal 'Our team'</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Bohdana Taraskina</h3>
      <p class = "team-position">Developed cards for books for each category</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Illia Osipov</h3>
      <p class = "team-position">Developed header</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Viktoria Lytvyn</h3>
      <p class = "team-position">Developed funds, mobile menu and header</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Vitalii Lisnychenko</h3>
      <p class = "team-position">Developed modal for book preview, modal for authorization </p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Vlad Kravchenko</h3>
      <p class = "team-position">Developed section All Categories, Scrollbar menu (added dark theme styles)</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">Yaroslav Dovgan</h3>
      <p class = "team-position">Developed pagination</p>
      </li>
      </ul>
    </section>
    </div>
    `;let t=document.querySelector(".modal-close-btn");t.addEventListener("click",l)})}),s.register("dyT35",function(e,t){e.exports=(function e(t,i,n){function r(o,a){if(!i[o]){if(!t[o]){var l=void 0;if(!a&&l)return l(o,!0);if(s)return s(o,!0);var c=Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[o]={exports:{}};t[o][0].call(u.exports,function(e){return r(t[o][1][e]||e)},u,u.exports,e,t,i,n)}return i[o].exports}for(var s=void 0,o=0;o<n.length;o++)r(n[o]);return r})({1:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=document.createElement("div");return i.innerHTML=e.trim(),!0===t?i.children:i.firstChild},r=function(e,t){var i=e.children;return 1===i.length&&i[0].tagName===t},s=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};i.visible=s,i.create=function(e,t){var i=function(e,t){var i=n('\n		<div class="basicLightbox '.concat(t.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	')),s=i.querySelector(".basicLightbox__placeholder");e.forEach(function(e){return s.appendChild(e)});var o=r(s,"IMG"),a=r(s,"VIDEO"),l=r(s,"IFRAME");return!0===o&&i.classList.add("basicLightbox--img"),!0===a&&i.classList.add("basicLightbox--video"),!0===l&&i.classList.add("basicLightbox--iframe"),i}(e=function(e){var t="string"==typeof e,i=e instanceof HTMLElement==1;if(!1===t&&!1===i)throw Error("Content must be a DOM element/node or string");return!0===t?Array.from(n(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(t)),o=function(e){var n;return!1!==t.onClose(a)&&(n=function(){if("function"==typeof e)return e(a)},i.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===s(i)||i.parentElement.removeChild(i),n()},410),!0)};!0===t.closable&&i.addEventListener("click",function(e){e.target===i&&o()});var a={element:function(){return i},visible:function(){return s(i)},show:function(e){var n;return!1!==t.onShow(a)&&(n=function(){if("function"==typeof e)return e(a)},document.body.appendChild(i),setTimeout(function(){requestAnimationFrame(function(){return i.classList.add("basicLightbox--visible"),n()})},10),!0)},close:o};return a}},{}]},{},[1])(1)}),s.register("ijBw2",function(e,t){e.exports=s("aNJCr").getBundleURL("iRn4P")+s("iE7OH").resolve("9Ox11")}),s.register("7ADRq",function(e,t){var n=s("dyT35"),r=s("ijBw2"),o=s("d0uJe");// import { markupShoppingList, shoppingListData } from './shopping-list/';
let a="up",l=n.create(`<div class="js-modal-auth">
    <div class="modal-uath">
        <button class="modal-uath-cls-btn" type="button" aria-label="close">
            <img  class="modal-close-svg" src="${/*@__PURE__*/i(r)}" alt="" width="24" height="24" loading="lazy">
        </button>

        <form class="signin-form js-signup-form">
            <div class="userdata-inputs">

              <input class="userdata-input name js-name" type="text" name="name" id="name" placeholder="NAME">            
              <input class="userdata-input mail" type="email"  name="email" id="mail" placeholder="MAIL" required>            
              <input class="userdata-input password" type="password" name="password" id="password" placeholder="PASSWORD" required>            
              <button class="sing-btn js-sing-btn" type="submit">
                  SIGN UP
              </button>
            </div>
        </form>
        <div class="sign">
            <a href="" class="sign-active js-choose-signup">SIGN UP</a>
            <a href="" class="js-choose-signin">SIGN IN</a>
        </div>
  </div>
</div>`,{onShow:()=>{document.addEventListener("keydown",u),document.body.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",u),document.body.style.overflow="visible"}});function c(e){l.close()}function u(e){"Escape"===e.code&&l.close()}let h=document.querySelectorAll(".js-signin-btn");function d(e){e.preventDefault();let{elements:{name:t,email:i,password:n}}=e.currentTarget;if(""===i.value||""===n.value)return alert("Please fill in all the fields!");let r={name:t.value,email:i.value,password:n.value};e.currentTarget.reset(),"up"===a?(0,o.user).signUpUser(r.name,r.email,r.password,o.authVisual):(0,o.user).signInUser(r.email,r.password,o.authVisual),l.close()}h.forEach(e=>e.addEventListener("click",e=>{l.show();let t=document.querySelector(".js-sing-btn"),i=document.querySelector(".modal-uath-cls-btn");i.addEventListener("click",c);let n=document.querySelector(".js-signup-form");n.addEventListener("submit",d);let r=document.querySelector(".js-choose-signin"),s=document.querySelector(".js-name");r.addEventListener("click",e=>{e.preventDefault(),a="in",t.textContent="SIGN IN",s.style.display="none",r.classList.add("sign-active"),o.classList.remove("sign-active")});let o=document.querySelector(".js-choose-signup");o.addEventListener("click",e=>{e.preventDefault(),a="up",t.textContent="SIGN UP",s.style.display="block",r.classList.remove("sign-active"),o.classList.add("sign-active")})}))})}();//# sourceMappingURL=index.e99b2b8d.js.map

//# sourceMappingURL=index.e99b2b8d.js.map
