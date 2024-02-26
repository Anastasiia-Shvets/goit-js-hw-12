import{a as b,S as E,i as f}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const s={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};async function h(r,t){const a="42280765-41e7252ac679e023dc9db9847",o="https://pixabay.com/api/",i={key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};try{return(await b.get(o,{params:i})).data}catch(n){throw console.error("There has been a problem with your axios request:",n),n}}function w(r){const{largeImageURL:t,webformatURL:a,tags:l,likes:e,views:o,comments:i,downloads:n}=r;return`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${t}">
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
    </li>`}function v(r){return r.map(w).join("")}let d,c,m;s.formElem.addEventListener("submit",S);s.btnLoadMore.addEventListener("click",q);async function S(r){if(r.preventDefault(),d=r.target.elements.query.value.trim(),c=1,!d){u("Please enter text to search for.");return}p();try{const t=await h(d,c);if(t.totalHits===0){u("Sorry, there are no images matching your search query. Please try again!");return}m=Math.ceil(t.totalHits/15),s.listElem.innerHTML="",g(t.hits)}catch(t){u(t.message),m=0,s.listElem.innerHTML=""}L(),y(),r.target.reset()}async function q(){c+=1,p();const r=await h(d,c);g(r.hits),L(),y();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}function g(r){const t=v(r);s.listElem.insertAdjacentHTML("beforeend",t),new E(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function M(){s.btnLoadMore.classList.remove("hidden")}function P(){s.btnLoadMore.classList.add("hidden")}function y(){c>=m?(P(),T()):M()}function p(){s.loadElem.classList.remove("hidden")}function L(){s.loadElem.classList.add("hidden")}function u(r){f.error({title:"Error",message:r,position:"topRight"})}function T(){f.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
