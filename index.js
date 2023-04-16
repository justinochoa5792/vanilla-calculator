let input = document.querySelectorAll(".calculator .number");
let display = document.querySelector("input[name=display]");
let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");
let equal = document.querySelector(".equal");
Array.from(input).map((el) => {
  el.addEventListener("click", () => {
    display.value += el.value;
  });
});

clearBtn.addEventListener("click", () => {
  display.value = "";
});

deleteBtn.addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
});

equal.addEventListener("click", () => {
  display.value = eval(display.value);
});
