
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Things and stuff!')
})

app.listen(8080, function () {
  console.log('Drizzle app listening on port 8080!')
})




// Bill's API key for storage
//"api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1a1576ef47c8c1b185e9e0cadda52974",
