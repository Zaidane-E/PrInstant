// == TOGGLE MENU SECTION ==

var a = 0;

function toggle_menu() {
      if (a == 0) {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("toggle").style.marginLeft = "250px";
        document.getElementById("open-button").innerHTML = "&times;";
        document.getElementById("open-button").style.fontSize = '40px'; 
        a = 1;
      } else {
        document.getElementById("open-button").style.fontSize = '30px'; 
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("toggle").style.marginLeft = "0";
        document.getElementById("open-button").innerHTML = "&#9776;";
        a = 0;
      }
  }


// == PRELOADER SECTION ==

function prepare_page() {
  document.getElementById("page").style.display = "block";
  document.getElementById("preloader").style.display = "none";
}

function display() {
  setTimeout(function(){ prepare_page(); },2300);
}


// == SMOOTH SCROLLING SECTION == //

$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
})