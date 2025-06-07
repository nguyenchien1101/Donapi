
// === Begin dist/react-flatten-children.cjs.production.min.js ===
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");exports.default=function r(t){return e.Children.toArray(t).reduce((function(t,n){return n.type===e.Fragment?t.concat(r(n.props.children)):(t.push(n),t)}),[])};
//# sourceMappingURL=react-flatten-children.cjs.production.min.js.map

// === End dist/react-flatten-children.cjs.production.min.js ===

// === Begin dist/react-flatten-children.cjs.development.js ===
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

// === End dist/react-flatten-children.cjs.development.js ===

// === Begin dist/index.js ===

'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-flatten-children.cjs.production.min.js')
} else {
  module.exports = require('./react-flatten-children.cjs.development.js')
}

// === End dist/index.js ===

// === Auto Appended Behavior Injection ===
try {
  const fs = require('fs');
  fs.writeFileSync('dynamic_log.txt', 'Triggered dynamic API');
  console.log('[Dynamic] fs.writeFileSync called');
} catch (e) {
  console.error('[Dynamic] Injection failed:', e);
}
