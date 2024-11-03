document.addEventListener("DOMContentLoaded", function () {
  loadData();
});

function loadData() {
  loadAdmin();
  loadPelamar();
  loadHRD();
  loadPekerjaan();

  let adminCount = 0;
  let pelamarCount = 0;
  let hrdCount = 0;
  let pekerjaanCount = 0;

  function loadAdmin() {
    $.getJSON("../../public/data/dataAdmin.json", function (dataAdmin) {
      $(".stat-number.admin").text(dataAdmin.length);
      adminCount = dataAdmin.length;
      chartView();
    }).fail(function () {
      $(".stat-number.admin").text("DATA NOT FOUND");
      console.error("Error loading data");
    });
  }

  function loadPelamar() {
    $.getJSON("../../public/data/dataPelamar.json", function (datapelamar) {
      $(".stat-number.pelamar").text(datapelamar.length);
      pelamarCount = datapelamar.length;
      chartView();
    }).fail(function () {
      $(".stat-number.pelamar").text("DATA NOT FOUND");
      console.error("Error loading data");
    });
  }

  function loadHRD() {
    $.getJSON("../../public/data/dataHRD.json", function (datahrd) {
      $(".stat-number.HRD").text(datahrd.length);
      hrdCount = datahrd.length;
      chartView();
    }).fail(function () {
      $(".stat-number.HRD").text("DATA NOT FOUND");
      console.error("Error loading data");
    });
  }

  function loadPekerjaan() {
    $.getJSON("../../public/data/dataPekerjaan.json", function (datapekerjaan) {
      $(".stat-number.jumlahPekerjaan").text(datapekerjaan.length);
      pekerjaanCount = datapekerjaan.length;
      chartView();
    }).fail(function () {
      $(".stat-number.jumlahPekerjaan").text("DATA NOT FOUND");
      console.error("Error loading data");
    });
  }

  function chartView() {
    if (adminCount === 0 && pelamarCount === 0 && hrdCount === 0 && pekerjaanCount === 0) return;

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      const data = google.visualization.arrayToDataTable([
        ["Kategori", "Jumlah"],
        ["Admin", adminCount],
        ["Pelamar", pelamarCount],
        ["HRD", hrdCount],
        ["Pekerjaan", pekerjaanCount],
      ]);

      const options = {
        colors: ["#4CAF50", "#FF9800", "#03A9F4", "#E91E63"],
      };

      const chart = new google.visualization.PieChart(document.getElementById("myChart"));
      chart.draw(data, options);
    }
  }
}