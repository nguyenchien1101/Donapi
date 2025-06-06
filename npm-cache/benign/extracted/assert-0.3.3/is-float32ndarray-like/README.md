<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# isFloat32ndarrayLike

> Test if a value is an [ndarray][@stdlib/ndarray/ctor]-like object containing single-precision floating-point numbers.

<section class="usage">

## Usage

```javascript
var isFloat32ndarrayLike = require( '@stdlib/assert/is-float32ndarray-like' );
```

#### isFloat32ndarrayLike( value )

Tests if a value is an [ndarray][@stdlib/ndarray/ctor]-like object whose underlying data type is `float32`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var arr = ndarray( 'float32', new Float32Array( [ 0, 0, 0, 0 ] ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

var bool = isFloat32ndarrayLike( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var Float32Array = require( '@stdlib/array/float32' );
var isFloat32ndarrayLike = require( '@stdlib/assert/is-float32ndarray-like' );

var buffer = new Float32Array( [ 0, 0, 0, 0 ] );
var arr = ndarray( 'float32', buffer, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

var out = isFloat32ndarrayLike( arr );
// returns true

out = isFloat32ndarrayLike( [ 1, 2, 3, 4 ] );
// returns false

out = isFloat32ndarrayLike( {} );
// returns false

out = isFloat32ndarrayLike( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-float64ndarray-like`][@stdlib/assert/is-float64ndarray-like]</span><span class="delimiter">: </span><span class="description">test if a value is an ndarray-like object containing double-precision floating-point numbers.</span>
-   <span class="package-name">[`@stdlib/assert/is-ndarray-like`][@stdlib/assert/is-ndarray-like]</span><span class="delimiter">: </span><span class="description">test if a value is ndarray-like.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://www.npmjs.com/package/@stdlib/ndarray-ctor

<!-- <related-links> -->

[@stdlib/assert/is-float64ndarray-like]: https://github.com/stdlib-js/assert/tree/main/is-float64ndarray-like

[@stdlib/assert/is-ndarray-like]: https://github.com/stdlib-js/assert/tree/main/is-ndarray-like

<!-- </related-links> -->

</section>

<!-- /.links -->
