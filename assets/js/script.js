
/** Variable for the Pool of Questions */
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
    },
    {
        question: "What is the name of the main character in the movie 'Elf'?",
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
    },
    {
        question: "What is the traditional color of Christmas in many Western cultures?",
        answers: [
            { text: "Red and Green", correct: true },
            { text: "Blue and Silver", correct: false },
            { text: "White and Gold", correct: false },
            { text: "Yellow and Purple", correct: false }
        ]
    },
    {
        question: "Which popular Christmas ballet features a young girl named Clara?",
        answers: [
            { text: "The Nutcracker", correct: true },
            { text: "Swan Lake", correct: false },
            { text: "Cinderella", correct: false },
            { text: "Romeo and Juliet", correct: false }
        ]
    },
    {
        question: "What is the name of the snowman in the movie 'Frozen'?",
        answers: [
            { text: "Olaf", correct: true },
            { text: "Sven", correct: false },
            { text: "Elsa", correct: false },
            { text: "Kristoff", correct: false }
        ]
    },
    {
        question: "In the song 'Frosty the Snowman,' what are Frosty's eyes made of?",
        answers: [
            { text: "Coal", correct: true },
            { text: "Buttons", correct: false },
            { text: "Carrots", correct: false },
            { text: "Stones", correct: false }
        ]
    },
    {
        question: "What is the name of the character who tries to steal Christmas in Dr. Seuss' 'How the Grinch Stole Christmas'?",
        answers: [
            { text: "The Grinch", correct: true },
            { text: "Cindy Lou Who", correct: false },
            { text: "Max", correct: false },
            { text: "Whoville", correct: false }
        ]
    },
    {
        question: "What is the last line of the poem ''Twas the Night Before Christmas''?",
        answers: [
            { text: "Happy Christmas to all, and to all a good night.", correct: true },
            { text: "Santa Claus is coming to town.", correct: false },
            { text: "Let it snow, let it snow, let it snow.", correct: false },
            { text: "Jingle bells, jingle bells, jingle all the way.", correct: false }
        ]
    },
    {
        question: "Which country is credited with starting the tradition of decorating Christmas trees?",
        answers: [
            { text: "Germany", correct: true },
            { text: "United States", correct: false },
            { text: "England", correct: false },
            { text: "France", correct: false }
        ]
    },
    {
        question: "What is the name of the angel who visits Mary in the Bible's Christmas story?",
        answers: [
            { text: "Gabriel", correct: true },
            { text: "Michael", correct: false },
            { text: "Raphael", correct: false },
            { text: "Uriel", correct: false }
        ]
    },
    {
        question: "What is the name of the reindeer with a shiny nose in the song 'Rudolph the Red-Nosed Reindeer'?",
        answers: [
            { text: "Rudolph", correct: true },
            { text: "Dasher", correct: false },
            { text: "Prancer", correct: false },
            { text: "Comet", correct: false }
        ]
    },
    {
        question: "What popular holiday dessert is typically made with crushed candy canes?",
        answers: [
            { text: "Peppermint Bark", correct: true },
            { text: "Gingerbread Cookies", correct: false },
            { text: "Fruitcake", correct: false },
            { text: "Pumpkin Pie", correct: false }
        ]
    },
    {
        question: "In what country is the Christmas season often celebrated with a 'Festival of Lights'?",
        answers: [
            { text: "India", correct: true },
            { text: "China", correct: false },
            { text: "Japan", correct: false },
            { text: "Brazil", correct: false }
        ]
    },
    {
        question: "What is the name of the traditional Christmas cake in England?",
        answers: [
            { text: "Christmas Pudding", correct: true },
            { text: "Fruitcake", correct: false },
            { text: "Yule Log", correct: false },
            { text: "Apple Pie", correct: false }
        ]
    },
    {
        question: "Which US state is known as the 'Christmas Tree Capital of the World'?",
        answers: [
            { text: "Oregon", correct: true },
            { text: "California", correct: false },
            { text: "New York", correct: false },
            { text: "Washington", correct: false }
        ]
    },
    {
        question: "In the movie 'A Christmas Story,' what gift does Ralphie desperately want?",
        answers: [
            { text: "Red Ryder BB Gun", correct: true },
            { text: "Bicycle", correct: false },
            { text: "Video Game Console", correct: false },
            { text: "Puppy", correct: false }
        ]
    },
    {
        question: "What is the name of Santa Claus's wife?",
        answers: [
            { text: "Mrs. Claus", correct: true },
            { text: "Mary Claus", correct: false },
            { text: "Carol Claus", correct: false },
            { text: "Emily Claus", correct: false }
        ]
    },
    {
        question: "What is the name of the reindeer that leads Santa's sleigh?",
        answers: [
            { text: "Dasher", correct: true },
            { text: "Prancer", correct: false },
            { text: "Vixen", correct: false },
            { text: "Cupid", correct: false }
        ]
    },
    {
        question: "Which holiday beverage is made from beaten eggs, sugar, milk, and spices?",
        answers: [
            { text: "Eggnog", correct: true },
            { text: "Hot Chocolate", correct: false },
            { text: "Mulled Wine", correct: false },
            { text: "Cider", correct: false }
        ]
    },
    {
        question: "What is the name of the boy who receives a magic ticket to the North Pole in the movie 'The Polar Express'?",
        answers: [
            { text: "Billy", correct: false },
            { text: "Tommy", correct: false },
            { text: "Johnny", correct: false },
            { text: "Hero Boy", correct: true }
        ]
    },
    {
        question: "What is the name of the character played by Jim Carrey in the movie 'How the Grinch Stole Christmas'?",
        answers: [
            { text: "The Grinch", correct: false },
            { text: "Max", correct: false },
            { text: "Cindy Lou Who", correct: false },
            { text: "Theodor 'Ted' Geisel", correct: true }
        ]
    },
    {
        question: "Which company introduced the concept of Santa Claus as we know him today in their advertising?",
        answers: [
            { text: "Coca-Cola", correct: true },
            { text: "PepsiCo", correct: false },
            { text: "McDonald's", correct: false },
            { text: "Amazon", correct: false }
        ]
    },
    {
        question: "In the song 'Jingle Bells,' what kind of sleigh is mentioned?",
        answers: [
            { text: "One-horse open sleigh", correct: true },
            { text: "Two-horse covered sleigh", correct: false },
            { text: "Three-horse wooden sleigh", correct: false },
            { text: "Four-horse carriage sleigh", correct: false }
        ]
    },
    {
        question: "What is the name of the little girl who believes in Santa Claus in the movie 'Miracle on 34th Street'?",
        answers: [
            { text: "Susan Walker", correct: true },
            { text: "Sally Johnson", correct: false },
            { text: "Sophie Davis", correct: false },
            { text: "Sarah Thompson", correct: false }
        ]
    },
    {
        question: "What is the name of the toy Buzz Lightyear believes he is in the movie 'Toy Story'?",
        answers: [
            { text: "Buzz Lightyear", correct: false },
            { text: "Woody", correct: false },
            { text: "Rex", correct: false },
            { text: "Mrs. Nesbitt", correct: true }
        ]
    },
    {
        question: "In the movie 'Home Alone,' where are the McCallisters going on vacation when they leave Kevin behind?",
        answers: [
            { text: "Paris, France", correct: true },
            { text: "London, England", correct: false },
            { text: "Rome, Italy", correct: false },
            { text: "Sydney, Australia", correct: false }
        ]
    },
    {
        question: "What is the name of the famous ballet choreographed by Tchaikovsky and often performed during the holiday season?",
        answers: [
            { text: "The Nutcracker", correct: true },
            { text: "Swan Lake", correct: false },
            { text: "Coppélia", correct: false },
            { text: "Giselle", correct: false }
        ]
    },
    {
        question: "What is the name of the boy who befriends a stranded alien in the movie 'E.T. the Extra-Terrestrial'?",
        answers: [
            { text: "Elliott", correct: true },
            { text: "Michael", correct: false },
            { text: "David", correct: false },
            { text: "Henry", correct: false }
        ]
    },
    {
        question: "What is the name of the reindeer that is often depicted as Rudolph's love interest?",
        answers: [
            { text: "Clarice", correct: true },
            { text: "Dancer", correct: false },
            { text: "Blitzen", correct: false },
            { text: "Cupid", correct: false }
        ]
    }
];

