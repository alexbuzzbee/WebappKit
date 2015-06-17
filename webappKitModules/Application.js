webappkit.Application = function(startFunc, name, root) {
  this.name = name;
  this.webappKitVersion = webappkit.version;
  this.UIRoot = root;

  this.start = startFunc;
};
webappkit.Application.prototype = {

appendElementWithIDAndHandler: function(element, id, contents, callback, nest) {
  return this.appendElementWithID(element, id, contents, nest).on("click", callback);
},

appendElementWithClassAndHandler: function(element, cls, contents, callback, nest) {
  return this.appendElementWithClass(element, cls, contents, nest).on("click", callback);
},

appendElementWithID: function(element, id, contents, nest) {
  return this.appendElementWithProperties(element, 'id="' + id + '"', contents, nest);
},

appendElementWithClass: function(element, cls, contents, nest) {
  return this.appendElementWithProperties(element, 'class="' + cls + '"', contents, nest);
},

appendElementWithProperties: function(element, props, contents, nest) {
  var jqObject;
  if (!nest) {
    nest = this.UIRoot;
  } else {
    nest = $(nest);
  }
  jqObject = $("<" + element + " " + props + ">" + contents + "</" + element + ">");
  return jqObject.appendTo(nest);
},

appendSelfClosingElementWithProperties: function(element, props, nest) {
  return this.appendSelfClosingElement(element + " " + props, nest);
},

appendSelfClosingElement: function(element, nest) {
  var jqObject;
  if (!nest) {
    nest = this.UIRoot;
  } else {
    nest = $(nest);
  }
  jqObject = $("<" + element + " />");
  return jqObject.appendTo(nest);
},

removeElement: function(selector) {
  var element = $(selector);
  element.fadeOut();
  setTimeout(function() {
    element.remove();
    }, 500);
},

UIReady: function() {
  $("#loading").remove();
  this.UIRoot.fadeIn();
}
};
