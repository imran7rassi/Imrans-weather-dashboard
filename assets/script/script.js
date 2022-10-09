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
                