var wpi = require('wiring-pi');


var configPin = 7;

var configTimeout = 1000;

wpi.setup('wpi');
wpi.pinMode(configPin, wpi.OUTPUT);

var isLedOn = 0;

setInterval(function() {
    isLedOn = +!isLedOn;

    wpi.digitalWrite(configPin, isLedOn );
}, configTimeout);