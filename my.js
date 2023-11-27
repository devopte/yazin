const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});
document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle smooth scroll to a target section
    function scrollToSection(targetId) {
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }

    // Add click event listeners to the links for laptop/desktop views
    if (window.innerWidth >= 600) {
        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
            });
        });
    }
});



      window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
        if (scrollTop > window.innerHeight / 2) {
          navbar.classList.add('navbar-shadow');
        } else {
          navbar.classList.remove('navbar-shadow');
        }
      });