"use strict";

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.increaseTemp = function(num) {
  this.temperature += num;
};

Thermostat.prototype.decreaseTemp = function(num) {
  this.temperature -= num;
};
