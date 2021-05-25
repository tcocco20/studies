export const proxy = () => {
  class DatabaseConnector {
    constructor(database) {
      this.database = database;
    }

    getData(animal, name) {
      console.log("Db api call");
      return this.database[animal][name.toLowerCase()];
    }

    addData(animal) {
      console.log("adding to db");
      this.database[animal.species][animal.name.toLowerCase()] = animal;
    }

    removeData(animal, name) {
      console.log("removing from db");
      delete this.database[animal][name.toLowerCase()];
      console.log(`${name} was adopted`);
    }
  }

  class StorageConnector {
    getData(animal, name) {
      console.log("Ls get call");
      return JSON.parse(
        localStorage.getItem(animal + "-" + name.toLowerCase())
      );
    }

    addData(animal) {
      console.log("adding to ls");
      localStorage.setItem(
        animal.species + "-" + animal.name.toLowerCase(),
        JSON.stringify(animal)
      );
    }

    removeData(animal, name) {
      console.log("removing from ls");
      localStorage.removeItem(animal + "-" + name.toLowerCase());
    }
  }

  class DatabaseProxy {
    constructor(db, ls) {
      this.db = db;
      this.ls = ls;
    }

    getData(animal, name) {
      const lsCall = this.ls.getData(animal, name);
      if (lsCall) return lsCall;
      else {
        const dbCall = this.db.getData(animal, name);
        this.ls.addData(dbCall);
        return dbCall;
      }
    }

    addData(animal) {
      this.db.addData(animal);
      this.ls.addData(animal);
    }

    removeData(animal, name) {
      this.db.removeData(animal, name);
      this.ls.removeData(animal, name);
    }
  }

  // class DatabaseProxy {
  //   constructor(db) {
  //     this.db = db;
  //     this.cache = {};
  //   }

  //   getData(animal, name) {
  //     const cacheCall = this.cache[animal]?.[name.toLowerCase()];
  //     if (cacheCall) return cacheCall;
  //     else {
  //       const dbCall = this.db.getData(animal, name);

  //       if (!this.cache[dbCall.species]) this.cache[dbCall.species] = {};
  //       this.cache[dbCall.species][dbCall.name.toLowerCase()] = dbCall;
  //       return dbCall;
  //     }
  //   }

  //   addData(animal) {
  //     this.db.addData(animal);
  //     if (!this.cache[animal.species]) this.cache[animal.species] = {};
  //     this.cache[animal.species][animal.name.toLowerCase()] = animal;
  //   }

  //   removeData(animal, name) {
  //     this.db.removeData(animal, name);
  //     delete this.cache[animal][name.toLowerCase()];
  //   }
  // }

  class Animal {
    constructor(age, name, breed, species) {
      this.age = age;
      this.name = name;
      this.breed = breed;
      this.species = species;
    }
  }

  class Dog extends Animal {
    constructor(age, name, breed) {
      super(age, name, breed, "dog");
    }
  }

  class Cat extends Animal {
    constructor(age, name, breed) {
      super(age, name, breed, "cat");
    }
  }

  const spike = new Dog(3, "Spike", "Yorkie"),
    spot = new Dog(2, "Spot", "Dalmatian"),
    skip = new Dog(6, "Skip", "Beagle"),
    gracie = new Cat(4, "Gracie", "American Shorthair"),
    leo = new Cat(2, "Leo", "Bengal"),
    ares = new Cat(1, "Ares", "Maine Coon"),
    spark = new Dog(1, "Spark", "Border Collie"),
    mittens = new Cat(5, "Mittens", "Orange Tabby");

  const animalShelter = {
    dog: {
      spot,
      spike,
      skip,
    },
    cat: {
      gracie,
      leo,
      ares,
    },
  };

  const database = new DatabaseConnector(animalShelter);
  const storage = new StorageConnector();

  const proxy = new DatabaseProxy(database, storage);
  // const proxy = new DatabaseProxy(database);

  console.log(proxy.getData("dog", "spot"));
  console.log(proxy.getData("dog", "spike"));

  proxy.addData(mittens);

  console.log(proxy.getData("cat", "mittens"));

  proxy.removeData("cat", "leo");

  // storage.addData(spark);
  // storage.addData(spot);
  // storage.addData(ares);
  // storage.addData(gracie);

  // console.log(storage.getData("dog", "Spark"));
  // console.log(storage.getData("dog", "Spot"));
  // console.log(storage.getData("cat", "Ares"));
  // console.log(storage.getData("cat", "Gracie"));

  // console.log(database.getData("cat", "Leo"));

  // database.addData(spark);

  // database.removeData("dog", "spike");

  // console.log(animalShelter);

  // console.log(database.getData("dog", "Spark"));
};
