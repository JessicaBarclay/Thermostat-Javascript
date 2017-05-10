describe('Thermostat', function () {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with temperature set to 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('has a power saving mode, set to true by default', function(){
    expect(thermostat.getPowerSaving()).toBe(true);
  });

  it('increases temperature by 1', function(){
    thermostat.increaseTemp();
    expect(thermostat.getCurrentTemperature()).toBe(21);
  });

  it('decreases temperature by 1', function(){
    thermostat.decreaseTemp();
    expect(thermostat.getCurrentTemperature()).toBe(19);
  });

  it('has a minimum temperature value of 10 degrees', function(){
    expect(thermostat.MINIMUM_TEMPERATURE).toBe(10);
  });

  it('cannot decrease the temperature below 10 degrees', function(){
    for (var i = 0; i <= 11; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.getCurrentTemperature()).toBe(10);
  });

});
