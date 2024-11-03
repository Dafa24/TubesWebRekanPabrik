document.addEventListener("DOMContentLoaded", function () {
  loadAdmin();
  loadPelamar();
  loadHRD();
});

function loadAdmin() {
  $.getJSON("../../public/data/dataAdmin.json", function (dataAdmin) {
    const tbody = $("#AdminTable tbody");
    $(".stat-number.admin").text(dataAdmin.length);
    tbody.empty();

    dataAdmin.forEach((admin) => {
      const row = `
            <tr>
              <td>${admin.id}</td>
              <td>${admin.name}</td>
              <td>${admin.email}</td>
              <td>
                <button class="action-btn edit-btn" data-id="${admin.id}" data-name="${admin.name}">Edit</button>
                <button class="action-btn delete-btn" data-id="${admin.id}" data-name="${admin.name}">Delete</button>
              </td>
            </tr>
          `;
      tbody.append(row);
    });

    $(".edit-btn").on("click", function () {
      const userId = $(this).data("id");
      const name = $(this).data("name");
      editUser(userId, name);
    });

    $(".delete-btn").on("click", function () {
      const userId = $(this).data("id");
      const name = $(this).data("name");
      deleteUser(userId, name);
    });
  }).fail(function () {
    const tbody = $("#AdminTable tbody");
    tbody.empty();
    tbody.append(`
        <tr>
          <td colspan="4" style="text-align: center;">Data Not Found</td>
        </tr>
      `);
    console.error("Error loading data");
  });
}

function loadPelamar() {
  $.getJSON("../../public/data/dataPelamar.json", function (datapelamar) {
    const tbody = $("#pelamarTable tbody");
    $(".stat-number.pelamar").text(datapelamar.length);
    tbody.empty();
    datapelamar.forEach((pelamar) => {
      const row = `
                      <tr>
                          <td>${pelamar.id}</td>
                          <td>${pelamar.name}</td>
                          <td>${pelamar.email}</td>
                          <td>
                              <button class="action-btn edit-btn" data-id="${pelamar.id}" data-name="${pelamar.name}">Edit</button>
                              <button class="action-btn delete-btn" data-id="${pelamar.id}" data-name="${pelamar.name}">Delete</button>
                          </td>
                      </tr>
                  `;

      tbody.append(row);
    });

    $(".edit-btn").on("click", function () {
      const userId = $(this).data("id");
      const name = $(this).data("name");
      editUser(userId, name);
    });

    $(".delete-btn").on("click", function () {
      const userId = $(this).data("id");
      const name = $(this).data("name");
      deleteUser(userId, name);
    });
  }).fail(function () {
    const tbody = $("#pelamarTable tbody");
    tbody.empty();
    tbody.append(`
        <tr>
          <td colspan="4" style="text-align: center;">Data Not Found</td>
        </tr>
      `);
    console.error("Error loading data");
  });
}

function loadHRD() {
  $.getJSON("../../public/data/dataHRD.json", function (datahrd) {
    const tbody = $("#HRDTable tbody");
    $(".stat-number.HRD").text(datahrd.length);
    tbody.empty();
    datahrd.forEach((hrd) => {
      const row = `
                      <tr>
                          <td>${hrd.id}</td>
                          <td>${hrd.name}</td>
                          <td>${hrd.email}</td>
                          <td>
                              <button class="action-btn edit-btn" data-id="${hrd.id}" data-name="${hrd.name}">Edit</button>
                              <button class="action-btn delete-btn" data-id="${hrd.id}" data-name="${hrd.name}">Delete</button>
                          </td>
                      </tr>
                  `;

      tbody.append(row);
    });

    $(".edit-btn").on("click", function () {
      const userId = $(this).data("id");
      const name = $(this).data("name");
      editUser(userId, name);
    });

    $(".delete-btn").on("click", function () {
      const userId = $(this).data("id");
      const name = $(this).data("name");
      deleteUser(userId, name);
    });
  }).fail(function () {
    const tbody = $("#HRDTable tbody");
    tbody.empty();
    tbody.append(`
        <tr>
          <td colspan="4" style="text-align: center;">Data Not Found</td>
        </tr>
      `);
    console.error("Error loading data");
  });;
}

function deleteUser(userId, name) {
  const confirmDelete = confirm(
    "Are you sure you want to delete user with name: " + name + "?"
  );
  if (confirmDelete) {
    Swal.fire({
      title: "Success!",
      text: `${name} berhasil di hapus`,
      icon: "success",
      confirmButtonText: "Lanjutkan",
    });
  }
}

function editUser(userId, name) {
  const confirmDelete = confirm(`Apakah kamu ingin mengedit akun: ${name} ?`);
  if (confirmDelete) {
    Swal.fire({
      title: "success!",
      text: `Berhasil mengedit akun ${name}`,
      icon: "success",
      confirmButtonText: "lanjutkan",
    });
  }
}

function deleteUser(userId, name) {
  const confirmDelete = confirm(`Apakah kamu ingin menghapus akun: ${name} ?`);
  if (confirmDelete) {
    Swal.fire({
      title: "success!",
      text: `Berhasil menghapus akun ${name}`,
      icon: "success",
      confirmButtonText: "lanjutkan",
    });
  }
}
