// const i = document.querySelector(".i"),
//   b = document.querySelector("button"),
//   o = document.querySelector(".o");

// o.addEventListener("click", () => alert("outer div clicked"));

// i.addEventListener("click", (e) => {
//   alert("inner div clicked");
//   e.stopPropagation();
// });
// b.addEventListener("click", (e) => {
//   alert("button clicked");
//   e.stopImmediatePropagation();
// });
// b.addEventListener("click", (e) => {
//   alert("triggered again");
// });

// document.body.addEventListener("click", (e) => {
//   if (e.target === b) alert("button clicked");
//   if (e.target === o) alert("o clicked");
//   if (e.target === i) alert("i clicked");
// });

// document.body.addEventListener("click", (e) => {
//   if (e.target.classList.contains("o")) alert("outer div clicked");
// });

// document.body.onclick = (e) => {
//   if (e.target.classList.contains("o")) alert("outer div clicked");
// };

// b.addEventListener("click", (e) => {
//   const div = document.createElement("div");
//   div.className = "o";
//   document.body.append(div);
//   // div.addEventListener("click", () => alert("outer div clicked"));
//   e.stopPropagation();
// });

// const posts = [
//   { id: 1, title: "post1" },
//   { id: 2, title: "post2" },
// ];

// const getPost = () => {
//   setTimeout(() => {
//     console.log("adding post");
//     let result = "";
//     posts.forEach((post) => (result += `<p>${post.title}</p>`));
//     document.body.innerHTML = result;
//   }, 1000);
// };

// const addPost = (post =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("pushing post");
//       posts.push(post);
//       const error = false;
//       if (!error) resolve();
//       else reject("did not get data");
//     }, 2000);
//   });

// const getAll = async () => {
//   try {
//     await addPost({ id: 3, title: "post3" });
//     getPost();
//   } catch (error) {
//     console.log(error);
//   }
// };

// getAll();

// fetch("https://www.google.com").then(console.log);

// const person = {
//   first: "Bob",
//   last: "Smith",
//   address: {
//     number: 1234,
//     street: "Fake St.",
//     city: "Los Angeles",
//     zipCode: 20567,
//   },
// };

// person.input = "hi";

// const input = "first";
// // console.log(random);

// const adres = "adres"

// console.log(person[adres]?.number);

// localStorage.setItem("username", "DarkLord69");
// localStorage.setItem("password", "P@ssw0rd");

// const un = localStorage.getItem("user"),
//   pw = +localStorage.getItem("password");

// console.log(JSON.parse(un));

// localStorage.setItem("username", "th@gr3atest");

// localStorage.removeItem("username");

// localStorage.clear();

// localStorage.setItem("user", JSON.stringify(person));

// const x = "";

// console.log(x ?? "hi");

// const typewriter = (s = s ?? "hi") => {}

// const actions = {
//   move: function () {},
//   eat: function () {},
//   rest: function () {},
// };

// const animal = {
//   snake: {
//     actions,
//   },
//   dog: {
//     actions,
//   },
//   cat: {
//     actions,
//   },
//   donkey: {
//     actions,
//   },
// };

// animal.dog.actions.move()

// const styleChange = (el, v, p1,  p2) => {
//   if (p2) el[p1][p2] = v;
//   else el[p1] = v;
// };

// const element = {
//   tag: "div",
//   classList: ["class1", "class2"],
//   className: "class1 class2",
//   id: "someID",
//   innerText: "lorem",
//   innerHTML: "lorem",
//   style: {
//     color: "red",
//     backgroundColor: "black",
//     height: "300px",
//   }
// }

// const arr = []

// arr.forEach()

// console.log(0, 1, 2, 3, 4);

// for (let i = 0; i < 5; i++) console.log(i);

// let x = 6;

// for (let i = 0; i < x; i++) console.log(i);

// const loopThrough = (x) => {
//   for (let i = 0; i < x; i++) console.log(i);
// };

// const loopThrough = (x, f) => {
//   for (let i = 0; i < x; i++) f(i);
// };

// const loopThrough = (x, f, i = 0) => {
//   for (i; i < x; i++) f(i);
// };

// const imgs = document.querySelectorAll("img"),
//   arr = ["x", "y", "z"],
//   imgsArray = Array.from(imgs),
//   imgs2 = [...imgs];

// const classes = [];

// imgs.forEach((el) => classes.push(el.classList));

// const newList = arr.map((el) => el);

// const imgList = imgsArray.map((el) => el.classList);

// console.log(imgs2);

// const imgs = [...document.querySelectorAll("img")].map(i => [...i.classList].map(c => {
//   if (c.length > 3) return c
// }));

// console.log(imgs)

// const div = document.createElement("div");

// div.classList.add("cl1");
// div.classList.add("cl2");
// div.classList.add("cl3");
// div.classList.add("cl4");
// div.classList.add("cl5");

// const addClasses = (el, c) => el.classList.add(c);

// const addClasses = (el, c1, c2, c3, c4, c5) => {
//   el.classList.add(c1);
//   if (c2) el.classList.add(c2);
//   if (c3) el.classList.add(c3);
//   if (c4) el.classList.add(c4);
//   if (c5) el.classList.add(c5);
// }

// const addClasses = (el, c, ...classes) => {
//   el.classList.add(c);
//   if (classes.length > 0) addClasses(el, ...classes);
// };

// addClasses = (el, ...cls) => cls.forEach((c) => el.classList.add(c));

