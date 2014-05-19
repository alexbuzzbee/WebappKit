function entryPoint() {
  setTitle("Test application");
  appendElementWithID("h1", "header", "Hello, world!");
  appendElementWithID("div", "container", "")
  appendElementWithID("p", "line1", "I'm a UIKit application!", "#container");
  appendElementWithProperties("a", 'href="#" id="clickable"', "Click me", "#container");
  UIReady();
}

$(document).ready(function() {
  UIInit(entryPoint, "Test application");
  $("#clickable").on("click", function(event) {
    event.preventDefault();
    removeElement("#clickable");
  });
});
