const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
}


cards.forEach(card => card.addEventListener('click', flipCard));


/* Moldar pop up */

const openModalCards = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalCards.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.aa('active');
}

