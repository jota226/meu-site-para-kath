// Perguntas e respostas do jogo
const questions = [
  {
      question: "Onde foi o nosso primeiro encontro?",
      answers: ["Shopping", "olaria", "iapi", "Cinema"],
      correctAnswer: "iapi"
  },
  {
      question: "quando foi nosso primeiro beijo?",
      answers: ["11/04", "10/03", "17/04", "23/03"],
      correctAnswer: "10/03"
  },
  {
 question: "qual lanche a gente mais come?",
 answers: ["batata de olaria", "meki", "kfc", "bobs"],
 correctAnswer: "batata de olaria"
  },
  {
    question: "onde foi nosso primeiro dialogo",
    answers: ["viradao", "culto da virada", "natal", "igreja"],
    correctAnswer: "viradao"
  }
];

let currentQuestionIndex = 0;

function startGame() {
  document.getElementById("start-screen").style.display = "none";

  document.getElementById("question-container").style.display = "block";
  document.getElementById("answers-container").style.display = "block";
  document.getElementById("next-button").style.display = "none"; 

  loadQuestion(); 
}

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question-container").innerText = question.question; 
  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = ""; 

  question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer;
      button.onclick = () => checkAnswer(answer, question.correctAnswer);
      answersContainer.appendChild(button);
  });
}

function checkAnswer(selected, correct) {
  const nextButton = document.getElementById("next-button");

  if (selected === correct) {
      alert("Acertou! Muito bem.");
      nextButton.style.display = "block"; 
  } else {
      alert("Ops, tente de novo!");
      nextButton.style.display = "none"; // Esconde o botão de próxima pergunta até acertar
  }
}

// Avança para a próxima pergunta
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++; // Avança para a próxima pergunta
      loadQuestion(); // Carrega a nova pergunta
      document.getElementById("next-button").style.display = "none"; // Esconde o botão de próxima pergunta até acertar novamente
  } else {
      alert("Parabéns, você completou o jogo!\n acesse link: file:///C:/Users/jon/Documents/estrutura%20em%20c/iserj/kath2.html" ); // Finaliza o jogo
  }
}
