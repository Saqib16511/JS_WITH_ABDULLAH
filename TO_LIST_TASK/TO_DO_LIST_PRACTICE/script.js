const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
let li = document.createElement("li");

function addTask(){
    if(inputbox.value == ''){
        alert("You Must Write Something")
    }else{   
        let li = document.createElement("li");
        li.innerHTML = inputbox.value
        listcontainer.appendChild(li)
        inputbox.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    
    saveData()
};

listcontainer.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
    } saveData()
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML)
};
function coll(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
coll()