// // addClasses(div, "c1", "c2", "c3");

// // console.log(div);

// function build(el, ...classes) {
//   el = document.createElement(el);
//   addClasses(...arguments);
//   return el;
// }

// console.log(build("div", "cl1", "cl2", "cl3"));

// const arr = [1, 2, 3];

// const newArr = arr.map((a) => a * 2);

// console.log(newArr)

// const arr = [
//   { k: 1, v: 10 },
//   { k: 2, v: 20 },
//   { k: 3, v: 30 },
// ];

// const ans = arr.map((o) => {
//   return { [o.k]: o.v };
// });

// const ans2 = arr.map((o) => {
//   const obj = {};
//   obj[o.k] = o.v;
//   return obj;
// });

// console.log(ans);

// const output = [{ 1: 10 }, { 2: 20 }, { 3: 30 }];

// let a, b, c;

// [a, b] = [5, 10];

// ({ a, b } = { a: 1, b: 2 });

// console.log(a, b);

// [a, ...c] = {};

// console.log(c);

// const actions = {
//   move: () => console.log("starts to move"),
//   eat: () => console.log("eats"),
//   rest: () => console.log("begins to rest"),
// };

// const animal = {
//   snake: {
//     actions,
//   },
//   dog: {
//     actions,
//   },
//   cat: {
//     actions,
//   },
//   donkey: {
//     actions,
//   },
// };

// const [{ snake }, { dog }, { cat }, { donkey }] = Object.keys(animal)
//   .map((a) => ({ [a]: animal[a].actions }));

// cat.move();
// snake.eat();
// dog.move();
// donkey.rest();

// const actions = {
//   move: () => console.log("starts to move"),
//   eat: () => console.log("eats"),
//   rest: () => console.log("begins to rest"),
// };

// const animal = {
//   snake: {},
//   dog: {},
//   cat: {},
//   donkey: {},
// };

// const [{ snake }, { dog }, { cat }, { donkey }] = Object.keys(animal)
//   .map((a) => ({ [a]: actions }));

// cat.move();
// snake.eat();
// dog.move();
// donkey.rest();

// const actions = {
//   move: () => console.log("starts to move"),
//   eat: () => console.log("eats"),
//   rest: () => console.log("begins to rest"),
// };

// const animals = ["snake", "dog", "cat", "donkey"];

// const [snake, dog, cat, donkey] = animals.map(() => actions);

// cat.move();
// snake.eat();
// dog.move();
// donkey.rest();

// const actions = {
//   move: function () {
//     console.log(`${this} starts to move`);
//   },
//   eat: function (str) {
//     console.log(`${this} eats${str ? " a " + str : ""}`);
//   },
//   rest: function (num) {
//     console.log(
//       `${this} begins to rest${num ? " for " + num + " minutes." : ""}`
//     );
//   },
// };

// const animals = ["snake", "dog", "cat", "donkey"];

// const [snake, dog, cat, donkey] = animals.map((a) => {
//   const obj = {};
//   Object.keys(actions).forEach((p) => (obj[p] = actions[p].bind(a)));
//   return obj;
// });

// cat.move();
// snake.eat();
// snake.eat("mouse");
// dog.move();
// donkey.rest(60);

// let i = 0,
//   log;

// for (i = 0; i < 10; i++) console.log(i);

// const setI = (num) => (i = num),
//   testI = (num) => i < num,
//   incI = (num) => (i += num);

// for (; i < 10; ) console.log(i++);
// for (setI(0), log = console.log; testI(10); incI(2)) log(i);

// for (setI(0), log = console.log; testI(5); incI(1)) log(['h', 'e', 'l', 'l', 'o'][i]);

// let i = 0;

// for (;;) {
// if (i >= 10) break
// console.log(i++);
// }

// const arr = [1, 2, 3];

// for (; i < arr.length; arr[i++]--);
// console.log(arr);

// let i, j;

// for (i = 0, j = 14; i !== j; i++, j--);

// console.log(j);

// for (i = 0, j = 14; i < 15 && j < 50; i++, j += 2);

// console.log(i, j);

// let x = 0;

// do console.log(x++);
// while (x < 0);

// x = 0;

// while (x < 0) console.log(x++);

// basicLoop: for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) break basicLoop
// }

// let x = 0,
//   y = 8;

// oLoop: while (x < 4) {
//   console.log(x++);

//   iLoop: while (y > 4) {
//     console.log(y--);

//     if (y === 6) break oLoop;

//     console.log("hello");
//   }
// }

// const object = {
//   1: "thing1",
//   2: "thing2",
// };

// for (const property in object) console.log(property, object[property]);

// const o = object;

// const a = ["a", "few", "things"];

// for (const thing in a) console.log(a[thing]);

// const s = "something not so brilliant";

// for (const l in s) console.log(s[l]);

// const object = {
//   1: "thing1",
//   2: "thing2",
// };

// const o = object;

// const a = ["a", "few", "things"];

// for (const thing of a) console.log(thing, a[thing]);

// const s = "something not so brilliant";

// for (const l of s) console.log(l, s[l]);

// console.log(a)

// console.log(b)

// console.log(c)

// console.log(d)

// console.log(d())

// console.log(e);

// console.log(e());

// f = () => "hi";

// console.log(f);

// console.log(f());

// const a = 5;

// let b = 4;

// var c = 3;

// const d = () => "hi";

// function e() {
//   return "hi";
// }

// var f = () => "hi";

// var f

// function build(el, ...c) {
//   el = document.createElement(el);

