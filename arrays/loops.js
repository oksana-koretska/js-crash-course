let sum = 0;
for(let i = 0; i <= 10; i++) {
    sum = sum + i;
}
// console.log('Sum 1 to 10:', sum);


let sumArr = 0;
let arr = [5, 8, 7, 9, 6, 6];
for(let i = 0; i <= arr.length; i++){
    sumArr = sumArr + arr[i];
}
// console.log(sumArr);

const words = ['back', 'and', 'moon', 'the', 'to', 'you', 'love', 'I'];
let res = '';
for (let i = 0; i < words.length; i++) {
    res += words[i] + ' ';
  }

// console.log(res);


// const words = ['May', 'the', 'Force', 'be', 'with', 'you'];
// let sentence = '';

// // in the loop we will find a sum of nums array items
// for (let i = 0; i < words.length; i++) {
//   sentence += words[i] + ' ';
// }

// console.log(sentence);

const tips = ['back', 'and', 'moon', 'the', 'to', 'you', 'love', 'I'];
let sentences = '';
for (let i = tips.length - 1; i >= 0; i--) {
    sentences += tips[i] + ' ';
  }

// console.log(sentences);

let obj = {
    name: 'Oksana',
    age: 25,
    birthYear: 1996,
}

let result = '';

for(let key in obj){
    result += key + '; ';
}
// console.log(result);


let n = 0;
let sumNums = 0;

while (n < 3) {
    n++;
    sumNums += n;
}

// console.log(sumNums);

const numsArr = [1, 2, 3, 4, 5, 6];
let k = 0;
let sumArray = 0;
while (k < numsArr.length) {
  sumArray = sumArray + numsArr[k];
  k++;
}

// console.log('sum of nums items is ', sumArray);

const even = [2, 4, 6, 8, 10];
let j = 0;
let evenSum = 0;

while(j < even.length){
    evenSum = evenSum + even[j];
    j++;
}

// console.log('sum of nums items is ', evenSum);


const phrase = ['you', 'love', 'I'];
let resPhase = '';
let h = 0;
while(h < phrase.length){
    resPhase += phrase[h] + ' ';
    h++;
}
// console.log(resPhase);


let g = 5;
let resultFactorial = 1;

// with the loop we will find n!
do {
  resultFactorial *= g;
  g--;
} while (g >= 1)
  
// console.log(resultFactorial);

// Factorial usinf do while looop
let u = 3;
let resFact = 1;
 do{
     resFact *= u;
     u--;
 } while (u >= 1)

//  console.log(resFact);

// Factorial usinf for looop
let l = 5;
for (let i = l - 1; i >= 1; i--) {
    l *= i;
}

// console.log(l);

const data = [
    { user: 'John' },
    { user: 'Tom' },
    { user: 'Petr' },
   ];
    
   function greeting(userName) {
     return "Hello, " + userName + "!";
   }
    
   for (let i = 0; i < data.length; i++) {
    //  console.log(greeting(data[i].user));
   }


   	
const song = {
    1: "Venom, (I got that) adrenaline momentum",
    2: "And I'm not knowin' when I'm",
    3: "Ever gonna slow up and I'm",
    4: "Ready to snap any moment I'm",
    5: "Thinkin' it's time to go get 'em",
    6: "They ain't gonna know what hit 'em",
    7: "(W-W-When they get bit with the—)",
    8: "Venom, (I got that) adrenaline momentum",
    9: "And I'm not knowin' when I'm",
    10: "Ever gonna slow up and I'm",
    11: "Ready to snap any moment I'm",
    12: "Thinkin' it's time to go get 'em",
    13: "They ain't gonna know what hit 'em",
   };
    
   let songText = '';
    
   for (let key in song) {
     songText += song[key];
     console.log(song[key]);
   }












