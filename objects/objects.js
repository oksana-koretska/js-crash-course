// const human = {
//     uName: 'Bobby',
//     age: 16,
// }; 
// human.city = 'Lviv'; 
// console.log(human);
// const human2 = human;

// human2.age = 20;

// console.log(human2);
// console.log(human);
// console.log(human.uName); 
// console.log(human.age); 
// console.log(human['age']); 
//  console.log(human['uName']); 

// const obj = {a: 1};
// human[obj] = 5;
// console.log(human);

// const obj2 = {a: 3};
// human[obj] = 55;
// console.log(human);

// const human = {
//     uName: 'Bobby',
//     age: 16,
// };

// console.log(human);
// delete human.age;
// console.log(human);

// console.log(human.city);


// const getHuman = (uName, age) => {
//     return{
//         uName: uName,
//         age: age
//     };
// };
// console.log(getHuman('Bobby', 15));

// const getHuman = (uName, age) => {
//     return{
//         uName,
//         age
//     };
// };
// console.log(getHuman('Bobby', 15));

// const human = {
//     uName : 'Oksana',
// };

// const key = 'moon';
// human[key] = 123;
// console.log(human);


// const human = {
//   uName : 'Oksana',
//   sayHello: function(){
//     //   console.log(this);
//     console.log(`Hello, my name is ${this.uName}`);
//     //   console.log(this.uName);
//     //   console.log('Hello!');
//   },
//   sayBye(){
//     // console.log('Goodbye!');  
//   },
//   inner: {
//       someKey: 'Sun',
//       someText: "text",
//       innerHello(){
//           console.log(this);
//           console.log(this.someText);
//       }

//   },
//  };
//  human.sayHello();
//  human.sayBye();
//  console.log(human.inner.innerHello());


//  const human = {
//         uName : 'Oksana',
//         age: 25,
//     };
// console.log(human);

// for(const key in human){
//     console.log(key);
// }

// const human = {
//     uName : 'Oksana',
//     age: 25,
//  };
// // console.log(Object.keys(human));


// const getAge = ( obj, key) => {
//     let result;
//     Object.keys(obj).forEach(item => {
//         if ( item === key){
//             result = obj[key];
//         }
//     });
//     return result;
// };
// console.log(getAge(human, 'age'));


// const human = {
//     uName : 'Oksana',
//     age: 25,
//  };
// console.log(Object.values(human));


// const human = {
//     uName : 'Oksana',
//     age: 25,
//  };
// console.log(Object.entries(human));

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// console.log(...arr);

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // array3 = arr1.concat(arr2);
// const array3 = [...arr1, ...arr2];
// const array4 = [...arr1, ...arr2, ...[7, 8, 9]];
// // console.log(array3);
// console.log(array4);

// const obj1 = {
//     uName: "oksana",
//     age: 25,
// };

// const obj2 = {
//     city: "Lviv",
//     language: "Ukrainian",
// };

// // const obj3 = {...obj1, ...obj2};
// const obj3 = {...obj1, ...obj2, ...{cat: "Luna"}};
// console.log(obj3);

// const fn = (a, b, ...rest) => {
//     console.log(rest);
//     return a + b;

// };
// console.log(fn(1, 4, 6, 56, 89));

// const sayHello = ({uName, age}) => {
//     // const uName = obj.uName;
//     // const age = obj.age;

//     // const {uName, age} = obj;
//     console.log(`Hello, my name is ${uName}. I'm ${age} years old`);
// }

// const human = {
//     uName: "Oksana/Oleh",
//     age: 25,
// };

// sayHello(human);


// const arr = ['Oksana', 'Roman'];
// console.log(arr);

// const [a, b] = arr;
// console.log(a, b);

// const human = {
//     uName: "Oksana",
//     age: 25,
// };

// Object.entries(human).forEach(([key, value]) => console.log(`Key: ${key}, value: ${value}`));

// let a =1;
// let b =2;
// const c = a;

// console.log(a, b);

// a = b;
// b = c;
// console.log(a, b);


let a =1;
let b =2;
const c = a;

console.log(a, b);

[b, a] = [a, b];
console.log(a, b);