//   addClass = (cl) => el.classList.add(cl);

//   c.forEach(addClass);

//   return el;
// }

// console.log(build("div", "first", "second", "third"));

// {
//   {
//     {
//       {
//         {
//           {
//             var a = 5;
//           }
//         }
//       }
//     }
//   }
// }

// console.log(a);

// const add = (x, y) => x + y;

// console.log(add(2, 3));

// console.log(add(2, 3));

// console.log(add(2, 3));

// let x = 6;

// const add = (y) => x += y;

// console.log(add(3));

// console.log(add(3));

// console.log(add(3));

// const array = [1, 2, 3, 4, 5];

// const mod = (arr) => {
//   arr.pop();
//   return 0;
// };

// console.log(mod(array));

// console.log(array);

// console.log(mod(array));

// console.log(array);

// console.log(mod(array));

// console.log(array);

// "use strict"

// const a = 5

// console.log(a);

// console.log(a);

// const b = 051

// console.log(b);

// let x = 5;

// x = 0x00001 = 5
// x++
// x = 0x00002 = 6

// const someShit = (p1) => p1++;
// someShit(x = 5 = p1) p1++ = 6

// console.log(x);

// console.log(someShit(x));

// console.log(x);

// const x = [1, 2, 3];
// // x = 0x00001 = []
// const y = x;

// const funct = (arr) => arr.pop();
// funct(x = 0x00001 = arr)

// console.log(x);

// console.log(funct(x));

// console.log(x);

// console.log(y);

// const x = {
//   1: "a",
//   2: "b",
// };
// // x = 0x00001 = []
// const y = x;

// const funct = (obj) => (obj["1"] = "c");
// // funct((x = 0x00001 = arr));

// console.log(x);

// console.log(funct(x));

// console.log(x);

// console.log(y);

// const x = 4;

// const isPos = (n) => n > 0;

// console.log(isPos(-4));

// const getFunc = (x) => {
//   if (x === "add") return (n1, n2) => n1 + n2;
//   else return (n1, n2) => n1 - n2;
// };

// console.log(getFunc("add"));

// const add = getFunc("add"),
//   sub = getFunc("sub");

// console.log(add(1, 2));

// console.log(sub(3, 2));

// const pos = (n) => n > 0,
//   neg = (n) => n < 0,
//   not = (f1) => (n) => !f1(n),
// or = (f1, f2) => (n) => f1(n) || f2(n);
//   and = (f1, f2) => (n) => f1(n) && f2(n),
//   zero = not(or(neg, pos)),
//   nonZero = or(pos, neg);

// console.log(zero(4));
// console.log(zero(-3));
// console.log(zero(0));
// console.log(nonZero(4));
// console.log(nonZero(-2));
// console.log(nonZero(0));

// const less = (x) => (y) => y < x,
//   greater = (x) => (y) => y > x;

// const less5 = less(5),
//   greater5 = greater(5);

// console.log(less5(2));
// console.log(less5(6));
// console.log(greater5(2));
// console.log(greater5(7));

// console.log(pos(7));
// console.log(neg(-3));

// console.log(or(pos, neg)(3));
// console.log(or(pos, neg)(0));

// console.log(and(greater(5), less(10))(7));
// console.log(and(greater(5), less(10))(54));

// const sum = (a) => (b) => (c) => (d) => a + b + c + d;

// console.log(sum(1)(3)(5)(7));

// const range = (a, b) => (c) =>
//   and(greater(Math.min(a, b)), less(Math.max(a, b)))(c),
//   range2to5 = range(2, 5)

// console.log(range2to5(3));
// console.log(range2to5(0));
// console.log(range2to5(5));
// console.log(range2to5(2));
// console.log(range2to5(7));

// const lessOrEqual = (x) => (y) => y <= x,
// greaterOrEqual = (x) => (y) => y >= x;

// console.log(lessOrEqual(5)(3));
// console.log(greaterOrEqual(5)(7));

// const less = (x, i) => (y) => (i ? y <= x : y < x),
//   greater = (x, i) => (y) => (i ? y >= x : y > x);

// console.log(greater(5)(5));

// const notHS = or(less(14), greater(18)),
//   hs = and(less(18, true), greater(14, true));

// console.log(notHS(12));
// console.log(notHS(16));
// console.log(hs(12));
// console.log(hs(15));

// const is = (x) => (y) => y === x;
// // test = or(or(less(14), greater(18)), is(16));

// // const test = and(and(less(18, true), greater(14, true)), not(is(16)));

// const test = and(
//   and(less(18, true), greater(14, true)),
//   not(or(is(16), is(17)))
// );

