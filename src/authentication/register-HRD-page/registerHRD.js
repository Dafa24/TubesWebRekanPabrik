document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const registrationForm = document.getElementById("registrationForm");

  window.onscroll = function () {
    scrollFunction(navbar);
  };

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const companyName = document.getElementById("companyname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmpassword");

    document.querySelectorAll(".error").forEach((error) => {
      error.style.display = "none";
    });

    if (companyName.value.trim() === "") {
      showError("companynameError", "Company name is required");
      isValid = false;
    }

    if (email.value.trim() === "") {
      showError("emailError", "Email is required");
      isValid = false;
    }

    if (password.value.trim() === "") {
      showError("passwordError", "Password is required");
      isValid = false;
    }

    if (confirmPassword.value.trim() === "") {
      showError("confirmpasswordError", "Confirm password is required");
      isValid = false;
    } else if (confirmPassword.value !== password.value) {
      showError("confirmpasswordError", "Passwords do not match");
      isValid = false;
    }

    if (isValid) {
      Swal.fire({
        title: "success!",
        text: "Akun anda berhasil di buat",
        icon: "success",
        confirmButtonText: "lanjutkan",
      });
    }
  });

  function scrollFunction(navbar) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 90
    ) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.28)";
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

  function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
});
