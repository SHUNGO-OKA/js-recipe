const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

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
  // 12行目のcardに返っていくよ
  return card
}
