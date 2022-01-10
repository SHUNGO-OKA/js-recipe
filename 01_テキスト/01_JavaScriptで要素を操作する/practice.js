const element = document.getElementById("elementId")
console.log("「要素を取得する」で取得した要素→", element)

const buttons = document.getElementById("buttons")
for (const button of buttons.children) {
    button.onclick = function() {
        alert("clicked: " + button.textContent)
    }
} 

const elementTextContent = document.getElementById("element-textContent")
elementTextContent.textContent = "こんばんは"

const elementStyle = document.getElementById("element-style")
elementStyle.style.fontWeight = "bold"

const elementClassName = document.getElementById("element-className")
elementClassName.className = "nice-element"

const elementClassList = document.getElementById("element-classList")
elementClassList.classList.add("great-element")

const elementAppendChild = document.getElementById("element-appendChild")
const div1 = document.createElement("div")
div1.textContent = "こんばんは"
elementAppendChild.appendChild(div1)

const elementPrepend = document.getElementById("element-prepend")
const div2 = document.createElement("div")
div2.textContent = "おはよう"
elementPrepend.prepend(div2)

const elementRemove = document.getElementById("element-remove")
elementRemove.remove()