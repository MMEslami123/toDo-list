const button = document.querySelector("button");
const input = document.querySelector("input");
const ulist = document.querySelector("ul");

button.addEventListener("click", addTask);
function addTask() {
  creatItem(input.value);
  input.value = "";
}
ulist.addEventListener("click", (event) => {
  let target = event.target.parentNode.parentNode;
  if (target.nodeName == "LI") {
    target.style = "display: none";
  }
});
function creatItem(text) {
  let li = document.createElement("li");
  li.textContent = text;
  li.innerHTML += `<span class="trash-bin"><i class="fa-solid fa-trash-can"></i></span>`;
  ulist.appendChild(li);
  return li;
}