/** Variable to select Element to show question in the moldar popup */
const questionElement = document.getElementById("question");

/** Variable to select Element to display answers in the moldar popup */
const answerButtons = document.getElementById("answer-buttons");

/** Variable to select Element to display Next Butto in the moldar popup */
const nextButton = document.getElementById("next-btn");

/** Variable to select Element for correct answer in the moldar popup */
const correctAnswered = document.getElementById("correct-answered");

/** Variable to select Element for incorrect answer in the moldar popup */
const incorrectAnswered = document.getElementById("incorrect-answered");

/** Shuffles the questions when the page is loaded*/
let shuffledQuestions;
let currentQuestionIndex = 0;
shuffledQuestions = questions.sort(() => Math.random() - 0.5);

/** Score points variable */
let score = 0;
let wrong = 0;

/** Variable to count the questions that were opened */
const questionCounter = document.getElementById('question-counter');
let questionOpened = 0;

/** Variable selecting ther cards */
const cards = document.querySelectorAll('.card');

/** Countdown timer variable */
let timerInterval;

/* Moldar pop up  variable seleting elements*/
const openModalCards = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


const timerElement = document.querySelector('.countDownTimer span');
const timerDiv = document.getElementById('timer');


/** Event listener to flip the card and call for function */
cards.forEach(card => card.addEventListener('click', flipCard));

