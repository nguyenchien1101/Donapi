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

# isSquareTriangularNumber

> Test if a value is a [square triangular number][square-triangular-number].

<section class="intro">

A **square triangular number** is an integer value which is both a [square number][@stdlib/assert/is-square-number] and a [triangular number][@stdlib/assert/is-triangular-number].

[Triangular numbers][@stdlib/assert/is-triangular-number] can be computed using the following formula

<!-- <equation class="equation" label="eq:triangular_number" align="center" raw="T_n = \frac{n(n+1)}{2}" alt="Triangular number formula."> -->

<div class="equation" align="center" data-raw-text="T_n = \frac{n(n+1)}{2}" data-equation="eq:triangular_number">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b295a09a80f4fd0cc84682dcda0fe3e354394c0c/lib/node_modules/@stdlib/assert/is-square-triangular-number/docs/img/equation_triangular_number.svg" alt="Triangular number formula.">
    <br>
</div> -->

<!-- </equation> -->

for `n >= 0`.

By analogy with the square root of `x`, one can define the positive triangular root of `x` such that `T_n = x`

<!-- <equation class="equation" label="eq:triangular_root" align="center" raw="n = \frac{\sqrt{8x+1} - 1}{2}" alt="Triangular root formula."> -->

<!-- <div class="equation" align="center" data-raw-text="n = \frac{\sqrt{8x+1} - 1}{2}" data-equation="eq:triangular_root">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b295a09a80f4fd0cc84682dcda0fe3e354394c0c/lib/node_modules/@stdlib/assert/is-square-triangular-number/docs/img/equation_triangular_root.svg" alt="Triangular root formula.">
    <br>
</div>

<!-- </equation> -->

Accordingly, an integer `x` is a [triangular number][@stdlib/assert/is-triangular-number] **if and only** if `8x+1` is a [square number][@stdlib/assert/is-square-number].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isSquareTriangularNumber = require( '@stdlib/assert/is-square-triangular-number' );
```

#### isSquareTriangularNumber( value )

Tests if a `value` is a [square triangular number][square-triangular-number].

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isSquareTriangularNumber( 36.0 );
// returns true

bool = isSquareTriangularNumber( new Number( 36.0 ) );
// returns true

bool = isSquareTriangularNumber( 3.14 );
// returns false

bool = isSquareTriangularNumber( -5.0 );
// returns false

bool = isSquareTriangularNumber( NaN );
// returns false

bool = isSquareTriangularNumber( null );
// returns false
```

#### isSquareTriangularNumber.isPrimitive( value )

Tests if a `value` is a primitive [square triangular number][square-triangular-number].

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isSquareTriangularNumber.isPrimitive( 36.0 );
// returns true

bool = isSquareTriangularNumber.isPrimitive( new Number( 36.0 ) );
// returns false
```

#### isSquareTriangularNumber.isObject( value )

Tests if a `value` is a `Number` object having a value which is a [square triangular number][square-triangular-number].

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isSquareTriangularNumber.isObject( 36.0 );
// returns false

bool = isSquareTriangularNumber.isObject( new Number( 36.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Return values are not reliable for numbers greater than `1125899906842624`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isSquareTriangularNumber = require( '@stdlib/assert/is-square-triangular-number' );

var bool = isSquareTriangularNumber( 36.0 );
// returns true

bool = isSquareTriangularNumber( new Number( 36.0 ) );
// returns true

bool = isSquareTriangularNumber( 0.0 );
// returns true

bool = isSquareTriangularNumber( 1.0 );
// returns true

bool = isSquareTriangularNumber( 3.14 );
// returns false

bool = isSquareTriangularNumber( -5.0 );
// returns false

bool = isSquareTriangularNumber( NaN );
// returns false

bool = isSquareTriangularNumber( '0.5' );
// returns false

bool = isSquareTriangularNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-integer`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>
-   <span class="package-name">[`@stdlib/assert/is-square-number`][@stdlib/assert/is-square-number]</span><span class="delimiter">: </span><span class="description">test if a value is a square number.</span>
-   <span class="package-name">[`@stdlib/assert/is-triangular-number`][@stdlib/assert/is-triangular-number]</span><span class="delimiter">: </span><span class="description">test if a value is a triangular number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[square-triangular-number]: https://en.wikipedia.org/wiki/Square_triangular_number

<!-- <related-links> -->

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert/tree/main/is-integer

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert/tree/main/is-number

[@stdlib/assert/is-square-number]: https://github.com/stdlib-js/assert/tree/main/is-square-number

[@stdlib/assert/is-triangular-number]: https://github.com/stdlib-js/assert/tree/main/is-triangular-number

<!-- </related-links> -->

</section>

<!-- /.links -->
