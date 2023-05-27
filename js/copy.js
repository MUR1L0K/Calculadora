export default function (ev) {
  const button = ev.currentTarget;
  if (button.innerText == "Copy") {
    button.classList.add("success");
    button.innerText = "Copied";
    navigator.clipboard.writeText(result.value);
  } else {
    button.classList.remove("success");
    button.innerText = "Copy";
  }
}
