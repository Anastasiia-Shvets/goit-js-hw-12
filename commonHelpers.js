import{a as b,S as w,i as E}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const s={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};async function g(t,r){const i="42280765-41e7252ac679e023dc9db9847",o="https://pixabay.com/api/",n={key:i,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await b.get(o,{params:n})).data.hits.map(a=>({id:a.id,imageUrl:a.largeImageURL,webformatURL:a.webformatURL,alt:a.tags,likes:a.likes,views:a.views,comments:a.comments,downloads:a.downloads}))}catch(c){throw console.error("There has been a problem with your axios request:",c),c}}function v(t){const{imageUrl:r,webformatURL:i,alt:l,likes:e,views:o,comments:n,downloads:c}=t;return`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${r}">
    <img
        class="gallery-image"
        src="${i}"
        alt="${l}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <p class="item-text">Likes: ${e}</p>
    <p class="item-text">Views: ${o}</p>
    <p class="item-text">Comments: ${n}</p>
    <p class="item-text">Downloads: ${c}</p>
    </div>
    </div>
    </li>`}function S(t){return t.map(v).join("")}const x=new w(".gallery a",{captionsData:"alt",captionDelay:250});x.refresh();let m,d,f;s.formElem.addEventListener("submit",q);s.btnLoadMore.addEventListener("click",M);async function q(t){if(t.preventDefault(),m=t.target.elements.query.value.trim(),d=1,!m){u("Please enter text to search for.");return}L();try{const r=await g(m,d);if(console.log(r),r.length===0){u("Sorry, there are no images matching your search query. Please try again!"),y();return}f=Math.ceil(r.totalHits/15),s.listElem.innerHTML="",p(r)}catch(r){u(r.message),f=0,s.listElem.innerHTML=""}y(),h(),t.target.reset()}async function M(){d+=1,L();const t=await g(m,d);p(t),y(),h()}function p(t){const r=S(t);s.listElem.insertAdjacentHTML("beforeend",r)}function P(){s.btnLoadMore.classList.remove("hidden")}function T(){s.btnLoadMore.classList.add("hidden")}function h(){d>=f?(T(),u("We're sorry, but you've reached the end of search results.")):P()}function L(){s.loadElem.classList.remove("hidden")}function y(){s.loadElem.classList.add("hidden")}function u(t){E.error({title:"Error",message:t,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
