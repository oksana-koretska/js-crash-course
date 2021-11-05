const dog = {
    dogName: 'Teddy',
    age: 1,
    hasHotDog: false,
    speak: () => console.log('Woof!'),
    dogCharacter: 'lovely',
}

console.log('The dog name is', dog.dogName);
console.log('The dog age is', dog.age);


if(dog.hasHotDog){
    console.log('The dog has hot dog')
}else {
    console.log('The dog doesnt has hot dog');
};

dog.speak();

if(dog.dogCharacter === 'angry'){
    dog.speak();
}else{
    console.log('It is very lovely dog!');
}

const objWithSum = {
    a: 20,
    b: 105,
  };
  
objWithSum.sum = objWithSum.a + objWithSum.b;

console.log(objWithSum);


const objWithNums = {
    nums: [1],
  };
  
  objWithNums.nums = [2, 3];
  console.log(objWithNums);

const dog = { 
    name: 'Teddy',
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
    likeCats: false
 };
 
 dog.name = "Rex";
 dog.speak();
 delete dog.likeCats;
 console.log(dog);

console.log(dog.valueOf());

console.log(dog.hasOwnProperty('friendly'));

console.log(dog.hasOwnProperty('likeIceCream'));

console.log(dog.toString());


	
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
 
const returnedTarget = Object.assign(target, source);
 
console.log(target);
console.log(returnedTarget);


const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
const Mat = Object.create(person);
  
Mat.name = 'Matthew'; 
Mat.isHuman = true; 
  
Mat.printIntroduction();


const obj = {
    prop: 42,
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
 
  console.log(obj.prop);

const family = {
    father: 'Oleh',
    mother: 'Anna',
    son: 'Tom'
  };
  
  console.log(Object.keys(family));

const dog = { 
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
 };
 
 
 const Teddy = Object.assign({}, dog);
 Teddy.dogName = 'Teddy';
 
 const Rex = Object.assign({}, dog);
 Rex.dogName = 'Rex';

 const Luna = Object.assign({}, dog);
 Luna.dogName = 'Luna';
 
 console.log(Teddy);
  

const Marvel = {
    yearCreation: 1939,
    mainCharacter: 'Spider Man',
    mainTeam: 'Avengers',
};

const DC = {
    yearCreation: 2013,
    mainCharacter: 'Batman',
    mainTeam: 'Justice League',
};

if(DC.yearCreation !== 1934){
    DC.yearCreation = 1934;
    DC['yearCreation'] = 1934;
}

console.log(DC);

const ownerField = 'owner';
Marvel[ownerField] = 'Disney';



if (!DC.hasOwnProperty('owner')) {
    DC[ownerField] = 'Warner Brothers';
    DC.ownerField = 'Warner Brothers'
}
  
console.log(Marvel);

Object.freeze(DC);

DC.yearCreation = 2021;
console.log(DC);

console.log(Object.isExtensible(DC));

const MarvelKiller = Object.assign({}, Marvel);
MarvelKiller.better = true;


const likeDC = Object.assign({}, DC);
likeDC.likeDC = true;
console.log(likeDC);

