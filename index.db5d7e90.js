!function(){var e,t,n,d,o,c;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".menu-buy-btn"),d=document.querySelector(".header-buy-btn"),o=document.querySelector("[data-modal-close]"),c=document.querySelector("[data-modal]"),n.addEventListener("click",(function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.remove("is-open"),c.classList.remove("is-hidden"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)})),d.addEventListener("click",(function(){c.classList.remove("is-hidden")})),o.addEventListener("click",(function(){c.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.db5d7e90.js.map
