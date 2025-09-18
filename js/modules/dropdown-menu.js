import outsideClick from "./outsideclick.js";

export default function dropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    menu.addEventListener("click", handleClick);
    menu.addEventListener("touchstart", handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    outsideClick(this, () => {
      this.classList.remove("ativo");
    });
  }
}
