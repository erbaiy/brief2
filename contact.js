function ossama() {
  document.getElementsByClassName("siide")[0].classList.toggle("hid");
}
function youness() {
  document.getElementsByClassName("cart")[0].classList.toggle("suprimer");
}

let plus = document.getElementById("addToCart");
let moin = document.getElementById("deletToCart");
let conteur = document.getElementById("count");

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
let Price = document.getElementById("price");
let Total = document.getElementById("total");
