var apiKey = "7979d5e84fdccdb02368a469751192e0";
var historyList = $('#search-history');
var data;
var lat;
var lon;
var cityInput;
var searchBtn = $('#btn-search');
var historyLedger = [];

// function to get the 5-day forecast
var getFiveDay = function(lat, lon, cityInput,) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    $.ajax({
        url: requestUrl,
        method: `GET`
    }).then(function(response){
        // console.log(response);
        $('.card-header').empty();

        var forecastHeader =$('<h3>').text('5-Day Forecast:'+ cityInput);
        var cardOutline =$('<div>').addClass('card-deck');
        $('.card-title').empty();

        for (var i = 0; i< response.list.length; i +=8){
            var card = $('<div>').addClass('card mb-3');
            var cardBody = $('<div>').addClass('card-body');
            var cardTitle = $('<h4>').addClass('card-title').text(cityInput);
            // var cardDate = $('<h5>').addClass('card-text text-center').text(JSON.parse(response.list[i].dt_txt).trim());
            var temp = $('<p>').addClass('card-text').text(`Temp: ${response.list[i].main.temp} °F`);
            var humidity = $('<p>').addClass('card-text').text(`Humidity: ${response.list[i].main.humidity}%`);

            cardBody.append(cardTitle,temp,humidity);
            card.append(cardBody);
            cardOutline.append(card);
            // cardBody.append(cardDate);


        }

        $('.card-body').append(forecastHeader);
        $('.card-body').append(cardOutline);
    });
};

// convert to lat and lon
var getCoord = function(city){
    var city = $('#city');
    var cityInput = city.val();
    var convertUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityInput}{&limit=${1}&appid=${apiKey}`;

    $.ajax({
        url: convertUrl,
        method: "GET"
    }).then(function(response){
        // console.log(response[0].lat);
        // console.log(response[0].lon);
        // console.log(response[0]);
        // console.log(cityInput);

        data = response[0];
        lat = data.lat;
        lon = data.lon;
        // console.log(lon);
        // console.log(lat);

        localStorage.setItem(cityInput, JSON.stringify(data));

        var history= $('<li>').addClass('list-group-item').text(cityInput);
        historyList.append(history);

        // call the function to get the 5-day forecast
        getFiveDay(lat, lon, cityInput);
    }).catch(function(error){
        console.log(error);
    });
};

searchBtn.on('click', getCoord);
// console.log(apiKey);
