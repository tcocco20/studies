export const builder1 = () => {
  class Samurai {
    constructor(name, clan, age, weapon) {
      this.name = name;
      this.clan = clan;
      this.age = age;
      this.weapon = weapon;
    }
  }

  class Clan {
    constructor(name, location, leader, memberCount) {
      this.name = name;
      this.location = location;
      this.leader = leader;
      this.memberCount = memberCount;
    }
  }

  class SamuraiBuilder {
    constructor(name) {
      this.samurai = new Samurai(name);
    }

    setClan(clan) {
      this.samurai.clan = clan;
      return this;
    }

    setAge(age) {
      this.samurai.age = age;
      return this;
    }

    setWeapon(weapon) {
      this.samurai.weapon = weapon;
      return this;
    }

    build() {
      return this.samurai;
    }
  }

  class ClanBuilder {
    constructor(name) {
      this.clan = new Clan(name);
    }

    setLocation(location) {
      this.clan.location = location;
      return this;
    }

    setLeader(leader) {
      this.clan.leader = leader;
      return this;
    }

    setMemberCount(memberCount) {
      this.clan.memberCount = memberCount;
      return this;
    }

    build() {
      return this.clan;
    }
  }

  // const samurai = new SamuraiBuilder("Nobunaga")
  //   .setClan("Oda")
  //   .setAge(32)
  //   .setWeapon("Katana")
  //   .build();

  const samuraiBuilder = new SamuraiBuilder("Nobunaga");

  const clanBuilder = new ClanBuilder("Oda");

  const katsunobu = new Samurai("Nobukatsu", null, 57, "Pike");

  const oda = clanBuilder
    .setLeader(katsunobu)
    .setLocation("Oda")
    .setMemberCount(20000)
    .build();

  katsunobu.clan = oda;

  const naganobu = samuraiBuilder
    .setClan(oda)
    .setAge(32)
    .setWeapon("Katana")
    .build();

  console.log(oda);

  console.log(katsunobu);

  console.log(naganobu);
};
