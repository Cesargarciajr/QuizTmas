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


