import{a as b,S as w,i as E}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const o={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};async function p(t,r){const n="42280765-41e7252ac679e023dc9db9847",s="https://pixabay.com/api/",i={key:n,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await b.get(s,{params:i})).data.hits.map(a=>({id:a.id,imageUrl:a.largeImageURL,webformatURL:a.webformatURL,alt:a.tags,likes:a.likes,views:a.views,comments:a.comments,downloads:a.downloads}))}catch(c){throw console.error("There has been a problem with your axios request:",c),c}}function v(t){const{imageUrl:r,webformatURL:n,alt:l,likes:e,views:s,comments:i,downloads:c}=t;return`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${r}">
    <img
        class="gallery-image"
        src="${n}"
        alt="${l}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <p class="item-text">Likes: ${e}</p>
    <p class="item-text">Views: ${s}</p>
    <p class="item-text">Comments: ${i}</p>
    <p class="item-text">Downloads: ${c}</p>
    </div>
    </div>
    </li>`}function S(t){return t.map(v).join("")}const x=new w(".gallery a",{captionsData:"alt",captionDelay:250});x.refresh();let m,d,f;o.formElem.addEventListener("submit",q);o.btnLoadMore.addEventListener("click",M);async function q(t){if(t.preventDefault(),m=t.target.elements.query.value.trim(),d=1,!m){u("Please enter text to search for.");return}L();try{const r=await p(m,d);if(f=Math.ceil(r.totalHits/15),r.length===0){u("Sorry, there are no images matching your search query. Please try again!"),y();return}o.listElem.innerHTML="",g(r)}catch(r){u(r.message),f=0,o.listElem.innerHTML=""}h(),y(),t.target.reset()}async function M(){d+=1,L();const t=await p(m,d);g(t),y(),h()}function g(t){const r=S(t);o.listElem.insertAdjacentHTML("beforeend",r)}function P(){o.btnLoadMore.classList.remove("hidden")}function T(){o.btnLoadMore.classList.add("hidden")}function h(){d>=f?(T(),u("We're sorry, but you've reached the end of search results.")):P()}function L(){o.loadElem.classList.remove("hidden")}function y(){o.loadElem.classList.add("hidden")}function u(t){E.error({title:"Error",message:t,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
