const questions = [
    {
      question: "What does 'DOM' stand for in JavaScript?",
      options: ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Digital Object Model"],
      answer: "Document Object Model"
    },
    {
      question: "Which keyword is used to declare variables in JavaScript?",
      options: ["var", "let", "const", "variable"],
      answer: "var"
    },
    {
      question: "What is the output of 'typeof []' in JavaScript?",
      options: ["Array", "Object", "null", "undefined"],
      answer: "Object"
    },
    {
      question: "What is the result of 2 + '2' in JavaScript?",
      options: ["22", "4", "TypeError", "NaN"],
      answer: "22"
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      options: ["Checks for equality without type conversion", "Checks for equality with type conversion", "Checks for identity without type conversion", "Checks for identity with type conversion"],
      answer: "Checks for equality without type conversion"
    },
    {
      question: "What is the result of '5' - 3 in JavaScript?",
      options: ["2", "8", "TypeError", "NaN"],
      answer: "2"
    },
    {
      question: "Which function is used to parse a string to an integer in JavaScript?",
      options: ["parseInt()", "parseFloat()", "stringToInt()", "toInt()"],
      answer: "parseInt()"
    },
    {
      question: "What does the '&&' operator do in JavaScript?",
      options: ["Logical OR", "Logical AND", "Logical NOT", "Bitwise AND"],
      answer: "Logical AND"
    },
    {
      question: "Which JavaScript method is used to remove the last element from an array and returns that element?",
      options: ["pop()", "shift()", "splice()", "slice()"],
      answer: "pop()"
    },
    {
      question: "What is the output of 'typeof NaN' in JavaScript?",
      options: ["number", "NaN", "undefined", "TypeError"],
      answer: "number"
    }
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const questionContainer = document.getElementById('question');
  const optionsContainer = document.getElementById('options');
  const submitButton = document.getElementById('submit-btn');
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const currentQues = questions[currentQuestion];
    questionContainer.textContent = currentQues.question;
    optionsContainer.innerHTML = '';
  
    currentQues.options.forEach((option, index) => {
      const optionElement = document.createElement('button');
      optionElement.textContent = option;
      optionElement.classList.add('option');
      optionElement.addEventListener('click', () => checkAnswer(option));
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function checkAnswer(answer) {
    const currentQues = questions[currentQuestion];
    if (answer === currentQues.answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
  }
  
  displayQuestion();

function showResult() {
    let resultHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
    questions.forEach((question, index) => {
      const userAnswer = (index < score) ? 'Correct' : 'Incorrect';
      const correctAnswer = question.answer;
      resultHTML += `<p>${index + 1}. ${question.question} - ${userAnswer}`;
      if(userAnswer === 'Incorrect') {
        resultHTML += ` (Correct answer: ${correctAnswer})`;
      }
      resultHTML += `</p>`;
    });
    quizContainer.innerHTML = resultHTML;
  }
  