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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name constants
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants/time}
*/
setReadOnly( ns, 'constants', require( '@stdlib/constants/time' ) );

/**
* @name base
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/time/base}
*/
setReadOnly( ns, 'base', require( './../base' ) );

/**
* @name currentYear
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/current-year}
*/
setReadOnly( ns, 'currentYear', require( './../current-year' ) );

/**
* @name dayOfQuarter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/day-of-quarter}
*/
setReadOnly( ns, 'dayOfQuarter', require( './../day-of-quarter' ) );

/**
* @name dayOfYear
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/day-of-year}
*/
setReadOnly( ns, 'dayOfYear', require( './../day-of-year' ) );

/**
* @name daysInMonth
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/days-in-month}
*/
setReadOnly( ns, 'daysInMonth', require( './../days-in-month' ) );

/**
* @name daysInYear
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/days-in-year}
*/
setReadOnly( ns, 'daysInYear', require( './../days-in-year' ) );

/**
* @name duration2ms
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/duration2ms}
*/
setReadOnly( ns, 'duration2ms', require( './../duration2ms' ) );

/**
* @name hoursInMonth
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/hours-in-month}
*/
setReadOnly( ns, 'hoursInMonth', require( './../hours-in-month' ) );

/**
* @name hoursInYear
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/hours-in-year}
*/
setReadOnly( ns, 'hoursInYear', require( './../hours-in-year' ) );

/**
* @name isoWeeksInYear
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/iso-weeks-in-year}
*/
setReadOnly( ns, 'isoWeeksInYear', require( './../iso-weeks-in-year' ) );

/**
* @name minutesInMonth
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/minutes-in-month}
*/
setReadOnly( ns, 'minutesInMonth', require( './../minutes-in-month' ) );

/**
* @name minutesInYear
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/minutes-in-year}
*/
setReadOnly( ns, 'minutesInYear', require( './../minutes-in-year' ) );

/**
* @name ms2duration
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/ms2duration}
*/
setReadOnly( ns, 'ms2duration', require( './../ms2duration' ) );

/**
* @name now
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/now}
*/
setReadOnly( ns, 'now', require( './../now' ) );

/**
* @name quarterOfYear
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/quarter-of-year}
*/
setReadOnly( ns, 'quarterOfYear', require( './../quarter-of-year' ) );

/**
* @name secondsInMonth
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/seconds-in-month}
*/
setReadOnly( ns, 'secondsInMonth', require( './../seconds-in-month' ) );

/**
* @name secondsInYear
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/seconds-in-year}
*/
setReadOnly( ns, 'secondsInYear', require( './../seconds-in-year' ) );

/**
* @name tic
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/tic}
*/
setReadOnly( ns, 'tic', require( './../tic' ) );

/**
* @name toc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/time/toc}
*/
setReadOnly( ns, 'toc', require( './../toc' ) );


// EXPORTS //

module.exports = ns;

