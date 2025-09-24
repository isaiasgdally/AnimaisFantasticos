export default function funcionamento() {
  const funcionamento = document.querySelector('[data-semana="1,2,3,4,5"]');
  if (!funcionamento) return;

  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioFunc = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const aberto = diasSemana.includes(diaAgora);
  const horarioAberto =
    horarioAgora >= horarioFunc[0] && horarioAgora < horarioFunc[1];

  if (aberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
