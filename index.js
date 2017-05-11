$( document ).ready(function() {
  var thermostat = new Thermostat();
   $('h1').css('color', 'white');
   $('h2').css('color', 'white');
   $('#reset').css("background-color", "orange");
   $('#increase-temp').css("background-color", "#ff5050");
   $('#decrease-temp').css("background-color", "#66ccff");
   $('#psm-on').css("background-color", "#00ff99");
   $('#psm-off').css("background-color", "#00ff99");
   updateTemperature();
   displayWeather('London');
   $( '#psm-mode' ).text('On');

   $('#increase-temp').click(function(){
     thermostat.increaseTemp();
     updateTemperature();
   });

   $('#decrease-temp').click(function() {
     thermostat.decreaseTemp();
     updateTemperature();

   });

   $('#reset').click(function(){
     thermostat.resetTemp();
     updateTemperature();
   });

   $('#psm-on').click(function(){
     thermostat.switchPowerSavingOn();
     $( '#psm-mode' ).text('On');

   });

   $('#psm-off').click(function(){
     thermostat.switchPowerSavingOff();
     $( '#psm-mode' ).text('Off');
   });

   $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
   });
//
   function updateTemperature(){
    $( '#temperature' ).text(thermostat.getCurrentTemperature());
    $( '#energy-usage' ).text(thermostat.showUsage());
   }

   function displayWeather(city) {
   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
     $('#current-temperature').text(data.main.temp);
   });

   }

});
