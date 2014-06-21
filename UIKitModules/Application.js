function Application(startFunc, name, root) {
  this.name = name;
  this.UIKitVersion = UIK_VERSION;
  this.UIRoot = root;

  this.start = startFunc;
}
