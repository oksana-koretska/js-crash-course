class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() { return ''; }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        return 'Meow!';
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    sound() {
        return 'Woof!';
    }
}
const Tom = new Cat('Tom');
// console.log(Tom.sound()); 
const Rex = new Dog('Rex');
// console.log(Rex.sound()); 

class Cakes {
    constructor(name) {
        this.name = name;
    }
    cream() { return ''; }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Cake extends Cakes {
    constructor(name) {
        super(name);
    }

    cream() {
        return 'Chocolate';
    }
}

class Deserts extends Cakes {
    constructor(name) {
        super(name);
    }

    cream() {
        return 'Almond';
    }
}

let Сroissant = new Deserts('Сroissant');
console.log(Сroissant.cream());

