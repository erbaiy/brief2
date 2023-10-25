function aficherSho() {
  document
    .getElementsByClassName("shopping_cart")[0]
    .classList.toggle("hidden");
}
function show() {
  document.getElementsByClassName("right-section")[0].classList.toggle("mask");
}

let moin = document.querySelectorAll(".span1");
let rar = document.querySelector(".add");
for (let i = 0; i < add.length; i++) {
  moin[i].addEventListener("click", function () {
    let number_hejb = rar.textContent;
    number_hejb--;
    rar.textContent = number_hejb;
  });
}
