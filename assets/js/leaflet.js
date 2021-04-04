/*
    CREDIT: JIM LINX - Managing and changing pins and locations by using buttons
    https://github.com/JimLynx/CI-MS2-Safari-Africa
*/

//MAPS API from https://leafletjs.com/
let mapTileLayers = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", //Attribution for map tiles import
    { attribution: "Powered by Esri" }
);

/*CREDIT: Tim Nelson Map 1st Coordinates*/
let map = L.map("map", {
    layers: [mapTileLayers], // variable from above
    center: [0, 0], // central lat-lng once loaded
    zoom: 0, // smaller numbers = zoomOut // larger numbers = zoomIn
    minZoom: 2.3, // max zoomOut permitted
    maxZoom: 18, // max zoomIn permitted
    maxBoundsViscosity: 0.5, // elastic bounce-back of map edges
});

L.control.scale().addTo(map); // adds scale/legend in bottom-left corner of map
//--- END CREDIT ---//

// Function to change map display with button click  
function changeMapLocation(location) {
    /* CREDIT: .find() by location in array of objects: 
  https://stackoverflow.com/a/35398031/13484385*/
    const newMapLocation = mapLocations.find(
        (name) => name.location === location
    );
    //--- END CREDIT ---

    // map.setView(newMapLocation.center, newMapLocation.zoom);
    map.flyTo(newMapLocation.center, newMapLocation.zoom);

}

//Arrays for initial locations
const mapLocations = [
    //Start of Initial Country Objects
    {
        location: "Colosseum",
        center: [42.83333333, 12.83333333], //italy
        zoom: 4,
        pin: [41.890401862527504, 12.492252356066988],
    },
    {
        location: "Chichén Itzá",
        center: [20.684989246175014, -88.56776102695805], //Mexico
        zoom: 4,
        pin: [20.684989246175014, -88.56776102695805],
    },
    {
        location: "Machu Picchu",
        center: [-10, -76], //Peru
        zoom: 4,
        pin: [-13.162908001608807, -72.54495596822237],
    },
    {
        location: "Christ The Redeemer",
        center: [-22.951708516090054, -43.21043355754436], //Brazil
        zoom: 4,
        pin: [-22.951708516090054, -43.21043355754436],
    },
    {
        location: "The Great Wall of China",
        center: [40.432853746568234, 116.57043796047508], //China
        zoom: 4,
        pin: [40.432853746568234, 116.57043796047508],
    },
    {
        location: "Ruins of Petra",
        center: [31, 36], //Jordan
        zoom: 5,
        pin: [30.32870441594906, 35.4442870963521],
    },
    {
        location: "Taj Mahal",
        center: [27.175316584322186, 78.04217438466947], //India
        zoom: 4,
        pin: [27.175316584322186, 78.04217438466947],
    },
];
/*
 END CREDIT
*/

/*CREDIT: Tim Nelson - Map Custom Icons*/
//----------------------------------------------------------- MARKERS + CUSTOM ICONS
var colosseumMarker = L.marker([41.890401862527504, 12.492252356066988]).addTo(map).bindPopup("Colosseum");
var colosseumIcon = new L.Icon({
    iconUrl: "assets/images/colosseumIco.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50]
});
colosseumMarker.setIcon(colosseumIcon);

var chichenMarker = L.marker([20.684989246175014, -88.56776102695805]).addTo(map).bindPopup("Chichén Itzá");
var chichenIcon = new L.Icon({
    iconUrl: "assets/images/chichenItzaIco.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50]
});
chichenMarker.setIcon(chichenIcon);

var machuPicchuMarker = L.marker([-13.162908001608807, -72.54495596822237]).addTo(map).bindPopup("Machu Picchu");
var machuPicchuIcon = new L.Icon({
    iconUrl: "assets/images/machuPicchuIco.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50]
});
machuPicchuMarker.setIcon(machuPicchuIcon);

var christMarker = L.marker([-22.951708516090054, -43.21043355754436]).addTo(map).bindPopup("Christ the Redeemer");
var christIcon = new L.Icon({
    iconUrl: "assets/images/christRedeemerIco.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50]
});
christMarker.setIcon(christIcon);

var greatWallMarker = L.marker([40.432853746568234, 116.57043796047508]).addTo(map).bindPopup("Great Wall of China");
var greatWallIcon = new L.Icon({
    iconUrl: "assets/images/greatWallIco.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50]
});
greatWallMarker.setIcon(greatWallIcon);

