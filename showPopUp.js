const commentBlock = document.querySelector('.comment-block');
const popupOverlay = document.querySelector('.popup-overlay');
const popupLink = document.querySelector('.popup-link');

const showPopup = () => popupOverlay.style.display = 'flex';

window.addEventListener('scroll', () => {
  setTimeout(() => {
    const commentPosition = commentBlock.getBoundingClientRect().top;

    if (commentPosition <= 0) {
      showPopup();
    }
  }, 150)
});

popupLink.addEventListener("click", () => (popupOverlay.style.display = "none"));