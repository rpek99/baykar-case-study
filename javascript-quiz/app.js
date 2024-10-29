const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("time-left");
const resultsContainer = document.getElementById("results");
const resultsTable = document.getElementById("results-table");

let questions = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];
let timer;
let timeLeft = 30;

async function fetchQuestions() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  questions = data.slice(0, 10).map((item) => ({
    question: item.title,
    options: generateOptions(item.body),
  }));
  showQuestion();
}

function generateOptions(text) {
  const words = text.split(" ").slice(0, 4);
  return words.map((word, index) => ({
    label: String.fromCharCode(65 + index),
    text: word,
  }));
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  const questionData = questions[currentQuestionIndex];
  questionEl.textContent = questionData.question;
  optionsEl.innerHTML = "";
  timeLeft = 30;
  timerEl.textContent = timeLeft;
  
  questionData.options.forEach((option, index) => {
    const optionBtn = document.createElement("button");
    optionBtn.textContent = `${option.label}: ${option.text}`;
    optionBtn.className = "w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50";
    optionBtn.disabled = true;
    optionBtn.addEventListener("click", () => selectAnswer(option.text));
    optionsEl.appendChild(optionBtn);
  });

  setTimeout(() => {
    Array.from(optionsEl.children).forEach((btn) => (btn.disabled = false));
  }, 10000);

  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timerEl.textContent = timeLeft;
  } else {
    clearInterval(timer);
    moveToNextQuestion();
  }
}

function selectAnswer(answer) {
  selectedAnswers.push({ question: questions[currentQuestionIndex].question, answer });
  moveToNextQuestion();
}

function moveToNextQuestion() {
  clearInterval(timer);
  currentQuestionIndex++;
  showQuestion();
}

function endQuiz() {
  quizContainer.classList.add("hidden");
  resultsContainer.classList.remove("hidden");

  selectedAnswers.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border-b py-2">${index + 1}. ${item.question}</td>
      <td class="border-b py-2">${item.answer}</td>
    `;
    resultsTable.appendChild(row);
  });
}

fetchQuestions();