//Page Load Event Listener
document.addEventListener("DOMContentLoaded", function(){
	//selection and storage of html elements
	const addButton = document.getElementById("add-task-btn");
	const taskInput = document.getElementById("task-input");
	const taskList = document.getElementById("task-list");
	
	function addTask(){
		//Retrieve user input
		let taskText = taskInput.value.trim();
		
		//Actions
		if(taskText == ""){
			//Alert user of no task
			alert("Enter a task");
		}
		else{
			// Create the <li> and add it to the list
			let listItem = document.createElement("li");
			listItem.textContent = taskText;
			taskList.appendChild(listItem);

			// Create the remove button
			let removeButton = document.createElement("button");
			removeButton.textContent = "Remove";
			removeButton.classList.add("remove-btn");

			// Add event listener to remove the list item
			removeButton.addEventListener("click", () => {
			taskList.removeChild(listItem);
			});

			// Append the button to the <li>
			listItem.appendChild(removeButton);

			// Clear the input field
			taskInput.value = "";
		}
	}
	
	//
	taskInput.addEventListener("keypress", (event) => {
		if(event.key === "Enter"){
			addTask();
		}
	});
	addButton.addEventListener("click", addTask);
	
});