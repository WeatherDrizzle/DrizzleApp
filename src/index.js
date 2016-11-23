
function loadIt(e) {
   e.preventDefault();
   var cityReq = $('.cityReq').val();
  if (cityReq === '' || typeof cityReq == null || typeof cityReq == undefined) {
    alert('Don\'t forget to enter your city!')
  } else {
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(cityReq) + "&APPID=1a1576ef47c8c1b185e9e0cadda52974"
    }).done(function(data){
      console.log(data);
      var group = $('<div class="group"></div>')
      var subgroup = $('<div class="subgroup"></div>')
      if (data.name === "undefined") {
        alert ('Sorry we can\'t find a city by that name!')
      } else {
        subgroup.append($('<h1 class="cityTitle"></h1>').text(data.name));
        subgroup.append($('<p class="cityTemp"></p>').text(Math.round(data.main.temp*9/5 - 459.67)+ '°F'));
        subgroup.append($('<p class="cityTemp"></p>').text(Math.round(data.main.temp_max*9/5 - 459.67)+ '°F' + ' / ' + Math.round(data.main.temp_min*9/5 - 459.67)+ '°F'));
        subgroup.append($('<p class="cityHumid"></p>').text(data.main.humidity + '%'));
        $.each(data.weather,function(index, weather){
          subgroup.append($('<p class="cityWeather"></p>').text(weather.main));
        })
        subgroup.append($('<p class="cityHumid"></p>').text(Math.round(data.wind.speed/.44704)+ 'mph'));
        group.append(subgroup);
      }
      $('.content').empty().append(group);
    });
  }
 }
 $('.search').on("submit", loadIt);
