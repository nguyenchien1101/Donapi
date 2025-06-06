<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isSameComplex64Array

> Test if two arguments are both [Complex64Arrays][@stdlib/array/complex64] and have the [same values][@stdlib/assert/is-same-value].

<section class="usage">

## Usage

```javascript
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
```

#### isSameComplex64Array( v1, v2 )

Tests if two arguments are both [Complex64Arrays][@stdlib/array/complex64] and have the [same values][@stdlib/assert/is-same-value].

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 1.0, 2.0 ] );
var y = new Complex64Array( [ 1.0, 2.0 ] );
var bool = isSameComplex64Array( x, y );
// returns true

bool = isSameComplex64Array( x, [ 1.0, 2.0 ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the [same value][@stdlib/assert/is-same-value].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var out = isSameComplex64Array( x, y );
// returns true

x = new Complex64Array( [ -0.0, 0.0, -0.0, 0.0 ] );
y = new Complex64Array( [ 0.0, -0.0, 0.0, -0.0 ] );
out = isSameComplex64Array( x, y );
// returns false

x = new Complex64Array( [ NaN, NaN, NaN, NaN ] );
y = new Complex64Array( [ NaN, NaN, NaN, NaN ] );
out = isSameComplex64Array( x, y );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-complex64array`][@stdlib/assert/is-complex64array]</span><span class="delimiter">: </span><span class="description">test if a value is a Complex64Array.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-complex128array`][@stdlib/assert/is-same-complex128array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Complex128Arrays and have the same values.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-float32array`][@stdlib/assert/is-same-float32array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Float32Arrays and have the same values.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-value`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex64]: https://www.npmjs.com/package/@stdlib/array-complex64

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

<!-- <related-links> -->

[@stdlib/assert/is-complex64array]: https://github.com/stdlib-js/assert/tree/main/is-complex64array

[@stdlib/assert/is-same-complex128array]: https://github.com/stdlib-js/assert/tree/main/is-same-complex128array

[@stdlib/assert/is-same-float32array]: https://github.com/stdlib-js/assert/tree/main/is-same-float32array

<!-- </related-links> -->

</section>

<!-- /.links -->
