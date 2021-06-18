export const bridge = () => {
  class Gestures {
    constructor(screen) {
      this.screen = screen;
    }

    tap = () => this.screen.click();
    swipe = () => this.screen.move();
    pan = () => this.screen.drag();
    pinch = () => this.screen.zoom();
  }

  class Mouse {
    constructor(screen) {
      this.screen = screen;
    }

    click = () => this.screen.click();
    move = () => this.screen.move();
    down = () => this.screen.drag();
    wheel = () => this.screen.zoom();
  }

  class Screen {
    constructor(log) {
      this.log = log;
    }

    click = () => this.log.add("Clicked on Screen");
    move = () => this.log.add("Cursor moved on screen");
    drag = () => this.log.add("User clicked and dragged");
    zoom = () => this.log.add("Screen zoomed in");
  }

  class Log {
    log = [];

    add = (message) => this.log.push(message);
    show = () => this.log.forEach((m) => console.log(m));
    clear = () => (this.log = []);
  }

  const log = new Log();
  const screen = new Screen(log);
  const hand = new Gestures(screen);
  const mouse = new Mouse(screen);

  hand.pan();
  hand.pinch();
  hand.swipe();
  hand.tap();

  
  mouse.click();
  mouse.down();
  mouse.move();
  mouse.wheel();
  
  log.show();
};
