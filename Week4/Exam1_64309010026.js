const kelvin = 293;
const celsius = kelvin - 273;
let Fahrenheit = celsius * (9/5) + 32;
let A = Math.floor(Fahrenheit);
console.log(`The temperature is ${A} Fahrenheit.`)