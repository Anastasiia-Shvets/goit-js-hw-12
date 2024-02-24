import{a as L,S as b,i as E}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const o={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};async function h(t,r){const a="42280765-41e7252ac679e023dc9db9847",s="https://pixabay.com/api/",i={key:a,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await L.get(s,{params:i})).data}catch(n){throw console.error("There has been a problem with your axios request:",n),n}}function w(t){const{imageUrl:r,webformatURL:a,alt:l,likes:e,views:s,comments:i,downloads:n}=t;return`<li class="gallery-item">
    <div class="gallery">
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
    <ul class="list-item">Likes<li class="item">${s}</li></ul>
    <ul class="list-item">Likes<li class="item">${i}</li></ul>
    <ul class="list-item">Likes<li class="item">${n}</li></ul>
    </div>
    </div>
    </li>`}function v(t){return t.map(w).join("")}const S=new b(".gallery a",{captionsData:"alt",captionDelay:250});S.refresh();let u,c,m;o.formElem.addEventListener("submit",q);o.btnLoadMore.addEventListener("click",M);async function q(t){if(t.preventDefault(),u=t.target.elements.query.value.trim(),c=1,!u){d("Please enter text to search for.");return}p();try{const r=await h(u,c);if(console.log(r),r.length===0){d("Sorry, there are no images matching your search query. Please try again!"),f();return}m=Math.ceil(r.totalHits/15),o.listElem.innerHTML="",y(r)}catch(r){d(r.message),m=0,o.listElem.innerHTML=""}f(),g(),t.target.reset()}async function M(){c+=1,p();const t=await h(u,c);y(t),f(),g()}function y(t){const r=v(t);o.listElem.insertAdjacentHTML("beforeend",r)}function P(){o.btnLoadMore.classList.remove("hidden")}function T(){o.btnLoadMore.classList.add("hidden")}function g(){c>=m?(T(),d("We're sorry, but you've reached the end of search results.")):P()}function p(){o.loadElem.classList.remove("hidden")}function f(){o.loadElem.classList.add("hidden")}function d(t){E.error({title:"Error",message:t,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
