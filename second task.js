const a = 1;
const b = 5;
const c = 6;
let solutionA = 0;
let solutionB = 0;
const j = Math.sqrt(b * b - 4 * a * c);
const r = 2 * a;
solutionA =  (j - b) / r;
solutionB = (0 - b - j) / r;
console.log(solutionA)
console.log(solutionB)