var task = document.getElementById('task');
var a= document.getElementById('lst');
function add() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("lst");

        // Create list item
        var li = document.createElement("li");

        // Create div for task text
        var textDiv = document.createElement("div");
        textDiv.textContent = taskText;
        li.appendChild(textDiv);

        // Create div for buttons
        var btnDiv = document.createElement("div");
        btnDiv.className = "btn-container";
        // Create edit button
        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "addbtn";
        editBtn.style.marginRight = "5px";
        editBtn.style.right = "1px";
        editBtn.onclick = function() {
            textDiv.contentEditable = true;
            textDiv.style.border = "none";
            editBtn.style.display = "none";
            saveBtn.style.display = "inline";
        };
        btnDiv.appendChild(editBtn);

        // Create save button
        var saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.className = "addbtn";
        saveBtn.style.marginRight = "5px";
        saveBtn.style.display = "none"; 
        saveBtn.onclick = function() {
            textDiv.contentEditable = false;
            editBtn.style.display = "inline";
            saveBtn.style.display = "none"; 
        };
        btnDiv.appendChild(saveBtn);

        // Create delete button
        var delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "addbtn";
        delBtn.onclick = function(event) {
            event.target.parentElement.parentElement.remove();
        };
        btnDiv.appendChild(delBtn);

        // Append buttons div to list item
        li.appendChild(btnDiv);

        // Append list item to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    } else {
        alert("Please enter a task before adding!");
    }
}



function del(event){
    event.target.parentNode.remove();
}
function clearText() {
    document.getElementById('task').value = '';
}
