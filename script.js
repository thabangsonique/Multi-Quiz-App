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

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  isFinished() {
    return this.currentQuestionIndex >= this.questions.length;
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
const questionNumber = document.getElementById("question-number");
const finalScore = document.getElementById("final-score");
const quizScreen = document.getElementById("quiz");
const nextButton = document.getElementById("next-btn");
const resultsScreen = document.getElementById("results-screen");
const restartQuiz = document.getElementById("restart-quiz");

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

  //display topic header.
  quizTopic.textContent = currentQuiz.topic;
  updateScore();

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

  //update progress bar.
  updateProgressBar();

  //update question number
  updateQuestionNumber();
}

//PROGRESS FUNCTIONS
function updateQuestionNumber() {
  const current = currentQuiz.currentQuestionIndex + 1;
  const total = currentQuiz.questions.length;

  questionNumber.textContent = `Question ${current} of ${total}`;
}

function updateProgressBar() {
  const current = currentQuiz.currentQuestionIndex;
  const totalQuestions = currentQuiz.questions.length;

  const progressPercentage = (current / totalQuestions) * 100;

  progressBar.style.width = `${progressPercentage}%`;
}

//SCORE TRACKING.
function updateScore() {
  const newScore = currentQuiz.score;
  const totalQuestions = currentQuiz.questions.length;

  scoreElement.textContent = `Current Score: ${newScore} out of ${totalQuestions}`;
}

//handle selected answer. handle right or wrong answer display
function handleOption(button, selectedOption) {
  const isCorrect = currentQuiz.checkAnswer(selectedOption);

  //score update.
  updateScore();

  //add styling to button based on answer
  if (isCorrect) {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
  }

  //disable all buttons after the user clicks an option.
  const allButtons = answersContainer.querySelectorAll("button");

  allButtons.forEach((buttonElement) => {
    buttonElement.disabled = true;
  });
}

//NEXT QUESTION BUTTON.
nextButton.addEventListener("click", () => {
  //next question function to grab current index.
  currentQuiz.nextQuestion();

  //save updated user data.
  saveQuizState();

  if (currentQuiz.isFinished()) {
    showResults();
  } else {
    displayQuestion();
  }
});

function showResults() {
  //hide quiz screen
  quizScreen.classList.add("hidden");
  //show results screen.
  resultsScreen.classList.remove("hidden");

  //calculate percentage.
  const percentage = (currentQuiz.score / currentQuiz.questions.length) * 100;

  //display percentage.
  if (percentage === 100) {
    finalScore.textContent = "Outstanding!, you got 10 out of 10!";
  } else if (percentage > 50 && percentage < 100) {
    finalScore.textContent = `Well done! you got ${percentage} %`;
  } else {
    finalScore.textContent = `You got ${percentage}%, Hard luck. Try again!`;
  }
}

//RESTART THE QUIZ.
restartQuiz.addEventListener("click", () => {
  resultsScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");

  //reset score
  let score = 0;

  scoreElement.textContent = `Current Score: ${score} out of 10`;
});

//SAVE USERDATA WHEN REFRESHING PAGE.
function saveQuizState() {
  if (!currentQuiz) return;

  const quizState = {
    topic: currentQuiz.topic,
    currentQuestionIndex: currentQuiz.currentQuestionIndex,
    score: currentQuiz.score,
    userAnswers: currentQuiz.userAnswers,
  };

  //store inside local storage.
  localStorage.setItem("quizState", JSON.stringify(quizState));
}

// LOAD DATA WHEN USER REFRESHES.
function loadQuizState() {
  const savedState = localStorage.getItem("quizState");

  if (!savedState) return false;

  const objectState = JSON.parse(savedState); //convert save state string into javascript object

  //re-generate the instance using updated "quizState" data.
  currentQuiz = new Quiz(objectState.topic, quizzes[objectState.topic]);

  //assign updated index,score, and user answer.
  currentQuiz.currentQuestionIndex = objectState.currentQuestionIndex;
  currentQuiz.score = objectState.score;
  currentQuiz.userAnswers = objectState.userAnswers;

  return true;
}

//ADD eventlistener REFRESH FUNCTION WHEN LOADING. trigga the actual load function.
window.addEventListener("load", () => {
  if (loadQuizState()) {
    homeScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    displayQuestion(); //uses updated data when running displayQuestion function.
  }
});
