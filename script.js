const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Input cannot be empty !"); //printing alert is input is empty
  } else {
    let li = document.createElement("li"); //to create HTML element node
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); //used to add node to the end the list

    let span = document.createElement("span"); //creating another element node
    span.innerHTML = "\u00d7"; //adding cross
    li.appendChild(span);
  }
  inputBox.value = ""; //to make the InputBox empty after adding the item
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //to check and uncheck tasks
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      //to delete the tasks
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
