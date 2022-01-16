// 発展 ★ - いろんなイベント
// const figure = document.getElementById("figure")
// figure.onmousemove = function() {
//   if (figure.classList.contains("triangle")) {
//     figure.classList.remove("triangle")
//     figure.classList.add("square")
//   } else {
//     figure.classList.remove("square")
//     figure.classList.add("triangle")
//   }
// }

// 発展 ★★ - △ も！
const figure = document.getElementById("figure")
figure.onclick = function() {
  if (
    figure.classList.contains("square") &&
    figure.classList.contains("rounded")
  ) {
    figure.classList.remove("square")
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  } else if (figure.classList.contains("square")) {
    figure.classList.add("rounded")
  } else {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
