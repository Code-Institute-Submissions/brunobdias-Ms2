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
        currencies,
        region,
        subregion,
        latlng,
        timezones,
        borders,
        flag
    }) {
                        
        population = formatNumber(population);
        currencies = setCurrencie(currencies);
        
        
        //clearfix CREDIT https://getbootstrap.com/docs/5.0/layout/columns/
        $(".country-info").html(`
                <div class="info clearfix">
                    <div class="flag">
                        <img src= ${flag} class="col-md-6 float-md-end mb-3 ms-md-3"
                         alt= ${name}/>
                    </div>
                    <p> <strong>Country:</strong> ${name} <p>
                    <p> <strong>Capital:</strong> ${capital} </p>
                    <p> <strong>Latitude & Longitude:</strong> ${latlng}<p>
                    <p> <strong>Region:</strong> ${region} </p>
                    <p> <strong>Subregion:</strong> ${subregion} </p>
                    <p> <strong>Currency:</strong> ${currencies}</p>
                    <p> <strong>Calling Code:</strong> +${callingCodes} <p>
                    <p> <strong>Time Zone:</strong> ${timezones} <p>
                    <p> <strong>Borders:</strong> ${borders} <p>
                    <p> <strong>Population:</strong> ${population} <p>
                    <p>Font:
                        <a class="country-font-link" href="https://restcountries.eu/rest/v2/alpha/${placeCountry}" target="_blank"> Rest Countries EU <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
                    </p>
                </div>`);
    }

    function setCurrencie(currenciesArray){     
        return currenciesArray[0].name + " " + currenciesArray[0].symbol;
    }

    //CREDIT https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
    function formatNumber(pNumber){
          return new Intl.NumberFormat().format(pNumber);          
    }
}