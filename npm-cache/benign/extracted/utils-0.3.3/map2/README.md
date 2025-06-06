<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# map2

> Apply a function to elements in two input arrays and assign the results to an output array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var map2 = require( '@stdlib/utils/map2' );
```

<a name="fcn-map2"></a>

#### map2( x, y, fcn\[, thisArg] )

Applies a function to elements in two input arrays and assigns the results to a new array.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var add = require( '@stdlib/math/base/ops/add' );

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = [ 1, 1, 1, 1, 1, 1 ];

var out = map2( x, y, naryFunction( add, 2 ) );
// returns [ 2, 3, 4, 5, 6, 7 ]
```

The function accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var add = require( '@stdlib/math/base/ops/add' );
var array = require( '@stdlib/ndarray/array' );

var opts = {
    'dtype': 'generic'
};
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );

var out = map2( x, y, naryFunction( add, 2 ) );
// returns <ndarray>

var v = out.get( 1, 1 );
// returns 6
```

The applied function is provided the following arguments:

-   **v1**: element from first input array.
-   **v2**: element from second input array.
-   **idx**: element index.
-   **arrays**: input arrays.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var add = require( '@stdlib/math/base/ops/add' );

function fcn( v1, v2 ) {
    this.count += 1;
    return add( v1, v2 );
}

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = [ 1, 1, 1, 1, 1, 1 ];

var ctx = {
    'count': 0
};

var out = map2( x, y, fcn, ctx );
// returns [ 2, 3, 4, 5, 6, 7 ]

var cnt = ctx.count;
// returns 6
```

<a name="method-map2-assign"></a>

#### map2.assign( x, y, out, fcn\[, thisArg] )

Applies a function to elements in two input arrays and assigns the results to an output array `out`.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var add = require( '@stdlib/math/base/ops/add' );

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = [ 1, 1, 1, 1, 1, 1 ];
var out = [ 0, 0, 0, 0, 0, 0 ];

map2.assign( x, y, out, naryFunction( add, 2 ) );

console.log( out );
// => [ 2, 3, 4, 5, 6, 7 ]
```

The method accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var add = require( '@stdlib/math/base/ops/add' );
var array = require( '@stdlib/ndarray/array' );

var opts = {
    'dtype': 'generic',
    'shape': [ 2, 3 ]
};
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
var out = array( opts );

map2.assign( x, y, out, naryFunction( add, 2 ) );

var v = out.get( 1, 1 );
// returns 6
```

Input and output arrays must be either all array-like objects or all [`ndarray`][@stdlib/ndarray/ctor]-like objects. If input and output arrays are array-like objects, all arrays **must** have the same number of elements.

If input and output arrays are [`ndarray`][@stdlib/ndarray/ctor]-like objects, the arrays **must** be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes]. To map from one or more input [`ndarrays`][@stdlib/ndarray/ctor] to an output [`ndarray`][@stdlib/ndarray/ctor] which has the same rank (i.e., dimensionality) and the same number of elements, but which is not [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes], reshape the arrays prior to invocation.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var add = require( '@stdlib/math/base/ops/add' );
var array = require( '@stdlib/ndarray/array' );

var opts = {
    'dtype': 'generic',
    'shape': [ 2, 3 ]
};
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );

opts = {
    'dtype': 'generic',
    'shape': [ 2, 2, 3 ]  // broadcast compatible shape
};
var out = array( opts );

map2.assign( x, y, out, naryFunction( add, 2 ) );

var v = out.get( 0, 1, 1 );
// returns 6

v = out.get( 1, 1, 1 );
// returns 6
```

In general, avoid providing output [`ndarray`][@stdlib/ndarray/ctor]-like objects which are [non-contiguous][@stdlib/ndarray/base/assert/is-contiguous] views containing one or more elements referring to the **same** memory location. Writing to an overlapping [non-contiguous][@stdlib/ndarray/base/assert/is-contiguous] view is likely to simultaneously affect multiple elements and yield unexpected results.

The applied function is provided the same arguments as with [`map2`](#fcn-map2).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The [`map2`](#fcn-map2) function **always** returns an output value having a "generic" data type. For example, if provided array-like objects, the function returns a generic `array`. If provided [`ndarrays`][@stdlib/ndarray/ctor], the function returns an [`ndarray`][@stdlib/ndarray/ctor] having a "generic" data type.

    Accordingly, when provided a typed array, the [`map2`](#fcn-map2) function does **not** return a typed array of the same type. To assign results to a typed array, use the [`map2.assign`](#method-map2-assign) method.

-   Both [`map2`](#fcn-map2) and [`map2.assign`](#method-map2-assign) accept array-like objects exposing getters and setters for array element access (e.g., [`Complex64Array`][@stdlib/array/complex64], [`Complex128Array`][@stdlib/array/complex128], etc).

    ```javascript
    var naryFunction = require( '@stdlib/utils/nary-function' );
    var Complex64Array = require( '@stdlib/array/complex64' );
    var Complex64 = require( '@stdlib/complex/float32/ctor' );
    var realf = require( '@stdlib/complex/float32/real' );
    var imagf = require( '@stdlib/complex/float32/imag' );
    var add = require( '@stdlib/complex/float32/base/add' );

    var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
    var y = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
    var z = new Complex64Array( 4 );

    map2.assign( x, y, z, naryFunction( add, 2 ) );

    var v = z.get( 0 );

    var re = realf( v );
    // returns 2.0

    var im = imagf( v );
    // returns 3.0
    ```

-   When applying a function to [`ndarray`][@stdlib/ndarray/ctor]-like objects, performance will be best for [`ndarray`][@stdlib/ndarray/ctor]-like objects which are single-segment contiguous. For non-contiguous arrays, see [`@stdlib/ndarray/base/binary`][@stdlib/ndarray/base/binary].

-   Both [`map2`](#fcn-map2) and [`map2.assign`](#method-map2-assign) do **not** skip `undefined` elements.

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
var add = require( '@stdlib/math/base/ops/add' );
var array = require( '@stdlib/ndarray/array' );
var map2 = require( '@stdlib/utils/map2' );

function fill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'generic', rand );
}

// Create two-dimensional ndarrays (i.e., matrices):
var opts = {
    'dtype': 'generic',
    'flatten': true
};
var x = array( filledarrayBy( 10, opts.dtype, fill ), opts );
var y = array( filledarrayBy( 10, opts.dtype, fill ), opts );

// Create an explicit binary function:
var f = naryFunction( add, 2 );

// Compute element-wise sums...
var z = map2( x, y, f );

console.log( 'x:' );
console.log( x.data );

console.log( 'y:' );
console.log( y.data );

console.log( 'z:' );
console.log( z.data );
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://www.npmjs.com/package/@stdlib/ndarray-ctor

[@stdlib/ndarray/base/binary]: https://www.npmjs.com/package/@stdlib/ndarray-base-binary

[@stdlib/ndarray/base/broadcast-shapes]: https://www.npmjs.com/package/@stdlib/ndarray-base-broadcast-shapes

[@stdlib/ndarray/base/assert/is-contiguous]: https://www.npmjs.com/package/@stdlib/ndarray-base-assert-is-contiguous

[@stdlib/array/complex64]: https://www.npmjs.com/package/@stdlib/array-complex64

[@stdlib/array/complex128]: https://www.npmjs.com/package/@stdlib/array-complex128

<!-- <related-links> -->

[@stdlib/utils/map]: https://github.com/stdlib-js/utils/tree/main/map

<!-- </related-links> -->

</section>

<!-- /.links -->
