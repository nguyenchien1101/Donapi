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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Set Low Word

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Set the less significant 32 bits of a [double-precision floating-point number][ieee754].

<section class="installation">

## Installation

```bash
npm install @stdlib/number-float64-base-set-low-word
```

</section>

<section class="usage">

## Usage

```javascript
var setLowWord = require( '@stdlib/number-float64-base-set-low-word' );
```

#### setLowWord( x, low )

Sets the less significant 32 bits (lower order word) of a [double-precision floating-point number][ieee754] `x` to a bit sequence represented by an unsigned 32-bit integer `low`. The returned `double` will have the same more significant 32 bits (higher order word) as `x`.

```javascript
var low = 5 >>> 0; // => 00000000000000000000000000000101

var x = 3.14e201; // => 0 11010011100 01001000001011000011 10010011110010110101100010000010

var y = setLowWord( x, low ); // => 0 11010011100 01001000001011000011 00000000000000000000000000000101
// returns 3.139998651394392e+201
```

Setting the lower order bits of `NaN` or positive or negative `infinity` will return `NaN`, as `NaN` is [defined][ieee754] as a `double` whose exponent bit sequence is all ones and whose fraction can be any bit sequence **except** all zeros. Positive and negative `infinity` are [defined][ieee754] as `doubles` with an exponent bit sequence equal to all ones and a fraction equal to all zeros. Hence, changing the less significant bits of positive and negative `infinity` converts each value to `NaN`.

```javascript
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );

var low = 12345678;

var y = setLowWord( PINF, low );
// returns NaN

y = setLowWord( NINF, low );
// returns NaN

y = setLowWord( NaN, low );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var pow = require( '@stdlib/math-base-special-pow' );
var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var MAX_UINT32 = require( '@stdlib/constants-uint32-max' );
var setLowWord = require( '@stdlib/number-float64-base-set-low-word' );

var frac;
var exp;
var low;
var x;
var y;
var i;

// Generate a random double-precision floating-point number:
frac = randu() * 10.0;
exp = -round( randu() * 323.0 );
x = frac * pow( 10.0, exp );

// Replace the lower order word of `x` to generate new random numbers having the same higher order word...
for ( i = 0; i < 100; i++ ) {
    low = round( randu()*MAX_UINT32 );
    y = setLowWord( x, low );
    console.log( 'x: %d. new low word: %d. y: %d.', x, low, y );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/number/float64/base/set_low_word.h"
```

#### stdlib_base_float64_set_low_word( low, \*x )

Sets the less significant 32 bits of a double-precision floating-point number.

```c
#include <stdint.h>

uint32_t low = 1374389537;
double x = 3.14;

stdlib_base_float64_set_low_word( low, &x );
```

The function accepts the following arguments:

-   **low**: `[in] uint32_t` lower order word.
-   **x**: `[in-out] double*` reference to (and destination for) a double-precision floating-point number.

```c
void stdlib_base_float64_set_low_word( const uint32_t low, double *x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/number/float64/base/set_low_word.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    uint32_t low[] = { 1374389535, 1374389545, 1374389555, 1374389565 };
    double x = 3.14;

    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_float64_set_low_word( low[ i ], &x );
        printf( "low: %u => %.15lf\n", low[ i ], x );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/number-float64/base/get-low-word`][@stdlib/number/float64/base/get-low-word]</span><span class="delimiter">: </span><span class="description">return an unsigned 32-bit integer corresponding to the less significant 32 bits of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/number-float64/base/set-high-word`][@stdlib/number/float64/base/set-high-word]</span><span class="delimiter">: </span><span class="description">set the more significant 32 bits of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-set-low-word.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-set-low-word

[test-image]: https://github.com/stdlib-js/number-float64-base-set-low-word/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/number-float64-base-set-low-word/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-set-low-word/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-set-low-word?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-set-low-word.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-set-low-word/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-set-low-word/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-float64-base-set-low-word/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-float64-base-set-low-word/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-float64-base-set-low-word/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-float64-base-set-low-word/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-float64-base-set-low-word/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-float64-base-set-low-word/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-set-low-word/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/number/float64/base/get-low-word]: https://www.npmjs.com/package/@stdlib/number-float64-base-get-low-word

[@stdlib/number/float64/base/set-high-word]: https://www.npmjs.com/package/@stdlib/number-float64-base-set-high-word

<!-- </related-links> -->

</section>

<!-- /.links -->
