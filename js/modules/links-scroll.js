export default function linksIntScroll() {
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

console.log("Scroll links internos funcionou");
