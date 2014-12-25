window.webappkit = {
  app: null,
  version: 2.0
};

webappkit.init = function(callback, appName) {
  this.app = new this.Application(callback, appName, $("#contentRectangle"));
  $("#loading").find("h1").text(this.app.name + " is loading.");
  this.app.start();
};

webappkit.loadModule = function(filename, callback, failureCallback) {
  if (failureCallback) {
    return $.getScript(filename).done(callback).fail(failureCallback);
  } else {
    return $.getScript(filename).done(callback);
  }
};

webappkit.setTitle = function(newTitle) {
  $("title").text(newTitle);
};
