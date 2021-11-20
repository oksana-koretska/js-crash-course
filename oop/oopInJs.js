class Cars {
    constructor(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    speed() {
        console.log(this.name + " is so fast!");
    }

    looks() {
        console.log(this.name + ' is very cool in this ' + this.color + ' color!');
    }
}

const Mazda = new Cars("Mazda", "white");
const Jeep = new Cars("Jeep", "red");
// Mazda.speed();
// Jeep.looks();

function Person(name) {
    this.name = name;
    this.greeting = function () {
    //    console.log(('Hi! I\'m ' + this.name + '.'));
    };
}

const Salva = new Person('Salva');
// console.log(Salva.name);
// console.log(Salva.greeting());

class Book {
    constructor(name) {
       this.name = name
    }
 }
 class newBook extends Book { 
    constructor(name) {
       super(name);
    }
 }
 const book1 = new newBook("The Alchemist");
// console.log(book1.name);

function Cats(name, color) {
    this.name = name;
    this.color = color;

    this.run = function () {
        console.log("I’m so fast");
    };
    this.sound = function () {
        console.log("Meow! Meow!");
    };
}

const Tom = new Cats("Tom", "grey");
const Simon = new Cats("Simon", "red");

// Tom.run();
// Simon.sound();

class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name + " is running");
    }

    sound() {
        console.log("Meow! Meow!");
    }
}

const Felix = new Cat("Felix", "white");
// Felix.run();
// Felix.sound();

class Kittens {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name + " is running");
    }

    sound() {
        console.log("Meow! Meow!");
    }
}

class LazyCat extends Cat {
    constructor(name, color) {
        super(name, color)
    }

    run() {
        console.log(this.name + ' is too lazy to run');
    }
}

const Luna = new LazyCat("Luna", "grey");
const Smetana = new Cat("Smetana", "white");

// Luna.run();
// Smetana.run();

function Dogs(name, color) {
    this.name = name;
    this.color = color;
}

Dogs.prototype.run = function () {
    console.log("I’m running");
};
Dogs.prototype.sound = function () {
    console.log("Woof!!");
};

const Rex = new Dogs("Rex", "grey");
const Bim = new Dogs("Bim", "white");

// Rex.run();
// Bim.sound();


const user = {
    name: "Michael",
    age: 30,

    sayHi() {
        console.log(this.name);
    }

};

// user.sayHi();


const arrowFn1 = () => {
    console.log(this);
}

function Circle() {
    this.PI = 3.14;
    this.r = 20;


    this.getArea = () => {
        console.log(this);

        return this.PI * Math.pow(this.r, 2);
    }
}

const cr = new Circle();
// cr.getArea();

const mod = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

const unboundGetX = mod.getX;
// console.log(unboundGetX());

const boundGetX = unboundGetX.bind(mod);
// console.log(boundGetX());

const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
// console.log(max);
const min = Math.min.apply(null, numbers);
// console.log(min);

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

// console.log(new Food('cheese', 5).name);
// console.log(new Food('cheese', 5).price);

