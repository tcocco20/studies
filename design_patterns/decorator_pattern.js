export const decorator = () => {
  class Character {
    getAttack = () => this.attack;
    getHP = () => this.hp;
    getDefense = () => this.defense;
    getStats = () => `Atk:${this.attack}, HP:${this.hp}, Def:${this.defense}`;
    getDescription = () => this.description;
  }

  class Warrior extends Character {
    attack = 65;
    hp = 50;
    defense = 65;
    type = "Warrior";

    constructor(name) {
      super();
      this.name = name;
      this.description = `${name} ${this.type}`;
    }
  }

  class Mage extends Character {
    attack = 85;
    hp = 50;
    defense = 45;
    type = "Mage";

    constructor(name) {
      super();
      this.name = name;
      this.description = `${name} ${this.type}`;
    }
  }

  class Rogue extends Character {
    attack = 80;
    hp = 50;
    defense = 50;
    type = "Rogue";

    constructor(name) {
      super();
      this.name = name;
      this.description = `${name} ${this.type}`;
    }
  }

  class Race {
    constructor(character) {
      this.character = character;
    }
  }

  class Human extends Race {
    constructor(character) {
      super(character);
      this.updateStats();
      return this.character;
    }

    updateStats = () => {
      this.character.attack += 10;
      this.character.hp -= 5;
      this.character.defense -= 5;
      this.character.description += " Human";
    };
  }

  class Elf extends Race {
    constructor(character) {
      super(character);
      this.updateStats();
      return this.character;
    }

    updateStats = () => {
      this.character.attack += 5;
      this.character.hp -= 10;
      this.character.defense += 5;
      this.character.description += " Elf";
    };
  }

  class Orc extends Race {
    constructor(character) {
      super(character);
      this.updateStats();
      return this.character;
    }

    updateStats = () => {
      this.character.attack -= 5;
      this.character.hp -= 5;
      this.character.defense += 10;
      this.character.description += " Orc";
    };
  }

  class Role {
    constructor(character) {
      this.character = character;
    }
  }

  class Tank extends Role {
    constructor(character) {
      super(character);
      this.updateStats();
      return this.character;
    }

    updateStats = () => {
      this.character.attack -= 5;
      this.character.hp -= 5;
      this.character.defense += 10;
      this.character.description += " Tank";
    };
  }

  class Healer extends Role {
    constructor(character) {
      super(character);
      this.updateStats();
      return this.character;
    }

    updateStats = () => {
      this.character.attack -= 10;
      this.character.hp += 5;
      this.character.defense += 5;
      this.character.description += " Healer";
    };
  }

  class DPS extends Role {
    constructor(character) {
      super(character);
      this.updateStats();
      return this.character;
    }

    updateStats = () => {
      this.character.attack += 10;
      this.character.hp -= 5;
      this.character.defense -= 5;
      this.character.description += " DPS";
    };
  }

  let candy = new Mage("Candy");
  console.log(candy.getDescription());
  console.log(candy.getStats());

  candy = new Elf(candy);
  console.log(candy.getDescription());
  console.log(candy.getStats());

  candy = new DPS(candy);
  console.log(candy.getDescription());
  console.log(candy.getStats());

  const healer = new Healer(new Orc(new Warrior("Glorb")));
  console.log(healer.getDescription());
  console.log(healer.getStats());
};
