export default function () {
  result.value = "ERROR";
  result.classList.add("error");
  result.value = eval(input.value);
  result.classList.remove("error");
}
