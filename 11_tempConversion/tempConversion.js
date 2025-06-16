const convertToCelsius = function(F) {
       let C = parseFloat(((F - 32) * 5 / 9).toFixed(1));
           return C;
};

const convertToFahrenheit = function(C) {
      let F = parseFloat(((C * 9 / 5) + 32).toFixed(1));
            return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
