export const mediator = () => {
  class Zoom {
    static #active = [];
    users = [];

    constructor(id) {
      if (!this.#isActive(id)) {
        this.id = id;
        Zoom.#active.push({ id, instance: this });
        console.log(`room #${this.id} is now active`);
      } else {
        const room = Zoom.#active.find((r) => r.id === id);
        console.log(`meeting room ${room.id} is already active`);
        return room.instance;
      }
    }

    #isActive = (id) => Zoom.#active.some((r) => r.id === id);
    #isPresent = (id) => this.users.some((u) => u.id === id);

    join = (user) => {
      if (!this.#isPresent(user.id)) {
        this.users.push(user);
        user.meeting = this;
        console.log(`${user.name} has joined room ${this.id}`);
      } else console.log(`${user.name} is already in room ${this.id}`);

      return this;
    };

    leave = (user) => {
      this.users = this.users.filter((u) => user.id !== u.id);
      user.meeting = null;
      console.log(`${user.name} has left meeting ${this.id}`);

      if (!this.users.length) this.close();
    };

    close = (host) => {
      Zoom.#active = Zoom.#active.filter((n) => n.instance !== this);
      if (this.users.length) {
        this.users = [];
        console.log(
          `Meeting ${this.id} has been closed by ${host.name} because he got tired of all your asses`
        );
      } else
        console.log(
          `Meeting ${this.id} has closed because the last user left.`
        );
    };

    isSpeaking = (user) => {
      this.users.forEach((u) => {
        if (user !== u) this.isListening(user.name, u.name);
      });
    };

    isListening = (speaker, listener) =>
      console.log(
        `${listener} is listening to ${speaker} the big mouth, in room ${this.id}`
      );

    isSharing = (user) => {
      this.users.forEach((u) => {
        if (user !== u) this.isWatching(user.name, u.name);
      });
    };

    isWatching = (presenter, viewer) =>
      console.log(
        `${viewer} is viewing ${presenter}'s stupid screen, in room ${this.id}`
      );

    isDisabled = (user) =>
      console.log(
        `${user.name} has the role of ${user.role} and cannot perform this action or spell shit`
      );
  }

  class Meeting extends Zoom {
    constructor(room) {
      if (room instanceof Zoom) room = room.id;
      super(+room);
    }
  }

  class User {
    meeting = null;

    constructor(name, role) {
      this.name = name;
      this.role = role;
      this.id = Math.floor(Math.random() * 10000);
    }

    join = (room) => new Meeting(room).join(this);

    leave = () => {
      if (this.meeting) this.meeting.leave(this);
    };

    speak = () => {
      if (this.meeting) this.meeting.isSpeaking(this);
    };

    shareScreen = () => {
      if (this.meeting) this.meeting.isSharing(this);
    };

    close = () => {
      if (this.meeting) this.meeting.close(this);
    };

    disabled = () => {
      if (this.meeting) this.meeting.isDisabled(this);
    };
  }

  class Attendee extends User {
    constructor(name) {
      super(name, "attendee");
      this.speak = this.disabled;
      this.shareScreen = this.disabled;
      this.close = this.disabled;
    }
  }

  class Participant extends User {
    constructor(name) {
      super(name, "participant");
      this.close = this.disabled;
    }
  }

  class Host extends User {
    constructor(name) {
      super(name, "host");
    }
  }

  const m1 = new Meeting(123),
    m2 = new Meeting(123),
    m3 = new Meeting(223);

  console.log(m1 === m2);
  console.log(m1 === m3);

  const john = new Host("John"),
    jen = new Attendee("Jen"),
    bill = new Participant("Bill"),
    mike = new Participant("Mike");

  console.log(john, jen, bill, mike);

  john.join(m1);
  jen.join(m1);
  bill.join(m1);
  mike.join(m1);

  john.shareScreen();
  jen.speak();
  bill.speak();
  bill.close();

  console.log(m1);

  //   john.close();

  console.log(m1);

  bill.leave();
  mike.leave();

  bill.join(m3);
  mike.join(m3);

  john.shareScreen();
  jen.speak();
  bill.speak();

  bill.leave();
  mike.leave();
};
