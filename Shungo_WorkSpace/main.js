const input = document.getElementById("input")
const container = document.getElementById("container")
const addbutton = document.getElementById("add-button")

let list = []

if (localStorage.list) {
  // 状態の更新 list: [] → ["こんにちは"]
  list = JSON.parse(localStorage.list)

  // 状態の変化を画面に表示する
  for (const text of list) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container.append(card)
  }
}

addbutton.onclick = function(){
    const text = input.nodeValue;

    // 状態の更新 list: ["こんにちは"]→["こんにちは","こんばんは"]
    list.push(text);
    localStorage.list = JSON.stringify(list);

    // 状態の変化を画面に表示する
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = text;
    container.append(card);

    input.value = "";
    console.log(list);
};
