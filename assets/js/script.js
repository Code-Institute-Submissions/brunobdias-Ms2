var placeSelected = "";

//When load the page, preload Images and fill the Colosseum data 
$(window).on("load", function () {
    $(['assets/images/colosseum-bkg.jpg',
        'assets/images/chichen-bkg.jpg',
        'assets/images/machupicchu-bkg.jpg',
        'assets/images/christ-bkg.jpg',
        'assets/images/great-wall-bkg.jpg',
        'assets/images/petra-bkg.jpg',
        'assets/images/tajmahal-bkg.jpg'
    ]).preloadImages();

    //$("#btnColosseum").trigger("click");
    $("#btnAbout").trigger("click");

});

$(document).ready(function () {
    $("#countries-info").toggle();
});

// When the user scrolls down 80px from the top of the document, 
//resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

//Preload Sample from 
//https://stackoverflow.com/questions/476679/preloading-images-with-jquery
$.fn.preloadImages = function () {
    this.each(function () {
        $('<img/>')[0].src = this;
    });
}

//Scroll Function
function scrollFunction() {
    //Credit https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
    //Scroll Navbar Shrink
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#navbar").css("opacity", "1");
        $("#navbar").css("padding", "0");
        $("#brand").css("fontSize", "1.4rem");
        $("#brand").css("margin-left", "1rem");
        $("#brand").css("weight", "bold");
        $("#brand").text("The 7 Wonders of the Modern World");
        $("#logo").attr("src", "assets/images/navlogo-lg.png").fadeOut(1000);
        $("#logo").css("display", "none");
        $("#logo").css("visibility", "hidden");
        $("#logo").css("transition", "1s");
        if ($(window).width() < 428) {
            $(".place-selector").css("top", "7rem");
        } else {
            $(".place-selector").css("top", "5.5rem");
        }
        //$(".place-selector").css("Opacity", "1");

    } else {
        $("#brand").css("fontSize", "2rem");
        $("#navbar").css("opacity", "0.85");
        $("#navbar").css("padding", "1rem 0.5rem");
        $(".place-selector").css("top", "9rem");

        //CREDIT: https://forum.jquery.com/topic/if-screen-size
        //Control Add to better view on mobile
        if ($(window).width() < 470) {
            $("#brand").css("margin-left", "3rem");
        } else {
            $("#brand").css("margin-left", "5rem");
        }

        $("#brand").css("weight", "bold");
        $("#brand").html(`The 7 Wonders<br> of the Modern World`);

        if ($(window).width() >= 750) {
            $("#navbar").css("padding", "2rem 0.5rem");
            $("#brand").css("fontSize", "2rem");
            $("#logo").attr("src", "assets/images/navlogo-lg.png").fadeIn(100);
            $("#logo").css("display", "block");
            $("#logo").css("visibility", "visible");
            $("#logo").css("transition", "1s");
        }

        $(".place-selector").css("top", "11rem");
    }

    // Scroll to Top Button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//CREDIT: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
mybutton = document.getElementById("btnTop");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//End Credit

//Places button click
$("#btnColosseum").click(function () {
    changePlace('url(assets/images/colosseum-bkg.jpg)', //bkgImgURL
        "Colosseum", //place 
        "https://parcocolosseo.it/en/area/the-colosseum/",//fontLink
        "Colosseum", //fontDescription
        "https://parcocolosseo.it/en/area/the-colosseum/", //placeLink
        "http://www.twitter.com/parcocolosseo", //placeTwitter
        "http://www.instagram.com/parcocolosseo", //placeInstagram
        "http://www.facebook.com/ParcoColosseo", //placeFacebook
        "https://www.youtube.com/channel/UCp1G517hecvSuC4nvGNOHVQ",//placeYoutube
        `<iframe width="100%" height="100%"
            src="https://www.youtube.com/embed/56tlOtVn40c" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>`, //iframeYoutube
        "ita", //placeCountry
    );
    changeMapLocation("Colosseum");
});

