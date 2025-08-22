// get elements
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// add task
addBtn.addEventListener("click", function () {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }



  // create list item
  let li = document.createElement("li");
  li.textContent = taskText;




  // buttons div
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("action-btns");




  // mark button
  let markBtn = document.createElement("button");
  markBtn.textContent = "Mark";
  markBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });



  // edit button
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function () {
    let newText = prompt("Edit your task:", li.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
      li.firstChild.textContent = newText;
    }
  });




  // delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", function () {
    li.remove();
  });



  
  // append buttons
  btnDiv.appendChild(markBtn);
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(delBtn);

  li.appendChild(btnDiv);
  taskList.appendChild(li);



  // clear input
  taskInput.value = "";
  
});
// allow enter key to add task
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});