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
  