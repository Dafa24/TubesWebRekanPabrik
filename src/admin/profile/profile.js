function toggleEdit() {
    const form = document.getElementById('editForm');
    form.classList.toggle('active');
    
    if (form.classList.contains('active')) {
        // Populate form with current values
        document.getElementById('nameInput').value = document.getElementById('profileName').innerText;
        document.getElementById('bioInput').value = document.getElementById('profileBio').innerText;
        document.getElementById('locationInput').value = document.getElementById('location').innerText;
        document.getElementById('emailInput').value = document.getElementById('email').innerText;
        document.getElementById('websiteInput').value = document.getElementById('website').innerText;
    }
}

function saveProfile() {
    // Update profile with new values
    document.getElementById('profileName').innerText = document.getElementById('nameInput').value;
    document.getElementById('profileBio').innerText = document.getElementById('bioInput').value;
    document.getElementById('location').innerText = document.getElementById('locationInput').value;
    document.getElementById('email').innerText = document.getElementById('emailInput').value;
    document.getElementById('website').innerText = document.getElementById('websiteInput').value;

    // Hide the form
    document.getElementById('editForm').classList.remove('active');
}

// Handle profile picture click
document.getElementById('profilePic').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profilePic').src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }
    input.click();
});