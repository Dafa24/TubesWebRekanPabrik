document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  const formContact = document.getElementById("formContact");

  window.onscroll = function () {
    scrollFunction(navbar);
  };

  const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  
  });

  formContact.addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    let hasError = false;
  
    // Validasi First Name
    const firstName = document.getElementById("fname");
    const firstNameError = document.getElementById("FnameError");
    if (firstName.value.trim() === "") {
      firstNameError.textContent = "First name is required.";
      firstNameError.style.display = "block";
      hasError = true;
    } else {
      firstNameError.textContent = "";
      firstNameError.style.display = "none";
    }
  
    // Validasi Last Name
    const lastName = document.getElementById("lname");
    const lastNameError = document.getElementById("LnameError");
    if (lastName.value.trim() === "") {
      lastNameError.textContent = "Last name is required.";
      lastNameError.style.display = "block";
      hasError = true;
    } else {
      lastNameError.textContent = "";
      lastNameError.style.display = "none";
    }
  
    // Validasi Email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      hasError = true;
    } else {
      emailError.textContent = "";
      emailError.style.display = "none";
    }
  
    // Validasi Password
    const number = document.getElementById("number");
    const numberError = document.getElementById("numberError");
    if (number.value.trim() === "") {
      numberError.textContent = "Number is required.";
      numberError.style.display = "block";
      hasError = true;
    } else {
      numberError.textContent = "";
      numberError.style.display = "none";
    }

    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message.value.trim() === "") {
      messageError.textContent = "Message is required.";
      messageError.style.display = "block";
      hasError = true;
    } else {
      messageError.textContent = "";
      messageError.style.display = "none";
    }

    if (!hasError) {
      Swal.fire({
        title: "Success!",
        text: "Pengaduan Anda Akan Kami Proses",
        icon: "success",
        confirmButtonText: "Lanjutkan",
      });
    }
  });

})



function scrollFunction(navbar) {
  

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