
let count = 0;
let countEl = document.getElementById("count-el")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")

function increment(){
    count+=1
    countEl.innerHTML = count
}

function save(){
    let saveStr = count + " - "
    saveEl.innerText += saveStr
    console.log(count)
}