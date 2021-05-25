const $ = document.querySelector.bind(document);
const create = document.createElement.bind(document);

Element.prototype.addClass = function (classToAdd) {
  this.classList.add(classToAdd);
  return this;
};

Element.prototype.text = function (text) {
  this.innerText = text;
  return this;
};

Element.prototype.build = function (element) {
  const el = create(element);
  this.append(el);
  return el;
};
