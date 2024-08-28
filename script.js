const button = document.querySelector("button");
const input = document.querySelector("input");
const ulist = document.querySelector("ul");
let myTasks;
window.addEventListener("load", function () {
  if (!localStorage.getItem("todo")) {
    myTasks = [];
  } else {
    myTasks = getStorage();
    updateStorage();
  }
});
button.addEventListener("click", addTask);
function addTask() {
  if (input.value != "") {
    creatItem(input.value);
    createStorage(input.value);
    input.value = "";
  } else {
    alert("please add a task...");
  }
}
ulist.addEventListener("click", (event) => {
  if (event.target.nodeName == "I") {
    let listTarget = event.target.parentNode.parentNode;
    listTarget.style = "display: none";
    myTasks.splice(myTasks.indexOf(listTarget.textContent), 1);
    localStorage.setItem("todo", myTasks);
  }
  if (event.target.nodeName == "LI") {
    event.target.classList.toggle("active");
  }
});

function creatItem(text) {
  let li = document.createElement("li");
  li.textContent = text;
  li.innerHTML += `<span class="trash-bin"><i class="fa-solid fa-trash-can"></i></span>`;
  ulist.appendChild(li);
  return li;
}

function createStorage(item) {
  myTasks.push(item);
  console.log(myTasks);
  localStorage.setItem("todo", myTasks);
}

function getStorage() {
  return localStorage.getItem("todo").split(",");
}
function updateStorage() {
  for (const item of getStorage()) {
    if (item == "") {
      break;
    } else {
      creatItem(item);
    }
  }
}
