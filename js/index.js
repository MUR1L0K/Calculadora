import copy from "./copy.js";
import themeSwitcher from "./themeSwitcher.js";
import calculate from "./calculate.js";

const input = document.getElementById("input");
const result = document.getElementById("result");
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

input.focus();

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key == "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key == "Enter") {
    calculate();
  }
});

document.querySelectorAll(".charKey").forEach(
  ("click",
  function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
      let valor = charKeyBtn.dataset.value;
      input.value += valor;
    });
  })
);

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
  result.value = "";
  result.classList.remove("error");
});

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copy);

document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