$("#btnChichen").click(function () {
    changePlace('url(assets/images/chichen-bkg.jpg)', //bkgImgURL
        "Chichén Itzá", //place 
        "https://www.inah.gob.mx/zonas/146-zona-arqueologica-de-chichen-itza",//fontLink
        "INAH México Government", //fontDescription
        "https://www.inah.gob.mx/zonas/146-zona-arqueologica-de-chichen-itza", //placeLink
        "https://twitter.com/INAHmx", //placeTwitter
        "https://www.instagram.com/inahmx/", //placeInstagram
        "https://www.facebook.com/INAHmx/", //placeFacebook
        "https://www.youtube.com/results?search_query=7+modern+wonders+of+the+world",//placeYoutube
        `<iframe width="100%" height="100%"  
            src="https://www.youtube.com/embed/TQEg4P9Mmio" 
            title="Chichén Itzá" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>`, //iframeYoutube
        "mex", //placeCountry
    );
    changeMapLocation("Chichén Itzá");
});

$("#btnMachuPichu").click(function () {
    changePlace('url(assets/images/machupicchu-bkg.jpg)', //bkgImgURL 
        "Machu Picchu", //place 
        "https://en.wikipedia.org/wiki/Machu_Picchu",//fontLink
        "Wikipedia", //fontDescription
        "https://www.machupicchu.gob.pe/?lang=en", //placeLink
        "https://twitter.com/search?q=%23machupicchu&src=typeahead_click&f=live", //placeTwitter
        "https://www.instagram.com/explore/tags/machupicchu/", //placeInstagram
        "https://www.facebook.com/hashtag/machupicchu", //placeFacebook
        "https://www.youtube.com/results?search_query=7+modern+wonders+of+the+world",//placeYoutube
        `<iframe width="100%" height="100%"  
            src="https://www.youtube.com/embed/_hbRXmSzK38" 
            title="Machu Picchu" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>`, //iframeYoutube
        "per", //placeCountry
    );
    changeMapLocation("Machu Picchu");
});

$("#btnChrist").click(function () {
    changePlace('url(assets/images/christ-bkg.jpg)', //bkgImgURL
        "Christ The Redeemer", //place 
        "http://visit.rio/en/que_fazer/christtheredeemer/",//fontLink
        "Riotur", //fontDescription
        "http://visit.rio/en/que_fazer/christtheredeemer/",//placeLink
        //Oficial page but broken link
        //"http://www.cristoredentoroficial.com.br/", //placeLink
        "https://twitter.com/cristoredentor", //placeTwitter
        "https://www.instagram.com/cristoredentor.rio/", //placeInstagram
        "https://www.facebook.com/cristoredentoroficial/", //placeFacebook
        "https://www.youtube.com/results?search_query=7+modern+wonders+of+the+world",//placeYoutube
        `<iframe width="100%" height="100%"  
            src="https://www.youtube.com/embed/fA7kQn-l6T4" 
            title="Christ The Redeemer" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>`, //iframeYoutube
        "bra", //placeCountry
    );
    changeMapLocation("Christ The Redeemer");
});

$("#btnGreatWall").click(function () {
    changePlace('url(assets/images/great-wall-bkg.jpg)', //bkgImgURL
        "The Great Wall of China", //place 
        "https://en.wikipedia.org/wiki/Great_Wall_of_China",//fontLink
        "Wikipedia", //fontDescription
        "#", //placeLink
        "https://twitter.com/search?q=The%20great%20wall%20of%20china&src=typeahead_click&f=live", //placeTwitter
        "https://www.instagram.com/explore/tags/greatwallofchina/", //placeInstagram
        "https://www.facebook.com/hashtag/thegreatwallofchina", //placeFacebook
        "https://www.youtube.com/results?search_query=7+modern+wonders+of+the+world",//placeYoutube
        `<iframe width="100%" height="100%"  
            src="https://www.youtube.com/embed/0aeO98y6vp0" 
            title="The Great Wall of China" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>`, //iframeYoutube
        "chn", //placeCountry
    );
    changeMapLocation("The Great Wall of China");
});

