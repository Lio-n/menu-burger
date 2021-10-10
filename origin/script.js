(function main() {
  const menuBurgerEl = document.querySelector("#menu-burger");
  const navEl = document.querySelector(".nav");
  let boolean = false;
  let item = document.querySelector(".burger__item");
  menuBurgerEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!boolean) {
      item.classList.add("equis__item");
      item.classList.remove("burger__item");
      navEl.classList.add("show");
      boolean = true;
    } else {
      console.log("else");
      item.classList.remove("equis__item");
      item.classList.add("burger__item");
      navEl.classList.remove("show");
      boolean = false;
    }
  });
})();
