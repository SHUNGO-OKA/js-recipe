const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0;

plusButton.onclick = function() {
    
    count += 1
    
    display.textContent = count

}

// 発展 ★ - 便利なボタン
const minusButton = document.getElementById("minus-button")

minusButton.onclick = function() {

    count -= 1

    display.textContent = count

}

const doubleButton = document.getElementById("double-button")

doubleButton.onclick = function() {

    count *= 2

    display.textContent = count

}

