const nav = document.getElementById("nav");
const btnMobile = document.getElementById("btn-mobile");

btnMobile?.addEventListener("click", () => {
  nav?.classList.toggle("active");
  btnMobile.ariaLabel =
    btnMobile?.ariaLabel === "Fechar Menu" ? "Abrir Menu" : "Fechar Menu";
  btnMobile.ariaExpanded =
    btnMobile?.ariaExpanded === "false" ? "true" : "false";
});
