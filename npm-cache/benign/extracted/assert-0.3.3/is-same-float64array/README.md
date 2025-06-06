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

# isSameFloat64Array

> Test if two arguments are both [Float64Arrays][@stdlib/array/float64] and have the [same values][@stdlib/assert/is-same-value].

<section class="usage">

## Usage

```javascript
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
```

#### isSameFloat64Array( v1, v2 )

Tests if two arguments are both [Float64Arrays][@stdlib/array/float64] and have the [same values][@stdlib/assert/is-same-value].

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0 ] );
var y = new Float64Array( [ 1.0, 2.0 ] );
var bool = isSameFloat64Array( x, y );
// returns true

bool = isSameFloat64Array( x, [ 1.0, 2.0 ] );
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
var Float64Array = require( '@stdlib/array/float64' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );

var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
var out = isSameFloat64Array( x, y );
// returns true

x = new Float64Array( [ -0.0, 0.0, -0.0 ] );
y = new Float64Array( [ 0.0, -0.0, 0.0 ] );
out = isSameFloat64Array( x, y );
// returns false

x = new Float64Array( [ NaN, NaN, NaN ] );
y = new Float64Array( [ NaN, NaN, NaN ] );
out = isSameFloat64Array( x, y );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-same-float32array`][@stdlib/assert/is-same-float32array]</span><span class="delimiter">: </span><span class="description">test if two arguments are both Float32Arrays and have the same values.</span>
-   <span class="package-name">[`@stdlib/assert/is-same-value`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://www.npmjs.com/package/@stdlib/array-float64

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

<!-- <related-links> -->

[@stdlib/assert/is-same-float32array]: https://github.com/stdlib-js/assert/tree/main/is-same-float32array

<!-- </related-links> -->

</section>

<!-- /.links -->
