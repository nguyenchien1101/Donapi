/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Return a JSON representation of a typed array.
*
* @module @stdlib/array-to-json
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var typedarray2json = require( '@stdlib/array-to-json' );
*
* var arr = new Float64Array( [ 5.0, 3.0 ] );
* var json = typedarray2json( arr );
* // returns { 'type': 'Float64Array', 'data': [ 5.0, 3.0 ] }
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

