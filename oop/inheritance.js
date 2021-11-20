function Car (model) {
    this.model = model;
    this.getModel = () => this.model;
    this.drive = () => console.log('Driving....');
}
const BMW = new Car('BMW');
const Volvo = new Car('Volvo');
  
// BMW.drive();
// Volvo.drive(); 

class Animal {
    constructor(name) {
      this.speed = 15;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log((`${this.name} runs with speed ${this.speed}.`));
    }
    stop() {
      this.speed = 0;
      console.log((`${this.name} stands still.`));
    }
  }
  
  let animal = new Animal("My Animal");
  
  animal.run();

  class Rabbit extends Animal {
    hide() {
      console.log((`${this.name} hides!`));
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5);
  rabbit.hide();
  


  