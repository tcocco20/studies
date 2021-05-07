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
//   move: () => console.log("starts to move"),
//   eat: (str) => console.log(`eats${str ? " a " + str : ""}`),
//   rest: (num) => console.log(`begins to rest${num ? " for " + num + " minutes." : ""}`),
// };

// const animals = ["snake", "dog", "cat", "donkey"];

// const [snake, dog, cat, donkey] = animals.map(() => actions);

// cat.move();
// snake.eat();
// snake.eat("mouse")
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

const dataBaseCreator = (() => {
  const dataBase = {};
  let id = 0;

  const addEntry = () => {
    dataBase[id] = {};
    return id++;
  };
  const newEntry = () => {
    const id = addEntry();
    return { addField: editEntry(id).addField };
  };
  const editEntry = (id) => ({
    addField: addField(id),
    editField: addField(id),
  });
  const addField = (id) => (field, value) => (dataBase[id][field] = value);
  const getAll = () => console.log(dataBase);
  const getById = (id) => console.log(dataBase[id]);
  const getFromField = (type) => (field, value) => {
    for (const id in dataBase) {
      if (dataBase[id][field] === value) return type ? id : dataBase[id];
    }
  };
  const getByField = getFromField();
  const getIdByField = getFromField(true);
  const getAllByField = (field, value) =>
    Object.keys(dataBase)
      .filter((id) => dataBase[id][field] === value)
      .map((id) => dataBase[id]);

  return {
    newEntry,
    editEntry,
    getAll,
    getByField,
    getById,
    getIdByField,
    getAllByField,
  };
})();

const db = dataBaseCreator;

db.newEntry().addField("name", "Jay Smith");
db.editEntry(0).addField("address", "123 1st St");
db.editEntry(0).addField("phone", "555-666-7777");
db.newEntry().addField("name", "Jay williamson");
db.editEntry(1).addField("address", "123 1st St");
db.editEntry(1).addField("phone", "555-666-7777");
db.newEntry().addField("name", "Jay Smith");
db.editEntry(2).addField("address", "123 1st St");
db.editEntry(2).addField("phone", "555-666-7778");
console.log(db.getAllByField("name", "Jay Smith"));
console.log(db.getAllByField("phone", "555-666-7777"));
