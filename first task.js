const num = 111
let sum = 0
let num1 = Math.floor(num/100);
let num2 = num - (num1*100);
num2 = Math.floor(num2 /10);
let num3 = num - (num1 * 100) - (num2 * 10);
sum = num1 + num2 + num3;
console.log(sum);