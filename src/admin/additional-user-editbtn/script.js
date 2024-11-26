// Function to load data from JSON file
function loadAdmin() {
    $.getJSON("dataAdmin.json", function (dataAdmin) {
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

// Function to render admin table
function renderAdminTable() {
    const tableBody = document.getElementById('adminTableBody');
    tableBody.innerHTML = '';

    adminData.forEach(admin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>
                <button class="detail-btn" onclick="showDetails(${id})">Detail</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Get modal elements
const modal = document.getElementById('userModal');
const closeBtn = document.getElementsByClassName('close')[0];

// Function to show user details
function showDetails(adminId) {
    const admin = adminData.find(a => a.id === adminId);
    if (admin) {
        // Update modal content
        document.getElementById('userId').textContent = id;
        document.getElementById('userName').textContent = name;
        document.getElementById('userEmail').textContent = email;
        
        // Show modal
        modal.style.display = 'block';
    }
}

// Close modal when clicking the X
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadAdminData);