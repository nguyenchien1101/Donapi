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

# isndarrayLike

> Test if a value is [ndarray][@stdlib/ndarray/ctor]-like.

<section class="usage">

## Usage

```javascript
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
```

#### isndarrayLike( value )

Tests if a value is [ndarray][@stdlib/ndarray/ctor]-like.

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );

var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
var bool = isndarrayLike( arr );
// returns true
```

A value is [ndarray][@stdlib/ndarray/ctor]-like if a value is an `object` with the following properties:

-   **dtype**: `string` specifying a data type.
-   **data**: `object` pointing to an underlying data buffer.
-   **shape**: array-like `object` containing dimensions.
-   **strides**: array-like `object` containing stride lengths.
-   **offset**: `number` specifying the index offset.
-   **order**: `string` describing the memory layout.
-   **ndims**: `number` specifying the number of dimensions.
-   **length**: `number` specifying the total number of elements.
-   **flags**: `object` containing meta data.
-   **get**: `function` for retrieving elements.
-   **set**: `function` for setting elements.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );

var arr = ndarray( 'generic', [ 0, 0, 0, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
var bool = isndarrayLike( arr );
// returns true

bool = isndarrayLike( [ 1, 2, 3, 4 ] );
// returns false

bool = isndarrayLike( {} );
// returns false

bool = isndarrayLike( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-array-like`][@stdlib/assert/is-array-like]</span><span class="delimiter">: </span><span class="description">test if a value is array-like.</span>
-   <span class="package-name">[`@stdlib/assert/is-matrix-like`][@stdlib/assert/is-matrix-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 2-dimensional ndarray-like object.</span>
-   <span class="package-name">[`@stdlib/assert/is-typed-array-like`][@stdlib/assert/is-typed-array-like]</span><span class="delimiter">: </span><span class="description">test if a value is typed-array-like.</span>
-   <span class="package-name">[`@stdlib/assert/is-vector-like`][@stdlib/assert/is-vector-like]</span><span class="delimiter">: </span><span class="description">test if a value is a 1-dimensional ndarray-like object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/ctor]: https://www.npmjs.com/package/@stdlib/ndarray-ctor

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert/tree/main/is-array

[@stdlib/assert/is-array-like]: https://github.com/stdlib-js/assert/tree/main/is-array-like

[@stdlib/assert/is-matrix-like]: https://github.com/stdlib-js/assert/tree/main/is-matrix-like

[@stdlib/assert/is-typed-array-like]: https://github.com/stdlib-js/assert/tree/main/is-typed-array-like

[@stdlib/assert/is-vector-like]: https://github.com/stdlib-js/assert/tree/main/is-vector-like

<!-- </related-links> -->

</section>

<!-- /.links -->
