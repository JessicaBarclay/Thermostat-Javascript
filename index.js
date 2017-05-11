$( document ).ready(function() {
  var thermostat = new Thermostat();
   $('body').css({backgroundImage : 'url(https://ca.slack-edge.com/T03ALA7H4-U03MXEUE7-1ac66545231b-512)'});
   $('h1').css('color', 'white');
   $('h2').css('color', 'white');
   $('#reset').css("background-color", "orange");
   $('#increase-temp').css("background-color", "#ff5050");
   $('#decrease-temp').css("background-color", "#66ccff");
   $('#psm-on').css("background-color", "#00ff99");
   $('#psm-off').css("background-color", "#00ff99");
   $( '#temperature' ).text(thermostat.getCurrentTemperature());

   $('#increase-temp').click(function(){
     thermostat.increaseTemp();
     $( '#temperature' ).text(thermostat.getCurrentTemperature());
   });

   $('#decrease-temp').click(function() {
     thermostat.decreaseTemp();
     $( '#temperature' ).text(thermostat.getCurrentTemperature());
   });
});
