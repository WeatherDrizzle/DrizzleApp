$(function() {
  function loadCurrent(e) {
     e.preventDefault();
     var cityReq = $('.cityReq').val();
    if (cityReq === '' || typeof cityReq == null || typeof cityReq == undefined) {
      alert('Don\'t forget to enter your city!')
    } else {
      $.ajax({
        type: "GET",
        url:"http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(cityReq) + "&APPID=1a1576ef47c8c1b185e9e0cadda52974"
      }).done(function(data){
        var currentGroup = $('<div class="group"></div>')
        var currentSubGroup = $('<div class="subgroup"></div>')
        if (data.name === "undefined") {
          alert ('Sorry we can\'t find a city by that name!')
        } else {
          currentSubGroup.append($('<h1 class="cityTitle"></h1>').text(data.name));
          currentSubGroup.append($('<p class="cityTemp"></p>').text(Math.round(data.main.temp*9/5 - 459.67)+ '°F'));
          currentSubGroup.append($('<p class="cityTemp"></p>').text(Math.round(data.main.temp_max*9/5 - 459.67)+ '°F' + ' / ' + Math.round(data.main.temp_min*9/5 - 459.67)+ '°F'));
          currentSubGroup.append($('<p class="cityHumid"></p>').text(data.main.humidity + '%'));
          $.each(data.weather,function(index, weather){
            currentSubGroup.append($('<p class="cityWeather"></p>').text(weather.main));
          })
          currentSubGroup.append($('<p class="cityHumid"></p>').text(Math.round(data.wind.speed/.44704)+ 'mph'));
          currentGroup.append(currentSubGroup);
        }
        $('.currentContent').empty().append(currentGroup);
      });

    }
  }

  function loadFiveDay(e) {
    e.preventDefault();

    var cityReq = $('.cityReq').val();
    if (cityReq === '' || typeof cityReq == null || typeof cityReq == undefined) {
      alert('Don\'t forget to enter your city!')
    } else {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + encodeURIComponent(cityReq) + "&APPID=1a1576ef47c8c1b185e9e0cadda52974"
      }).done(function(fData){
        var forecastGroup = $('<div class="forecastGroup"></div>')
        var forecastSubGroup = $('<div class="forecastSubGroup"></div>')
        if ( fData.city === "undefined") {
          alert ('Sorry we can\'t find a city by that name!')
        } else {
          forecastSubGroup.append($('<br>' + '<h1 class="forecastTitle"></h1>').text(fData.city.name));
          $.each(fData.list,function(index, value){
            forecastSubGroup.append($('<br>' + '<p class="forecastDate"></p>').text(value.dt_txt));
            forecastSubGroup.append($('<p class="forecastTemp"></p>').text(Math.round(value.main.temp_max*9/5 - 459.67)+ '°F' + ' / ' + Math.round(value.main.temp_min*9/5 - 459.67)+ '°F'));
            forecastSubGroup.append($('<p class="forecastWindSpeed"></p>').text(Math.round(value.wind.speed/.44704)+ 'mph'));
            forecastSubGroup.append($('<p class="forecastTitle"><p>').text(value.weather.main));

        })
          forecastGroup.append(forecastSubGroup);
        }
        $('.forecastContent').empty().append(forecastGroup)
      });
    }
  }


  $('.search').on("submit", loadCurrent);
  $('.search').on("submit", loadFiveDay);

})
