export default function modalLogin() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", clickForaModal);

    function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.add("ativo");
    }

    function fecharModal(event) {
      event.preventDefault();
      containerModal.classList.remove("ativo");
    }

    function clickForaModal(event) {
      if (event.target === this) fecharModal(event);
    }
  }
}
