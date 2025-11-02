function toggleMenu() {
  const menu = document.getElementById("menu");

  // Se estiver fechado, abre
  if (menu.classList.contains("menu-fechado")) {
    menu.classList.remove("menu-fechado");
    menu.classList.add("menu-aberto");
  } else {
    // Se estiver aberto, fecha
    menu.classList.remove("menu-aberto");
    menu.classList.add("menu-fechado");
  }
}
// Mostrar o botão quando rolar para baixo
window.addEventListener("scroll", function () {
  const botao = document.getElementById("btn-topo");
  if (window.scrollY > 300) {
    botao.classList.add("mostrar");
  } else {
    botao.classList.remove("mostrar");
  }
});

// Função para voltar ao topo suavemente
function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
