(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".menu-buy-btn"),d=document.querySelector(".header-buy-btn"),c=document.querySelector("[data-modal-close]"),n=document.querySelector("[data-modal]");o.addEventListener("click",(()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.remove("is-open"),n.classList.remove("is-hidden");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)})),d.addEventListener("click",(()=>{n.classList.remove("is-hidden")})),c.addEventListener("click",(()=>{n.classList.add("is-hidden")}));document.querySelector("[about-modal-open]"),document.querySelector("[about-modal-close]"),document.querySelector("[about-modal]")})();
//# sourceMappingURL=index.afb79aa6.js.map