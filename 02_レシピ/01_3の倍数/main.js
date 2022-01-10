// 3の倍数
const GENKIFunciton = (n) => {
    for(let i = 1; i <= n; i++){
        if (i % 3 === 0){
            console.log(i + "!!!!!!!")
        } else {
            console.log(i)
        }
    }
}

GENKIFunciton(100)

// 発展★ - FizzBuzz
const FizzBuzzFunction = (n) => {
    for(let i = 1; i <= n; i++){
        if (i % 15 === 0){
            console.log(i + "FizzBuzz")
        } else if (i % 5 === 0) {
            console.log(i + "Buzz")
        } else if (i % 3 === 0){
            console.log(i + "Fizz")
        } else {
            console.log(i)
        }
    }
}

FizzBuzzFunction(100)

// 発展★★ - 3が大好き
const IncludeThree = (n) => {
    for(let i=1; i <= n; i++){
        if (String(i).includes("3") || i % 3 === 0) {
            console.log(i + "!!!!!!!!")
        } else {
            console.log(i)
        }
    }
}

IncludeThree(100)

// 発展★★★ - 元気な秒針
const GENKIClock = (n) => {
    let number = 0;
    setInterval(function(){
        number++
        if (number > n) {return};
        if (number % 3 === 0) {
            console.log(number + "!!!!!!")
        } else {
            console.log(number)
        }
    },1000)
}

GENKIClock(100)
 