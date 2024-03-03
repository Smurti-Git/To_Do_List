function validateForm() {
    const taskText = document.forms["myForm"]["fname"].value.trim();
    if (taskText === "") {
        alert("Task name must be filled out");
        return false;
    }
    // Handle the task (e.g., add it to the list)
    addTask(taskText);
    document.forms["myForm"]["fname"].value = ""; // Clear the input field
    return false; // Prevent page reload
}



let tasks = []; // Create an empty array to store tasks


function addTask(taskText) {
const tasksList = document.getElementById("todo-list");

const newTaskItem = document.createElement("INPUT");
newTaskItem.type = 'checkbox';
newTaskItem.id = "task-" + tasks.length; // Assign a unique ID to each checkbox

const label = document.createElement("label");
label.textContent = taskText; // Set the label text to the taskText parameter
label.setAttribute("for", newTaskItem.id); // Associate the label with the checkbox

tasksList.appendChild(newTaskItem); // Append the input element
tasksList.appendChild(label); // Append the label element

// Create a remove button
const removeButton = document.createElement("BUTTON");
removeButton.textContent = "Remove"; // Set the button text
removeButton.id = "remove-" + tasks.length; // Assign a unique ID to each button
removeButton.classList.add("btnRemovs");// Assign a common class to each button
// removeButton.classList.add("fa fa-close");// Assign a common class to each button

// Add an event listener to the remove button
removeButton.addEventListener("click", function() {
// Remove the task from the tasksList element
tasksList.removeChild(newTaskItem);
tasksList.removeChild(label);
tasksList.removeChild(br);
tasksList.removeChild(removeButton);

// Remove the task from the tasks array
const index = tasks.indexOf(taskText); // Find the index of the task
if (index > -1) {
tasks.splice(index, 1); // Remove the task from the array
}
});
// Append the remove button to the tasksList element
tasksList.appendChild(removeButton);

const br = document.createElement("br"); // Create a br element
tasksList.appendChild(br); // Append the br element


tasks.push(taskText); // Push the taskText to the tasks array
    console.log(tasks.length); 
    document.getElementsByTagName( "span" )[0].innerHTML = `Tasks left: ${tasks.length}` ;  
   
    // Add an event listener to the checkbox
    newTaskItem.addEventListener("click", function() {
       // Check if the checkbox is checked or not
       if (this.checked) {
           // Apply a del mark to the label
           label.style.textDecoration = "line-through";
       } else {
           // Remove the del mark from the label
           label.style.textDecoration = "none";
       }
   });   
   
// Define a function to update the task count display
function updateTaskCount() {
  // Filter the tasks that are not completed using the filter method
  const incompleteTasks = tasks.filter((t) => !t.completed);
  // Set the text content of the span element to the number of incomplete tasks
  document.getElementsByTagName("span")[0].innerHTML = `Tasks left: ${incompleteTasks.length}`;
}

// Add an event listener to the remove button
removeButton.addEventListener("click", function () {
  // Remove the task from the tasksList element
  tasksList.removeChild(newTaskItem);
  tasksList.removeChild(label);
  tasksList.removeChild(br);
  tasksList.removeChild(removeButton);

  // Remove the task from the tasks array
  const index = tasks.indexOf(taskText); // Find the index of the task
  if (index > -1) {
    tasks.splice(index, 1); // Remove the task from the array
  }
  // Update the task count by calling the updateTaskCount function
  updateTaskCount();
});


}

// Define a function to update the task count display
function updateTaskCount() {
    // Filter the tasks that are not completed using the filter method
    const incompleteTasks = tasks.filter((t) => !t.completed);
    // Set the text content of the span element to the number of incomplete tasks
    document.getElementsByTagName("span")[0].innerHTML = `Tasks left: ${incompleteTasks.length}`;
  }
  
  // Add an event listener to the remove button
  removeButton.addEventListener("click", function () {
    // Remove the task from the tasksList element
    tasksList.removeChild(newTaskItem);
    tasksList.removeChild(label);
    tasksList.removeChild(br);
    tasksList.removeChild(removeButton);
  
    // Remove the task from the tasks array
    const index = tasks.indexOf(taskText); // Find the index of the task
    if (index > -1) {
      tasks.splice(index, 1); // Remove the task from the array
    }
    // Update the task count by calling the updateTaskCount function
    updateTaskCount();
  });
  