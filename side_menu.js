//Toggle menu code

var a = 0;

function toggle_menu() {
      if (a == 0) {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("open-button").innerHTML = "&times;"; 
        a = 1;
      } else {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("open-button").innerHTML = "&#9776;";
        a = 0;
      }
  }