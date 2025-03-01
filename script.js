// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dark mode toggle
const toggleDarkMode = document.createElement('button');
toggleDarkMode.textContent = 'Dark Mode';
toggleDarkMode.style.position = 'fixed';
toggleDarkMode.style.top = '20px';
toggleDarkMode.style.right = '20px';
toggleDarkMode.style.padding = '10px';
toggleDarkMode.style.background = '#007AFF';
toggleDarkMode.style.color = 'white';
toggleDarkMode.style.border = 'none';
toggleDarkMode.style.cursor = 'pointer';
toggleDarkMode.style.borderRadius = '5px';
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
