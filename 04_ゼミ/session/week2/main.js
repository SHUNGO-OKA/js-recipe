const inputText = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
addButton.onclick = function(){
    console.dir(inputText.value)
    if (inputText.value === ""){
        alert("入力してください")
    } else {
        const card = document.createElement("div")
        card.className = "card"
        card.textContent = inputText.value

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "削除"
        card.append(deleteButton)
        deleteButton.onclick = function(){
            card.remove(card)
        } 

        memoContainer.append(card)
        inputText.value = ""
    }
}

