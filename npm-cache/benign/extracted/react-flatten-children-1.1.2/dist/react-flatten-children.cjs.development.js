'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function flattenChildren(children) {
  var childrenArray = React.Children.toArray(children);
  return childrenArray.reduce(function (flatChildren, child) {
    if (child.type === React.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children));
    }

    flatChildren.push(child);
    return flatChildren;
  }, []);
}

exports.default = flattenChildren;
//# sourceMappingURL=react-flatten-children.cjs.development.js.map
