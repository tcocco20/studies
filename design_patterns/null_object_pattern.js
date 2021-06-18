export const nullObject = () => {
  class User {
    constructor(name, id, security) {
      this.name = name;
      this.id = id;
      this.security = security;
    }

    hasAccess = () => this.security.verifyAccess(this);
  }

  class NullUser extends User {
    constructor() {
      super("Guest", -1, null);
    }

    hasAccess = () => false;
  }

  class User2 {
    constructor(name, id, security) {
      this.name = name ?? "Guest";
      this.id = id ?? -1;
      this.security = security ?? new Security();
    }

    hasAccess = () => this.security.verifyAccess(this);
  }

  class Security {
    authorizedUsers = [];

    verifyAccess = (user) => this.authorizedUsers.includes(user);
    addAccess = (user) => this.authorizedUsers.push(user);
  }

  const sec = new Security();
  const kevin = new User2("Kevin", 1, sec);
  const jeff = new User2("Jeff", 2, sec);
  const scott = new User2("Scott", 3, sec);
  const users = [kevin, jeff, scott];
  sec.addAccess(kevin);
  sec.addAccess(jeff);
  sec.addAccess(scott);

  const getUser = (id) => {
    const user = users.find((user) => user.id === id);
    return user ? user : new NullUser();
  };

  const getUser2 = (id) => users.find((user) => user.id === id) || new User2();

  const user1 = getUser2(1);
  const user2 = getUser2(2);
  const user3 = getUser2(3);
  const user4 = getUser2(4);

  console.log(user1.hasAccess());
  console.log(user2.hasAccess());
  console.log(user3.hasAccess());
  console.log(user4.hasAccess());
};
