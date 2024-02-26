import{a as E,S as w,i as h}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const s={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};async function p(o,t){const i="42280765-41e7252ac679e023dc9db9847",r="https://pixabay.com/api/",a={key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};try{return(await E.get(r,{params:a})).data}catch(n){throw console.error("There has been a problem with your axios request:",n),n}}function S(o){const{largeImageURL:t,webformatURL:i,tags:l,likes:e,views:r,comments:a,downloads:n}=o;return`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${t}">
    <img
        class="gallery-image"
        src="${i}"
        alt="${l}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <ul class="list-item">Likes<li class="item">${e}</li></ul>
    <ul class="list-item">Views<li class="item">${r}</li></ul>
    <ul class="list-item">Comments<li class="item">${a}</li></ul>
    <ul class="list-item">Downloads<li class="item">${n}</li></ul>
    </div>
    </div>
    </li>`}function v(o){return o.map(S).join("")}let u,d,c,f;s.formElem.addEventListener("submit",q);s.btnLoadMore.addEventListener("click",P);async function q(o){if(o.preventDefault(),d=o.target.elements.query.value.trim(),c=1,!d){m("Please enter text to search for.");return}L();try{const t=await p(d,c);if(t.totalHits===0){m("Sorry, there are no images matching your search query. Please try again!"),b();return}f=Math.ceil(t.totalHits/15),s.listElem.innerHTML="",y(t.hits)}catch(t){m(t.message),f=0,s.listElem.innerHTML=""}g(),o.target.reset()}async function P(){c+=1,L();const o=await p(d,c);y(o.hits),b(),g();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}function y(o){const t={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250},i=v(o);s.listElem.insertAdjacentHTML("beforeend",i),u&&u.destroy(),u=new w(".gallery a",t)}function M(){s.btnLoadMore.classList.remove("hidden")}function T(){s.btnLoadMore.classList.add("hidden")}function g(){c>=f?(T(),$()):M()}function L(){s.loadElem.classList.remove("hidden")}function b(){s.loadElem.classList.add("hidden")}function m(o){h.error({title:"Error",message:o,position:"topRight"})}function $(){h.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
