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

  it('has a power saving mode which can be switched off', function(){
    thermostat.switchPowerSavingOff();
    expect(thermostat.getPowerSaving()).toBe(false);
  });

  it('has a power saving mode which can be switched on', function(){
    thermostat.switchPowerSavingOff();
    thermostat.switchPowerSavingOn();
    expect(thermostat.getPowerSaving()).toBe(true);
  });

  it('increases temperature by 1', function(){
    thermostat.increaseTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases temperature by 1', function(){
    thermostat.decreaseTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature value of 10 degrees', function(){
    expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
  });

  it('cannot decrease the temperature below 10 degrees', function(){
    for (var i = 0; i <= 11; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('can be reset to default temperature', function(){
    for (var i = 1; i < 10; i++) {
      thermostat.increaseTemp();
    }
    thermostat.resetTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('when power saving mode is on', function(){
    it('has a maximum temperature on 25 degrees', function(){
      for (var i = 1; i <= 5; i++) {
      thermostat.increaseTemp(i);
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function(){
    it('has a maximum temperature of 32 degrees', function(){
      thermostat.switchPowerSavingOff();
      for (var i = 0; i < 12; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });
});
