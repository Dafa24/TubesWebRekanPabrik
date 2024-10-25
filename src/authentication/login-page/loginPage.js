window.onscroll = function() { scrollFunction() };

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
