// =======================
// بيانات الأسئلة (60 سؤال)
// =======================
const questions = [
  {
    text: "1. Choose the correct sentence:",
    options: ["He go to school.", "He goes to school."],
    correct: 1
  },
  {
    text: "2. Choose the correct form:",
    options: ["They are playing football.", "They is playing football."],
    correct: 0
  },
  {
    text: "3. What is the synonym of 'big'?",
    options: ["Large", "Tiny"],
    correct: 0
  },
  {
    text: "4. Choose the correct question:",
    options: ["Where do you live?", "Where you live?"],
    correct: 0
  },
  {
    text: "5. Choose the correct tense:",
    options: ["I have visited London.", "I has visited London."],
    correct: 0
  },
  {
    text: "6. Opposite of 'hot' is:",
    options: ["Warm", "Cold"],
    correct: 1
  },
  {
    text: "7. Choose the correct sentence:",
    options: ["She doesn't like coffee.", "She don't like coffee."],
    correct: 0
  },
  {
    text: "8. 'Child' plural is:",
    options: ["Children", "Childs"],
    correct: 0
  },
  {
    text: "9. Choose the correct preposition: 'I am good ___ English.'",
    options: ["at", "in"],
    correct: 0
  },
  {
    text: "10. Choose the correct sentence:",
    options: ["She can to swim.", "She can swim."],
    correct: 1
  },
  {
    text: "11. Past of 'go' is:",
    options: ["went", "goed"],
    correct: 0
  },
  {
    text: "12. Choose the correct article: '___ apple a day keeps the doctor away.'",
    options: ["An", "A"],
    correct: 0
  },
  {
    text: "13. Choose the correct sentence:",
    options: ["There are many people here.", "There is many people here."],
    correct: 0
  },
  {
    text: "14. 'Fast' is a:",
    options: ["Adjective", "Preposition"],
    correct: 0
  },
  {
    text: "15. Choose the correct word: 'I am ___ TV.'",
    options: ["in", "watching"],
    correct: 1
  },
  {
    text: "16. Choose the correct sentence:",
    options: ["I will call you tomorrow.", "I will calling you tomorrow."],
    correct: 0
  },
  {
    text: "17. Opposite of 'early' is:",
    options: ["soon", "late"],
    correct: 1
  },
  {
    text: "18. Choose the correct question:",
    options: ["What are you doing?", "What you are doing?"],
    correct: 0
  },
  {
    text: "19. 'Beautiful' is a:",
    options: ["Adjective", "Verb"],
    correct: 0
  },
  {
    text: "20. Choose the correct sentence:",
    options: ["He don't work here.", "He doesn't work here."],
    correct: 1
  },
  {
    text: "21. Past of 'see' is:",
    options: ["saw", "seed"],
    correct: 0
  },
  {
    text: "22. Choose the correct preposition: 'I was born ___ 2000.'",
    options: ["in", "on"],
    correct: 0
  },
  {
    text: "23. Choose the correct sentence:",
    options: ["She has already finished.", "She have already finished."],
    correct: 0
  },
  {
    text: "24. 'Quickly' is an:",
    options: ["Adverb", "Noun"],
    correct: 0
  },
  {
    text: "25. Choose the correct word: 'I am interested ___ music.'",
    options: ["in", "on"],
    correct: 0
  },
  {
    text: "26. Choose the correct sentence:",
    options: ["We have been waiting for an hour.", "We has been waiting for an hour."],
    correct: 0
  },
  {
    text: "27. Opposite of 'difficult' is:",
    options: ["easy", "hard"],
    correct: 0
  },
  {
    text: "28. Choose the correct question:",
    options: ["How long have you lived here?", "How long you have lived here?"],
    correct: 0
  },
  {
    text: "29. 'Happiness' is a:",
    options: ["Noun", "Verb"],
    correct: 0
  },
  {
    text: "30. Choose the correct sentence:",
    options: ["I didn't went there.", "I didn't go there."],
    correct: 1
  },
  {
    text: "31. Past of 'take' is:",
    options: ["took", "taked"],
    correct: 0
  },
  {
    text: "32. Choose the correct preposition: 'I will see you ___ Monday.'",
    options: ["in", "on"],
    correct: 1
  },
  {
    text: "33. Choose the correct sentence:",
    options: ["She speaks English fluently.", "She speak English fluently."],
    correct: 0
  },
  {
    text: "34. 'Careful' is a:",
    options: ["Adjective", "Adverb"],
    correct: 0
  },
  {
    text: "35. Choose the correct word: 'He is afraid ___ spiders.'",
    options: ["of", "from"],
    correct: 0
  },
  {
    text: "36. Choose the correct sentence:",
    options: ["I have never been to Paris.", "I never have been to Paris."],
    correct: 0
  },
  {
    text: "37. Opposite of 'noisy' is:",
    options: ["quiet", "loud"],
    correct: 0
  },
  {
    text: "38. Choose the correct question:",
    options: ["Do you like reading?", "Like you reading?"],
    correct: 0
  },
  {
    text: "39. 'Quickness' is a:",
    options: ["Noun", "Verb"],
    correct: 0
  },
  {
    text: "40. Choose the correct sentence:",
    options: ["She didn't ate anything.", "She didn't eat anything."],
    correct: 1
  },
  {
    text: "41. Past of 'write' is:",
    options: ["wrote", "writed"],
    correct: 0
  },
  {
    text: "42. Choose the correct preposition: 'She is good ___ math.'",
    options: ["at", "in"],
    correct: 0
  },
  {
    text: "43. Choose the correct sentence:",
    options: ["They have finished their homework.", "They has finished their homework."],
    correct: 0
  },
  {
    text: "44. 'Slowly' is an:",
    options: ["Adverb", "Adjective"],
    correct: 0
  },
  {
    text: "45. Choose the correct word: 'I am looking forward ___ seeing you.'",
    options: ["to", "for"],
    correct: 0
  },
  {
    text: "46. Choose the correct sentence:",
    options: ["We were watching TV when he arrived.", "We was watching TV when he arrived."],
    correct: 0
  },
  {
    text: "47. Opposite of 'cheap' is:",
    options: ["expensive", "low"],
    correct: 0
  },
  {
    text: "48. Choose the correct question:",
    options: ["Have you ever been abroad?", "You have ever been abroad?"],
    correct: 0
  },
  {
    text: "49. 'Strength' is a:",
    options: ["Noun", "Adverb"],
    correct: 0
  },
  {
    text: "50. Choose the correct sentence:",
    options: ["He didn't saw me.", "He didn't see me."],
    correct: 1
  },
  {
    text: "51. Past of 'speak' is:",
    options: ["spoke", "speaked"],
    correct: 0
  },
  {
    text: "52. Choose the correct preposition: 'We arrived ___ the airport.'",
    options: ["at", "in"],
    correct: 0
  },
  {
    text: "53. Choose the correct sentence:",
    options: ["She has been working all day.", "She have been working all day."],
    correct: 0
  },
  {
    text: "54. 'Carefully' is an:",
    options: ["Adverb", "Noun"],
    correct: 0
  },
  {
    text: "55. Choose the correct word: 'He apologized ___ being late.'",
    options: ["for", "about"],
    correct: 0
  },
  {
    text: "56. Choose the correct sentence:",
    options: ["If I had money, I would travel.", "If I would have money, I travel."],
    correct: 0
  },
  {
    text: "57. Opposite of 'strong' is:",
    options: ["weak", "soft"],
    correct: 0
  },
  {
    text: "58. Choose the correct question:",
    options: ["What would you do if you won the lottery?", "What you would do if you won the lottery?"],
    correct: 0
  },
  {
    text: "59. 'Improvement' is a:",
    options: ["Noun", "Verb"],
    correct: 0
  },
  {
    text: "60. Choose the correct sentence:",
    options: ["He didn't wrote the letter.", "He didn't write the letter."],
    correct: 1
  }
];

