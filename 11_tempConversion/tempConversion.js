const convertToCelsius = function(Fahrenheit) {
	let Celsius = (Fahrenheit - 32) * (5 / 9);
	return Math.round(Celsius * 10) / 10;
};

const convertToFahrenheit = function(Celsius) {
	let Fahrenheit = (Celsius * 9/5) + 32;
	return Math.round(Fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
