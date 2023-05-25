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
                { text: "1804 C.E.", correct: false }
            ]
        },
        {
            question: "In what country is it believed that the tradition of putting up Christmas trees originated?",
            answers: [
                { text: "France", correct: false },
                { text: "Brazil", correct: false },
                { text: "Ireland", correct: false },
                { text: "Germany", correct: true }
            ]
        },
        {
            question: "What is the most popular Christmas song of all time?",
            answers: [
                { text: "\"White Christmas\" by Irving Berlin", correct: true },
                { text: "\"Jingle Bells\" by Frank Sinatra", correct: false },
                { text: "\"Feliz Navidad\" by Mariah Carey", correct: false },
                { text: "\"Santa Claus Is Coming to Town\" by Elvis Presley", correct: false }
            ]
        },
        {
            question: "Which country has a tradition of a witch delivering gifts to children on Christmas Eve?",
            answers: [
                { text: "Greece", correct: false },
                { text: "Japan", correct: false },
                { text: "Italy", correct: true },
                { text: "Spain", correct: false }
            ]
        },
        {
            question: "In what year was the movie \"Home Alone\" released?",
            answers: [
                { text: "1985", correct: false },
                { text: "1990", correct: true },
                { text: "2000", correct: false },
                { text: "1995", correct: false }
            ]
        },
        {
            question: "What is the highest-grossing Christmas movie of all time?",
            answers: [
                { text: "A Christmas Carol (2009)", correct: false },
                { text: "Elf", correct: false },
                { text: "Home Alone", correct: false },
                { text: "How the Grinch Stole Christmas (2000)", correct: true }
            ]
        },
        {
            question: "In what country did the tradition of hanging stockings by the fireplace originate?",
            answers: [
                { text: "Spain", correct: false },
                { text: "United States", correct: false },
                { text: "Netherlands", correct: true },
                { text: "England", correct: false }
            ]
        },
        {
            question: "Which popular Christmas beverage is also known as \"mulled wine\"?",
            answers: [
                { text: "Hot chocolate", correct: false },
                { text: "Apple cider", correct: false },
                { text: "Eggnog", correct: false },
                { text: "Gluhwein", correct: true }
            ]
        },
        {
            question: "How many reindeer does Santa Claus have?",
            answers: [
                { text: "Six", correct: false },
                { text: "Eight", correct: false },
                { text: "Nine", correct: false },
                { text: "Twelve", correct: true }
            ]
        },
        {
            question: "In the song \"The Twelve Days of Christmas,\" how many total gifts are given?",
            answers: [
                { text: "78", correct: false },
                { text: "92", correct: false },
                { text: "364", correct: true },
                { text: "416", correct: false }
            ]
        },
        {
            question: "What is the name of the main character in Charles Dickens' \"A Christmas Carol\"?",
            answers: [
                { text: "Jacob Marley", correct: false },
                { text: "Tiny Tim", correct: false },
                { text: "Ebenezer Scrooge", correct: true },
                { text: "Bob Cratchit", correct: false }
            ]
        },
        {
            question: "What is the most popular ornament used to top a Christmas tree?",
            answers: [
                { text: "Candy cane", correct: false },
                { text: "Snowflake", correct: false },
                { text: "Angel", correct: true },
                { text: "Star", correct: false }
            ]
        },
        {
            question: "Which country is believed to have started the tradition of exchanging Christmas cards?",
            answers: [
                { text: "Brazil", correct: false },
                { text: "China", correct: false },
                { text: "United States", correct: false },
                { text: "United Kingdom", correct: true }
            ]
        },
        {
            question: "In what city is the famous Christmas tree located at Rockefeller Center?",
            answers: [
                { text: "London", correct: false },
                { text: "Paris", correct: false },
                { text: "New York City", correct: true },
                { text: "Sydney", correct: false }
            ]
        },
        {
            question: "What is the average number of lights on a Christmas tree?",
            answers: [
                { text: "50", correct: false },
                { text: "200", correct: false },
                { text: "500", correct: false },
                { text: "1000", correct: true }
            ]
        },
        {
            question: "What is the name of the famous ballet featuring a girl named Clara and a Nutcracker?",
            answers: [
                { text: "Swan Lake", correct: false },
                { text: "Sleeping Beauty", correct: false },
                { text: "The Nutcracker", correct: true },
                { text: "Romeo and Juliet", correct: false }
            ]
        },
        {
            question: "Which country celebrates Christmas on January 7th instead of December 25th?",
            answers: [
                { text: "Germany", correct: false },
                { text: "Brazil", correct: false },
                { text: "Japan", correct: false },
                { text: "Russia", correct: true }
            ]
        },
        {
            question: "In what country did gingerbread houses originate?",
            answers: [
                { text: "Italy", correct: false },
                { text: "France", correct: false },
                { text: "Germany", correct: true },
                { text: "Spain", correct: false }
            ]
        },
        {
            question: "What is the color of Rudolph the Red-Nosed Reindeer's nose?",
            answers: [
                { text: "Blue", correct: false },
                { text: "Green", correct: false },
                { text: "Red", correct: true },
                { text: "Yellow", correct: false }
            ]
        },
        {
            question: "Which plant is commonly associated with Christmas and has red berries?",
            answers: [
                { text: "Sunflower", correct: false },
                { text: "Holly", correct: true },
                { text: "Daisy", correct: false },
                { text: "Lily", correct: false }
            ]
        },
        {
            question: "In the song \"Jingle Bells,\" what type of sleigh is mentioned?",
            answers: [
                { text: "Open sleigh", correct: true },
                { text: "Wooden sleigh", correct: false },
                { text: "Silver sleigh", correct: false },
                { text: "Magic sleigh", correct: false }
            ]
        },
        {
            question: "What is the name of the Grinch's dog in Dr. Seuss' \"How the Grinch Stole Christmas\"?",
            answers: [
                { text: "Max", correct: true },
                { text: "Buddy", correct: false },
                { text: "Baxter", correct: false },
                { text: "Rocky", correct: false }
            ]
        },
        {
            question: "How many points does a snowflake traditionally have?",
            answers: [
                { text: "Four", correct: false },
                { text: "Six", correct: false },
                { text: "Eight", correct: true },
                { text: "Ten", correct: false }
            ]
        },
        {
            question: "In what year did Coca-Cola start using Santa Claus in its advertisements?",
            answers: [
                { text: "1901", correct: false },
                { text: "1920", correct: false },
                { text: "1931", correct: true },
                { text: "1950", correct: false }
            ]
        },
        {
            question: "What popular Christmas decoration is made from folded pieces of paper?",
            answers: [
                { text: "Tinsel", correct: false },
                { text: "Wreath", correct: false },
                { text: "Stocking", correct: false },
                { text: "Origami", correct: true }
            ]
        },
        {
            question: "Which country's children often leave carrots for Santa's reindeer?",
            answers: [
                { text: "France", correct: false },
                { text: "Australia", correct: false },
                { text: "Canada", correct: false },
                { text: "Sweden", correct: true }
            ]
        },
        {
            question: "What is the name of the traditional Italian Christmas cake?",
            answers: [
                { text: "Stollen", correct: false },
                { text: "Panettone", correct: true },
                { text: "Fruitcake", correct: false },
                { text: "Yule log", correct: false }
            ]
        },
        {
            question: "What is the name of the holiday celebrated on December 26th?",
            answers: [
                { text: "Boxing Day", correct: true },
                { text: "New Year's Day", correct: false },
                { text: "St. Stephen's Day", correct: false },
                { text: "Epiphany", correct: false }
            ]
        },
        {
            question: "What is the name of the reindeer that Rudolph falls in love with in the movie \"Rudolph the Red-Nosed Reindeer\"?",
            answers: [
                { text: "Clarice", correct: true },
                { text: "Dancer", correct: false },
                { text: "Cupid", correct: false },
                { text: "Vixen", correct: false }
            ]
        },
        {
            question: "What is the traditional Christmas flower?",
            answers: [
                { text: "Tulip", correct: false },
                { text: "Rose", correct: false },
                { text: "Carnation", correct: false },
                { text: "Poinsettia", correct: true }
            ]
        },
        {
            question: "What is the name of the boy who never grows up in the story \"Peter Pan\"?",
            answers: [
                { text: "Michael", correct: false },
                { text: "John", correct: false },
                { text: "Peter", correct: true },
                { text: "Wendy", correct: false }
            ]
        },
        {
            question: "What do people in Japan traditionally eat on Christmas Day?",
            answers: [
                { text: "Sushi", correct: true },
                { text: "Roast turkey", correct: false },
                { text: "Peking duck", correct: false },
                { text: "Spaghetti", correct: false }
            ]
        },
        {
            question: "What is the name of the character who tries to stop Christmas in the movie \"The Polar Express\"?",
            answers: [
                { text: "The Conductor", correct: false },
                { text: "The Boy", correct: false },
                { text: "The Hobo", correct: false },
                { text: "The Lonely Boy", correct: true }
            ]
        },
        {
            question: "What is the traditional Christmas meat in England?",
            answers: [
                { text: "Ham", correct: false },
                { text: "Chicken", correct: false },
                { text: "Beef", correct: false },
                { text: "Turkey", correct: true }
            ]
        },
        {
            question: "What is the name of the main character in the movie \"Elf\"?",
            answers: [
                { text: "Buddy", correct: true },
                { text: "Walter", correct: false },
                { text: "Jovie", correct: false },
                { text: "Santa", correct: false }
            ]
        },
        {
            question: "What is the name of the traditional Mexican Christmas punch?",
            answers: [
                { text: "Ponche", correct: true },
                { text: "Sangria", correct: false },
                { text: "Margarita", correct: false },
                { text: "Tequila", correct: false }
            ]
        }
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


