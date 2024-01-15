// Set the forecasted temperature for today in Kelvin
const  kelvin = 293;

// Convert the temperature from Kelvin to Celsius
const celsius = kelvin - 273;


// Calculate Fahrenheit from Celsius and store the result
let fahrenheit = celsius * (9/5) + 32;


// Round down the Fahrenheit temperature to the nearest whole number
fahrenheit = Math.floor(fahrenheit);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// 0 Kelvin is equivalent to -459.4 degrees Fahrenheit.


// Convert temperature from Celsius to Newton scale
let Newton = celsius * (33/100);
// Round down the Newton temperature to the nearest whole number
Newton=Math.floor(Newton);

console.log(`The temperature is ${Newton} degrees Newton.`);