// console.log(test(13));
// console.log(test(14));
// console.log(test(15));
// console.log(test(16));
// console.log(test(17));
// console.log(test(18));
// console.log(test(19));

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const map = array.map((v) => {
//   if (or(less(3, true), greater(6))(v)) return v;
// });

// const filter = array.filter(or(less(3, true), greater(6)));

// console.log(array);
// console.log(filter);

// const count = (() => {
//   let counter = 0;

//   return () => ++counter;
// })()

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// function* generator(i) {
//   yield i;
//   yield i * 2;
//   yield i * 3;
//   yield i * 4;
// }

// function* generator(i) {
//   yield* [i, i * 2, i * 3, i * 4];
//   yield i * 5;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// const list1 = [1, 2, 3],
//   list2 = list1;

// list2.pop()
// console.log(list1)

// function* generator(i) {
//   let x = 1;
//   while (true) yield i * x++;
// }

// const gen = generator(10),
// gen2 = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen2.next().value);
// console.log(gen.next().value);
// console.log(gen2.next().value);

// function* pos() {
//   while (i >= 0 && i < 3) yield ++i + " is positive";
//   if (i >= 3) yield (i -= 4) + " changing to negative";
//   yield* neg();
// }

// function* neg() {
//   while (i < 0 && i > -3) yield --i + " is negative";
//   if (i <= -3) yield (i += 4) + " changing back to positive";
//   yield* pos();
// }

// let i = 1;
// const gen = pos();

// function* even() {
//   while (true) {
//     if (i % 2 === 0) yield i++ + " is even";
//     else yield* odd();
//   }
// }

// function* odd() {
//   if (i % 2 !== 0) yield i++ + " is odd";
//   else yield* even();
// }

// let i = 2;

// function* dec(i) {
//   while (true) {
//     if (i >= 0) yield i--;
//     else return;
//   }
// }

// function* inc(i) {
//   while (true) {
//     if (i > 3) yield* dec(i);
//     else yield i++; // i = 4
//   }
// }
// const gen = inc(1);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// const o = {
//   *gen() {
//     yield "a";
//     yield "b";
//     yield "c";
//   },
// };

// const gen = o.gen();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// const calculator = {
//   *gen() {
//     yield { add: "added" };
//     yield { sub: "subtracted" };
//     yield { mult: "multiplied" };
//     yield { div: "divided" };
//   },
// };

// const gen = calculator.gen();

// console.log(gen.next().value.add);
// console.log(gen.next().value.sub);
// console.log(gen.next().value.mult);
// console.log(gen.next().value.div);

// const calculator = {
//     *gen() {
//       yield { add: (x, y) => x + y };
//       yield { sub: (x, y) => x - y };
//       yield { mult: (x, y) => x * y };
//       yield { div: (x, y) => x / y };
//     },
//   };

//   const gen = calculator.gen();

//   console.log(gen.next().value.add(2, 3));
//   console.log(gen.next().value.sub(5, 2));
//   console.log(gen.next().value.mult(4, 5));
//   console.log(gen.next().value.div(10, 2));

// const calculator = {
//   *[Symbol.iterator]() {
//     yield { add: (x, y) => x + y };
//     yield { sub: (x, y) => x - y };
//     yield { mult: (x, y) => x * y };
//     yield { div: (x, y) => x / y };
//   },
// };

// // const arr = Array.from(calculator);
// const arr = [...calculator];

// const [{ add }, { sub }, { mult }, { div }] = arr;

// console.log(add(2, 4));
// console.log(sub(7, 4));
// console.log(mult(2, 4));
// console.log(div(12, 4));

// const calculator = {
//   *[Symbol.iterator]() {
//     yield (x, y) => x + y;
//     yield (x, y) => x - y;
//     yield (x, y) => x * y;
//     yield (x, y) => x / y;
//   },
// };

// const arr = Array.from(calculator);
// const arr = [...calculator];

// const [add, sub, mult, div] = arr;

// console.log(add(2, 4));
// console.log(sub(7, 4));
// console.log(mult(2, 4));
// console.log(div(12, 4));

// const person = {
//     first: "kyle",
//     last: "smith",
//     email: "punchesdrywall@gmail.com"
// }

// const person = () => {
//   const first = "kyle",
//     last = "smith",
//     email = "punchesdrywall@gmail.com";

//   const getName = () => {
//     console.log(first, last);
//   };

//   const getEmail = () => {
//     console.log(email);
//   };

// };

// const person = () => {
//   const first = "kyle",
//     last = "smith";

//   let em = "punchesdrywall@gmail.com";

//   const getName = () => console.log(first, last);
//   const getEmail = () => console.log(em);
//   const setEmail = (email) => (em = email);

//   return { getName, getEmail, setEmail };
// };

// const kyle = person();

// console.log(person());
// kyle.getName();
// kyle.setEmail("kylesmith@gmail.com");
// kyle.getEmail();
// kyle.setEmail("kylesmith1@gmail.com");
// kyle.getEmail();

// const cart = (() => {
//   let items = [];
//   const add = (item) => items.push(item);
//   const remove = (item) => (items = items.filter((i) => i !== item));
//   const show = () => console.log(items);

//   return { add, remove, show };
// })();

// cart.add("shirt");
// cart.add("food");
// cart.add("kitty");
// cart.show();
// cart.remove("shirt");
// cart.show();

// const cart = (() => {
//   let cart = [];
//   const add = (...items) => cart.push(...items);
//   const remove = (...items) =>
//     (cart = cart.filter((i) => items.every((item) => item !== i)));
//   const show = () => console.log(cart);
//   const clear = () => (cart = []);

//   return { add, remove, show, clear };
// })();

// cart.add("shirt", "food", "kitty");
// cart.show();
// cart.remove("shirt", "food", "horse");
// cart.show();
// cart.clear();
// cart.show();

// const dataBaseCreator = (() => {
//   const dataBase = {};
//   const add = (field, value) => (dataBase[field] = value);
//   const show = () => console.log(dataBase);
//   return { add, show };
// })();

// const db = dataBaseCreator;

// db.add("name", "Jay");
// db.add("address", "1234 Fake St, Fake City, CA");
// db.add("phone", "555-555-5555");
// db.add("email", "jay5@gmail.com");
// db.show();

// const dataBaseCreator = (() => {
//   const dataBase = {};
//   let id = 0;

//   const entry = () => (dataBase[id++] = {});
//   const add = (id, field, value) => (dataBase[id][field] = value);
//   const show = () => console.log(dataBase);
//   const getById = (id) => console.log(dataBase[id]);

//   return { entry, add, show, getById };
// })();

// const db = dataBaseCreator;

// db.entry();
// db.add(0, "name", "Jay");
// db.add(0, "address", "1234 Fake St, Fake City, CA");
// db.add(0, "phone", "555-555-5555");
// db.add(0, "email", "jay5@gmail.com");
// db.show();
// db.getById(0);

// const dataBaseCreator = (() => {
//   const dataBase = {};
//   let id = 0;

//   const addEntry = () => {
//     dataBase[id] = {};
//     return id++;
//   };

//   const newEntry = () => {
//     const id = addEntry();
//     return { addField: editEntry(id).addField };
//   };

//   const editEntry = (id) => ({
//     addField: addField(id),
//     editField: addField(id),
//   });

//   const addField = (id) => (field, value) => (dataBase[id][field] = value);
//   const getAll = () => console.log(dataBase);
//   const getById = (id) => console.log(dataBase[id]);
//   const remove = (id) => delete dataBase[id];

//   const getByField = (field, value) => {
//     const results = Object.keys(dataBase)
//       .filter((id) => dataBase[id][field] === value)
//       .map((id) => ({
//         id,
//         entry: dataBase[id],
//         addField: editEntry(id).addField,
//         remove: remove.bind(null, id),
//       }));

//     let i = 0;

//     const next = () => {
//       if (++i < results.length) return { current: results[i], next };
//       return { current: results[i] };
//     };

//     if (results.length > 1) return { current: results[i], next, all: results };
//     return { current: results[i] };
//   };

//   return {
//     newEntry,
//     editEntry,
//     getAll,
//     getByField,
//     getById,
//   };
// })();

// const db = dataBaseCreator;

// db.newEntry().addField("name", "Jay Smith");
// db.editEntry(0).addField("address", "123 1st St");
// db.editEntry(0).addField("phone", "555-666-7777");
// db.newEntry().addField("name", "Jay williamson");
// db.editEntry(1).addField("address", "123 1st St");
// db.editEntry(1).addField("phone", "555-666-7777");
// db.newEntry().addField("name", "Jay Smith");
// db.editEntry(2).addField("address", "123 1st St");
// db.editEntry(2).addField("phone", "555-666-7778");
// db.getByField("name", "Jay Smith").next().current.remove();
// db.getAll();

// const person = {
//   name: "kyle",
// };

// // console.log(person.getName())

// const personProxy = new Proxy(person, {
//   get: (o, p) =>
//     p in o
//       ? o[p]
//       : () => {
//           console.error("property does not exist");
//           return;
//         },
// });

// person.getName = () => person.name;

// console.log(personProxy.getName());

// const person = {
//   first: "Django",
//   last: "Fett",
//   age: 22,
//   message: () => `${person.first} ${person.last} is ${person.age} years old.`,
// };

// console.log(`${person.first} ${person.last} is ${person.age} years old.`);

// const makeMessage = (obj) =>
//   `${obj.first} ${obj.last} is ${obj.age} years old.`;

// console.log(person.message());

// let test = {
//   lambda: () => console.log(this),
//   function: function () {
//     console.log(this);
//   },
// };

// Lambda always has a global scope(global this) * cannot change "this"
// Function always has a default global scope(global this) can change "this"
// Methods always have a default scope of the owner(local this) can change "this"
// globalThis = BOM(browser object model) = window

// test.lambda();
// test.function();

// function what() {
//   console.log(this);
// }

// what();

// console.log("test1");
// window.console.log("test2");
// globalThis.console.log("test3");
// this.console.log("test4"); // could change if not on global scope

// let test = {
//   lambda: () => console.log(this),
//   console: window.console,
//   function: function () {
//     this.console.log(this);
//   },
// };

// test.function()

// const person = {
//   first: "Django",
//   last: "Fett",
//   age: 22,
//   getInfo: function() { return `${this.first} ${this.last} is ${this.age} years old.` },
// };

// console.log(person.getInfo())

// const character = {
//   name: "Mario",
//   race: "Human",
//   level: 1,
//   energy: 50,
//   skills: {
//     fireball: () => "shoots fireball",
//     spin: () => "spin attack",
//     jump: () => "jumps while punching the air",
//   },
//   getStats: function () {
//     return `${this.name} is a ${this.race} at level ${
//       this.level
//     } and he has ${this.energy} energy. His skills include ${Object.keys(this.skills)}`;
//   },
//   changeName: function (name) {
//     this.name = name;
//   },
//   lvlup: function () {
//     this.level++;
//   },
// };

// console.log(character.name)
// console.log(character.race)
// console.log(character.level)
// // console.log(character.skills.fireball())
// character.lvlup();
// character.changeName("Wario");
// console.log(character.getStats());

// const character = {
//   name: "Mario",
//   race: "Human",
//   level: 1,
//   maxEnergy: 50,
//   energy: 20,
//   skills: {
//     fireball: {
//       effect: "shoots fireball",
//       type: "single target",
//       damage: 100,
//       energyCost: 15,
//     },
//     spin: {
//       effect: "spin attack",
//       type: "multiple target",
//       damage: 35,
//       energyCost: 20,
//     },
//     jump: {
//       effect: "jump punch",
//       type: "single target",
//       damage: 150,
//       energyCost: 25,
//     },
//   },
//   getStats: function () {
//     return `${this.name} is a ${this.race} at level ${this.level} and he has ${
//       this.energy
//     } out of ${this.maxEnergy} max energy. His skills include ${Object.keys(
//       this.skills
//     )}`;
//   },
//   changeName: function (name) {
//     this.name = name;
//   },
//   lvlup: function () {
//     this.level++;
//     this.maxEnergy += 5;
//     Object.keys(this.skills).forEach((s, _, o) => console.log(s, o));
//   },
//   _increaseEnergy: function () {
//     this.energy++;
//   },
//   recover: function () {
//     setInterval(this._increaseEnergy.bind(this), 1000);
//   },
// };

// console.log(character.getStats());
// character.recover();
// character.lvlup();
// character.lvlup();
// character.lvlup();
// setTimeout(() => console.log(character.getStats()), 4000);

// function Food(name, price) {
//   this.name = name;
//   this.price = price;
// }

// const apple = new Food("apple", 0.69);
// console.log(apple.name)

// function Product(name, price, category = "food") {
//   this.name = name;
//   this.price = price;
//   this.category = category;
// }

// function Food(...args) {
//   // Product.call(this, name, price, "food");
//   Product.apply(this, arguments);
// }

// const bread = new Food("bread", 3);

// console.log(bread.name, bread.price, bread.category);

// const animals = [
//   { species: "lion", name: "Mufasa" },
//   { species: "tucan", name: "Zazu" },
// ];

// for (let i = 0; i < animals.length; i++) {
//   (function (i) {
//     this.print = function () {
//       console.log(`${this.name} is a ${this.species}`);
//     };
//     this.print();
//   }.call(animals[i], i));
// }

// const numbers = [0, 1, 2, 3];

// // console.log(Math.max(numbers))

// console.log(Math.max.apply(this, numbers));

// console.log(Math.max(...numbers));

// const test = {
//   x: 5,
//   getx: function () {
//     return this.x;
//   },
// };

// console.log(test.getx());

// const getx = test.getx.bind(test);

// console.log(getx());

// const arr1 = [1, 2, 3],
//   arr2 = [4, 5, 6];

// arr1.map((el) => console.log(el));

// Array.prototype.customForEach = function (cb, thisArg = this) {
//   for (let i = 0; i < this.length; i++) cb.call(thisArg, this[i], i, this);
// };

// arr1.customForEach((el) => console.log(el));

// Array.prototype.customMap = function (cb, thisArg = this) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++)
//     arr.push(cb.call(thisArg, this[i], i, this));
//   return arr;
// };

// console.log(arr1.customMap((el) => ++el));

// console.log(
//   arr1.map(function (el, i) {
//     return el + this[i];
//   }, arr2)
// );

// console.log(
//   arr1.customMap(function (el, i) {
//     return el + this[i];
//   }, arr2)
// );

// console.log(arr1.filter((x) => x > 1));

// Array.prototype.customFilter = function (pr, thisArg = this) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (pr.call(thisArg, this[i], i, this)) arr.push(this[i]);
//   }
//   return arr;
// };

// console.log(arr2.customFilter((x) => x % 2 === 0));

// Object.prototype.map = function (o, cb, thisArg = o) {
//   return Object.keys(o).map((key, i) => cb.call(thisArg, key, i, o));
// };

// const restaurant = {
//   name: "Krusty Krab",
//   address: "123 Bikini Bottom St",
//   location: "Bikini Bottom",
//   menu: [
//     {
//       name: "burger",
//       price: 3,
//       ingredients: ["buns", "patty", "veggies", "condiments"],
//     },
//     {
//       name: "fries",
//       price: 1,
//       ingredients: ["potatoes", "seasoning"],
//     },
//   ],
// };

// console.log(Object.map(restaurant, (p) => p));
// console.log(Object.map(restaurant, (p, _, o) => o[p]));

// const restaurant2 = {
//   name: "Chum Bucket",
//   address: "124 Bikini Bottom St",
//   location: "Bikini Bottom",
//   menu: [
//     {
//       name: "sandwich",
//       price: 3,
//       ingredients: ["bread", "patty", "veggies", "condiments"],
//     },
//     {
//       name: "chips",
//       price: 1,
//       ingredients: ["potatoes", "salt"],
//     },
//   ],
// };

// console.log(Object.map(restaurant, (p) => p, restaurant2));
// console.log(
//   Object.map(
//     restaurant,
//     function (p) {
//       return this[p];
//     },
//     restaurant2
//   )
// );

// const character = {
//   name: "Luigi",
//   power: 50,
//   defense: 50,
//   level: 10,
//   getName: function () {
//     console.log(this.name);
//     return this;
//   },
//   setName: function (name) {
//     this.name = name;
//     return this;
//   },
//   attack: function () {
//     console.log(`${this.name} does ${this.power * 1.5} damage`);
//   },
//   defend: function () {
//     console.log(
//       `${this.name} receives ${Math.round(2000 / this.defense)} damage`
//     );
//   },
//   powerUp: function () {
//     this.power += 20;
//     return this;
//   },
//   shield: function () {
//     this.defense += 20;
//     return this;
//   },
// };

// character.getName();
// character.setName("Link");
// character.getName();
// character.attack();
// character.defend();
// character.powerUp();
// character.shield();
// character.attack();
// // character.defend();

// character.setName("Link").getName().setName("Luigi").getName();

// character.powerUp().attack();
// character.shield().defend();

// const arr = [1, 2, 3];

// arr.map().filter()

// const x = (v) => {
//   if (v === 1) return "1";
//   else if (v === 2) return "2";
//   else if (v === 3) return "3";
//   else if (v === 4) return "4";
//   else if (v === 5) return "5";
//   else return "v > 5";
// };

// const x = (v) => {
//   switch (v) {
//     case 1:
//       return "1";
//       break;
//     case 2:
//       return "2";
//       break;
//     case 3:
//       return "3";
//       break;
//     case 4:
//       return "4";
//       break;
//     case 5:
//       return "5";
//       break;
//     default:
//       return "v > 5";
//   }
// };

// for (let i = 1; i < 7; i++) console.log(x(i));

// const x = (v) => {
//   let buf = "";
//   switch (v) {
//     case 1:
//       buf += "1";
//       break;
//     case 2:
//       buf += "2";
//       break;
//     case 3:
//       buf += "3";
//       break;
//     case 4:
//       buf += "4";
//       break;
//     case 5:
//       buf += "5";
//       break;
//     default:
//       buf += "v > 5";
//   }
//   return buf;
// };

// for (let i = 1; i < 7; i++) console.log(x(i));

// let buf = "";

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) buf += i;
// }

// console.log(buf);

// export { x, y, z, a };

// const x = "hi",
//   y = "bye",
//   z = "why",
//   a = "circle";

// const hooker = {
//   name: "candy",
//   netWorth: 50,
//   getName: function () {
//     return this.name;
//   },
//   hook: function (num) {
//     this.netWorth += num;
//   },
// };

// console.log(hooker.getName());
// hooker.hook(50);
// console.log(hooker.netWorth);

// const hooker = {
//   name: "crystal",
//   netWorth: 50,
//   getName: function () {
//     return this.name;
//   },
//   get info() {
//     return this.name;
//   },
//   hook: function (num) {
//     this.netWorth += num;
//   },
//   set pay(num) {
//     this.netWorth += num;
//   },
//   language: "EN",
//   set lang(lang) {
//     this.language = lang.toUpperCase();
//   },
// };

// console.log(hooker.getName());
// console.log(hooker.info);
// hooker.hook(50);
// console.log(hooker.netWorth);
// hooker.pay = 50;
// console.log(hooker.netWorth);
// hooker.lang = "sp";
// console.log(hooker.language);

// function Person(first, last, age, phone) {
//   this.first = first;
//   this.last = last;
//   this.age = age;
//   this.phone = phone;
// }

// const john = new Person("John", "Smith", 32, "555-555-5555");

// const sally = new Person("Sally", "Williams", 28, "555-555-5556");

// console.log(john, sally);

// john.address = "123 Fake St.";

// console.log(john.address);

// Person.prototype.address = "123 Fake St.";

// console.log(sally.address);

// Person.prototype.getName = function () {
//   return `${this.first} ${this.last}`;
// };

// console.log(sally.getName());

// console.log(new String("hello"));

// String.prototype.capitalize = function () {
//   return [...this]
//     .map((l) => (l === this[0] ? l.toUpperCase() : l.toLowerCase()))
//     .join("");
// };

// String.prototype.capitalize = function () {
//   return this[0].toUpperCase() + this.slice(1).toLowerCase();
// };

// console.log("".capitalize());

// function Person(first, last, age, phone) {
//   this.first = first;
//   this.last = last;
//   this.age = age;
//   this.phone = phone;
//   this.getName = function () {
//     return `${this.first} ${this.last}`;
//   };
// }

// const john = new Person("John", "Smith", 32, "555-555-5555");

// const sally = new Person("Sally", "Williams", 28, "555-555-5556");

// console.log(john.getName());

// const animal = {
//   eat: function () {
//     console.log(`The ${this.name} eats`);
//   },
//   move: function () {
//     console.log(`The ${this.name} moves`);
//   },
//   sleep: function () {
//     console.log(`The ${this.name} sleeps`);
//   },
// };

// const rabbit = {
//   name: "rabbit",
//   __proto__: animal,
// };

// const raccoon = {
//   name: "raccoon",
//   __proto__: animal,
// };

// const bear = {
//   name: "bear",
// };

// rabbit.eat();
// raccoon.move();
// Object.setPrototypeOf(bear, animal);
// bear.sleep();

// const makeAnimal = (animal, parent) => ({ name: animal, __proto__: parent });

// const tiger = makeAnimal("tiger", animal);

// tiger.eat();

// function Animal() {
//   this.move = function () {
//     console.log(`The ${this.name} moves`);
//   };
//   this.eat = function (food) {
//     console.log(`The ${this.name} eats ${food ? "a" + food : ""}`);
//   };
//   this.sleep = function () {
//     console.log(`The ${this.name} sleeps tonight`);
//   };
// }

// function Cat() {
//   this.name = "cat";
//   Animal.call(this);
// }

// const cat = new Cat();
// cat.eat();
// cat.move();
// cat.sleep();

// class Animal {
//   walk = function () {
//     console.log(`The ${this.name} walks`);
//   };
//   eat = function (food) {
//     console.log(`The ${this.name} eats ${food ? "a" + food : ""}`);
//   };
//   sleep = function () {
//     console.log(`The ${this.name} sleeps tonight`);
//   };
// }

// class Lion extends Animal {
//   name = "lion";
// }

// const simba = new Lion();

// simba.sleep();

// class Animal {
//   walk = function () {
//     console.log(`${this.name} the ${this.species} walks`);
//   };
//   eat = function (food) {
//     console.log(
//       `${this.name} the ${this.species} eats ${food ? "a" + food : ""}`
//     );
//   };
//   sleep = function () {
//     console.log(`${this.name} the ${this.species} sleeps tonight`);
//   };
// }

// class Lion extends Animal {
//   constructor(name) {
//     super();
//     this.name = name;
//     this.species = "lion";
//   }
// }

// const simba = new Lion("Simba");

// simba.sleep();

// class Animal {
//   move = function () {
//     console.log(`${this.name} the ${this.species} ${this.movement}`);
//   };
//   eat = function (food) {
//     console.log(
//       `${this.name} the ${this.species} eats ${food ? "a" + food : ""}`
//     );
//   };
//   sleep = function () {
//     console.log(`${this.name} the ${this.species} sleeps tonight`);
//   };
// }

// class Frog extends Animal {
//   constructor(name) {
//     super();
//     this.name = name;
//     this.species = "frog";
//     this.movement = "hops around";
//   }
// }

// const kermit = new Frog("Kermit");

// kermit.move();

// class Animal {
//   move = function () {
//     console.log(`${this.name} the ${this.species} moves about`);
//   };
//   eat = function (food) {
//     console.log(
//       `${this.name} the ${this.species} eats ${food ? "a" + food : ""}`
//     );
//   };
//   sleep = function () {
//     console.log(`${this.name} the ${this.species} sleeps tonight`);
//   };
// }

// class Frog extends Animal {
//   constructor(name) {
//     super();
//     this.name = name;
//     this.species = "frog";
//   }
//   move = function () {
//     console.log(`${this.name} the ${this.species} hops about`);
//   };
// }

// const kermit = new Frog("Kermit");

// kermit.move();

// class Monster {
//   constructor(name) {
//     this.name = name;
//   }
//   attack = function () {
//     console.log(`${this.name} attacks`);
//   };
// }

// class FlyingMonster extends Monster {
//   constructor(...args) {
//     super(...args);
//   }
//   fly = function () {
//     console.log(`${this.name} flies`);
//   };
// }

// class SwimmingMonster extends Monster {
//   constructor(...args) {
//     super(...args);
//   }
//   swim = function () {
//     console.log(`${this.name} swims`);
//   };
// }

// class SuperMonster extends Monster {
//   constructor(...args) {
//     super(...args);
//   }
//   swim = function () {
//     console.log(`${this.name} swims`);
//   };
//   fly = function () {
//     console.log(`${this.name} flies`);
//   };
// }

// const enemy = new Monster("Kevin");
// enemy.attack();

// const flyingEnemy = new FlyingMonster("Glarb");
// flyingEnemy.fly();
// flyingEnemy.attack();

// const swimmingMonster = new SwimmingMonster("Garydos");
// swimmingMonster.swim();
// swimmingMonster.attack();

// function swimmer({ name: name }) {
//   return {
//     swim: (_) => console.log(`${name} swims`),
//   };
// }

// function flyer({ name: name }) {
//   return {
//     fly: (_) => console.log(`${name} flies`),
//   };
// }

// function monsterCreator(name) {
//   const monster = {
//     name: name,
//     attack: function () {
//       console.log(`${this.name} attacks`);
//     },
//   };
//   return {
//     ...monster,
//     ...swimmer(monster),
//     ...flyer(monster),
//   };
// }

// const superMonster = monsterCreator("Jeff");

// superMonster.fly();
// superMonster.swim();
// superMonster.attack();

// function swimmer({ name: name }) {
//   return {
//     swim: (_) => console.log(`${name} swims`),
//   };
// }

// function flyer({ name: name }) {
//   return {
//     fly: (_) => console.log(`${name} flies`),
//   };
// }

// function monsterCreator(name, ...abilities) {
//   const monster = {
//     name: name,
//     attack: function () {
//       console.log(`${this.name} attacks`);
//     },
//   };

//   abilities.forEach((a) => {
//     if (a === "fly") Object.assign(monster, flyer(monster));
//     if (a === "swim") Object.assign(monster, swimmer(monster));
//   });

//   return monster;
// }

// const superMonster = monsterCreator("Jeff", "fly");

// superMonster.fly();
// superMonster.swim();
// superMonster.attack();

// const FoodMixin = (superclass) =>
//   class extends superclass {
//     eat() {
//       console.log("eating food");
//     }
//   };

// class Animal {
//   sleep() {
//     console.log("sleeping");
//   }
// }

// class Tiger extends FoodMixin(Animal) {
//   growl() {
//     console.log("Growls!");
//   }
// }

// const tigger = new Tiger();

// tigger.growl();
// tigger.eat();
// tigger.sleep();

// const greetingMixin = {
//   sayHi() {
//     console.log("Hi");
//   },
//   sayBye() {
//     console.log("Bye");
//   },
// };

// const user = {
//   name: "Steve",
//   //   __proto__: greetingMixin,
// };

// Object.assign(user, greetingMixin);

// user.sayHi();

// const greetingMixin = {
//   sayHi() {
//     console.log("Hi");
//   },
//   sayBye() {
//     console.log("Bye");
//   },
// };

// class User {
//   name = "Steve";
// }

// const steve = new User();

// Object.assign(User.prototype, greetingMixin);

// steve.sayHi();

