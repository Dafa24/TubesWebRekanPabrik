// Data dummy JSON
const users = [
    { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" },
    { "id": 2, "name": "Bob Smith", "email": "bob@example.com" },
    { "id": 3, "name": "Carol White", "email": "carol@example.com" },
    { "id": 4, "name": "David Brown", "email": "david@example.com" },
    { "id": 5, "name": "Emma Davis", "email": "emma@example.com" }
];

// Function to populate table with user data
function populateTable() {
    const tableBody = document.getElementById('userTable','hrdTable').getElementsByTagName('tbody')[0];
    users.forEach(user => {
        const row = document.createElement('tr');
        
        // Create table cells for each property
        const idCell = document.createElement('td');
        idCell.textContent = user.id;
        row.appendChild(idCell);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = user.name;
        row.appendChild(nameCell);
        
        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);
        
        // Create action cell with Edit and Delete buttons
        const actionCell = document.createElement('td');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'action-btn edit-btn';
        editButton.onclick = () => editUser(user.id); // Add edit function
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'action-btn delete-btn';
        deleteButton.onclick = () => deleteUser(user.id); // Add delete function
        
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        // Append row to table body
        tableBody.appendChild(row);
    });
}

// Function to edit a user
function editUser(userId) {
    alert('Edit user with ID: ' + userId);
}

// Function to delete a user
function deleteUser(userId) {
    const confirmDelete = confirm('Are you sure you want to delete user with ID: ' + userId + '?');
    if (confirmDelete) {
        alert('User with ID ' + userId + ' has been deleted.');
    }
}

// Call the function to populate the table on page load
window.onload = populateTable;