const text = document.getElementById("text");
function get_value(value){
    if (text.textContent == "ここに式と結果出るよ") {
        text.textContent = "";
    }
    if (value.value == "=") {
        text.textContent = eval(text.textContent)
        // evalはJavaScriptの式として実行される.
        // evalは使うタイミングは任意に値を入力できない時だけ
        // xss(クロスサイトスクリプティング)
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