var petraMarker = L.marker([30.32870441594906, 35.4442870963521]).addTo(map).bindPopup("Ruins of Petra");
var petraIcon = new L.Icon({
    iconUrl: "assets/images/petraIco.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50]
});
petraMarker.setIcon(petraIcon);

var tajMahalMarker = L.marker([27.175316584322186, 78.04217438466947]).addTo(map).bindPopup("Taj Mahal");
var tajMahalIcon = new L.Icon({
    iconUrl: "assets/images/tajMahalIco.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50]
});
tajMahalMarker.setIcon(tajMahalIcon);

/*END CREDIT*/




/*
function onePlace(latitude, longitude) {
    //removeLayer(places);
            var places = L.layerGroup();

            L.marker([latitude, longitude]).addTo(places);

            var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

            var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
                streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });

            var map = L.map('mapid', {
                center: [20, 13],
                zoom: 1.75,
                zoomSnap: 0.25,
                layers: [grayscale, places]
            });

            //Map Click
            var popup = L.popup();
            function onMapClick(e) {
                popup
                    .setLatLng(e.latlng)
                    .setContent(e.latlng.toString())
                    .openOn(map);
            }

            map.on('click', onMapClick);

            var baseLayers = {
                "Grayscale": grayscale,
                "Streets": streets
            };

            var overlays = {
                "Places": places
            };

            L.control.layers(baseLayers, overlays).addTo(map);
}


//*/



///* 
/*
var italy = L.marker([42.83333333, 12.83333333]),
    mexico = L.marker([23, -102]),
    peru = L.marker([-10, -76]),
    brazil = L.marker([-10, -55]),
    china = L.marker([35, 105]),
    jordan = L.marker([31, 36]),
    india = L.marker([20, 77]);

var countries = L.layerGroup([italy, mexico, peru, brazil, china, jordan, india]);

*/

/* Mapa varios Marcadores

var colosseum = L.marker([41.890401862527504, 12.492252356066988]),
    chichenItza = L.marker([20.684989246175014, -88.56776102695805]),
    machuPicchu = L.marker([-13.162908001608807, -72.54495596822237]),
    christReddemer = L.marker([-22.951708516090054, -43.21043355754436]),
    greatWall = L.marker([40.432853746568234, 116.57043796047508]),
    petra = L.marker([30.32870441594906, 35.4442870963521]),
    tajMahal = L.marker([27.175316584322186, 78.04217438466947]);

//var places = L.layerGroup([colosseum, chichenItza, machuPicchu, christReddemer, greatWall, petra, tajMahal]);
var markerColosseum = L.layerGroup([colosseum]),
    markerChichenItza = L.layerGroup([chichenItza]),
    markerMachuPicchu = L.layerGroup([machuPicchu]),
    markerChristReddemer = L.layerGroup([christReddemer]),
    markerGreatWall = L.layerGroup([greatWall]),
    markerPetra = L.layerGroup([petra]),
    markerCTajMahal = L.layerGroup([tajMahal]);

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
    streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });

var map = L.map('mapid', {
    center: [20, 13],
    zoom: 1, //1.75,
    zoomSnap: 0.25,
    layers: [grayscale, //places,
        markerColosseum,
        markerChichenItza,
        markerMachuPicchu,
        markerChristReddemer,
        markerGreatWall,
        markerPetra,
        markerCTajMahal]
});

//Map Click
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};

var overlays = {
    //"Places": places,
    "Colosseum": markerColosseum,
    "Chichen Itza": markerChichenItza,
    "Machu Picchu": markerMachuPicchu,
    "Christ Reddemer": markerChristReddemer,
    "Great Wall": markerGreatWall,
    "Petra": markerPetra,
    "Taj Mahal": markerCTajMahal
};

L.control.layers(baseLayers, overlays).addTo(map);
//*/



/************************ Leaflet Map *********************

var mymap = L.map('mapid').setView([41.89720933591209, 12.496851436602908], 13);
//var mymap = L.map('mapid').setView([latitude, longitude], 13);

// Add Marker
var marker = L.marker([41.891544, 12.496144]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnJ1bm9iZGlhcyIsImEiOiJja21zbDNoNzgwaXN3MndwbTByaTRsdjB1In0.RPbFqb9_Y2EPbCRa0x6a0A'
}).addTo(mymap);

//Map Click
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Lat. and Long. " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

//*********************************** End Map ***********************************/


