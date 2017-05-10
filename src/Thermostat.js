"use strict";

function Thermostat() {
  this._temperature = 20;
  this.minTemp = 10;
}

Thermostat.prototype.getCurrentTemperature = function () {
  return(this._temperature);
};

Thermostat.prototype.increaseTemp = function() {
  this._temperature++;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this._temperature > 10) {
    this._temperature--;
  } else {
    return('Cannot decrease temperature below ' + this.minTemp);
  }
};
