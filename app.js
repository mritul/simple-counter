const increase = document.querySelector(".inc");
const decrease = document.querySelector(".dec");
const reset = document.querySelector(".reset");
const digit = document.querySelector(".digit");

increase.addEventListener("click", function () {
  digit.innerHTML = parseInt(digit.innerHTML, 10) + 1;
  const value = parseInt(digit.textContent, 10);
  if (value < 0) {
    digit.style.color = "red";
  } else if (value > 0) {
    digit.style.color = "green";
  } else {
    digit.style.color = "black";
  }
});

decrease.addEventListener("click", function () {
  digit.innerHTML = parseInt(digit.innerHTML, 10) - 1;
  const value = parseInt(digit.textContent, 10);
  if (value < 0) {
    digit.style.color = "red";
  } else if (value > 0) {
    digit.style.color = "green";
  } else {
    digit.style.color = "black";
  }
});

reset.addEventListener("click", function () {
  digit.innerHTML = 0;
  const value = parseInt(digit.textContent, 10);
  if (value < 0) {
    digit.style.color = "red";
  } else if (value > 0) {
    digit.style.color = "green";
  } else {
    digit.style.color = "black";
  }
});
