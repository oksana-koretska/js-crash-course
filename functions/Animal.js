class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    sayHello() {
      return "Hello! My name is " + this.name + " and I am a " + this.type;
    }
  }
  
  const Cat = new Animal("Felix", "cat");
  Cat.sayHello();
  
  console.log(Cat.sayHello());

  const Dog = new Animal("Beethoven", "dog");
  Dog.sayHello();

  console.log(Dog.sayHello());

  