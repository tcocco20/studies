class Course {
  #price;

  set price(price) {
    if (price < 0) {
      throw "Invalid value";
    }

    this.#price = price;
  }

  get price() {
    return `\$${this.#price}`;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  calculateValue() {
    return this.length / this.#price;
  }

  displayPrice() {
    return `${this.title} costs ${this.calculateValue()} per minute`;
  }

  getSummary() {
    return `${this.title} is ${this.length} minutes long and costs ${this.price}`;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, num) {
    super(title, length, price);
    this.numOfExercises = num;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    return "You published something";
  }
}

course1 = new Course("test1", 60, 20);
course2 = new Course("test2", 120, 30);

console.log(course1.displayPrice());
console.log(course1.getSummary());
