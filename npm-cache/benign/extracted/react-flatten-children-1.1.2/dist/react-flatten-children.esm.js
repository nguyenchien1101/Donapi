import { Children, Fragment } from 'react';

function flattenChildren(children) {
  var childrenArray = Children.toArray(children);
  return childrenArray.reduce(function (flatChildren, child) {
    if (child.type === Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children));
    }

    flatChildren.push(child);
    return flatChildren;
  }, []);
}

export default flattenChildren;
//# sourceMappingURL=react-flatten-children.esm.js.map
