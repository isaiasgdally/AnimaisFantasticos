export default function accordionList() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );

  accordionList[0].classList.add("ativo");
  accordionList[0].nextElementSibling.classList.add("ativo");

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

console.log("Accordion funcionou");
