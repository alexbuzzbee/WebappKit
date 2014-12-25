var self;

function killClickable(event) {
  event.preventDefault();
  self.removeElement("#clickable");
  self.removeElement("#container br")
}

function buttonClicked(event) {
  event.preventDefault();
  event.stopPropagation();
  alert("Hello, world! ...Again...");
}

function entryPoint() {
  self = this;
  webappkit.setTitle("Test application");
  self.appendElementWithID("h1", "header", "Hello, world!");
  self.appendElementWithID("div", "container", "")
  self.appendElementWithID("p", "line1", "I'm a WebappKit application!", "#container");
  self.appendElementWithIDAndHandler("a", "clickable", "Click me", killClickable, "#container");
  self.appendSelfClosingElement("br", "#container");
  self.appendElementWithIDAndHandler("button", "helloButton", "Click me too!", buttonClicked, "#container");
  self.UIReady();
}

$(document).ready(function() {
  webappkit.init(entryPoint, "Test application");
});
