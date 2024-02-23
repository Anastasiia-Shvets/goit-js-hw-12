import{a as g,S as h,i as L}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};async function u(r,o){const n="42280765-41e7252ac679e023dc9db9847",t="https://pixabay.com/api/",i={key:n,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{return(await g.get(t,{params:i})).data.hits.map(s=>({id:s.id,imageUrl:s.largeImageURL,webformatURL:s.webformatURL,alt:s.tags,likes:s.likes,views:s.views,comments:s.comments,downloads:s.downloads}))}catch(c){throw console.error("There has been a problem with your axios request:",c),c}}function b(r){const{imageUrl:o,webformatURL:n,alt:l,likes:e,views:t,comments:i,downloads:c}=r;return`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${o}">
    <img
        class="gallery-image"
        src="${n}"
        alt="${l}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <p class="item-text">Likes: ${e}</p>
    <p class="item-text">Views: ${t}</p>
    <p class="item-text">Comments: ${i}</p>
    <p class="item-text">Downloads: ${c}</p>
    </div>
    </div>
    </li>`}function w(r){return r.map(b).join("")}const E=new h(".gallery a",{captionsData:"alt",captionDelay:250});E.refresh();let m,d,f;a.formElem.addEventListener("submit",v);a.btnLoadMore.addEventListener("click",S);async function v(r){if(r.preventDefault(),m=r.target.elements.query.value.trim(),d=1,!m){L.error({title:"Sorry",message:"Please enter text to search for.",position:"topRight"});return}a.loadElem.style.display="blok";const o=await u(m,d);console.log(o),f=Math.ceil().totalHits/15,a.listElem.innerHTML="",p(o),y(),a.loadElem.style.display="none",r.target.reset()}async function S(){d+=1;const r=await u(m,d);p(r),y()}function p(r){const o=w(r);a.listElem.insertAdjacentHTML("beforeend",o)}function x(){a.btnLoadMore.classList.remove("hidden")}function q(){a.btnLoadMore.classList.add("hidden")}function y(){d>=f?q():x()}
//# sourceMappingURL=commonHelpers.js.map
