function square(number) {
    return number * number;
  }
console.log(square(2));

const square = (number) => number * number;
console.log(square(6));
	
const square = (number) => {
    return number * number;
  }
console.log(square(8));

const square = function(number) {
    return number * number;
  }
console.log(square(10)); 

function makeDecision(makeFn) {
    makeFn();
  }
  
makeDecision(function() {
    console.log("Let's dance");
  });
  
(function () {
    let firstVariable;
    let secondVariable;
  })();

const sum = new Function('a, b', ' return a + b; ');

console.log(sum(6, 6));

const age = new Function('currentYear, birthYear', ' return currentYear - birthYear; ');

console.log(age(2021, 1996));




  

  


