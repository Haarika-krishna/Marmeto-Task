const colordata = ["yellow", "green", "blue", "pink"];
const countbtn = document.querySelectorAll(".count-btn");
const cartbtn = document.querySelector(".cart-btn");
const txt = document.querySelector(".cart-txt");
const colors = document.querySelectorAll(".color");
const title = document.querySelector(".sub-title");
const sizebtns = document.querySelectorAll(".size-btn");
let count = 1;
let index = 0;
let value = colordata[0];
let size = "small";

countbtn.forEach((cart) => {
  cart.addEventListener("click", function (e) {
    let styleBtn = e.currentTarget.classList;
    if (styleBtn.contains("decrease")) {
      if (count > 1) {
        count--;
      } else {
        count = 1;
      }
    } else if (styleBtn.contains("increase")) {
      count++;
    }
    document.querySelector(".count").textContent = count;
  });
});

colors.forEach((colorButton, i) => {
  colorButton.addEventListener("click", function () {
    value = colordata[i];
    index = i + 1;
    colors.forEach((btn) => {
      btn.style.border = "none";
    });
    colorButton.style.border = "0.5px solid rgb(255, 226, 182)";
  });
});

sizebtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const stylebtn = event.currentTarget.dataset.id;
    if (
      stylebtn === "small" ||
      stylebtn === "medium" ||
      stylebtn === "large" ||
      stylebtn === "Extra-large" ||
      stylebtn === "xxl"
    ) {
      size = stylebtn;
    }
  });
});

cartbtn.addEventListener("click", function () {
    txt.style.visibility = "visible";
    txt.innerHTML = `$ Embrace Sideboard with color ${value} and size ${size} added to cart`;
  });