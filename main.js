var form = document.forms[0];
var handleSubmit = function (event) {
    event.preventDefault();
    console.log(form.todo.value);
};
form.addEventListener("submit",handleSubmit,false);
