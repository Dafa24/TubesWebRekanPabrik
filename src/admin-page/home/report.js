// Sample Data with Company information
const applications = [
    { id: 1, name: "John Doe", email: "john@example.com", company: "Telkom Indoneisa", position: "Software Engineer", date: "2024-10-01", status: "Approved" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", company: "GoTo Tech Solution", position: "Data Analyst", date: "2024-09-28", status: "Pending" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", company: "Creativox", position: "UX Designer", date: "2024-09-25", status: "Rejected" },
    { id: 4, name: "Sara Lee", email: "sara@example.com", company: "Folkative Creative Industry", position: "Marketing Specialist", date: "2024-09-20", status: "Approved" }
  ];
  
  // Function to insert data into the table
  function loadReport() {
    const tableBody = document.querySelector("#reportTable tbody");
    applications.forEach((application, index) => {
      const row = document.createElement("tr");
  
      // Columns
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${application.name}</td>
        <td>${application.email}</td>
        <td>${application.company}</td> <!-- New Company Column -->
        <td>${application.position}</td>
        <td>${application.date}</td>
        <td><span class="status ${application.status.toLowerCase()}">${application.status}</span></td>
      `;
  
      // Append row to table
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to load the report when the page loads
  window.onload = loadReport;
  