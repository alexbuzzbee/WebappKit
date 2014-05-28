function killClickable(event) {
  event.preventDefault();
  removeElement("#clickable");
}

function buttonClicked(event) {
  event.preventDefault();
  event.stopPropagation();
  alert("Hello, world! ...Again...");
}

function entryPoint() {
  setTitle("Test application");
  appendElementWithID("h1", "header", "Hello, world!");
  appendElementWithID("div", "container", "")
  appendElementWithID("p", "line1", "I'm a UIKit application!", "#container");
  appendElementWithIDAndHandler("a", "clickable", "Click me", killClickable, "#container");
  appendSelfClosingElement("br", "#container");
  appendElementWithIDAndHandler("button", "helloButton", "Click me too!", buttonClicked, "#container");
  UIReady();
}

$(document).ready(function() {
  UIInit(entryPoint, "Test application");
});
