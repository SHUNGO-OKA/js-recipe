const clickButton = document.getElementById("button")

const alertMessage = function() {
    alert("クリックしたね！")
}

clickButton.onclick = alertMessage

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
    console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

