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

# isComplex

> Test if a value is a [64-bit][@stdlib/complex/float32/ctor] or [128-bit][@stdlib/complex/float64/ctor] complex number.

<section class="usage">

## Usage

```javascript
var isComplex = require( '@stdlib/assert/is-complex' );
```

#### isComplex( value )

Tests if a value is a [64-bit][@stdlib/complex/float32/ctor] or [128-bit][@stdlib/complex/float64/ctor] complex number.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var x = new Complex128( 1.0, 3.0 );
var bool = isComplex( x );
// returns true

x = new Complex64( 3.0, 1.0 );
bool = isComplex( x );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isComplex = require( '@stdlib/assert/is-complex' );

var out = isComplex( new Complex64( 2.0, 2.0 ) );
// returns true

out = isComplex( new Complex128( 3.0, 1.0 ) );
// returns true

out = isComplex( {} );
// returns false

out = isComplex( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-complex64`][@stdlib/assert/is-complex64]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit complex number.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex128`][@stdlib/assert/is-complex128]</span><span class="delimiter">: </span><span class="description">test if a value is a 128-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/complex/float64/ctor]: https://www.npmjs.com/package/@stdlib/complex-float64-ctor

[@stdlib/complex/float32/ctor]: https://www.npmjs.com/package/@stdlib/complex-float32-ctor

<!-- <related-links> -->

[@stdlib/assert/is-complex64]: https://github.com/stdlib-js/assert/tree/main/is-complex64

[@stdlib/assert/is-complex128]: https://github.com/stdlib-js/assert/tree/main/is-complex128

<!-- </related-links> -->

</section>

<!-- /.links -->