/** Event listener to open modal popup when card is clicked and call for function */
openModalCards.forEach(button => {
button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    startQuestionTimer(modal);
    startQuiz();
});
});

/** Event listener to close modal popup when card is clicked and call for function */
closeModalButtons.forEach(button => {
button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
    clearInterval(timerInterval);
});
});

/** Open Modal popup Function */
function openModal(modal) {
if (modal == null) return;
modal.classList.add('active');
overlay.classList.add('active');
}

/** Close Modal popup Function */
function closeModal(modal) {
if (modal == null) return;
modal.classList.remove('active');
overlay.classList.remove('active');
}


/** Flipping card function */
function flipCard() {
this.classList.add('flip');
questionOpened++;
questionCounter.innerHTML = questionOpened;

}

/** Count Down Timer Function*/
function startQuestionTimer(modal) {
clearInterval(timerInterval);
let timeRemaining = 16;

timerInterval = setInterval(() => {
    timeRemaining--;
    timerElement.textContent = timeRemaining;

    if (timeRemaining <= -1) {
        clearInterval(timerInterval);
        wrong++;
        incorrectAnswered.innerHTML = wrong;
        alert("Times Up!");
        closeModal(modal);
    }
}, 1000);
}

/** Quiz functions that runs inside the moldar popup*/
function startQuiz() {
nextButton.innerHTML = "Next";
showQuestion();
}

/** Function to display question inside Moldar popup */
function showQuestion(question) {
resetState();
if (questionOpened <= 10) {
     let currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    currentQuestionIndex++;
    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);

    /** When the amount o questions is reached Game over message will appear to restart the game */
});} else {
    clearInterval(timerInterval);
    timerDiv.remove();
    questionElement.style.margin ="0";
    questionElement.style.textAlign ="center";
    questionElement.innerHTML = `Game is over!<br>You got ${score} correct and ${wrong} wrong. <br> Let's try again and have more fun!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.reload();
        });
    });
}
}

/** Function to restate the moldar popup style */
function resetState() {
nextButton.style.display = "none";
while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
}
}

/** Check the correct and incorrect answers, disable the buttons and show the "next" button after clicking in one of the options*/
function selectAnswer(e) {
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if (isCorrect) {
    clearInterval(timerInterval);
    selectedBtn.classList.add("correct");
    score++;
    correctAnswered.innerHTML = score;
} else {
    clearInterval(timerInterval);
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