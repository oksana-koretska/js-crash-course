const human = {
    uName: 'Bobby',
    age: 16,
}; // створення обєкта

human.city = 'Lviv'; //додавання ключа
console.log(human);
const human2 = human;

human2.age = 20;

console.log(human2);
console.log(human);
console.log(human.uName); // доступ до властивостей
console.log(human.age); // доступ до властивостей
console.log(human['age']); // доступ до властивостей
 console.log(human['uName']); // доступ до властивостей

const obj = {a: 1};
human[obj] = 5;
console.log(human);

const obj2 = {a: 3};
human[obj] = 55;
console.log(human);




