$( document ).ready(function() {
    var thermostat = new Thermostat();
   $('body').css({backgroundImage : 'url(https://ca.slack-edge.com/T03ALA7H4-U03MXEUE7-1ac66545231b-512)'})
   $('h1').css('color', 'white');
   $('h2').css('color', 'white');
   $('#reset').css("background-color", "orange");
   $( '#temperature' ).text(thermostat.getCurrentTemperature());
});

