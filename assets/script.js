
 var currentDate = moment().format("dddd, MMMM Do YYYY");

 $("#search").click(function() {
  console.log("this was clicked")
  var userSearch = $("#search-input").val()
  console.log(userSearch)

  $("#search-history").append('<button type="button">' + userSearch + '</button>');
  localStorage.setItem("SearchHistory", userSearch);
  $("search-history").append('<button type="button">' + localStorage.getItem("SearchHistory") + '</button>');
  function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + userSearch + '&appid=30bfc0639100aaca12ace8ac4db0ea98&units=imperial';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      var currentWeather = data;
      $(".currentImage").css("background-image", "url(http://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png)");
      $("#cityName").html(currentWeather.name + " " + currentDate)
      $(".currentTemp").append(currentWeather.main.temp)
      $(".currentWind").append(currentWeather.wind.speed)
      $(".currentHumidity").append(currentWeather.main.humidity)
      console.log(currentWeather)
      //   console.log(currentWeather.name); //city name
      //   console.log(currentDate)// current date
      //   console.log(currentWeather.weather[0].main)// weather icon
      // console.log(currentWeather.main.temp)//Temp
      //   console.log(currentWeather.main.humidity)//Temp
      //   console.log(currentWeather.main.humidity)//Temp
      console.log(currentWeather.coord)
      var coordLon = currentWeather.coord.lon;
      var coordLat = currentWeather.coord.lat;
      var weatherRequestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coordLat + "&lon=" + coordLon +"&exclude=minutely,hourly&appid=30bfc0639100aaca12ace8ac4db0ea98&units=imperial";
          console.log(weatherRequestUrl)
  
          fetch(weatherRequestUrl)
          .then(function (weatherResponse) {
            return weatherResponse.json();
          })
          .then(function (weatherData) {
            var currentUV = weatherData.current.uvi;
            $(".currentUV span").append(weatherData.current.uvi)

            if(currentUV < 2) {
              $(".currentUV span").css("background-color", "green");
            } else if ( currentUV < 6) {
              $(".currentUV span").css("background-color", "yellow");
            } else {
              $(".currentUV span").css("background-color", "red");
            }
  
            // Day 1
            $(".image1").css("background-image", "url(http://openweathermap.org/img/wn/" + weatherData.daily[0].weather[0].icon + "@2x.png)");
            $(".temp1").append(weatherData.daily[0].temp.day)
            $(".wind1").append(weatherData.daily[0].wind_speed)
            $(".humidity1").append(weatherData.daily[0].humidity)
            $(".UV1").append(weatherData.daily[0].uvi)
  
            // Day 2
            $(".image2").css("background-image", "url(http://openweathermap.org/img/wn/" + weatherData.daily[1].weather[0].icon + "@2x.png)");
            $(".temp2").append(weatherData.daily[1].temp.day)
            $(".wind2").append(weatherData.daily[1].wind_speed)
            $(".humidity2").append(weatherData.daily[1].humidity)
            $(".UV2").append(weatherData.daily[1].uvi)
  
            // Day 3
            $(".image3").css("background-image", "url(http://openweathermap.org/img/wn/" + weatherData.daily[2].weather[0].icon + "@2x.png)");
            $(".temp3").append(weatherData.daily[2].temp.day)
            $(".wind3").append(weatherData.daily[2].wind_speed)
            $(".humidity3").append(weatherData.daily[2].humidity)
            $(".UV3").append(weatherData.daily[2].uvi)
  
            // Day 4
            $(".image4").css("background-image", "url(http://openweathermap.org/img/wn/" + weatherData.daily[3].weather[0].icon + "@2x.png)");
            $(".temp4").append(weatherData.daily[3].temp.day)
            $(".wind4").append(weatherData.daily[3].wind_speed)
            $(".humidity4").append(weatherData.daily[3].humidity)
            $(".UV4").append(weatherData.daily[3].uvi)
  
            // Day 5
            $(".image5").css("background-image", "url(http://openweathermap.org/img/wn/" + weatherData.daily[4].weather[0].icon + "@2x.png)");
            $(".temp5").append(weatherData.daily[4].temp.day)
            $(".wind5").append(weatherData.daily[4].wind_speed)
            $(".humidity5").append(weatherData.daily[4].humidity)
            $(".UV5").append(weatherData.daily[4].uvi)
  
            
  
              console.log(weatherData);
              console.log(weatherData.current.uvi);// UV Index
              console.log(weatherData.daily[0].weather[0].icon) // day 1 icon
              console.log(weatherData.daily[0].temp.day) // day 1 Temp
              console.log(weatherData.daily[0].wind_speed) // day 1 wind
              console.log(weatherData.daily[0].humidity) // day 1 humidity
              
          });
          
      });
  }
  getApi();
 })

