function killClickable(event) {
  event.preventDefault();
  removeElement("#clickable");
}

function entryPoint() {
  setTitle("Test application");
  appendElementWithID("h1", "header", "Hello, world!");
  appendElementWithID("div", "container", "")
  appendElementWithID("p", "line1", "I'm a UIKit application!", "#container");
  appendElementWithPropertiesAndHandler("a", 'href="#" id="clickable"', "Click me", killClickable, "#container");
  UIReady();
}

$(document).ready(function() {
  UIInit(entryPoint, "Test application");
});
