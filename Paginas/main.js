function addNewTask(){
    var lista = document.getElementById("list");
    var text = document.getElementById("taskname").value;

    if(text.length == 0){
        alert("Tarefa precisa conter mais que 1 caracter");
        return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

}