function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Por favor, digite uma tarefa.");
    return;
  }

  const taskList = document.getElementById("task-list");
  const listItem = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = taskValue;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  const markButton = document.createElement("button");
  markButton.textContent = "Concluir";
  markButton.className = "mark";
  markButton.onclick = () => {
    listItem.classList.toggle("completed");
  };

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.className = "delete";
  deleteButton.onclick = () => {
    taskList.removeChild(listItem);
  };

  actionsDiv.appendChild(markButton);
  actionsDiv.appendChild(deleteButton);

  listItem.appendChild(taskText);
  listItem.appendChild(actionsDiv);

  taskList.appendChild(listItem);
  taskInput.value = "";
}