// =======================
// منطق عرض الأسئلة
// =======================
let currentIndex = 0;
const answers = new Array(questions.length).fill(null);

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

function renderQuestion() {
  const q = questions[currentIndex];
  questionText.textContent = q.text;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const label = document.createElement("label");
    label.className = "option-label";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = idx;

    if (answers[currentIndex] === idx) {
      input.checked = true;
    }

    input.addEventListener("change", () => {
      answers[currentIndex] = idx;
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + opt));
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(document.createElement("br"));
  });

  // تحديث الأزرار
  prevBtn.style.display = currentIndex === 0 ? "none" : "inline-block";
  nextBtn.style.display = currentIndex === questions.length - 1 ? "none" : "inline-block";
  submitBtn.style.display = currentIndex === questions.length - 1 ? "inline-block" : "none";

  // تحديث الـ Progress
  const progress = ((currentIndex + 1) / questions.length) * 100;
  progressFill.style.width = progress + "%";
  progressText.textContent = `Question ${currentIndex + 1} / ${questions.length}`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
});

submitBtn.addEventListener("click", () => {
  if (!confirm("Are you sure you want to submit the test?")) return;
  submitQuiz();
});

// =======================
// حساب النتيجة
// =======================
function submitQuiz() {
  let score = 0;
  questions.forEach((q, idx) => {
    if (answers[idx] === q.correct) score++;
  });

  localStorage.setItem("score", score);
  window.location.href = "result.html";
}

// أول عرض
if (questionText && optionsContainer) {
  renderQuestion();
}
