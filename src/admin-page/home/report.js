 // Data dummy dalam format JSON
 const jobApplications = [
    {
        nama: "Ahmad Rizki",
        telepon: "081234567890",
        posisi: "Frontend Developer",
        status: "Interview"
    },
    {
        nama: "Siti Nurhaliza",
        telepon: "082345678901",
        posisi: "UI/UX Designer",
        status: "Diterima"
    },
    {
        nama: "Budi Santoso",
        telepon: "083456789012",
        posisi: "Backend Developer",
        status: "Pending"
    },
    {
        nama: "Diana Putri",
        telepon: "084567890123",
        posisi: "Product Manager",
        status: "Ditolak"
    },
    {
        nama: "Eko Prasetyo",
        telepon: "085678901234",
        posisi: "Data Analyst",
        status: "Interview"
    },
    {
        nama: "Fina Maharani",
        telepon: "086789012345",
        posisi: "Content Writer",
        status: "Pending"
    },
    {
        nama: "Gilang Ramadhan",
        telepon: "087890123456",
        posisi: "Digital Marketing",
        status: "Diterima"
    }
];

// Fungsi untuk menampilkan data ke tabel
function displayData(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nama}</td>
            <td>${item.telepon}</td>
            <td>${item.posisi}</td>
            <td><span class="status ${getStatusClass(item.status)}">${item.status}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk mendapatkan class CSS berdasarkan status
function getStatusClass(status) {
    switch(status.toLowerCase()) {
        case 'pending':
            return 'pending';
        case 'interview':
            return 'interview';
        case 'diterima':
            return 'accepted';
        case 'ditolak':
            return 'rejected';
        default:
            return '';
    }
}

// Fungsi untuk filter dan pencarian data
function filterData() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;

    const filteredData = jobApplications.filter(item => {
        const matchSearch = item.nama.toLowerCase().includes(searchTerm) ||
                          item.posisi.toLowerCase().includes(searchTerm);
        const matchStatus = statusFilter === 'all' || item.status === statusFilter;
        return matchSearch && matchStatus;
    });

    displayData(filteredData);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterData);
document.getElementById('statusFilter').addEventListener('change', filterData);

// Tampilkan data awal
displayData(jobApplications);