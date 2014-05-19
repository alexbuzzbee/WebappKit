var UIRoot, app;

function UIInit(callback, appName) {
  UIRoot = $("#contentRectangle");
  app = new Application(callback, appName);
  app.start();
}

function appendElementWithID(element, id, contents, nest) {
  return appendElementWithProperties(element, 'id="' + id + '"', contents, nest);
}
  
function appendElementWithClass(element, cls, contents, nest) {
  return appendElementWithProperties(element, 'class="' + cls + '"', contents, nest);
}

function appendElementWithProperties(element, props, contents, nest) {
  if (!nest) {
    nest = UIRoot;
  } else {
    nest = $(nest);
  }
  return nest.append("<" + element + " " + props + ">" + contents + "</" + element + ">");
}

function UIReady() {
  UIRoot.fadeIn();
}

function setTitle(newTitle) {
  $("title").text(newTitle);
}
