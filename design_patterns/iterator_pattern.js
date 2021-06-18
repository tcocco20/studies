export const iterator = () => {
  class Iterator {
    repeat = false;
    index = 0;

    hasNext = () => this.index < this.array.length - 1;
    hasPrevious = () => this.index > 0;

    next = () => {
      if (this.hasNext()) this.index++;
      else if (this.repeat) this.index = 0;
      else console.log("End of the line pal");
      return this.index;
    };

    previous = () => {
      if (this.hasPrevious()) this.index--;
      else if (this.repeat) this.index = this.array.length - 1;
      else console.log("You are at the beginning");
      return this.index;
    };
  }

  class Collection extends Iterator {
    constructor(array) {
      super();
      this.array = array;
    }

    setRepeat = (bool) => (this.repeat = !!bool);
    add = (...items) => items.forEach((i) => this.array.push(i));
    remove = (item) => (this.array = this.array.filter((i) => i !== item));
    getCurrent = () => this.array[this.index];
    getNext = () => this.array[this.next()];
    getPrev = () => this.array[this.previous()];

    getAll = (callback) => {
      this.index = -1;
      while (this.hasNext()) callback(this.array[++this.index]);
    };
  }

  class Products extends Collection {
    constructor(...items) {
      super(items);
    }

    addProducts = this.add;
    removeProduct = this.remove;
    displayProduct = this.getCurrent;
    nextProduct = this.getNext;
    previousProduct = this.getPrev;
    showAllProducts = this.getAll;
  }

  const myProducts = new Products("product1", "product2", "product3");
  console.log(myProducts.displayProduct());

  myProducts.setRepeat(false);

  //   console.log(myProducts.nextProduct());
  //   console.log(myProducts.nextProduct());
  //   console.log(myProducts.nextProduct());
  //   console.log(myProducts.nextProduct());
  //   console.log(myProducts.previousProduct());
  //   console.log(myProducts.previousProduct());
  //   console.log(myProducts.previousProduct());
  //   console.log(myProducts.previousProduct());
  //   console.log(myProducts.previousProduct());
  //   console.log(myProducts.previousProduct());

  myProducts.showAllProducts((p) => console.log(p));

  myProducts.addProducts("photo of Mona Lisa", "photo2");

  myProducts.showAllProducts((p) => console.log(p));

  myProducts.removeProduct("photo2");
  myProducts.removeProduct("product3");

  myProducts.showAllProducts((p) => console.log(p));
};
