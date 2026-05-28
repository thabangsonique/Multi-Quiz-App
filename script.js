//create the quize class
class Quiz {
  constructor(topic, questions) {
    this.topic = topic;
    this.questions = questions;
    this.currentQuestionIndex = 0; //grab relevent question based on current index item.
    this.score = 0; //score that user will get after each correct question.
    this.userAnswers = []; //store all the user answers as an array.
  }
  //define function that grabs current question by index.
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  //function to check if answer is correct.
  checkAnswer(selectedOption) {
    const currentQuestion = this.getCurrentQuestion();

    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    if (isCorrect) {
      this.score++;
    }

    //store user answers in the userAnswer array
    this.userAnswers.push({
      question: currentQuestion.question,
      selectedOption,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect,
    });

    return isCorrect;
  }
}

//ASSIGNING DOM ELEMENTS.
const homeScreen = document.getElementById("home-screen");
const topicsContainer = document.getElementById("topics-container");
const quizTopic = document.getElementById("quiz-topic");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress");
const answersContainer = document.getElementById("answer-options");
const answerOptions = document.getElementById("answer-options");
const questionElement = document.getElementById("question");
const finalScore = document.getElementById("final-score");
const quizScreen = document.getElementById("quiz");
const nextButton = document.getElementById("next-btn");

//CREATING TOPICS BUTTON
Object.keys(quizzes).forEach((topic) => {
  //creating button element for each item.
  const button = document.createElement("button");

  //set text content for each button to each item.
  button.textContent = topic;

  button.classList.add("topic-btn");

  button.addEventListener("click", () => {
    startTopicQuiz(topic);
  });
  topicsContainer.appendChild(button);
});

//START QUIZ FUNCTION.
let currentQuiz; // store data about question using a quiz instance

function startTopicQuiz(topic) {
  currentQuiz = new Quiz(topic, quizzes[topic]);

  //displaying the quiz screen.
  homeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  displayQuestion();
}

//FUNCTION TO DISPLAY THE QUIZ SCREEN
function displayQuestion() {
  const currentQuestion = currentQuiz.getCurrentQuestion();

  //displaying only the question
  questionElement.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  //options to choose from.
  currentQuestion.options.forEach((option) => {
    //button for each option.
    const button = document.createElement("button");
    button.textContent = option;

    button.classList.add("topic-btn");

    button.addEventListener("click", () => {
      handleOption(button, option);
    });

    answersContainer.appendChild(button);
  });
}

//handle selected answer. handle right or wrong answer display
function handleOption(button, selectedOption) {
  const isCorrect = currentQuiz.checkAnswer(selectedOption);

  //add styling to button based on answer
  if (isCorrect) {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
  }
}

//next question button.
