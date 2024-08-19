const button = document.querySelector("button");
const input = document.querySelector("input");
const ulist = document.querySelector("ul");

button.addEventListener("click", addTask);
function addTask() {
  creatItem(input.value);
  input.value = "";
}
ulist.addEventListener("click", (event) => {
  let listTarget = event.target;
  if (listTarget.nodeName == "I") {
    listTarget.parentNode.parentNode.style = "display: none";
  }
  if (listTarget.nodeName == "LI") {
    listTarget.classList.toggle("active");
  }
});
function creatItem(text) {
  let li = document.createElement("li");
  li.textContent = text;
  li.innerHTML += `<span class="trash-bin"><i class="fa-solid fa-trash-can"></i></span>`;
  ulist.appendChild(li);
  return li;
}
