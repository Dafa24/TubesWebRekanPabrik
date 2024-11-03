document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.getElementById("slides-container");
  const navbar = document.getElementById("navbar");

  loadTasks();
  window.onscroll = function () {
    scrollFunction(navbar);
  };

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

  function loadTasks() {
    $.getJSON("../../public/data/daftarPabrik.json", function (data) {
      if (data && Array.isArray(data)) {
        data.forEach((company) => {
          const slide = createdTask(company);
          slidesContainer.appendChild(slide);
        });
        data.forEach((company) => {
          const slide = createdTask(company);
          slidesContainer.appendChild(slide);
        });
      } else {
        alert("No tasks found in the JSON file.");
      }
    }).fail(function () {
      alert("Failed to load the tasks. Please check the file path.");
    });
  }

  function createdTask(company) {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.style.border = "2px solid black";
    slide.style.borderRadius = "10px";
    slide.style.width = "294px";

    const img = document.createElement("img");
    img.src = company.img;
    img.alt = company.namaPerusahaan;

    const companyInfo = document.createElement("div");
    companyInfo.classList.add("company-info");

    const companyName = document.createElement("h2");
    companyName.textContent = company.namaPerusahaan;

    const jobCount = document.createElement("p");
    jobCount.textContent = `Jumlah Pekerjaan: ${company.jumlahPekerjaan}`;

    companyInfo.appendChild(companyName);
    companyInfo.appendChild(jobCount);
    slide.appendChild(img);
    slide.appendChild(companyInfo);

    return slide;
  }
});
