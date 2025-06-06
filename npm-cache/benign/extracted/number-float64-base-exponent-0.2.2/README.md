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

# exponent

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an integer corresponding to the unbiased exponent of a [double-precision floating-point number][ieee754].

<section class="installation">

## Installation

```bash
npm install @stdlib/number-float64-base-exponent
```

</section>

<section class="usage">

## Usage

```javascript
var exponent = require( '@stdlib/number-float64-base-exponent' );
```

#### exponent( x )

Returns an `integer` corresponding to the unbiased exponent of a [double-precision floating-point number][ieee754].

```javascript
var exp = exponent( 3.14e307 ); // => 2**1021 ~ 1e307
// returns 1021

exp = exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
// returns -1019

exp = exponent( -3.14 );
// returns 1

exp = exponent( 0.0 );
// returns -1023

exp = exponent( NaN );
// returns 1024
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-uniform' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var pow = require( '@stdlib/math-base-special-pow' );
var exponent = require( '@stdlib/number-float64-base-exponent' );

var frac;
var exp;
var x;
var e;
var i;

// Generate random numbers and extract their exponents...
for ( i = 0; i < 100; i++ ) {
    frac = randu( 0.0, 10.0 );
    exp = discreteUniform( -323, 323 );
    x = frac * pow( 10.0, exp );
    e = exponent( x );
    console.log( 'x: %d. unbiased exponent: %d.', x, e );
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
#include "stdlib/number/float64/base/exponent.h"
```

#### stdlib_base_float64_exponent( x )

Returns an integer corresponding to the unbiased exponent of a [double-precision floating-point number][ieee754].

```c
#include <stdint.h>

int32_t out = stdlib_base_float64_exponent( 3.14 );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
int32_t stdlib_base_float64_exponent( const double x );
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
#include "stdlib/number/float64/base/exponent.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    double x[] = { 4.0, 0.0, -0.0, 1.0, -1.0, 3.14, -3.14, 1.0e308, -1.0e308, 1.0/0.0, -1.0/0.0, 0.0/0.0 };

    int32_t out;
    int i;
    for ( i = 0; i < 12; i++ ) {
        out = stdlib_base_float64_exponent( x[ i ] );
        printf( "%lf => out: %" PRId32 "\n", x[ i ], out );
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

-   <span class="package-name">[`@stdlib/number-float32/base/exponent`][@stdlib/number/float32/base/exponent]</span><span class="delimiter">: </span><span class="description">return an integer corresponding to the unbiased exponent of a single-precision floating-point number.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-exponent.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-exponent

[test-image]: https://github.com/stdlib-js/number-float64-base-exponent/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/number-float64-base-exponent/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-exponent/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-exponent?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-exponent.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-exponent/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-exponent/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-float64-base-exponent/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-float64-base-exponent/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-float64-base-exponent/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-float64-base-exponent/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-float64-base-exponent/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-float64-base-exponent/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-exponent/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/number/float32/base/exponent]: https://www.npmjs.com/package/@stdlib/number-float32-base-exponent

<!-- </related-links> -->

</section>

<!-- /.links -->
