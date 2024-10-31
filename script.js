const inputbox = document.getElementById("input1");
const listbox = document.getElementById("list-box");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something in it!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listbox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveWork();
}

listbox.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveWork();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveWork();
    }
}, false);

function saveWork(){
    localStorage.setItem("work", listbox.innerHTML);
}
function showWork(){
    listbox.innerHTML = localStorage.getItem("work");

}
showWork();