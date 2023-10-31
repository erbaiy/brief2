function show() {
  document.getElementsByClassName("siide")[0].classList.toggle("hidin");
}
function delet() {
  document.getElementsByClassName("shopping_cart")[0].classList.toggle("maske");
}
let plus = document.getElementsByClassName("addToCart")[0];
let moin = document.getElementsByClassName("deletToCart")[0];
let conteur = document.getElementsByClassName("count")[0];
let Price = document.getElementById("price");
let Total = document.getElementById("total");

plus.addEventListener("click", function () {
  conteur.textContent++;
  Total.textContent = Total.textContent - -Price.textContent;
});
moin.addEventListener("click", function () {
  if (conteur.textContent > 0 && Total.textContent > 0) {
    conteur.textContent--;
    Total.textContent -= Price.textContent;
  }
});
