var form = document.forms[0];
var list = document.getElementById("tasks");
var clearButton = document.getElementById("clear");

var handleSubmit = function (event) {

	event.preventDefault();

	var todoText = form.todo.value;
	var task = document.createElement("li");

	task.innerHTML = "<input type=\"checkbox\" /> " + todoText;

	list.insertBefore(task,list.firstChild);

	form.todo.value = "";
};

var handleChange = function (event) {
	var checkbox = event.target;
	var task = checkbox.parentNode;

	if (checkbox.checked === true) {
		task.classList.add("done");
	} else {
		task.classList.remove("done");
	}
};

var handleClearClick = function (event) {
	var checkedTasks = list.querySelectorAll("li.done");
	var i = 0;
	var length = checkedTasks.length;
	for (; i < length; i++) {
		checkedTasks[i].remove();
	}
};

list.addEventListener("change",handleChange,false);
form.addEventListener("submit",handleSubmit,false);
clearButton.addEventListener("click",handleClearClick,false);
