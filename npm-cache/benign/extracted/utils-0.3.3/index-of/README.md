<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# indexOf

> Return the first index at which a given element can be found.

<section class="usage">

## Usage

```javascript
var indexOf = require( '@stdlib/utils/index-of' );
```

#### indexOf( arr, searchElement\[, fromIndex] )

Returns the first index at which a given element can be found.

```javascript
var arr = [ 4, 3, 2, 1 ];

var idx = indexOf( arr, 3 );
// returns 1
```

If a `searchElement` is **not** present in an input `array`, the function returns `-1`.

```javascript
var arr = [ 4, 3, 2, 1 ];

var idx = indexOf( arr, 5 );
// returns -1
```

By default, the implementation searches an input `array` starting from the first element. To start searching from a different element, specify a `fromIndex`.

```javascript
var arr = [ 1, 2, 3, 4, 5, 2, 6 ];

var idx = indexOf( arr, 2, 3 );
// returns 5
```

If a `fromIndex` exceeds the input `array` length, the function returns `-1`.

```javascript
var arr = [ 1, 2, 3, 4, 2, 5 ];

var idx = indexOf( arr, 2, 10 );
// returns -1
```

If a `fromIndex` is less than `0`, the starting index is determined relative to the last index (with the last index being equivalent to `fromIndex = -1`).

```javascript
var arr = [ 1, 2, 3, 4, 5, 2, 6, 2 ];

var idx = indexOf( arr, 2, -4 );
// returns 5

idx = indexOf( arr, 2, -1 );
// returns 7
```

If `fromIndex` is less than `0` **and** its absolute value exceeds the input `array` length, the function searches the entire input `array`.

```javascript
var arr = [ 1, 2, 3, 4, 5, 2, 6 ];

var idx = indexOf( arr, 2, -10 );
// returns 1
```

The first argument is not limited to `arrays`, but may be any [array-like][@stdlib/assert/is-array-like] `object`.

```javascript
var str = 'bebop';

var idx = indexOf( str, 'o' );
// returns 3
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Search is performed using **strict equality** comparison. Thus,

    ```javascript
    var arr = [ 1, [ 1, 2, 3 ], 3 ];

    var idx = indexOf( arr, [ 1, 2, 3 ] );
    // returns -1
    ```

-   This implementation is **not** [ECMAScript Standard][ecma-262] compliant. Notably, the [standard][ecma-262] specifies that an `array` be searched by calling `hasOwnProperty` (thus, for most cases, incurring a performance penalty), and the [standard][ecma-262] does **not** accommodate a `searchElement` equal to `NaN`. In this implementation, the following is possible:

    ```javascript
    // Locate the first element which is NaN...
    var arr = [ 1, NaN, 2, NaN ];

    var idx = indexOf( arr, NaN );
    // returns 1

    // Prototype properties may be searched as well...
    function Obj() {
        this[ 0 ] = 'beep';
        this[ 1 ] = 'boop';
        this[ 2 ] = 'woot';
        this[ 3 ] = 'bap';
        this.length = 4;
        return this;
    }
    Obj.prototype[ 2 ] = 'bop';

    var obj = new Obj();

    idx = indexOf( obj, 'bop' );
    // returns -1

    delete obj[ 2 ];

    idx = indexOf( obj, 'bop' );
    // returns 2
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var indexOf = require( '@stdlib/utils/index-of' );

var arr;
var obj;
var str;
var idx;
var i;

// Arrays...
arr = new Array( 10 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = i * 10;
}
idx = indexOf( arr, 40 );

console.log( idx );
// => 4

// Array-like objects...
obj = {
    '0': 'beep',
    '1': 'boop',
    '2': 'bap',
    '3': 'bop',
    'length': 4
};

idx = indexOf( obj, 'bap' );

console.log( idx );
// => 2

// Strings...
str = 'beepboopbop';

idx = indexOf( str, 'o' );

console.log( idx );
// => 5
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262]: http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.indexof

[@stdlib/assert/is-array-like]: https://www.npmjs.com/package/@stdlib/assert-is-array-like

</section>

<!-- /.links -->
