export const strategy = () => {
  class Strategy {
    constructor(strategy) {
      this.strategy = strategy;
    }

    setStrategy = (strategy) => (this.strategy = strategy);

    execute = (callback, ...params) => {
      if (!this.strategy)
        console.log("No strategy found, please configure strategy.");
      else return callback(...params);
    };
  }

  class Amazon extends Strategy {
    constructor(vendor) {
      super(vendor);
    }

    setVendor = (vendor) => this.setStrategy(vendor);
    search = (item) => this.execute(this.strategy.search, item);
  }

  class Vendor {
    search = (item) => this.inventory[item];
  }

  class Vendor1 extends Vendor {
    inventory = {
      shirts: ["black shirt", "blue shirt", "green shirt"],
      pants: ["blue jeans", "slacks", "leggings"],
      shoes: ["dress shoes", "tennis shoes", "sandals"],
    };
  }

  class Vendor2 extends Vendor {
    inventory = {
      shirts: ["yellow shirt", "red shirt", "pink shirt"],
      pants: ["black jeans", "khakis", "sweats"],
      shoes: ["nike", "adidas", "reebok"],
    };
  }

  class Vendor3 extends Vendor {
    inventory = {
      candy: ["chocolate", "gummy", "sour"],
      chips: ["potato", "corn", "kettle"],
      drinks: ["coke", "pepsi", "dr. pepper"],
    };
  }

  const amazon = new Amazon(new Vendor1());

  let results = amazon.search("shirts");

  console.log(results);

  amazon.setVendor(new Vendor2());

  results = amazon.search("shirts");

  console.log(results);

  amazon.setVendor(new Vendor3());

  results = amazon.search("candy");

  console.log(results);

  amazon.setVendor(new Vendor2());

  results = amazon.search("shirts");

  console.log(results);
};
