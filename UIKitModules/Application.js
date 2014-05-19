function Application(startFunc, name, root) {
  this.name = name;
  this.UIKitVersion = 1.0;
  this.UIRoot = root;

  this.start = startFunc;
}
