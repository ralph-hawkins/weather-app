/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data for London
- Print the temperature in console.
- Possible next steps
- 1: Display the temperature in the UI rather than the console
- 2: Display an icon or image depending on the current weather
- 3: add a form prompting user for the city.
- 4: add a toggle for switching between farenheit and celcius

*/
var app = {};

app.positionText = function(temperature){
  var tempInCentigrade = Math.round(temperature - 273.15);
  $('#temp').prepend(tempInCentigrade + '°C');
};

app.getWeather = function(done) {
  var city = 'london';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var apiKey = '676908f245f4b43ad56d973b12d493f4';
  var completeUrl = weatherUrl + city + '&appid=' + apiKey;
  var temperature;
  $.ajax({
    url: weatherUrl + city + '&appid=' + apiKey,
    success: function(response){
      temperature = response.main.temp;
      done(temperature); 
      // var tempInCentigrade = Math.round(temperature - 273.15);
      // $('#temp').prepend(tempInCentigrade + '°C');
      // console.log(completeUrl);
    }
  });
};


app.init = function(){
  app.getWeather(app.positionText);
};

$(document).ready(app.init);