const grades = [1, 2, 3]
const secondHalf = grades.slice(grades.length/2);
grades.sort(function(a, b){return a - b});
const range = (grades[grades.length -1] - grades[0]);
//first task 
let median = 0;
function med (arr) {
    if (grades.length == 1) {
        median = grades[0];
    }
    else if ((grades.length % 2) == 0) {
        median = grades[(grades.length / 2) - 1] + grades[(grades.length / 2)];
        median = median / 2;
    }
    else {
        median = grades[Math.floor(grades.length / 2)];
    }
}
med(grades);
//second task
secondHalf.sort(function(a, b){return a - b});
const secRange = (secondHalf[secondHalf.length -1] - secondHalf[0]);
//third task
console.log("Stats-\n" + "range- " + range + "\n" + "median- " + median + "\n" + "Half range- " + secRange)
