window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.style.backgroundColor = '#222'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = '#333';
    }
});
