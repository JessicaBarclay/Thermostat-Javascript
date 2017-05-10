"use strict";

function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.powerSaving = true;
}

Thermostat.prototype.increaseTemp = function() {
  this.temperature++;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature > 10) {
    this.temperature--;
  } else {
    return('Cannot decrease temperature below ' + this.minTemp);
  }
};
