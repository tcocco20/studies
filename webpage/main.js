const main = $("main"),
  header = $("header"),
  footer = $("footer");

const arr = ["hello", "cheetah", "pizza"];

main.build("div").addClass("div").text("List of things I like:");

arr.forEach((i) => main.build("p").addClass(i).text(i));

