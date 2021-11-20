const age = 25;
const res = `My name is Oksana, I am ${age} years old`;
// console.log(res);

const years = 25;
const firstName = 'Oksana';
const output = `My name is ${firstName}, I am ${years} years old`;
// console.log(output);

const lines = 2000;
const language = 'JavaScript';
const result = `${lines > 0 ? lines: 'Zero'} lines of ${language} code`;
// console.log(result);

const myStr = 'Me awesome string';
// console.log(myStr.split(' '));

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;
const char = sentence.charAt(index);

// console.log('The character at index 4 is ', char);
// output: "The character at index 4 is q"

const phrase = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
const hasWord = phrase.includes(word); // true

// console.log(`The word "${word}" ${hasWord ? 'is' : 'is not'} in the sentence`);
// output: "The word "fox" is in the sentence"

const hasCatWord = sentence.includes('cat'); // false

const animals = 'duck, chiken, rabbit, dog';
// console.log(animals.indexOf('chiken'));
// console.log(animals.indexOf('dog'));

const fruits = 'apple, lime, lemon';
// console.log(fruits.toUpperCase());


const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// output: "the lazy dog."
// console.log(str.slice(4, 19));
// // output: "quick brown fox"
// console.log(str.slice(-4));
// // output: "dog."
// console.log(str.slice(-9, -5));
// // output: "lazy"

const greeting = '   Hello world!   ';

// console.log(greeting);
// // output: "   Hello world!   ";
// console.log(greeting.trim());
// output: "Hello world!";

const p = 'I like you to the moon amd back!';
 
// console.log(p.replace('like', 'love'));


const paragraph = 'The quick brown fox jumps over the lazy dog. To barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

// console.log(found);
// output: Array ["T", "I"]

const par = 'The quick brown fox jumps over the lazy dog.';

const words = par.split(' ');
// console.log(words);
// output:
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

function convertToUppercase(array) {
    array = array.map(function (e) {
      return e.toUpperCase();
    });
    return array;
}

// console.log(convertToUppercase([
//     'Some string', 'Apple', 'duck'
// ]))

function sortArray(array) {
    array.sort(function (a, b) {
      return a - b;
    });
    return array;
  }
// console.log(sortArray([
//     5, 8, 6, 7
// ]));

function palindromeValidator(str) {
    let reverseStr = str.split("").reverse().join("");
    if (reverseStr === str) {
        return "The string is palindrome";
    } else {
        "The string is not palindrome"
    };
}
// console.log(palindromeValidator('anna'));


function replaceNumbers(string) {
    let withoutNumbers = string.replace(/\d+/g, ' ');
    return withoutNumbers;
  }

// console.log(replaceNumbers('I9like5JS'));


const test= 'Hello Marcus, welcome in 2020';

const withoutNumbers = test.replace(/\d+/g, '')

// console.log(withoutNumbers);

function calculateLetters(string, letter) {
    let character = letter;
    let count = string.split(character).length - 1;
    // let count = string.split(character);
    // let count = string.split(character).length;
    return count;
  }

//   console.log(calculateLetters('Backeanfjhduianfhy', 'a'));

let array = ["osmos", "uterque", "water", "crop", "&", "swap", "cat", "brew", "Esmeralda"];

let idx = array.map(function(index){
    return array.indexOf(array[1]);
})

// console.log(idx);

// console.log(array[1]);


function buildStringUsingIndex(array, index) {
        let character = array.map(function (str) {
        if(index > str.length){
           return '';
        }
         return str.charAt(index);
    });
    let result = character.join("");
    return result;
  }
console.log(buildStringUsingIndex(["osmos", "uterque", "water", "crop", "&", "swap", "cat", "brew", "Esmeralda"], 1))








