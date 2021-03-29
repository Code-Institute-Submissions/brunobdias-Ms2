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

//Places button Selection

$("#btnColosseum").click(function () {
    changePlace("Colosseum", //place 
        "https://parcocolosseo.it/en/area/the-colosseum/",//fontLink
        "Colosseum", //fontDescription
        "https://parcocolosseo.it/en/area/the-colosseum/", //placeLink
        "http://www.twitter.com/parcocolosseo", //placeTwitter
        "http://www.instagram.com/parcocolosseo", //placeInstagram
        "http://www.facebook.com/ParcoColosseo", //placeFacebook
        "http://www.youtube.com/ParcoColosseo", //placeYoutube
    );
});

$("#btnChichen").click(function () {
    changePlace("Chichén Itzá", //place 
        "https://www.inah.gob.mx/zonas/146-zona-arqueologica-de-chichen-itza",//fontLink
        "INAH México Government", //fontDescription
        "https://www.inah.gob.mx/zonas/146-zona-arqueologica-de-chichen-itza", //placeLink
        "https://www.inah.gob.mx/zonas/146-zona-arqueologica-de-chichen-itza", //placeTwitter
        "https://www.inah.gob.mx/zonas/146-zona-arqueologica-de-chichen-itza", //placeInstagram
        "https://www.inah.gob.mx/zonas/146-zona-arqueologica-de-chichen-itza", //placeFacebook
        "https://www.inah.gob.mx/zonas/146-zona-arqueologica-de-chichen-itza", //placeYoutube
    );
});

$("#btnMachuPichu").click(function () {
    alert("Handler for .click() called.");
});

$("#btnChrist").click(function () {
    alert("Handler for .click() called.");
});

$("#btnGreatWall").click(function () {
    alert("Handler for .click() called.");
});

$("#btnPetra").click(function () {
    alert("Handler for .click() called.");
});

$("#btnTajMahal").click(function () {
    alert("Handler for .click() called.");
});


function changePlace(place, fontLink, fontDescription, placeLink, placeTwitter, placeInstagram, placeFacebook, placeYoutube) {

    $("#place-h2").text(place);
    $("#content-p").text(getContent(place));
    $(".font-link").attr("href", fontLink).text(fontDescription);
    $(".place-link").attr("href", placeLink);
    $(".place-twitter").attr("href", placeTwitter);
    $(".place-instagram").attr("href", placeInstagram);
    $(".place-facebook").attr("href", placeFacebook);
    $(".place-youtube").attr("href", placeYoutube);
};

function getContent(place) {
    if (place === "Colosseum") {
        return ("The Flavian Amphitheatre, more commonly known as the Colosseum, stands in the archaeological heart" +
            " of Rome and welcomes large numbers of visitors daily, attracted by the fascination of its history" +
            " and its complex architecture. The building became known as the Colosseum because of a colossal statue" +
            " that stood nearby. It was built in the 1st century CE at the behest of the emperors of the Flavian" +
            " dynasty. Until the end of the ancient period, it was used to present spectacles of great popular" +
            " appeal, such as animal hunts and gladiatorial games. The building was, and still remains today," +
            " a spectacle in itself. It is the largest amphitheatre in the world, capable of presenting" +
            " surprisingly complex stage machinery, as well as services for spectators. A symbol of the" +
            " splendour of the empire, the Amphitheatre has changed its appearance and its function over" +
            " the centuries, presenting itself as a structured space but open to the Roman community."
        )
    } else if (place === "Chichén Itzá") {
        return ("Chichén Itzá is the best example of the migratory movements that occurred in Mesoamerica towards " +
            "the Early Postclassic, since it brings together features of material culture from both the Maya area and " +
            "central Mexico, particularly those of Toltec descent. In addition, Chichén Itzá was the capital of a large " +
            "territory in the Yucatan peninsula, led by the Mayapán league, from 987 to 1200 AD. C. The Chichén Itzá archaeological " +
            "site is world famous for the play of light and shadow that occurs on each equinox on the steps of the pyramidal base known " +
            "as El Castillo. In this, the sun, as it rises over the horizon, illuminates the western rafter of the basement, creating " +
            "triangles of light and shadow that seem to descend to the serpent's head in the rudeness of the rafter. This event, " +
            "achieved from the correct orientation and inclination of the planes of the basement, it shows the great level of astronomical " +
            "and architectural knowledge that the Mayans possessed, and which has resulted in being one of the most studied " +
            "cultures and regions around these issues, in addition to the territorial political organization and the exploitation of resources. " +
            "Chronology 525 to 1200 AD. C. Main chronological location: Early Postclassic 900 to 1200 AD. C."
        )
    };
}