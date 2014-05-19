var app;

function UIInit(callback, appName) {
  app = new Application(callback, appName, $("#contentRectangle"));
  app.start();
}

function appendElementWithPropertiesAndHandler(element, props, contents, callback, nest) {
  appendElementWithProperties(element, props, contents, nest).on("click", callback);
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

function removeElement(selector) {
  var element = $(selector);
  element.fadeOut();
  try {
    sleep(0.4);
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
