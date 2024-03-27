const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-main");

function addTask(){
    if (inputBox.value === ''){
        alert("Insira uma Tarefa!");
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span")
        li.innerHTML = inputBox.value;
        span.innerHTML = "\u00d7";
        listContainer.appendChild(li);
        li.appendChild(span)  
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
        e.target.classList.toggle("checked") && saveData();
    else if(e.target.tagName === "SPAN")
        e.target.parentElement.remove() && saveData();

},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();