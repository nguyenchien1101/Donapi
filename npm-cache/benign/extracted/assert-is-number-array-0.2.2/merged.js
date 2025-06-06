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
* Test if a value is an array-like object of numbers.
*
* @module @stdlib/assert-is-number-array
*
* @example
* var isNumberArray = require( '@stdlib/assert-is-number-array' );
*
* var bool = isNumberArray( [ 1, 2, 3 ] );
* // returns true
*
* bool = isNumberArray( [ '1', 2, 3 ] );
* // returns false
*
* @example
* var isNumberArray = require( '@stdlib/assert-is-number-array' ).primitives;
*
* var bool = isNumberArray( [ 1, 2, 3 ] );
* // returns true
*
* bool = isNumberArray( [ 1, new Number( 2 ) ] );
* // returns false
*
* @example
* var isNumberArray = require( '@stdlib/assert-is-number-array' ).objects;
*
* var bool = isNumberArray( [ new Number( 1 ), new Number( 2 ) ] );
* // returns true
*
* bool = isNumberArray( [ new Number( 1 ), 2 ] );
* // returns false
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var arrayfun = require( '@stdlib/assert-tools-array-like-function' );
var isNumber = require( '@stdlib/assert-is-number' );


// VARIABLES //

var isPrimitiveArray = arrayfun( isNumber.isPrimitive );
var isObjectArray = arrayfun( isNumber.isObject );


// MAIN //

var isNumberArray = arrayfun( isNumber );
setReadOnly( isNumberArray, 'primitives', isPrimitiveArray );
setReadOnly( isNumberArray, 'objects', isObjectArray );


// EXPORTS //

module.exports = isNumberArray;

