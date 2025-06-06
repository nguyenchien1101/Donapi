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

// MODULES //

var getOwnPropertyDescriptors = require( './../../property-descriptors' );
var getOwnPropertySymbols = require( './../../property-symbols' );
var getPrototypeOf = require( './../../get-prototype-of' );
var objectKeys = require( './../../keys' );
var defineProperty = require( './../../define-property' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var Object = require( '@stdlib/object/ctor' );


// MAIN //

/**
* Returns an object's own and inherited property descriptors.
*
* ## Notes
*
* -   In contrast to the built-in `Object.getOwnPropertyDescriptors()`, this function returns an empty object if provided `undefined` or `null`, rather than throwing an error.
*
* @param {*} value - input object
* @returns {Object} own and inherited property descriptors
*
* @example
* var obj = {
*     'beep': 'boop',
*     'foo': 3.14
* };
*
* var desc = propertyDescriptorsIn( obj );
* // returns { 'beep': {...}, 'foo': {...}, ... }
*/
function propertyDescriptorsIn( value ) {
	var desc;
	var keys;
	var obj;
	var tmp;
	var i;

	if ( value === null || value === void 0 ) {
		return {};
	}
	// Cast the value to an object:
	obj = Object( value );

	// Walk the prototype chain collecting all property descriptors...
	desc = {};
	do {
		tmp = getOwnPropertyDescriptors( obj );
		keys = objectKeys( tmp );
		for ( i = 0; i < keys.length; i++ ) {
			// The first encountered property descriptor for a property name always takes precedence...
			if ( !hasOwnProp( desc, keys[ i ] ) ) {
				// The following is equivalent to `desc[ keys[i] ] = {...}`, but accounts for the possibility of a "poisoned" `Object` prototype (i.e., an `Object.prototype` having a property with a setter which throws).
				defineProperty( desc, keys[ i ], {
					'configurable': true,
					'enumerable': true,
					'writable': true,
					'value': tmp[ keys[ i ] ]
				});
			}
		}
		keys = getOwnPropertySymbols( tmp );
		for ( i = 0; i < keys.length; i++ ) {
			// The first encountered property descriptor for a symbol property always takes precedence...
			if ( !hasOwnProp( desc, keys[ i ] ) ) {
				// The following is equivalent to `desc[ keys[i] ] = {...}`, but accounts for the possibility of a "poisoned" `Object` prototype (i.e., an `Object.prototype` having a property with a setter which throws).
				defineProperty( desc, keys[ i ], {
					'configurable': true,
					'enumerable': true,
					'writable': true,
					'value': tmp[ keys[ i ] ]
				});
			}
		}
		obj = getPrototypeOf( obj );
	} while ( obj );

	return desc;
}


// EXPORTS //

module.exports = propertyDescriptorsIn;
