import"./assets/modulepreload-polyfill-3cfb730f.js";const n=document.querySelector(".feedback-form");function o(e){const t=e.email.value,a=e.message.value;return{mail:t,message:a}}n.addEventListener("input",e=>{e.preventDefault();const t=o(e.currentTarget),a=JSON.stringify(t);localStorage.setItem("message",a)});
//# sourceMappingURL=commonHelpers2.js.map
