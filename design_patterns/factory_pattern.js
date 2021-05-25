export const factory = () => {
  class Car {
    constructor(make) {
      this.make = make;
      this.wheels = 4;
      this.axle = 2;
      this.chassis = "metal";
    }
  }

  class Chevy extends Car {
    constructor() {
      super("Chevy");
    }
  }

  class Jaguar extends Car {
    constructor() {
      super("Jaguar");
    }
  }

  class Mercedes extends Car {
    constructor() {
      super("Mercedes");
    }
  }

  class Tesla extends Car {
    constructor() {
      super("Tesla");
    }
  }

  class CarFactory {
    createCar(make) {
      switch (make) {
        case "Chevy":
          return new Chevy();

        case "Jaguar":
          return new Jaguar();

        case "Mercedes":
          return new Mercedes();

        case "Tesla":
          return new Tesla();
      }
    }
  }

  const factory = new CarFactory();

  const car1 = factory.createCar("Tesla");

  const car2 = factory.createCar("Chevy");

  const car3 = factory.createCar("Mercedes");

  const car4 = factory.createCar("Jaguar");

  const car5 = factory.createCar("Jaguar");

  // console.log(car1);

  // console.log(car2);

  // console.log(car3);

  car4.model = "F-Type";

  car5.model = "E-Type";

  console.log(car4);

  console.log(car5);
};
