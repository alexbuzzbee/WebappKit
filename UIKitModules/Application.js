function Application(startFunc, name, root) {
  this.name = name;
  this.UIKitVersion = 0.9;
  this.UIRoot = root;

  this.start = startFunc;
}
