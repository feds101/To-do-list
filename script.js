const inputBox = document.getElementById("input-box")
const gjøremålContainer = document.getElementById("gjøremål-container")

function addTask(){
    if(inputBox.value === ''){
        alert("ERROR! Du må skrive noe!");
    }
    else{ 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        gjøremålContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

gjøremålContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", gjøremålContainer.innerHTML);
}
function showTask(){
    gjøremålContainer.innerHTML = localStorage.getItem("data");
}
showTask()