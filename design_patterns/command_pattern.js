export const command = () => {
  class Calculator {
    value = 0;
    undoHistory = [];
    redoHistory = [];

    execute = (command) => {
      this.value = command.execute(this.value);
      this.undoHistory.push(command);
      return this.value;
    };

    undo = () => {
      const command = this.undoHistory.pop();
      if (command) {
        this.redoHistory.push(command);
        this.value = command.undo(this.value);
      }
      return this.value;
    };

    redo = () => {
      const command = this.redoHistory.pop();
      if (command) {
        this.undoHistory.push(command);
        this.value = command.execute(this.value);
      }
      return this.value;
    };
  }

  class Command {
    constructor(value) {
      this.value = value;
    }
  }

  class Add extends Command {
    constructor(value) {
      super(value);
    }

    execute = (value) => value + this.value;
    undo = (value) => value - this.value;
  }

  class Subtract extends Command {
    constructor(value) {
      super(value);
    }

    execute = (value) => value - this.value;
    undo = (value) => value + this.value;
  }

  class Multiply extends Command {
    constructor(value) {
      super(value);
    }

    execute = (value) => value * this.value;
    undo = (value) => value / this.value;
  }

  class Divide extends Command {
    constructor(value) {
      super(value);
    }

    execute = (value) => value / this.value;
    undo = (value) => value * this.value;
  }

  class Power extends Command {
    constructor(value) {
      super(value);
    }

    execute = (value) => value ** this.value;
    undo = (value) => Math.round(value ** (1 / this.value));
  }

  const calculator = new Calculator();

  const add = (value) => calculator.execute(new Add(value));
  const subtract = (value) => calculator.execute(new Subtract(value));
  const multiply = (value) => calculator.execute(new Multiply(value));
  const divide = (value) => calculator.execute(new Divide(value));
  const power = (value) => calculator.execute(new Power(value));
  const undo = () => calculator.undo();
  const redo = () => calculator.redo();

  console.log(add(2));
  console.log(subtract(2));
  console.log(add(2));
  console.log(multiply(2));
  console.log(divide(2));
  console.log(undo());
  console.log(undo());
  console.log(redo());
  console.log(power(3));
  console.log(undo());
  console.log(calculator.undoHistory);
  console.log(calculator.redoHistory);
};
