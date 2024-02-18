<!-- Script per navbar (cambio colore)-->

$(document).ready(function () {
    function updateNavbar() {
        if ($(window).width() < 993) { // Mobile
            $(".nav-item a").removeClass('colored');
        }

        if ($(document).scrollTop() > 200) {
            $(".navbar").removeClass("nav-transparent").addClass("nav-colored");
            $(".fa-bars").removeClass("colored");
            if ($(window).width() >= 975) { // Mobile
                $(".nav-item a").removeClass('colored');
            }
        } else {
            $(".navbar").removeClass("nav-colored").addClass("nav-transparent");
            $(".fa-bars").addClass("colored");
            if ($(window).width() >= 975) { // Mobile
                $(".nav-item a").addClass('colored');
            }
        }
    }

    // Chiamata iniziale per impostare la classe in base alla posizione iniziale della pagina
    updateNavbar();

    // Aggiungi l'evento di scroll
    $(window).scroll(function () {
        updateNavbar();
    });

    // Aggiungi l'evento di ridimensionamento della finestra
    $(window).resize(function () {
        updateNavbar();
    });
});




<!-- Script per animazione di chiusura del menù in MOBILE -->
/*
document.addEventListener('DOMContentLoaded', function () {
    // Esegui il codice solo se la larghezza della finestra è inferiore a 768 pixel (mobile)
    if (window.innerWidth < 768) {
        var offcanvasNavbar = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));
        var navbarToggler = document.querySelector('.navbar-toggler');

        // Apri la barra laterale senza animazione
        offcanvasNavbar._element.style.transitionProperty = 'none';
        offcanvasNavbar._element.style.transform = 'translateX(0)';
        offcanvasNavbar.show();

        // Imposta aria-expanded su "true"
        navbarToggler.setAttribute('aria-expanded', 'true');

        // Chiudi la barra laterale dopo 2 secondi (puoi regolare il tempo a tuo piacimento)
        setTimeout(function() {
            // Rimuovi stili inline che disabilitano l'animazione di apertura
            offcanvasNavbar._element.style.transition = '';
            offcanvasNavbar._element.style.transform = '';

            offcanvasNavbar.hide();

            // Imposta aria-expanded su "false" dopo la chiusura
            navbarToggler.setAttribute('aria-expanded', 'false');
        }, 500);
    }
});
*/
