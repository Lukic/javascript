var toDoList = ["Æg","Mælk","Brød"];

function addToDo(){
    toDoList.push(document.getElementById("todo").value);

    showList();
};

function showList(){

    document.getElementById("todoContainer").innerText ="";

    for (let index = 0; index < toDoList.length; index++) {
        document.getElementById("todoContainer").innerText += toDoList[index] +"\n";
    }

};

showList();