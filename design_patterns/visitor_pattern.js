export const visitor = () => {
  class Employee {
    #name;
    #salary;
    #position;
    #multiplier;

    constructor(name, salary, position, multiplier) {
      this.#name = name;
      this.#salary = salary;
      this.#position = position;
      this.#multiplier = multiplier;
    }

    getInfo = () =>
      `name: ${this.#name}, salary: ${this.#salary}, position: ${
        this.#position
      }`;

    getSalary = () => this.#salary;
    setSalary = (value) => (this.#salary = value);
    getMultiplier = () => this.#multiplier;
    accept = (visitor) => visitor.visit(this);
  }

  class Developer extends Employee {
    constructor(name) {
      super(name, 80000, "Developer", 1);
    }
  }

  class TechLead extends Employee {
    constructor(name) {
      super(name, 100000, "TechLead", 3);
    }
  }

  class Manager extends Employee {
    constructor(name) {
      super(name, 120000, "Manager", 5);
    }
  }

  class Visitor {
    visit = (host) => this.execute(host);
  }

  class Bonus extends Visitor {
    constructor(amount) {
      super();
      this.amount = amount;
    }

    execute = (host) => this.addBonus(host);

    addBonus = (host) =>
      host.setSalary(this.amount * host.getMultiplier() + host.getSalary());
  }

  class HolidayPay extends Bonus {
    constructor(amount) {
      super(amount);
    }
  }

  class AnnualBonus extends Bonus {
    constructor(amount) {
      super(amount);
    }
  }

  const john = new Developer("John");
  const raj = new TechLead("Raj");
  const candy = new Manager("Candy");

  console.log(john.getInfo());
  console.log(raj.getInfo());
  console.log(candy.getInfo());

  const holidayBonus = new HolidayPay(1000);

  john.accept(holidayBonus);
  raj.accept(holidayBonus);
  candy.accept(holidayBonus);

  console.log(john.getInfo());
  console.log(raj.getInfo());
  console.log(candy.getInfo());

  const annualBonus = new AnnualBonus(5000);

  john.accept(annualBonus);
  raj.accept(annualBonus);
  candy.accept(annualBonus);

  console.log(john.getInfo());
  console.log(raj.getInfo());
  console.log(candy.getInfo());
};
