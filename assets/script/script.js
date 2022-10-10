window.onload = function () {

    // DISPLAY CURRENT WEATHER
    // This .on("click") function will trigger the AJAX Call
    $("#search-button").on("click", function (event) {
          event.preventDefault();
          saveToLocalStorage();
          saveToLocalStorage0();
          saveToLocalStorage1();
          saveToLocalStorage2();
          saveToLocalStorage3();
          saveToLocalStorage4();
          searchHistory();

          // grab text from the search-input box
          var city = $("#search-input").val();

          // construct URL
          var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=000401db107b5cbe165fdf198e9f1e47";

          // hit the queryURL with $ajax
          //take response data and display it in the city-box within the weather-div
          $.ajax({
                url: queryURL,
                method: "GET"
                
            }).then(function (response) {

                  // Constructing HTML containing the weather information for searched city
                  var cityName = $("<h2>").text(response.name);
                  var cityNameList = $("<li>").text(response.name);
                  cityNameList.addClass("list-group-item");

                  var weatherIcon = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
                  var weatherType = $("<p class='bold'>").text(response.weather[0].main);

                  // kelvin to F
                  var tempInt = parseInt(response.main.temp);
                  var tempF = (tempInt * 9 / 5) - 459.67;
                  var cityTemp = $("<p class='temp'>").text(Math.floor(tempF) + "°");
                  var cityHumidity = $("<p>").text("Humidity: " + response.main.humidity + "%");
                  var cityWindSpeed = $("<p>").text("Wind Speed: " + response.wind.speed + " MPH");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#city-box").empty();
                  $("#city-box").append(cityName, weatherIcon, weatherType, cityTemp, cityHumidity, cityWindSpeed);

                  // prepend the searched city onto city-list
                  $("#list-group").prepend(cityNameList);

                  // UV INDEX
                  var lat = response.coord.lat;
                  var lon = response.coord.lon;

                  // construct URL for UV index
                  var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=000401db107b5cbe165fdf198e9f1e47&lat=" + lat + "&lon=" + lon;