$("#btnPetra").click(function () {
    changePlace('url(assets/images/petra-bkg.jpg)', //bkgImgURL
        "Ruins of Petra", //place 
        "http://www.visitpetra.jo/Pages/viewpage.aspx?pageID=124",//fontLink
        "Visit Petra", //fontDescription
        "http://www.visitpetra.jo/", //placeLink
        "https://twitter.com/visitpetra", //placeTwitter
        "https://www.instagram.com/explore/tags/visitpetra/", //placeInstagram
        "https://www.facebook.com/PetraVisit", //placeFacebook
        "https://www.youtube.com/results?search_query=7+modern+wonders+of+the+world",//placeYoutube
        `<iframe width="100%" height="100%"  
            src="https://www.youtube.com/embed/JFA8oMBCNUA" 
            title="Ruins of Petra" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>`, //iframeYoutube
        "jor", //placeCountry
    );
    changeMapLocation("Ruins of Petra");
});

$("#btnTajMahal").click(function () {
    changePlace('url(assets/images/tajmahal-bkg.jpg)', //bkgImgURL
        "Taj Mahal", //place 
        "https://www.tajmahal.gov.in/creation-history-of-taj-mahal.aspx",//fontLink
        "Taj Mahal India Government", //fontDescription
        "https://www.tajmahal.gov.in/", //placeLink
        "https://twitter.com/search?q=%23tajmahal&src=typed_query&f=live", //placeTwitter
        "https://www.instagram.com/explore/tags/greatwallofchina/", //placeInstagram
        "https://www.facebook.com/hashtag/tajmahal", //placeFacebook
        "https://www.youtube.com/results?search_query=7+modern+wonders+of+the+world",//placeYoutube
        `<iframe width="100%" height="100%" 
            src="https://www.youtube.com/embed/N-XNGXXHNIs" 
            title="Taj Mahal" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>`, //iframeYoutube
        "ind", //placeCountry
    );
    changeMapLocation("Taj Mahal");
});

$("#btnAbout").click(function () {
    changePlace('url(assets/images/tajmahal-bkg.jpg)', //bkgImgURL
        "About", //place 
        "https://en.wikipedia.org/wiki/New7Wonders_of_the_World",//fontLink
        "Wikipedia", //fontDescription
        "https://en.wikipedia.org/wiki/New7Wonders_of_the_World", //placeLink
        "https://twitter.com/new7wonders", //placeTwitter
        "https://www.instagram.com/explore/tags/modernwonders/", //placeInstagram
        "https://www.facebook.com/The-seven-new-wonders-of-the-modern-world-100864461551771/", //placeFacebook
        "https://www.youtube.com/results?search_query=7+modern+wonders+of+the+world",//placeYoutube
        //Credit Autoplay
        //https://stackoverflow.com/questions/58189735/embedded-youtube-iframes-no-longer-autoplay
        `<iframe width="100%" height="100%" 
            src="https://www.youtube.com/embed/7Dbuc6vIRnE?autoplay=1&mute=1" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>`, //iframeYoutube
        "", //placeCountry
    );
    changeMapLocation("About");
});


