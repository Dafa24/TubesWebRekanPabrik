const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const toggleBtn = document.getElementById('toggle-btn');

function searchUsers() {
    // Declare variables
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let table = document.getElementById('table-hrd');
    let tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 1; i < tr.length; i++) {
        let tdName = tr[i].getElementsByTagName('td')[1];
        let tdEmail = tr[i].getElementsByTagName('td')[2];
        if (tdName || tdEmail) {
            let txtValueName = tdName.textContent || tdName.innerText;
            let txtValueEmail = tdEmail.textContent || tdEmail.innerText;
            if (txtValueName.toLowerCase().indexOf(filter) > -1 || txtValueEmail.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}

toggleBtn.addEventListener('click', function () {
  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden');
    mainContent.style.marginLeft = '250px';
  } else {
    sidebar.classList.add('hidden');
    mainContent.style.marginLeft = '0px';
  }
});

function searchUsers() {
    // Declare variables
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let table = document.getElementById('table-hrd');
    let tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 1; i < tr.length; i++) {
        let tdName = tr[i].getElementsByTagName('td')[1];
        let tdEmail = tr[i].getElementsByTagName('td')[2];
        if (tdName || tdEmail) {
            let txtValueName = tdName.textContent || tdName.innerText;
            let txtValueEmail = tdEmail.textContent || tdEmail.innerText;
            if (txtValueName.toLowerCase().indexOf(filter) > -1 || txtValueEmail.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}
