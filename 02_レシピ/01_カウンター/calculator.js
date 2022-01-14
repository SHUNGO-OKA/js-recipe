const text = document.getElementById("text");
function get_value(value){
    if (text.textContent == "ここに式と結果出るよ") {
        text.textContent = "";
    }
    if (value.value == "=") {
        text.textContent = eval(text.textContent)
    } else if (value.value == "C") {
        text.textContent = "";
    } else {
        if (value.value == "×") {
            value.value = "*";
        } else if (value.value == "÷"){
            value.value = "/";
        }
        text.textContent += value.value;
    }
    
}

