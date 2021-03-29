// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("navbar").style.padding = "0.5rem 0.5rem";
        document.getElementById("brand").style.fontSize = "1.5rem";
        document.getElementById("brand").style.weight = "bold";
        document.getElementById("logo").src = "assets/images/navlogo.png";

        $("navbar").css.opacity()
    } else {
        document.getElementById("navbar").style.opacity = "0.85";
        document.getElementById("navbar").style.padding = "2rem 0.5rem";
        document.getElementById("brand").style.fontSize = "2rem";
        document.getElementById("brand").style.weight = "bold";
        document.getElementById("logo").src = "assets/images/navlogo-lg.png";
    }
}

$( "#btnColosseum" ).click(function() {
  alert( "Handler for .click() called." );
  $(".test").css("background-color", "black");
});

$( "#btnChichen" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#btnMachuPichu" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#btnChrist" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#btnGreatWall" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#btnPetra" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#btnTajMahal" ).click(function() {
  alert( "Handler for .click() called." );
});

