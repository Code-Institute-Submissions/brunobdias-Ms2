// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("navbar").style.padding = "0.5rem 0.5rem";
        document.getElementById("brand").style.fontSize = "1.5rem";
        document.getElementById("brand").style.weight = "bold";
        document.getElementById("logo").src = "assets/images/navlogo.png";
    } else {
        document.getElementById("navbar").style.opacity = "0.85";
        document.getElementById("navbar").style.padding = "2rem 0.5rem";
        document.getElementById("brand").style.fontSize = "2rem";
        document.getElementById("brand").style.weight = "bold";
        document.getElementById("logo").src = "assets/images/navlogo-lg.png";
    }
}

//LEAFLET FIRST STEPS

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnJ1bm9iZGlhcyIsImEiOiJja21zbDNoNzgwaXN3MndwbTByaTRsdjB1In0.RPbFqb9_Y2EPbCRa0x6a0A'
}).addTo(mymap);

// Add Marker
var marker = L.marker([51.5, -0.09]).addTo(mymap);

//Adding a circle
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

//Adding a polygon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

//Adding a pop-up
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

//Standalone Popup
/*var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap); */

//Map Click
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);