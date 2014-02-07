var form = document.forms[0];
var list = document.getElementById("tasks");
var handleSubmit = function (event) {
	event.preventDefault();

	var todoText = form.todo.value;
	var task = document.createElement("li");

	task.innerHTML = "<input type=\"checkbox\" /> " + todoText;

	list.insertBefore(task,list.firstChild);

	form.todo.value = "";
};
form.addEventListener("submit",handleSubmit,false);
