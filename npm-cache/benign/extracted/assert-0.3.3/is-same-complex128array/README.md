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

# isSameComplex128Array

> Test if two arguments are both [Complex128Arrays][@stdlib/array/complex128] and have the [same values][@stdlib/assert/is-same-value].

<section class="usage">

## Usage

```javascript
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
```

#### isSameComplex128Array( v1, v2 )

Tests if two arguments are both [Complex128Arrays][@stdlib/array/complex128] and have the [same values][@stdlib/assert/is-same-value].

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var x = new Complex128Array( [ 1.0, 2.0 ] );
var y = new Complex128Array( [ 1.0, 2.0 ] );
var bool = isSameComplex128Array( x, y );
// returns true

bool = isSameComplex128Array( x, [ 1.0, 2.0 ] );
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
var Complex128Array = require( '@stdlib/array/complex128' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var out = isSameComplex128Array( x, y );
// returns true

x = new Complex128Array( [ -0.0, 0.0, -0.0, 0.0 ] );
y = new Complex128Array( [ 0.0, -0.0, 0.0, -0.0 ] );
out = isSameComplex128Array( x, y );
// returns false

x = new Complex128Array( [ NaN, NaN, NaN, NaN ] );
y = new Complex128Array( [ NaN, NaN, NaN, NaN ] );
out = isSameComplex128Array( x, y );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-complex128array`][@stdlib/assert/is-complex128array]</span><span class="delimiter">: </span><span class="description">test if a value is a Complex128Array.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-complex64array`][@stdlib/assert/is-same-complex64array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Complex64Arrays and have the same values.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-float64array`][@stdlib/assert/is-same-float64array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Float64Arrays and have the same values.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-value`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex128]: https://www.npmjs.com/package/@stdlib/array-complex128

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

<!-- <related-links> -->

[@stdlib/assert/is-complex128array]: https://github.com/stdlib-js/assert/tree/main/is-complex128array

[@stdlib/assert/is-same-complex64array]: https://github.com/stdlib-js/assert/tree/main/is-same-complex64array

[@stdlib/assert/is-same-float64array]: https://github.com/stdlib-js/assert/tree/main/is-same-float64array

<!-- </related-links> -->

</section>

<!-- /.links -->
