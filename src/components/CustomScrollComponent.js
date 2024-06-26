import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const CustomScrollComponent = () => {
  useEffect(() => {
    // Fonction d'effet pour le défilement fluide
    const handleSmoothScroll = () => {
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });
    };

    // Gestion du menu responsive Bootstrap
    const handleNavbarToggle = () => {
      $('.navbar-toggler').click(function() {
        if ($('.navbar-collapse').hasClass('show')) {
          $('.navbar-collapse').collapse('hide');
        } else {
          $('.navbar-collapse').collapse('show');
        }
      });
    };

    // Fermer le menu responsive lorsque le lien de défilement est cliqué
    const handleCloseNavbarOnScroll = () => {
      $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
      });
    };

    // Appel des fonctions d'effet
    handleSmoothScroll();
    handleNavbarToggle();
    handleCloseNavbarOnScroll();
  }, []);

  return (
    <div>
      {/* Votre contenu JSX */}
    </div>
  );
};

export default CustomScrollComponent;
