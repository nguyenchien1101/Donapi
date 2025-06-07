
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-flatten-children.cjs.production.min.js')
} else {
  module.exports = require('./react-flatten-children.cjs.development.js')
}
