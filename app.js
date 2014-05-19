function entryPoint() {
  setTitle("Test application");
  appendElementWithID("h1", "header", "Hello, world!");
  appendElementWithID("div", "container", "")
  appendElementWithID("p", "line1", "I'm a UIKit application!", "#container");
  appendElementWithID("p", "line2", "And I'm really glad to meet you!", "#container")
  UIReady();
}

$(document).ready(function() {
  UIInit(entryPoint);
});
