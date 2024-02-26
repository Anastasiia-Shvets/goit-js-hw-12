import{a as L,i as b}from"./assets/vendor-a396f72f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const s={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};async function f(t,r){const a="42280765-41e7252ac679e023dc9db9847",o="https://pixabay.com/api/",i={key:a,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await L.get(o,{params:i})).data}catch(n){throw console.error("There has been a problem with your axios request:",n),n}}function E(t){const{imageUrl:r,webformatURL:a,alt:l,likes:e,views:o,comments:i,downloads:n}=t;return`<li class="gallery-item">
    <div class="gallery-card">
    <a class="gallery-link" href="${r}">
    <img
        class="gallery-image"
        src="${a}"
        alt="${l}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <ul class="list-item">Likes<li class="item">${e}</li></ul>
    <ul class="list-item">Views<li class="item">${o}</li></ul>
    <ul class="list-item">Comments<li class="item">${i}</li></ul>
    <ul class="list-item">Downloads<li class="item">${n}</li></ul>
    </div>
    </div>
    </li>`}function w(t){return t.map(E).join("")}let d,c,m;s.formElem.addEventListener("submit",v);s.btnLoadMore.addEventListener("click",q);async function v(t){if(t.preventDefault(),d=t.target.elements.query.value.trim(),c=1,!d){u("Please enter text to search for.");return}g();try{const r=await f(d,c);if(r.totalHits===0){u("Sorry, there are no images matching your search query. Please try again!");return}m=Math.ceil(r.totalHits/15),s.listElem.innerHTML="",h(r.hits)}catch(r){u(r.message),m=0,s.listElem.innerHTML=""}p(),y(),t.target.reset()}async function q(){c+=1,g();const t=await f(d,c);h(t.hits),p(),y(),$()}function h(t){const r=w(t);s.listElem.insertAdjacentHTML("beforeend",r)}function S(){s.btnLoadMore.classList.remove("hidden")}function M(){s.btnLoadMore.classList.add("hidden")}function y(){c>=m?(M(),u("We're sorry, but you've reached the end of search results.")):S()}function g(){s.loadElem.classList.remove("hidden")}function p(){s.loadElem.classList.add("hidden")}function u(t){b.error({title:"Error",message:t,position:"topRight"})}const P=document.querySelector(".gallery-card"),T=P.getBoundingClientRect().height;function $(){window.scrollBy({top:T*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
