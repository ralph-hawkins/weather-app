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

app.getWeather = function() {
  var city = 'London';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var apiKey = '676908f245f4b43ad56d973b12d493f4';
  var completeUrl = weatherUrl + city + '&appid=' + apiKey;
  $.ajax({
    url: weatherUrl + city + '&appid=' + apiKey,
    success: function(response){
      var temperature = response.main.temp;
      $('#temp').prepend(Math.round(temperature - 273.15) + '°C');
    }
  });
};

app.init = function(){
  app.getWeather();
};

$(document).ready(app.init);

// for reference:

// var app = {  };

// app.getData = function() {
//   var countryCode = $(this).val();
//   $.ajax({
//     url: 'https://restcountries.eu/rest/v1/alpha/' + countryCode,
//     success: function( response ){
//       var capital = response.capital;
//       $('#response').text(capital);
//     }
//   });
// };

// app.init = function() {
//   $('#country').on( 'change', app.getData ).trigger('change');
// };

// $(document).ready(app.init);