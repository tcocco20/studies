// const url = "https://jsonplaceholder.typicode.com/todos/";

// import * as posts from "./iframe.js";

// fetch(url)
//   .then((response) => response.json())
//   .then((json) => filter(json))
//   .then((json) => console.log(json));

// const filter = (json) => json.filter((r) => r.id > 50 && r.id < 60);

// const makeUri = (pig, id = "") =>
//   `https://jsonplaceholder.typicode.com/${pig}/${id}`;

// fetch(makeUri("posts"))
//   .then((response) => response.json())
//   .then(filter)
//   .then((json) => console.log(json));

// look up difference between url, uri and urn

// fetch(makeUri("posts"), {
//   method: "POST",
//   body: JSON.stringify({
//     title: "some title",
//     body: "lorem 3",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch(makeUri("posts", 1), {
//   method: "PUT",
//   body: JSON.stringify({
//     title: "some title",
//     body: "lorem 3",
//     userId: 1,
//     id: 1,
//   }),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch(makeUri("posts", 1), {
//   method: "PATCH",
//   body: JSON.stringify({
//     title: "new title",
//   }),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch(makeUri("posts", 1), {
//   method: "DELETE",
// }).then(() => console.log("successfully deleted"));

// const renderPage = (posts) => {
//   const body = document.body;

//   posts = filter(posts);

//   posts.forEach((i) => {
//     const p = document.createElement("p");
//     p.innerText = i.title;
//     body.append(p);
//   });
// };

// fetch(makeUri("posts"))
//   .then((response) => response.json())
//   .then(renderPage);

// const h1 = document.querySelector("h1");
// h1.style.color = "red";

// displayX();

// console.log(posts);

// const renderPage = (posts) => {
//   const body = document.body;

//   for (const x in posts) {
//     const p = document.createElement("p");
//     p.innerText = posts[x];
//     body.append(p);
//   }
// };

// renderPage(posts);

const list = [1, 2, 3, "4", "5", 6, "7"];

function filterList(list) {
  return list.filter((i) => typeof i === "number");
}

console.log(filterList(list));
