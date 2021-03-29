// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#navbar").css("opacity", "1");
        $("#navbar").css("padding", "0.5rem 0.5rem");
        $("#brand").css("fontSize", "1.5rem");
        $("#brand").css("weight", "bold");
        $("#logo").css("src", "assets/images/navlogo.png");

    } else {
        $("#navbar").css("opacity", "0.85");
        $("#navbar").css("padding", "2rem 0.5rem");
        $("#brand").css("fontSize", "2rem");
        $("#brand").css("weight", "bold");
        $("#logo").css("src", "assets/images/navlogo-lg.png");
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

