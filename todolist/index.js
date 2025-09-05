let items = [];

const itemsDiv = document.getElementById("item")
const inout = document.getElementById("input")
const storageKey = "items";

function loadItems() {
    const olditem = localStorage.getItem(storageKey)

    if (olditem) items = JSON.parse(olditem)

    removeItem()
     
}

function renderItem() {
    itemsDiv.innerHTML = null;

    for (const  [idx, item] of Object.entries(items)){

        const coaintainer = document.createElement("div")

        coaintainer.style.marginBottom = "10px"

        
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"

        button.onclick = (() => removeItem(idx))

        coaintainer.appendChild(text)
        coaintainer.appendChild(button)
        itemsDiv.appendChild(coaintainer)
    }
}


function saveItem() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}

function addItem() {
    const value = input.value;

    if(!value){
        alert("You cannot add an empty value")
        return
    }
    items.push(value)
    renderItem()
    input.value = ""
    saveItem()


}

function removeItem(idx) {

    items.splice(idx, 1 )

    renderItem()
    saveItem()
}

document.addEventListener("DOMContentLoaded", loadItems)