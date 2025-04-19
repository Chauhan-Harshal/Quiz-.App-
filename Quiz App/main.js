const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "London", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1,
    },
    {
      question: "Who wrote 'Hamlet'?",
      answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
      correct: 1,
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer-btn");
  const nextButton = document.getElementById("next-btn");
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    answerButtons.forEach((button, index) => {
      button.textContent = q.answers[index];
      button.onclick = () => selectAnswer(index);
    });
  }
  
  function selectAnswer(index) {
    const correct = questions[currentQuestion].correct;
    if (index === correct) score++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    document.getElementById("answers").style.display = "none";
    nextButton.style.display = "none";
  }
  
  nextButton.addEventListener("click", () => {
    loadQuestion();
    nextButton.style.display = "none";
  });
  
  loadQuestion();
  