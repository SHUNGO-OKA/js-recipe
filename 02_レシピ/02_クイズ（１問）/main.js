// const quizText = document.getElementById("quiz-text")
// const quizImage = document.getElementById("quiz-image")
// const choice1 = document.getElementById("choice-1")
// const choice2 = document.getElementById("choice-2")
// const choice3 = document.getElementById("choice-3")
// const choice4 = document.getElementById("choice-4")
// const feedback = document.getElementById("feedback")

// const quiz = {
//   text: "この人は誰でしょう？",
//   image: "ダウンロード.jpeg",
//   choises: [
//     {
//       text: "長濱ねる",
//       feedback: "正解！ねるちゃんは、伝説のアイドルだよ！可愛くて最強なんだ！",
//     },
//     {
//       text: "あき竹城",
//       feedback: "は？なめてんの？？全然違うわ",
//     },
//     {
//       text: "久本雅美",
//       feedback: "違うわ阿呆！！！",
//     },
//     {
//       text:"まあたそ",
//       feedback:"一緒にするんじゃああねええ！！"
//     }
//   ]
// }

// const reloadQuiz = function() {
//   // 問題文を表示
//   quizText.textContent = "Q. " + quiz.text
//   // 画像を表示
//   quizImage.src = "./images/" + quiz.image
//   // choice
//   choice1.textContent = quiz.choises[0].text
//   choice2.textContent = quiz.choises[1].text
//   choice3.textContent = quiz.choises[2].text
//   choice4.textContent = quiz.choises[3].text
// }

// const choose = function(choiceNumber) {
//   feedback.textContent = quiz.choises[choiceNumber].feedback
// }

// choice1.onclick = function() {
//   choose(0)
// }
// choice2.onclick = function() {
//   choose(1)
// }
// choice3.onclick = function() {
//   choose(2)
// }

// choice4.onclick = function() {
//   choose(3)
// }

// reloadQuiz()

const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const buttons = document.getElementById("buttons")
const feedback = document.getElementById("feedback")

const quiz = {
  quizText: "この人は誰でしょう？",
  image: "ダウンロード.jpeg",
  choises: [
    { quiz: "近藤春菜", feedback: "角野卓造じゃねえよ！！！" },
    { quiz: "長濱ねる", feedback: "正解！ねるちゃんは可愛くて誰もが認める最強のアイドルだよ🥰" },
    { quiz: "まあたそ", feedback: "最悪。全然違ええええよ！！！！" },
    { quiz: "あやなん", feedback: "いやそれしばゆーの嫁な！31人飲み会したやつな！" }
  ]
}

const reload = function(){
  showContents()
  addButtons()
}

const showContents = function(){
  quizText.textContent = quiz.quizText
  quizImage.src = "./images/" + quiz.image
}

const addButtons = function(){
  for (let i=0;i<quiz.choises.length;i++){
    const button = document.createElement("button")
    button.id = "button"+String(i)
    button.textContent = quiz.choises[i].quiz
    buttons.append(button)
  }
}

reload()
