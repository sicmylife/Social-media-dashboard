function themeChange() {
  let lightEl = document.querySelector("#light");
  let bodyEL = document.querySelector("body");
  let boxEl = document.querySelectorAll(".them-change");
  let headerEl = document.querySelectorAll(".overall-header");

  lightEl.addEventListener("change", () => {
    bodyEL.classList.toggle("bodyColorChange");

    for (let i = 0; i < boxEl.length; i++) {
      boxEl[i].classList.toggle("boxColorChange");
    }

    for (let i = 0; i < headerEl.length; i++) {
      headerEl[i].classList.toggle("headerColorChange");
    }
  });
}
themeChange();
