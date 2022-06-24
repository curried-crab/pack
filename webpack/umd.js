(function (root, factory) {
  if (typeof define === 'function' && (define.amd || define.cmd)) {
    //AMD,CMD
    define(['b'], function (b) {
      return (root.returnExportsGlobal = factory(b))
    });
  } else if (typeof module === 'object' && module.exports) {
    //Node, CommonJS之类的
    module.exports = factory(require('b'));
  } else {
    //公开暴露给全局对象
    root.returnExports = factory(root.b);
  }
}(this, function (b) {
  return {};
}));
