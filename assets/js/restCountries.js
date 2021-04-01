//Sample integration from 
//https://stackoverflow.com/questions/65189680/rest-countries-api-how-to-get-content


//https://restcountries.eu/rest/v2/alpha/?codes=ita;mex;per;bra;chn;jor;ind
function fetchCountryData(placeCountry) {

    fetch('https://restcountries.eu/rest/v2/alpha/' + placeCountry)
        .then(res => res.json())
        .then(data => initialize(data))
        .catch(err => console.log('Error:', err.message));


    function initialize({
        name,
        capital,
        callingCodes,
        population,
        //currencies,
        region,
        latlng,
        timezones,
        borders,
        flag
    }) {
        console.log({
            name,
            capital,
            callingCodes,
            population,
            //currencies,
            region,
            latlng,
            timezones,
            borders,
            flag
        });

        $(".country-info").html(`<div class"info">
                    <p> Name: ${name} <p>
                    <p> Capital: ${capital} </p>
                    <p> Lat. Long.: ${latlng} <p>
                    <p> Calling Code: ${callingCodes} <p>
                    <p> Timezone: ${timezones} <p>
                    <p> Borders: ${borders} <p>
                    <p> Population: ${population} <p>
                    <img src = ${flag} alt= ${name} width="200" height="100"/>
                </div>`);

    }

}

/*

https://restcountries.eu/rest/v2/alpha/col
[{
"name": "Colombia",
"topLevelDomain": [".co"],
"alpha2Code": "CO",
"alpha3Code": "COL",
"callingCodes": ["57"],
"capital": "Bogotá",
"altSpellings": ["CO", "Republic of Colombia", "República de Colombia"],
"region": "Americas",
"subregion": "South America",
"population": 48759958,
"latlng": [4.0, -72.0],
"demonym": "Colombian",
"area": 1141748.0,
"gini": 55.9,
"timezones": ["UTC-05:00"],
"borders": ["BRA", "ECU", "PAN", "PER", "VEN"],
"nativeName": "Colombia",
"numericCode": "170",
"currencies": [{
    "code": "COP",
    "name": "Colombian peso",
    "symbol": "$"
}],
"languages": [{
    "iso639_1": "es",
    "iso639_2": "spa",
    "name": "Spanish",
    "nativeName": "Español"
}],
"translations": {
    "de": "Kolumbien",
    "es": "Colombia",
    "fr": "Colombie",
    "ja": "コロンビア",
    "it": "Colombia",
    "br": "Colômbia",
    "pt": "Colômbia"
},
"flag": "https://restcountries.eu/data/col.svg",
"regionalBlocs": [{
    "acronym": "PA",
    "name": "Pacific Alliance",
    "otherAcronyms": [],
    "otherNames": ["Alianza del Pacífico"]
}, {
    "acronym": "USAN",
    "name": "Union of South American Nations",
    "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
    "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
}],
"cioc": "COL"
}]*/