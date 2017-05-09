describe('Thermostat', function () {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start with a temperature of 20 degrees', function(){
    expect(thermostat.temperature).toBe(20);
  });

  it('should increases the temperature from 20 to 25 degrees', function(){
    thermostat.increaseTemp(5);
    expect(thermostat.temperature).toBe(25);
  });

});
