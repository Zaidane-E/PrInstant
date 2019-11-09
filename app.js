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


// == SMOOTH SCROLLING == //

$(document).ready(function() { 

  var scrollLink = $('.scroll');

  scrollLink.click(function(event) {

    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 )

  })

  })