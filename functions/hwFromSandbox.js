// Task 7

function calculateFigureArea(figureType, a, b) {
  if (figureType === "square") {
    return a * a;
  }
  if (figureType === "circle") {
    return Math.PI * a * a;
  }
  if (figureType === "rectangle") {
    return a * b;
}
  }
// console.log(calculateFigureArea("circle", 5, 2));


// Task 5 - should return an object with new field and value
// without object - { name: 'Name' }
// with an object - { name: 'Name', age: 100 }

function extendObject(key, value, obj) {
    const newObject = Object.assign({}, obj);
    newObject[key] = value;
    return newObject;
}

const obj = {
    name: 'Name'
}

const newObj = extendObject('age', '100', obj);
// console.log(obj);
// console.log(newObj);


// Task 6
function increaseBiggerArg(a, b) {
    return Math.max(a, b) + 100;
  }
// console.log(increaseBiggerArg(56, 78));


// Task 4 - should return a value by key in provided object
// provided object - { name: 'Name' }
// result - 'Name'

function valueByKeyInObject(key, obj = {}) {
  return obj[key];
}

const obj = {
  name: 'Name'
};

// console.log(valueByKeyInObject('name', obj));

 
let obj = {"one":"1","two":"3","three":"5","four":"1","five":"6"};
let myFunc = function(thisObj, property) { // console.log(obj[property]);
};
myFunc(obj, "two");


// Task 2
function sayHello(name) {
    return "Hello, " + name;
  }
// console.log(sayHello("Somename!"));


function sayHello(name) {
  let result;
  result = 'Hello, ' + name;
  return result;
}
// console.log(sayHello("Somename!"));