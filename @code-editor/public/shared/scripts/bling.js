/* bling.js */

window.$ = function(query) {
    var selector = document.querySelectorAll.bind(document);
    var nodes = selector(query);
    if (nodes.length === 1) return nodes[0];
    return nodes;
};

Element.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn);
  });
};
