import{a as m,S as d,i as u}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const i={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector("btn-load-more")};async function f(r){const s="42280765-41e7252ac679e023dc9db9847",e="https://pixabay.com/api/",t={key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15};try{return(await m.get(e,{params:t})).data.hits.map(a=>({id:a.id,imageUrl:a.largeImageURL,webformatURL:a.webformatURL,alt:a.tags,likes:a.likes,views:a.views,comments:a.comments,downloads:a.downloads}))}catch(o){throw console.error("There has been a problem with your axios request:",o),o}}function p(r){const{imageUrl:s,webformatURL:l,alt:n,likes:e,views:t,comments:o,downloads:c}=r;return`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${s}">
    <img
        class="gallery-image"
        src="${l}"
        alt="${n}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <p class="item-text">Likes: ${e}</p>
    <p class="item-text">Views: ${t}</p>
    <p class="item-text">Comments: ${o}</p>
    <p class="item-text">Downloads: ${c}</p>
    </div>
    </div>
    </li>`}function y(r){return r.map(p).join("")}const g=new d(".gallery a",{captionsData:"alt",captionDelay:250});g.refresh();i.loadElem.style.display="none";i.formElem.addEventListener("submit",h);async function h(r){r.preventDefault();const s=r.target.elements.query.value.trim();if(!s){u.error({title:"Sorry",message:"Please enter text to search for.",position:"topRight"});return}i.loadElem.style.display="blok";const l=await f(s);i.listElem.innerHTML="",b(l),i.loadElem.style.display="none",r.target.reset()}function b(r){const s=y(r);i.listElem.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=commonHelpers.js.map
