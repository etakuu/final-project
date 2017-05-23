function checkAnswers() {
  var quizScore = 0
  var questionOneAnswer = document.querySelector("input[name='q1']:checked").value
  if (questionOneAnswer == "a1") {
    quizScore = quizScore + 1
  }
  var questionTwoAnswer = document.querySelector("input[name='q2']:checked").value
  if (questionTwoAnswer == "a3") {
    quizScore = quizScore + 1
  }
    var questionTwoAnswer = document.querySelector("input[name='q3']:checked").value
  if (questionTwoAnswer == "a2") {
    quizScore = quizScore + 1
  }
    var questionTwoAnswer = document.querySelector("input[name='q4']:checked").value
  if (questionTwoAnswer == "a2") {
    quizScore = quizScore + 1
}
    var questionTwoAnswer = document.querySelector("input[name='q5']:checked").value
  if (questionTwoAnswer == "a1") {
    quizScore = quizScore + 1

}
  alert("Your score is...")
  alert(quizScore)
}