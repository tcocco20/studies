export const singleton = () => {
  class Singleton {
    static #instance;

    constructor() {
      if (!Singleton.#instance) Singleton.#instance = this;
      return Singleton.#instance;
    }
  }

  class Restaurant extends Singleton {
    timeslots = ["5", "5:30", "6", "6:30", "7", "7:30"];

    makeReservation = (quantity, time) => {
      if (this.timeslots.includes(time)) {
        console.log(`Reservation made for ${quantity} people at ${time}pm`);
        this.timeslots = this.timeslots.filter((t) => t != time);
      } else console.log("Cannot make reservation at selected time");
    };
  }

  const pastinis = new Restaurant();

  const r2 = new Restaurant();

  pastinis.makeReservation(4, "3:30");
  pastinis.makeReservation(4, "6");
  r2.makeReservation(4, "6");
};
