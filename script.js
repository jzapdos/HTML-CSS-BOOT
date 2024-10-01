window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (this.window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
});


new SimpleLightbox({elements: '#work .row a'});

