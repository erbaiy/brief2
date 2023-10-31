function show() {
  document.getElementsByClassName("cartts")[0].classList.toggle("hidden");
}
function aficher() {
  document.getElementsByClassName("side_bar")[0].classList.toggle("return");
}
let plus = document.getElementsByClassName("addToCart");
let moin = document.getElementsByClassName("deletToCart");
let conteur = document.getElementsByClassName("count");
let Price = document.getElementsByClassName("price");
let Total = document.getElementsByClassName("total")[0];

for (let i = 0; i < 3; i++) {
  plus[i].addEventListener("click", function () {
    conteur[i].textContent++;
    Total.textContent -= -Price[i].textContent;
  });
  moin[i].addEventListener("click", function () {
    if (conteur[i].textContent > 0 && Total.textContent > 0) {
      conteur[i].textContent--;
      Total.textContent -= Price[i].textContent;
    }
  });
}
