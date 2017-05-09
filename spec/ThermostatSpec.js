describe('Thermostat', function () {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start with a temperature of 20 degrees', function(){
    expect(thermostat.temperature).toBe(20);
  });

  it('should increases the temperature from 20 to 21 degrees', function(){
    thermostat.increaseTemp();
    expect(thermostat.temperature).toBe(21);
  });

  it('should descrease the temperature from 20 to 19 degrees', function(){
    thermostat.decreaseTemp();
    expect(thermostat.temperature).toBe(19);
  });

});
