var form = document.forms[0];
var list = document.getElementById("tasks");
var handleSubmit = function (event) {
	event.preventDefault();
	var task = document.createElement("li");
	task.innerText = form.todo.value;
	list.insertBefore(task,list.firstChild);
};
form.addEventListener("submit",handleSubmit,false);
