// import outsideClick from "./outsideclick.js";

export default function menuMobile() {
  const menuBt = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  menuBt.addEventListener("click", abrirMenu);
  function abrirMenu(event) {
    menuList.classList.toggle("ativo");
    menuBt.classList.toggle("ativo");
  }
}
