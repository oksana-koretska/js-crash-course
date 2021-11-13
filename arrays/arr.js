
let emptyArray = [];

const numsArray = [1, 2, 3, 4];

// const strArray = ['there', 'can', 'be', 'strings'];

// const mixArray = [1, 'a', { n: 1 }, [1,2,3]];


const nums = new Array();

nums.push(1);
nums.push(2);
nums.push(3);
nums.push('lopp', 'sun', 'moon');

// console.log(nums);


const strArray = ['there', 'can', 'be', 'strings'];

// console.log(strArray[1]); 
// console.log(strArray[0]); 



const mixArr = [1, 'a', { n: 1 }, [1,2,3]];

// console.log(mixArr[0]); 
// console.log(mixArr[2]); 


const myArray = [1, 'BMW', 'there', { a: 1 }];

myArray[2] = 'Mazda';
myArray[2] = 'here';
// console.log(myArray);

// delete element
delete myArray[4];

const mixArray = [1, 'str', 'there', { a: 1 }];
// to add a new element
mixArray.push(100);
mixArray.push({ b: 10 });
mixArray.push('test');
// console.log(mixArray);


const animals = ['god', 'cat', 'birds', 'monkey'];
animals.pop();
animals.pop();
// console.log(animals);


const digits = [89, 36, 58, 78, 98];
digits.unshift(100);
// console.log(digits);

const undigits = [89, 36, 58, 78, 98];
undigits.shift();
undigits.shift();
// console.log(undigits);


const ar1 = [1, 2];
const ar2 = [3, 4];

const result = ar1.concat(ar2);

// console.log(result);


const data = [
    { user: 'John' },
    { user: 'Tom' },
    { user: 'Petr' },
   ];
   
   function greeting(userName) {
     return "Hello, " + userName + "!";
   }
   
//    console.log(greeting(data[0].user));
//    console.log(greeting(data[1].user));
//    console.log(greeting(data[2].user));


const newArr = [];

function add(obj, arr) {
  arr.push(obj);
}

// console.log({ n: 1 }, newArr);
add({ n: 3 }, newArr);
add({ n: 5 }, newArr);



  
   


