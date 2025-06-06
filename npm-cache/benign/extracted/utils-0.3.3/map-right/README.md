<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# mapRight

> Apply a function to each element in an array and assign the result to an element in an output array, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mapRight = require( '@stdlib/utils/map-right' );
```

<a name="fcn-map-right"></a>

#### mapRight( arr, fcn\[, thisArg] )

Applies a function to each element in an array and assigns the result to an element in a new array, iterating from right to left.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );

var arr = [ -1, -2, -3, -4, -5, -6 ];

var out = mapRight( arr, naryFunction( abs, 1 ) );
// returns [ 1, 2, 3, 4, 5, 6 ]
```

The function accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );
var array = require( '@stdlib/ndarray/array' );

var opts = {
    'dtype': 'generic'
};
var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );

var out = mapRight( arr, naryFunction( abs, 1 ) );
// returns <ndarray>

var v = out.get( 1, 1 );
// returns 5
```

The applied function is provided the following arguments:

-   **value**: array element.
-   **index**: element index.
-   **arr**: input array.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

function fcn( v ) {
    this.count += 1;
    return abs( v );
}

var arr = [ -1, -2, -3, -4, -5, -6 ];

var ctx = {
    'count': 0
};

var out = mapRight( arr, fcn, ctx );
// returns [ 1, 2, 3, 4, 5, 6 ]

var cnt = ctx.count;
// returns 6
```

<a name="method-map-right-assign"></a>

#### mapRight.assign( arr, out, fcn\[, thisArg] )

Applies a function to each element in an array and assigns the result to an element in an output array, iterating from right to left.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );

var arr = [ -1, -2, -3, -4, -5, -6 ];
var out = [ 0, 0, 0, 0, 0, 0 ];

mapRight.assign( arr, out, naryFunction( abs, 1 ) );

console.log( out );
// => [ 1, 2, 3, 4, 5, 6 ]
```

The method accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );
var array = require( '@stdlib/ndarray/array' );

var opts = {
    'dtype': 'generic',
    'shape': [ 2, 3 ]
};
var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
var out = array( opts );

mapRight.assign( arr, out, naryFunction( abs, 1 ) );

var v = out.get( 1, 1 );
// returns 5
```

Input and output arrays must be either both array-like objects or both [`ndarray`][@stdlib/ndarray/ctor]-like objects. If input and output arrays are both array-like objects, both arrays **must** have the same number of elements.

If input and output arrays are both [`ndarray`][@stdlib/ndarray/ctor]-like objects, the arrays **must** be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes]. To map from an input [`ndarray`][@stdlib/ndarray/ctor] to an output [`ndarray`][@stdlib/ndarray/ctor] which has the same rank (i.e., dimensionality) and the same number of elements, but which is not [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes], reshape the arrays prior to invocation.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );
var array = require( '@stdlib/ndarray/array' );

var opts = {
    'dtype': 'generic',
    'shape': [ 2, 3 ]
};
var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );

opts = {
    'dtype': 'generic',
    'shape': [ 2, 2, 3 ]  // broadcast compatible shape
};
var out = array( opts );

mapRight.assign( arr, out, naryFunction( abs, 1 ) );

var v = out.get( 0, 1, 1 );
// returns 5

v = out.get( 1, 1, 1 );
// returns 5
```

In general, avoid providing output [`ndarray`][@stdlib/ndarray/ctor]-like objects which are [non-contiguous][@stdlib/ndarray/base/assert/is-contiguous] views containing one or more elements referring to the **same** memory location. Writing to an overlapping [non-contiguous][@stdlib/ndarray/base/assert/is-contiguous] view is likely to simultaneously affect multiple elements and yield unexpected results.

The applied function is provided the same arguments as with [`mapRight`](#fcn-map-right).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The [`mapRight`](#fcn-map-right) function **always** returns an output value having a "generic" data type. For example, if provided an array-like object, the function returns a generic `array`. If provided an [`ndarray`][@stdlib/ndarray/ctor], the function returns an [`ndarray`][@stdlib/ndarray/ctor] having a "generic" data type.

    Accordingly, in contrast to [`TypedArray.prototype.map()`][mdn-typedarray-map], when provided a typed array, the [`mapRight`](#fcn-map-right) function does **not** return a typed array of the same type. To assign results to a typed array, use the [`mapRight.assign`](#method-map-right-assign) method.

-   Both [`mapRight`](#fcn-map-right) and [`mapRight.assign`](#method-map-right-assign) accept array-like objects exposing getters and setters for array element access (e.g., [`Complex64Array`][@stdlib/array/complex64], [`Complex128Array`][@stdlib/array/complex128], etc).

    ```javascript
    var Complex64Array = require( '@stdlib/array/complex64' );
    var Complex64 = require( '@stdlib/complex/float32/ctor' );
    var realf = require( '@stdlib/complex/float32/real' );
    var imagf = require( '@stdlib/complex/float32/imag' );

    function scale( z ) {
        return new Complex64( realf(z)*10.0, imagf(z)*10.0 );
    }

    var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
    var y = new Complex64Array( 4 );

    mapRight.assign( x, y, scale );

    var v = y.get( 0 );

    var re = realf( v );
    // returns 10.0

    var im = imagf( v );
    // returns 20.0
    ```

-   When applying a function to [`ndarray`][@stdlib/ndarray/ctor]-like objects, performance will be best for [`ndarray`][@stdlib/ndarray/ctor]-like objects which are single-segment contiguous. For non-contiguous arrays, see [`@stdlib/ndarray/base/unary`][@stdlib/ndarray/base/unary].

-   Both [`mapRight`](#fcn-map-right) and [`mapRight.assign`](#method-map-right-assign) do **not** skip `undefined` elements.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledarrayBy = require( '@stdlib/array/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs2 = require( '@stdlib/math/base/special/abs2' );
var array = require( '@stdlib/ndarray/array' );
var mapRight = require( '@stdlib/utils/map-right' );

function fill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'generic', rand );
}

// Create a two-dimensional ndarray (i.e., a matrix):
var x = array( filledarrayBy( 10, 'generic', fill ), {
    'dtype': 'generic',
    'flatten': true
});

// Create an explicit unary function:
var f = naryFunction( abs2, 1 );

// Compute the element-wise squared absolute value...
var y = mapRight( x, f );

console.log( 'x:' );
console.log( x.data );

console.log( 'y:' );
console.log( y.data );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/map`][@stdlib/utils/map]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array.</span>
-   <span class="package-name">[`@stdlib/utils/reduce`][@stdlib/utils/reduce]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array and return the accumulated result.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://www.npmjs.com/package/@stdlib/ndarray-ctor

[@stdlib/ndarray/base/unary]: https://www.npmjs.com/package/@stdlib/ndarray-base-unary

[@stdlib/ndarray/base/broadcast-shapes]: https://www.npmjs.com/package/@stdlib/ndarray-base-broadcast-shapes

[@stdlib/ndarray/base/assert/is-contiguous]: https://www.npmjs.com/package/@stdlib/ndarray-base-assert-is-contiguous

[@stdlib/array/complex64]: https://www.npmjs.com/package/@stdlib/array-complex64

[@stdlib/array/complex128]: https://www.npmjs.com/package/@stdlib/array-complex128

[mdn-typedarray-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map

<!-- <related-links> -->

[@stdlib/utils/map]: https://github.com/stdlib-js/utils/tree/main/map

[@stdlib/utils/reduce]: https://github.com/stdlib-js/utils/tree/main/reduce

<!-- </related-links> -->

</section>

<!-- /.links -->
