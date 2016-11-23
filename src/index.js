
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
      if (data.name === "undefined") {
        alert ('Sorry we can\'t find a city by that name!')
      } else {
        group.append($('<h1 class="cityTitle"></h1>').text(data.name));
        group.append($('<h1 class="cityTitle"></h1>').text(data.main.temp));
        group.append($('<h1 class="cityTitle"></h1>').text(data.main.humidity));

        $.each(data.weather,function(index, weather){
          group.append($('<h1 class="cityTitle"></h1>').text(weather.main));
        })
      }
      $('.content').empty().append(group);
    });
  }
 }
 $('.search').on("submit", loadIt);
