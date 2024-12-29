// Toggle between Light and Dark themes
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check the stored theme on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

// Toggle the theme when the button is clicked
themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme'); // Store the theme in localStorage
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme'); // Store the theme in localStorage
    }
});

// Display the owner's profile info (avatar, name, and bio)
const profileImage = document.getElementById('profile-image');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');

// Sample data for the blog owner
const ownerProfile = {
    avatar: 'static/uploads/owner_avatar.jpg', // Path to the owner's avatar image
    name: 'John Doe', // Owner's name
    bio: 'A passionate writer and blogger sharing insights about tech, life, and everything in between.' // Owner's bio
};

// Update the profile information dynamically
profileImage.src = ownerProfile.avatar;
profileName.textContent = ownerProfile.name;
profileBio.textContent = ownerProfile.bio;
