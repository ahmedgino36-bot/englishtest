function submitQuiz() {
  const form = document.getElementById("quizForm");
  if (!form) return;

  const data = new FormData(form);
  let score = 0;

  for (let value of data.values()) {
    score += Number(value);
  }

  // لو في أسئلة متسابَة فاضية، مش هتزود الدرجة
  localStorage.setItem("score", score);
  window.location.href = "result.html";
}
