// NAVEGAÇÃO POR TAB
function tabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcAnimacao = tabContent[index].dataset.anime
      tabContent[index].classList.add("ativo", direcAnimacao); 
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
tabNav();

//ACCORDION LIST
function accordionNav() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

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
accordionNav();

//SCROLL SUAVE(links internos)
function linksIntScroll() {
  const linksInternos = document.querySelectorAll('[data="menu"] a[href^="#"]');

  function scrollToSections(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((links) => {
    links.addEventListener("click", scrollToSections);
  });
}
linksIntScroll();

//ANIMAÇÃO AO SCROLL
function scrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
scrollAnimation();
