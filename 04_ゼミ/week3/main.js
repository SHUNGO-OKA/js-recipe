const aisatsu = ["おはよう","こんにちは","こんばんは"]

const load = function(){
    console.log(aisatsu)
    aisatsu.push("おやすみ")
    aisatsu[1] = "Hello"
    addIndex()
}

const addIndex = function(){
    
}

for(let i=0;aisatsu.length;i++){
    aisatsu[i] = String(i) + aisatsu[i]
    console.log(aisatsu)
}

load()


