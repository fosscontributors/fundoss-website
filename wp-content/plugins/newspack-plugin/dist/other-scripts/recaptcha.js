(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e),window.newspack_grecaptcha=window.newspack_grecaptcha||{widgets:{},getCaptchaV3Token:function(){return new Promise(((e,t)=>{if(!grecaptcha||!a)return e("");grecaptcha?.ready||t("Error loading the reCAPTCHA library."),grecaptcha.ready((()=>{grecaptcha.execute(c,{action:"submit"}).then((t=>e(t))).catch((e=>t(e)))}))}))}};const t="v2"===newspack_recaptcha_data.version.substring(0,2),a="v3"===newspack_recaptcha_data.version,c=newspack_recaptcha_data.site_key,n="v2_invisible"===newspack_recaptcha_data.version;var r,o;function i(){[...document.querySelectorAll(".grecaptcha-container")].forEach((e=>{const a=e.id,r=e.closest("form"),o=n&&r&&[...r.querySelectorAll('input[type="submit"], button[type="submit"]')],i={sitekey:c,size:n?"invisible":"normal"};t&&n&&0<o.length&&o.forEach((t=>{t.addEventListener("click",(e=>e.preventDefault())),i.callback=()=>r.requestSubmit(t);const c=grecaptcha.render(t||e,i);newspack_grecaptcha.widgets[a]=c}))}))}t&&(r=function(){grecaptcha.ready((function(){i()}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",r):r())),(o=jQuery)&&(o(document).on("updated_checkout",i),o(document.body).on("checkout_error",(function(){if(t){const{widgets:e}=newspack_grecaptcha;for(const t in e)grecaptcha.reset(newspack_grecaptcha.widgets[t])}})));var d=window;for(var s in e)d[s]=e[s];e.__esModule&&Object.defineProperty(d,"__esModule",{value:!0})})();