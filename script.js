document.addEventListener("DOMContentLoaded", function() {
  // Selection of HTML elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from localStorage (or empty array if none)
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Function to save the current tasks array to localStorage
  function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  }

  // Function to render all tasks in the DOM
  function loadTasks() {
    taskList.innerHTML = ""; // Clear any existing list items
    savedTasks.forEach((taskText, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");

      // Remove the task when button is clicked
      removeButton.addEventListener("click", () => {
        savedTasks.splice(index, 1); // Remove the correct task
        saveTasksToLocalStorage(); // Update localStorage
        loadTasks(); // Refresh the list visually
      });

      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
    });
  }

  // Function to add a new task
  function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Enter a task");
      return;
    }

    // Add new task to array
    savedTasks.push(taskText);
    saveTasksToLocalStorage(); // Save to localStorage

    // Refresh the displayed list
    loadTasks();

    // Clear input
    taskInput.value = "";
  }

  // Event listeners for button and Enter key
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // ✅ Load saved tasks when the page is first loaded
  loadTasks();
});
