// adding an onclick event listener to the element with id "add"
document.querySelector('#add').onclick = function () {
    // Checking if the length of the input value of the element with id "newtask" is zero
    if (document.querySelector('#newtask input').value.length == 0) {
        // If the input value length is zero, display an alert asking the user to enter a task
        alert("Please Enter a Task")
    }
    else {
        // If the input value length is not zero, add the following HTML code to the element with id "tasksDisplayed":
        // A div with class "task" containing a span with id "taskname" displaying the task name entered by the user,
        // and a button with class "remove" to delete the task
        document.querySelector('#tasksDisplayed').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="remove">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        // Add an onclick event listener to each button with class "remove"
        var displayed_tasks = document.querySelectorAll(".remove");
        for (var i = 0; i < displayed_tasks.length; i++) {
            // When a button with class "remove" is clicked, remove its parent element, which is the task div
            displayed_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}