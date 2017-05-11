"use strict";

function Thermostat() {
  this.LOW_ENERGY_TEMP = 18;
  this.HIGH_ENERGY_TEMP = 25;
  this.DEFAULT_TEMPERATURE = 20;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF =32;
  this.MINIMUM_TEMPERATURE = 10;
  this._temperature = this.DEFAULT_TEMPERATURE;
  this._powerSaving = true;
}

Thermostat.prototype.getCurrentTemperature = function () {
  return(this._temperature);
};

Thermostat.prototype.getPowerSaving = function () {
  return(this._powerSaving);
};

Thermostat.prototype.showUsage = function () {
  if(this.getCurrentTemperature() < this.LOW_ENERGY_TEMP) {
    return('low-usage');
  }
  if(this.getCurrentTemperature() >= this.HIGH_ENERGY_TEMP) {
  return('high-usage');
  }
  return('medium-usage');
};

Thermostat.prototype.switchPowerSavingOff = function () {
  return(this._powerSaving = false);
};

Thermostat.prototype.switchPowerSavingOn = function () {
  return(this._powerSaving = true);
};

Thermostat.prototype.resetTemp = function () {
  return(this._temperature = this.DEFAULT_TEMPERATURE);
};

Thermostat.prototype.isPowerSavingOn = function () {
  return(this.getPowerSaving());
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this._temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if(this.isPowerSavingOn() === false) {
    return this._temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this._temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.increaseTemp = function() {
  if(this.isMaximumTemperature()) {
    return;
  }
    this._temperature++;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
    this._temperature--;
};
