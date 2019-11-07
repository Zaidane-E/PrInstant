// == SMOOTH SCROLLING SECTION == 

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
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

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict


// == TOGGLE MENU SECTION ==

var a = 0;

function toggle_menu() {
      if (a == 0) {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("toggle").style.marginLeft = "250px";
        document.getElementById("open-button").innerHTML = "&times;"; 
        a = 1;
      } else {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("toggle").style.marginLeft = "0";
        document.getElementById("open-button").innerHTML = "&#9776;";
        a = 0;
      }
  }


// == PRELOADER SECTION ==

function prepare_page() {
  document.getElementById("page").style.display = "block";
  document.getElementById("preloader").style.display = "none"
}

function display() {
  setTimeout(function(){ prepare_page(); },2300);
}