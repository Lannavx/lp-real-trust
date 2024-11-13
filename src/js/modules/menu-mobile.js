export default function menuMobile() {
  const btnMobile = document.querySelector("#btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector("#menu");
    nav.classList.toggle("active");
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}
