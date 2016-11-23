
function loadIt(e) {
  e.preventDefault();

  var cityReq = $('.cityReq').val();
    if (cityReq == '' || typeof cityReq == null || typeof cityReq == undefined) {
      alert('Don\'t forget to enter your city!')
    } else {
      $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(cityReq) + "&APPID=1a1576ef47c8c1b185e9e0cadda52974"
      }).done(function(data){
          var group = $('<div class="group"></div>')
          if (data.current.name === "undefined") {
            alert ('Sorry we can\'t find a city by that name!')
          } else {
            $.each(data,function(index, res){
              group.append($('<br>' + '<h1 class="cityTitle"></h1>').text(city.name.weather));
            })
          }
          $('.content').empty().append(group);

});
}
}
$('.search').on("submit", loadIt);
// Bill's API key for storage
//"api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1a1576ef47c8c1b185e9e0cadda52974",
