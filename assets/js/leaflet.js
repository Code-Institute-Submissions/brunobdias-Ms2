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