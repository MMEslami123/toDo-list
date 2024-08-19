const button = document.querySelector("button");
const input = document.querySelector("input");
const ulist = document.querySelector("ul");

button.addEventListener("click", addTask);
function addTask(event) {
  creatItem(input.value);
  input.value = "";
}
function creatItem(text) {
  let li = document.createElement("li");
  console.log(text);
  li.textContent = text;
  li.innerHTML += `<span class="trash-bin"><i class="fa-solid fa-trash-can"></i></span>`;
  ulist.appendChild(li);
  return li;
}
