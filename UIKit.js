var app;

function UIInit(callback, appName) {
  app = new Application(callback, appName, $("#contentRectangle"));
  app.start();
}

function spawn(callback, appName, selector) {
  return new Application(callback, appName, $(selector));
}

function appendElementWithIDAndHandler(element, id, contents, callback, nest) {
  var jqObject = appendElementWithID(element, id, contents, nest);
  return jqObject.on("click", callback);
}

function appendElementWithClassAndHandler(element, cls, contents, callback, nest) {
  var jqObject = appendElementWithID(element, cls, contents, nest);
  return jqObject.on("click", callback);
}

function appendElementWithID(element, id, contents, nest) {
  return appendElementWithProperties(element, 'id="' + id + '"', contents, nest);
}

function appendElementWithClass(element, cls, contents, nest) {
  return appendElementWithProperties(element, 'class="' + cls + '"', contents, nest);
}

function appendElementWithProperties(element, props, contents, nest) {
  var jqObject;
  if (!nest) {
    nest = app.UIRoot;
  } else {
    nest = $(nest);
  }
  jqObject = $("<" + element + " " + props + ">" + contents + "</" + element + ">");
  return jqObject.appendTo(nest);
}

function appendSelfClosingElementWithProperties(element, props, nest) {
  return appendSelfClosingElement(element + " " + props, nest);
}

function appendSelfClosingElement(element, nest) {
  var jqObject;
  if (!nest) {
    nest = app.UIRoot;
  } else {
    nest = $(nest);
  }
  jqObject = $("<" + element + " />");
  return jqObject.appendTo(nest);
}

function removeElement(selector) {
  var element = $(selector);
  element.fadeOut();
  setTimeout(function() {
    element.remove();
    }, 500);
}

function UIReady() {
  app.UIRoot.fadeIn();
}

function setTitle(newTitle) {
  $("title").text(newTitle);
}
