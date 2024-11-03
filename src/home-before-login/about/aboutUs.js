window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const navbar = document.getElementById("navbar");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 90) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.28);";
    //navbar.style.backgroundColor = "rgba(4, 41, 58, 1)";
    navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
    navbar.style.backdropFilter = "blur(7.9px)";
    navbar.style.webkitBackdropFilter = "blur(7.9px)";
    navbar.style.border = "1px solid rgba(255, 255, 255, 1)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "";
    navbar.style.backdropFilter = "";
    navbar.style.webkitBackdropFilter = "";
    navbar.style.border = "";
  }
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const navbar = d
}

// Untuk click navbar
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");


menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("nav-ul")
})

// slider card
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const clone = card.cloneNode(true);
  cardContainer.appendChild(clone);
});

let position = 0;
const speed = 0.5;

function moveCards() {
  position -= speed;

  const totalWidth = cards[0].offsetWidth * cards.length;
  if (Math.abs(position) >= totalWidth) {
    position = 0;
  }

  cardContainer.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(moveCards);
}

moveCards();

cardContainer.addEventListener('mouseenter', () => {
  cardContainer.style.animationPlayState = 'paused';
});

cardContainer.addEventListener('mouseleave', () => {
  cardContainer.style.animationPlayState = 'running';
});