function changePlace(bkgImgURL, place, fontLink, fontDescription, placeLink,
    placeTwitter, placeInstagram, placeFacebook, placeYoutube, iframeYoutube, placeCountry) {
    placeSelected = place;
    $("body").css("background-image", bkgImgURL).css(
        "background-repeat", "no-repeat").css(
            "background-attachment", "fixed").css(
                "background-size", "cover");
    $("#place-h2").text(placeSelected);
    $("#content-place").text(getContent(place));
    $(".font-link").attr("href", fontLink).html(fontDescription
        + ` <i class="fas fa-external-link-alt" aria-hidden="true"></i>`);
    $(".place-link").attr("href", placeLink);
    $(".place-twitter").attr("href", placeTwitter);
    $(".place-instagram").attr("href", placeInstagram);
    $(".place-facebook").attr("href", placeFacebook);
    $(".place-youtube").attr("href", placeYoutube);
    $(".video-div").html(iframeYoutube);
    checkPlaceContentVisible();
    $("#btnTop").click();

    if (place == "About"){
        $("#btnShowCountryInfo").css("visibility", "hidden");
    } else {
        $("#btnShowCountryInfo").css("visibility", "visible");
        fetchCountryData(placeCountry);
    }
};

function checkPlaceContentVisible() {
    if (!$("#content-place").is(':visible')) {
        $("#btnHideContent").click();
    }
}

$("#btnHideContent").click(function () {
    $("#placeDescription").toggle('medium', function () {
        /*Credit: to Check if content is visible
        https://stackoverflow.com/questions/15066304/how-to-determine-the-current-state-of-jquery-toggle */
        if ($("#content-place").is(':visible')) {
            $("#btnHideContent").html("Hide Description");
        } else {
            $("#btnHideContent").html("Show " + placeSelected + " Description");
        }
    });
});

$("#btnShowCountryInfo").click(function () {
    $("#countries-info").toggle('medium', function () {
        /*Credit: to Check if content is visible
        https://stackoverflow.com/questions/15066304/how-to-determine-the-current-state-of-jquery-toggle */
        if ($(".country-info").is(':visible')) {
            $("#btnShowCountryInfo").html("Hide Country Details");
        } else {
            $("#btnShowCountryInfo").html("Country Details");
        }
    });
});

