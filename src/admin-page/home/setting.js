const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const toggleBtn = document.getElementById('toggle-btn');


toggleBtn.addEventListener('click', function () {
    if (sidebar.classList.contains('hidden')) {
      sidebar.classList.remove('hidden');
      mainContent.style.marginLeft = '250px';
    } else {
      sidebar.classList.add('hidden');
      mainContent.style.marginLeft = '0px';
    }
});