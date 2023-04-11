var apiKey = "7979d5e84fdccdb02368a469751192e0";
var historyList = $('#search-history');
var data;
var lat;
var lon;
var cityInput;
var searchBtn = $('#btn-search');
var historyLedger = [];

// function to get the 5-day forecast
var getFiveDay = function(lat, lon) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    $.ajax({
        url: requestUrl,
        method: `GET`
    }).then(function(response){
        console.log(response);
    });
};

// convert to lat and lon
var getCoord = function(city){
    var city = $('#city');
    var cityInput = city.val();
    var convertUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}{&limit=${1}&appid=${apiKey}`;

    $.ajax({
        url: convertUrl,
        method: "GET"
    }).then(function(response){
        console.log(response[0].lat);
        console.log(response[0].lon);
        console.log(response[0]);
        console.log(cityInput);

        data = response[0];
        lat = data.lat;
        lon = data.lon;
        console.log(lon);
        console.log(lat);

        localStorage.setItem(cityInput, JSON.stringify(data));

        // call the function to get the 5-day forecast
        getFiveDay(lat, lon);
    }).catch(function(error){
        console.log(error);
    });
};

searchBtn.on('click', getCoord);
console.log(apiKey);
