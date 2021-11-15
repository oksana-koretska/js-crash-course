// ------sum of array using loop
const arr = [5, 8, 7, 9];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}
// console.log(sum);

// -------sum of array using  forEach
const nums = [5, 8, 7, 9];
let sumNums = 0;

nums.forEach((num, index) =>{
    sumNums = sumNums + num;
})

// console.log(sumNums);

// ------sum of array using map (increase by 10)
const dig = [5, 6, 7, 8, 9, 10];

let updatedDig = 0;

dig.map(function(num, index){
    updatedDig = updatedDig + 10;
})

// console.log(updatedDig);

// -----sum of array using map (increase by 10) arrow fn
const numsArr = [1, 2, 3, 4, 5, 6];

const updatedNums = numsArr.map(numsArr => numsArr + 10);

// console.log('updated nums array ', updatedNums);


// ------sum of array using map (increase by 10) declar fn
const digits = [2, 3];
const increaseDigits = (num, index) => {
if (num < 0) {
    return 10;
}
return num + 10;
}

const updatedDigits = digits.map(increaseDigits);

// console.log(updatedDigits);


// -----filter an array with numbers
const sortNum = [1, 2, 3, 4, 3, 6];

 const updatefSortNum = sortNum.filter(function(num){
    return num !== 5;
    
})
// console.log(updatefSortNum);

// -----filter an array with numbers arrow fn

const numbers = [1, 2, 3, 4, 3, 6, 3, 8, 9];

// const filteredNumbers = numbers.filter((num) => num % 2 === 0);
const filteredNumbers = numbers.filter((num) => num % 2 !== 0);

// console.log('filtered nums array ', filteredNumbers);

// ------filter array with objects
const items = [
    { a: 1, b: 3 },
    { a: 3, b: 3 },
    { a: 6, b: 3 },
    { a: 10, b: 10 },
    { a: 41, b: 1 },
    { a: 0, b: 4 }
  ];
  
  // filter objects and keep only, if a is >= 3
  const filtered = items.filter((item) => item.a >= 3);
  
//   console.log('filtered array ', filtered);

// ------filter array with objects
  const cities = [
      {city: 'Lviv', population: 720000},
      {city: 'Kyiv', population: 2884000},
      {city: 'Kharkiv', population: 1419000},
      {city: 'Pekin', population: 21540000},
      {city: 'New York', population: 8419000},
  ]

const filteredCity = cities.filter((item) => item.population > 1000000);
// console.log('Population more than 1M ', filteredCity);

// ----- sum of arrays using reduce

const nummber = [1, 2, 3, 4, 3, 6];

const sumNum = nummber.reduce(
  (acc, current) => acc += current,
  0
);

// console.log('sum nums in array ', sumNum);

 // -------filter an array with objects usind reduce
const matrix = [
    { a: 1, b: 3 },
    { a: 3, b: 3 },
    { a: 6, b: 3 },
    { a: 10, b: 10 },
  ];
  
 const filterdMatrix = matrix.reduce((acc, item) => {
      if (item.a >= 3){
          acc.push({
              a: item.a,
              b: item.b,
              sum: item.a + item.b,
          })
      }
      return acc;
  }, []); 

//   console.log(filterdMatrix);
  

// -------filter an array with objects usind reduce + spread operator
const city = [
    {city: 'Lviv', population: 720000},
    {city: 'Kyiv', population: 2884000},
    {city: 'Kharkiv', population: 1419000},
    {city: 'Pekin', population: 21540000},
    {city: 'New York', population: 8419000},
]

const filteredCities = city.reduce((acc, item) => {
    if(item.population > 1000000){
        acc.push({
           ...item,
            str: 'This city population more than 1M',
        })
   }
    return acc;
}, []);

// console.log(filteredCities);

// ----------array sorting 
const sortNums = [6, 10, 11, 1, 2, 3, 4];
const sorted= sortNums.sort(
  (a, b) => a - b
);

// console.log('sum nums in array ', sorted);

// ----------array sorting 
const toBeSorted = [8, 7, 2, 5, 101, 458];

const sortedNums = toBeSorted.sort(
    (a, b) => a - b
);
// console.log(sortedNums);

// --------- array to string usung join

const words = ['May', 'the', 'Force', 'be', 'with', 'you'];

const sentence = words.join(' ');

// console.log('Joined words - ', sentence);


// --------- array to string usung join
const str = ['Easier', 'said', 'than', 'done'];

const phrase = str.join(' ');

// console.log(phrase);

//------filter array using includes

const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// output: true

const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('fish'));
// output: true


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// output: 1

// console.log(beasts.indexOf('tiger'));
// output: -1

const a = [6, 10, 11, 1, 2, 3, 4];

// slice nums from index 0 to index 3 (3 is not included)
const slicedNums = a.slice(0, 3);
// Output:  [6, 10, 11 ]

// console.log('Part of array ', slicedNums);

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');

// inserts at index 1
// console.log(months);
// output: Array ["Jan", "Feb", "March", "April", "June"]


const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];
let mergedNum = arNum.concat(arNum2);
  let result = mergedNum.filter(
    (item, index) => mergedNum.indexOf(item) === index
  );
// console.log(result);

const stringsArray = [
      'one-test', 'cat', 'parrot',
      'banana', 'test-dog', 'dog'
    ]

let newString = stringsArray.filter(function(str){
    return !str.includes('test');
});
// console.log(newString);

















  
  







