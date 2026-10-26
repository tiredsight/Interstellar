const watchBtn = document.querySelector('.button-content button');
const overlay = document.querySelector('.trailer-overlay');
const closeBtn = document.querySelector('.trailer-close');

watchBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () =>{
    overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overplay) {
        overlay.classList.remove('active');
    }
});