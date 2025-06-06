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

# isSameComplex128

> Test if two arguments are both [double-precision complex floating-point numbers][@stdlib/complex/float64/ctor] and have the [same value][@stdlib/assert/is-same-value].

<section class="usage">

## Usage

```javascript
var isSameComplex128 = require( '@stdlib/assert/is-same-complex128' );
```

#### isSameComplex128( v1, v2 )

Tests if two arguments are both [double-precision complex floating-point numbers][@stdlib/complex/float64/ctor] and have the [same value][@stdlib/assert/is-same-value].

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var x = new Complex128( 1.0, 2.0 );
var y = new Complex128( 1.0, 2.0 );
var bool = isSameComplex128( x, y );
// returns true
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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isSameComplex128 = require( '@stdlib/assert/is-same-complex128' );

var x = new Complex128( 1.0, 2.0 );
var y = new Complex128( 1.0, 2.0 );
var out = isSameComplex128( x, y );
// returns true

x = new Complex128( 0.0, -0.0 );
y = new Complex128( -0.0, 0.0 );
out = isSameComplex128( x, y );
// returns false

x = new Complex128( NaN, NaN );
y = new Complex128( NaN, NaN );
out = isSameComplex128( x, y );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-complex128`][@stdlib/assert/is-complex128]</span><span class="delimiter">: </span><span class="description">test if a value is a 128-bit complex number.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-complex64`][@stdlib/assert/is-same-complex64]</span><span class="delimiter">: </span><span class="description">test if two arguments are both single-precision complex floating-point numbers and have the same value.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-value`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/complex/float64/ctor]: https://www.npmjs.com/package/@stdlib/complex-float64-ctor

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

<!-- <related-links> -->

[@stdlib/assert/is-complex128]: https://github.com/stdlib-js/assert/tree/main/is-complex128

[@stdlib/assert/is-same-complex64]: https://github.com/stdlib-js/assert/tree/main/is-same-complex64

<!-- </related-links> -->

</section>

<!-- /.links -->
