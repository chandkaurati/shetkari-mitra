const toggleBtn = document.getElementById('toggleBtn');
const navMenu = document.querySelector('nav ul');

toggleBtn.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});
