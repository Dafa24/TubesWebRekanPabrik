document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  window.onscroll = function () {
    scrollFunction(navbar);
  };
  loadPerusahaan();

});

function scrollFunction(navbar) {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 90) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.28);";
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

function loadPerusahaan() {
  $.getJSON('../../public/data/daftarPabrik.json', function(data) {
    const container = $('#card-container');
    const errorMessage = $('#error-message');
    errorMessage.hide();

    $.each(data, function(index, item) {
      const card = `
        <div class="card">
          <img src="${item.img}" alt="${item.namaPerusahaan}">
          <div class="card-content">
            <h2>${item.namaPerusahaan}</h2>
            <p>${item.deskripsi}</p>
          </div>
        </div>
      `;
      container.append(card);
    });

    slider();
  }).fail(function() {
    $('#error-message').show();
    console.error('Error loading JSON');
  });
}

function slider() {
  const cardContainer = document.querySelector(".card-container");
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
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

  cardContainer.addEventListener("mouseenter", () => {
    cardContainer.style.animationPlayState = "paused";
  });

  cardContainer.addEventListener("mouseleave", () => {
    cardContainer.style.animationPlayState = "running";
  });
}