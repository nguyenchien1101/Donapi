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

# mapReduceRight

> Perform a single-pass map-reduce operation against each element in an array while iterating from right to left and return the accumulated result.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mapReduceRight = require( '@stdlib/utils/map-reduce-right' );
```

#### mapReduceRight( arr, initial, mapper, reducer\[, thisArg ] )

Performs a map-reduce operation against each element in an array while iterating from right to left and returns the accumulated result.

```javascript
function square( value ) {
    return value * value;
}

function sum( accumulator, value ) {
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var out = mapReduceRight( arr, 0, square, sum );
// returns 30
```

The function accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
var array = require( '@stdlib/ndarray/array' );

function square( value ) {
    return value * value;
}

function sum( accumulator, value ) {
    return accumulator + value;
}

var opts = {
    'dtype': 'generic'
};
var arr = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );

var out = mapReduceRight( arr, 0, square, sum );
// returns 91
```

The mapping function is provided the following arguments:

-   **value**: array element.
-   **index**: element index.
-   **arr**: input array.

The reducing function is provided the following arguments:

-   **accumulator**: accumulated value.
-   **value**: result of applying the mapping function to the current array element.
-   **index**: element index.
-   **arr**: input array.

To set the `this` context when invoking the reducing function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function square( value ) {
    return value * value;
}

function sum( accumulator, value ) {
    this.count += 1;
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var ctx = {
    'count': 0
};

var out = mapReduceRight( arr, 0, square, sum, ctx );
// returns 30

var mean = out / ctx.count;
// returns 7.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function supports array-like objects exposing getters and setters for array element access (e.g., [`Complex64Array`][@stdlib/array/complex64], [`Complex128Array`][@stdlib/array/complex128], etc).

    ```javascript
    var Complex64Array = require( '@stdlib/array/complex64' );
    var Complex64 = require( '@stdlib/complex/float32/ctor' );
    var cceil = require( '@stdlib/math/base/special/cceil' );
    var realf = require( '@stdlib/complex/float32/real' );
    var imagf = require( '@stdlib/complex/float32/imag' );

    function sum( acc, z ) {
        var re1 = realf( acc );
        var im1 = imagf( acc );
        var re2 = realf( z );
        var im2 = imagf( z );
        return new Complex64( re1+re2, im1+im2 );
    }

    var x = new Complex64Array( [ 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5 ] );

    var v = mapReduceRight( x, new Complex64( 0.0, 0.0 ), cceil, sum );
    // returns <Complex64>

    var re = realf( v );
    // returns 20.0

    var im = imagf( v );
    // returns 24.0
    ```

-   For [`ndarray`][@stdlib/ndarray/ctor]-like objects, the function performs a single-pass map-reduce operation over the entire input [`ndarray`][@stdlib/ndarray/ctor] (i.e., higher-order [`ndarray`][@stdlib/ndarray/ctor] dimensions are flattened to a single-dimension).

-   When applying a function to [`ndarray`][@stdlib/ndarray/ctor]-like objects, performance will be best for [`ndarray`][@stdlib/ndarray/ctor]-like objects which are single-segment contiguous.

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
var abs = require( '@stdlib/math/base/special/abs' );
var array = require( '@stdlib/ndarray/array' );
var mapReduceRight = require( '@stdlib/utils/map-reduce-right' );

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
var f1 = naryFunction( abs, 1 );

// Create an explicit binary function:
var f2 = naryFunction( add, 2 );

// Compute the sum of absolute values:
var out = mapReduceRight( x, 0, f1, f2 );

console.log( 'x:' );
console.log( x.data );

console.log( 'sum: %d', out );
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

-   <span class="package-name">[`@stdlib/utils/map-right`][@stdlib/utils/map-right]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils/map-reduce`][@stdlib/utils/map-reduce]</span><span class="delimiter">: </span><span class="description">perform a single-pass map-reduce operation against each element in an array and return the accumulated result.</span>
-   <span class="package-name">[`@stdlib/utils/reduce-right`][@stdlib/utils/reduce-right]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array while iterating from right to left and return the accumulated result.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://www.npmjs.com/package/@stdlib/ndarray-ctor

[@stdlib/array/complex64]: https://www.npmjs.com/package/@stdlib/array-complex64

[@stdlib/array/complex128]: https://www.npmjs.com/package/@stdlib/array-complex128

<!-- <related-links> -->

[@stdlib/utils/map-right]: https://github.com/stdlib-js/utils/tree/main/map-right

[@stdlib/utils/map-reduce]: https://github.com/stdlib-js/utils/tree/main/map-reduce

[@stdlib/utils/reduce-right]: https://github.com/stdlib-js/utils/tree/main/reduce-right

<!-- </related-links> -->

</section>

<!-- /.links -->
