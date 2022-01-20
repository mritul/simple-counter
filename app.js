const increase = document.querySelector(".inc");
const decrease = document.querySelector(".dec");
const reset = document.querySelector(".reset");
const digit = document.querySelector(".digit");

increase.addEventListener("click", function () {
  digit.innerHTML = parseInt(digit.innerHTML, 10) + 1;
});

decrease.addEventListener("click", function () {
  digit.innerHTML = parseInt(digit.innerHTML, 10) - 1;
});

reset.addEventListener("click", function () {
  digit.innerHTML = 0;
});
