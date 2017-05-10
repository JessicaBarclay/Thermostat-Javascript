"use strict";

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this._temperature = 20;
  this._powerSaving = true;
}

Thermostat.prototype.getCurrentTemperature = function () {
  return(this._temperature);
};

Thermostat.prototype.getPowerSaving = function () {
  return(this._powerSaving);
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this._temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.increaseTemp = function() {
  this._temperature++;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinimumTemperature()) {
    return;
  } else {
    this._temperature--;
  }
};
