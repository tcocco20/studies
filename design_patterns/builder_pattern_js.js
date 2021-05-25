export const builder2 = () => {
  class Samurai {
    constructor(name, { clan, age, weapon }) {
      this.name = name;
      this.clan = clan;
      this.age = age;
      this.weapon = weapon;
    }
  }

  class Clan {
    constructor(name, { location, leader, memberCount }) {
      this.name = name;
      this.location = location;
      this.leader = leader;
      this.memberCount = memberCount;
    }
  }

  const samurai = new Samurai("Nobunaga", { age: 32 });

  const clan = new Clan("Oda", {});

  samurai.clan = clan;

  console.log(samurai);
};
