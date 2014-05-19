var app;

function UIInit(callback, appName) {
  app = new Application(callback, appName, $("#contentRectangle"));
  app.start();
}

function fork(callback, appName, selector) {
  return new Application(callback, appName, $(selector));
}

function lineBreak(nest) {
  if (!nest) {
    nest = app.UIRoot;
  } else {
    nest = $(nest);
  }
  return nest.append("<br />");
}

function appendElementWithIDAndHandler(element, id, contents, callback, nest) {
  var jqObject = appendElementWithID(element, id, contents, nest).find("#" + id);
  return jqObject.on("click", callback);
}

function appendElementWithClassAndHandler(element, cls, contents, callback, nest) {
  var jqObject = appendElementWithID(element, cls, contents, nest).find("." + id);
  return jqObject.on("click", callback);
}

function appendElementWithID(element, id, contents, nest) {
  return appendElementWithProperties(element, 'id="' + id + '"', contents, nest);
}

function appendElementWithClass(element, cls, contents, nest) {
  return appendElementWithProperties(element, 'class="' + cls + '"', contents, nest);
}

function appendElementWithProperties(element, props, contents, nest) {
  if (!nest) {
    nest = app.UIRoot;
  } else {
    nest = $(nest);
  }
  return nest.append("<" + element + " " + props + ">" + contents + "</" + element + ">");
}

function appendSelfClosingElementWithProperties(element, props, nest) {
  return appendSelfClosingElement(element + " " + props, nest);
}

function appendSelfClosingElement(element, nest) {
  if (!nest) {
    nest = app.UIRoot;
  } else {
    nest = $(nest);
  }
  nest.append("<" + element + " />")
}

function removeElement(selector) {
  var element = $(selector);
  element.fadeOut();
  try {
    sleep(0.41);
  } finally {
    element.remove();
  }
}

function UIReady() {
  app.UIRoot.fadeIn();
}

function setTitle(newTitle) {
  $("title").text(newTitle);
}
