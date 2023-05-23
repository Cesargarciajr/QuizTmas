const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flipCard));
let timerInterval;


function flipCard() {
    this.classList.toggle('flip');
}

/* Moldar pop up */

const openModalCards = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalCards.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
        startQuestionTimer(modal);
        startQuiz();
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
        clearInterval(timerInterval);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


/** Count Down Timer */

function startQuestionTimer(modal) {
    clearInterval(timerInterval);
    let timeRemaining = 31;
    const timerElement = modal.querySelector('.countDownTimer span');

    timerInterval = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = timeRemaining;

        if (timeRemaining <= -1) {
            clearInterval(timerInterval);
            alert("Times Up!");
            closeModal(modal);
        }
    }, 1000);
}

/** Quiz functions */

const questions = [
    {
        question: "What year was the first recorded date of Christmas being celebrated?",
        answers: [
            { text: "1000 A.D.", correct: false },
            { text: "1525 B.C.", correct: false },
            { text: "336 A.D.", correct: true },
            { text: "1804 C.E", correct: false },
        ]
    },
    {
        question: "In what country is it believed that the tradition of putting up Christmas trees originated",
        answers: [
            { text: "France", correct: false },
            { text: "Brazil", correct: false },
            { text: "Ireland", correct: false },
            { text: "Germany", correct: true },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const correctAnswered = document.getElementById("correct-answered");
const incorrectAnswered = document.getElementById("incorrect-answered");

let currentQuestionIndex = 0;
let score = 0;
let wrong = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion() {
    resetState();
    let currenQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currenQuestion.question;

    currenQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
};

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        correctAnswered.innerHTML = score;
    } else {
        selectedBtn.classList.add("incorrect");
        wrong++;
        incorrectAnswered.innerHTML = wrong;
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
