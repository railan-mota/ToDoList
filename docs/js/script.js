let input = document.getElementById("input");

let btn = document.getElementById("btn");

let lista = document.getElementById("lista");

let aviso = document.getElementById("aviso");

let tarefas = JSON.parse(localStorage.getItem("tasks") || []);



function renderizarTela() {

    lista.innerHTML = "";

    for (tarefa of tarefas) {

        let item = document.createElement("li");

        item.setAttribute("class", "list-group-item");

        let msg = document.createTextNode(tarefa);

        item.appendChild(msg);

        lista.appendChild(item);

        item.onclick = function () {
            removeTask(this);
        }


    }

}


btn.onclick = function () {

    if (input.value == "") {

        aviso.innerHTML = ""

        let warning = document.createElement("div");

        warning.setAttribute("class", "alert alert-danger")

        let msg = "Invalid Task";

        warning.innerHTML = msg;

        aviso.appendChild(warning);

    } else {

        aviso.innerHTML = ""

        tarefas.push(input.value);

        renderizarTela();

        input.value = "";

        saveDateOnStorage();
    }
}

function removeTask(tar) {

    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

        aviso.innerHTML = "";

        renderizarTela();

        saveDateOnStorage();
}


function saveDateOnStorage(){
    localStorage.setItem("tasks",JSON.stringify(tarefas));
}

renderizarTela();