function getContent(place) {
    if (place === "Colosseum") {
        return ("The Flavian Amphitheatre, more commonly known as the Colosseum, stands in the archaeological heart " +
            "of Rome and welcomes large numbers of visitors daily, attracted by the fascination of its history " +
            "and its complex architecture. The building became known as the Colosseum because of a colossal statue " +
            "that stood nearby. It was built in the 1st century CE at the behest of the emperors of the Flavian " +
            "dynasty. Until the end of the ancient period, it was used to present spectacles of great popular " +
            "appeal, such as animal hunts and gladiatorial games. The building was, and still remains today, " +
            "a spectacle in itself. It is the largest amphitheatre in the world, capable of presenting " +
            "surprisingly complex stage machinery, as well as services for spectators. A symbol of the " +
            "splendour of the empire, the Amphitheatre has changed its appearance and its function over " +
            "the centuries, presenting itself as a structured space but open to the Roman community."
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
    } else if (place === "Machu Picchu") {
        return ("Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre (7,970 ft) mountain ridge. It is located in the Machupicchu " +
            "District within Urubamba Province above the Sacred Valley, which is 80 kilometres (50 mi) northwest of Cuzco. The Urubamba River flows past it, cutting through the Cordillera " +
            "and creating a canyon with a tropical mountain climate. " +
            "For most speakers of English or Spanish, the first 'c' in Picchu is silent. In English, the name is pronounced /ˌmɑːtʃuː piːtʃuː/ or /ˌmɑːtʃuː piːktʃuː/, in Spanish as [ˈmatʃu ˈpitʃu] " +
            "or [ˈmatʃu ˈpiktʃu], and in Quechua (Machu Pikchu) as [ˈmatʃʊ ˈpɪktʃʊ]." +
            "Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti (1438–1472). Often mistakenly referred to as the 'Lost City of the Incas', " +
            "it is the most familiar icon of Inca civilization. The Incas built the estate around 1450 but abandoned it a century later at the time of the Spanish conquest. Although known locally, " +
            "it was not known to the Spanish during the colonial period and remained unknown to the outside world until American historian Hiram Bingham brought it to international attention in 1911. " +
            "Machu Picchu was built in the classical Inca style, with polished dry-stone walls. Its three primary structures are the Intihuatana, the Temple of the Sun, and the Room of the Three Windows. " +
            "Most of the outlying buildings have been reconstructed in order to give tourists a better idea of how they originally appeared. By 1976, 30% of Machu Picchu had been restored and restoration continues. " +
            "Machu Picchu was declared a Peruvian Historic Sanctuary in 1981 and a UNESCO World Heritage Site in 1983.[13] In 2007, Machu Picchu was voted one of the New Seven Wonders of the World in a worldwide " +
            "internet poll. "
        )
    } else if (place === "Christ The Redeemer") {
        return ("In the top of the mountain is installed Christ the redeemer, one of the most wanted touristic sides of Rio de Janeiro. Biggest and most famous scripture Art Déco of the world, the Christ statue started " +
            "to be planned in 1921 and it was developed by the engineer Heitor da Silva Costa over 5 years of job, from 1926 to 1931, the opening year of the monument. " +
            "It’s located at Parque Nacional da Tijuca, 710 meter above the sea level, where anybody can appreciate one of the most beautiful views of the city. Over all 220 steps that lead to the famous statue feet, " +
            "it was elected one of the Seven Wonders of the World made by formal voting in 2007 by the Swiss Institution New 7 Wonders Foundation. The monument is accessible by train, van or car. " +
            "To get into the monument, there’s a nice ride by train that, during 20 minutes, it crosses Mata Atlântica until Corcovado’s top. Making an easy access to the visitants, three panoramic " +
            "elevators and four escalators were built. The visual is amazing; it makes an unmissable programme for those that visit the city."
        )
    } else if (place === "The Great Wall of China") {
        return ("The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng) is a series of fortifications that were built across the historical northern " +
            "borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, " +
            "with selective stretches later joined together by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains. Later on, many successive dynasties have built and " +
            "maintained multiple stretches of border walls. The most well-known sections of the wall were built by the Ming dynasty (1368–1644). " +
            "Apart from defense, other purposes of the Great Wall have included border controls, allowing the imposition of duties on goods transported along the Silk Road, " +
            "regulation or encouragement of trade and the control of immigration and emigration. Furthermore, the defensive characteristics of the Great Wall were enhanced by " +
            "the construction of watchtowers, troop barracks, garrison stations, signaling capabilities through the means of smoke or fire, and the fact that the path of the Great Wall " +
            "also served as a transportation corridor. " +
            "The frontier walls built by different dynasties have multiple courses. Collectively, they stretch from Liaodong in the east to Lop Lake in the west, from the present-day " +
            "Sino–Russian border in the north to Tao River (Taohe) in the south; along an arc that roughly delineates the edge of the Mongolian steppe; spanning over 20,000 km " +
            "(12,000 mi) in total. Today, the defensive system of the Great Wall is generally recognized as one of the most impressive architectural feats in history."
        )
    } else if (place === "Ruins of Petra") {
        return ("The city of Petra, capital of the Nabataean Arabs, is one of the most famous archaeological sites in the world, it is Located 240 km south of the capital Amman and 120 km north " +
            "of the red sea town of Aqaba (see the Map), Petra the world wonder, is undoubtedly Jordan's most valuable treasure and greatest tourist attraction, and it is visited by " +
            "tourists from all over the world. " +
            "It is not known precisely when Petra was built, but the city began to prosper as the capital of the Nabataean Empire from the 1st century BC, " +
            "which grew rich through trade in frankincense, myrrh, and spices. " +
            "Petra was later annexed to the Roman Empire and continued to thrive until a large earthquake in 363 AD destroyed much of the city in the 4th century AD. " +
            "The earthquake combined with changes in trade routes, eventually led to the downfall of the city which was ultimately abandoned. " +
            "By the middle of the 7th century Petra appears to have been largely deserted and it was then lost to all except local Bedouin from the area. " +
            "In 1812 a Swiss explorer named Johannes Burckhardt set out to ‘rediscover’ Petra; he dressed up as an Arab and convinced his Bedouin guide to take him to the lost city, " +
            "After this, Petra became increasingly known in the West as a fascinating and beautiful ancient city, and it began attracting visitors and  continues to do so today. " +
            "Petra is also known as the rose-red city, a name it gets from the wonderful colour of the rock from which many of the city’s structures were carved.  " +
            "The Nabataeans buried their dead in intricate tombs that were cut out of the mountain sides and the city also had temples, a theater, and following the Roman " +
            "annexation and later the Byzantine influence, a colonnaded street and churches. " +
            "In addition to the magnificent remains of the Nabataean city, human settlement and land use for over 10,000 years can be traced in Petra, " +
            " where great natural, cultural, archaeological and geological features merge. " +
            "On December 6, 1985, Petra was designated a World Heritage Site,, also Petra was chosen by the Smithsonian Magazine as one of the 28 places you should visit them before you die."
        )
    } else if (place === "Taj Mahal") {
        return ("The Taj Mahal is actually an integrated complex of structures with the white domed marble mausoleum being its most significant component. Entrusted to a board-of-architects " +
            "by the Emperor Shah Jahan, the construction of the Taj Complex began about 1631 AD. The principal mausoleum was completed in 1648 AD by employing thousands of " +
            "artisans and craftsmen, whereas, the outlying buildings and gardens were finished five years later in 1653 AD. " +
            "The Taj, the ultimate expression of love speaks volumes of indulgence coming from an overflowing treasury and political " +
            "security of that era and much more by way of the finesse in art and science of architecture. Herringbone inlays define the space between many of the adjoining elements. " +
            "White inlays are used in sandstone buildings, and dark or black inlays on the whitemarbles. Mortared areas of the marble buildings have been stained or " +
            "painted in a contrasting colour, creating geometric patterns of considerable complexity. Floors and walkways use contrasting tiles or blocks in tessellation patterns. " +
            "The inlay stones are of yellow marble, jasper and jade, polished and levelled to the surface of the walls."
        )
    } else if (place === "About") {
        return ("New 7 Wonders of the World was a campaign started in 2000 to choose Wonders of the World from a selection of 200 existing monuments. The popularity poll via free " +
            "Web-based voting and small amounts of telephone voting was led by Canadian-Swiss Bernard Weber and organized by the New 7 Wonders Foundation (N7W) based in Zurich, Switzerland, " +
            "with winners announced on 7 July 2007 in Lisbon, at Estádio da Luz. The poll was considered unscientific partly because it was possible for people to cast multiple " +
            "votes. According to John Zogby, founder and current President/CEO of the Utica, New York-based polling organization Zogby International, New 7 Wonders Foundation drove " +
            "'the largest poll on record'. The program drew a wide range of official reactions. Some countries touted their finalist and tried to get more votes cast for it, while " +
            "others downplayed or criticized the contest. After supporting the New 7 Wonders Foundation at the beginning of the campaign by providing advice on nominee selection, " +
            "the United Nations Educational, Scientific, and Cultural Organization (UNESCO), by its bylaws having to record all and give equal status to world heritage sites, " +
            "distanced itself from the undertaking in 2001 and again in 2007. " +
            "The seven winners were chosen from 21 candidates, which had been whittled down from 77 choices by a panel in 2006." +
            "The New 7 Wonders Foundation, established in 2001, relied on private donations and the sale of broadcast rights and" +
            "received no public funding. After the final announcement, New 7 Wonders said it did not earn anything from the exercise" +
            "and barely recovered its investment." +
            "Although N7W describes itself as a not-for-profit organization, the company behind it—the New Open World Corporation (NOWC)—is" +
            "a commercial business. All licensing and sponsorship money is paid to NOWC." +
            "The foundation ran two subsequent programs: New 7 Wonders of Nature, the subject of voting until 2011, and New7Wonders Cities, which ended in 2014."
        )
    };
}