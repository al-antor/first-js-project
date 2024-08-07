const box = document.querySelectorAll(".box");
const body = document.querySelector("body");

box.forEach(function (colorBox) {
  colorBox.addEventListener("click", (e) => {
    if (e.target.innerText === "Red") {
      body.style.backgroundColor = "red";
    } else if (e.target.innerText === "Blue") {
      body.style.backgroundColor = "blue";
    } else if (e.target.innerText === "White") {
      body.style.backgroundColor = "white";
    } else if (e.target.innerText === "Yellow") {
      body.style.backgroundColor = "yellow";
    }
  });
});

const time = document.querySelector(".time");

setInterval(() => {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);

const form = document.querySelector("form");
const name = document.querySelector(".name");
const roll = document.querySelector(".roll");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let namev = document.querySelector("#nameinput").value;
  let rollv = parseInt(document.querySelector("#rollinput").value);
  name.innerHTML = namev;
  roll.innerHTML = rollv;
});
