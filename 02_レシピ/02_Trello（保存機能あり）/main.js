const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
// htmlではidを被らせちゃいけない3パターン分書いてあげる

inputElement.addEventListener("keypress", enter)
function enter(e) {
  if (e.keyCode === 13) {
    const text = inputElement.value

    const card = document.createElement("div")
    card.className = "card"

    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text

    card.append(todo)

    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"
    card.append(deleteButton)
    deleteButton.onclick = function() {
      card.remove()
    }
    container.append(card)
    inputElement.value = ""
  }
}

addButton.onclick = function() {
  const card = createdCard(inputElement.value)
  container.append(card)
  inputElement.value = ""
}

const createdCard = function(text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  card.append(deleteButton)
  deleteButton.onclick = function() {
    card.remove(todo)
  }
  // 31行目のcardに返っていくよ
  return card
}
