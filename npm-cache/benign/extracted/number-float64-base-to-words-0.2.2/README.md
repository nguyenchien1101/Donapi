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

# Words

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Split a [double-precision floating-point number][ieee754] into a higher order word and a lower order word.

<section class="installation">

## Installation

```bash
npm install @stdlib/number-float64-base-to-words
```

</section>

<section class="usage">

## Usage

```javascript
var toWords = require( '@stdlib/number-float64-base-to-words' );
```

#### toWords( x )

Splits a [double-precision floating-point number][ieee754] into a higher order word (unsigned 32-bit `integer`) and a lower order word (unsigned 32-bit `integer`).

```javascript
var w = toWords( 3.14e201 );
// returns [ 1774486211, 2479577218 ]
```

By default, the function returns an `array` containing two elements: a higher order word and a lower order word. The lower order word contains the less significant bits, while the higher order word contains the more significant bits and includes the exponent and sign.

```javascript
var w = toWords( 3.14e201 );
// returns [ 1774486211, 2479577218 ]

var high = w[ 0 ];
// returns 1774486211

var low = w[ 1 ];
// returns 2479577218
```

#### toWords.assign( x, out, stride, offset )

Splits a [double-precision floating-point number][ieee754] into a higher order word (unsigned 32-bit `integer`) and a lower order word (unsigned 32-bit `integer`) and assigns results to a provided output array.

```javascript
var Uint32Array = require( '@stdlib/array-uint32' );

var out = new Uint32Array( 2 );

var w = toWords.assign( 3.14e201, out, 1, 0 );
// returns <Uint32Array>[ 1774486211, 2479577218 ]

var bool = ( w === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var floor = require( '@stdlib/math-base-special-floor' );
var randu = require( '@stdlib/random-base-randu' );
var pow = require( '@stdlib/math-base-special-pow' );
var toWords = require( '@stdlib/number-float64-base-to-words' );

var frac;
var exp;
var w;
var x;
var i;

// Generate random numbers and split into words...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = -floor( randu()*324.0 );
    x = frac * pow( 10.0, exp );
    w = toWords( x );
    console.log( 'x: %d. higher: %d. lower: %d.', x, w[ 0 ], w[ 1 ] );
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
#include "stdlib/number/float64/base/to_words.h"
```

#### stdlib_base_float64_to_words( x, \*high, \*low )

Splits a double-precision floating-point number into a higher order word and a lower order word.

```c
#include <stdint.h>

uint32_t high;
uint32_t low;

stdlib_base_float64_to_words( 3.14, &high, &low );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **high**: `[out] uint32_t*` destination for higher order word.
-   **low**: `[out] uint32_t*` destination for lower order word.

```c
void stdlib_base_float64_to_words( const double x, uint32_t *high, uint32_t *low );
```

#### stdlib_base_float64_words_t

An opaque type definition for a union for converting between a double-precision floating-point number and two unsigned 32-bit integers.

```c
#include <stdint.h>

stdlib_base_float64_words_t w;

// Assign a double-precision floating-point number:
w.value = 3.14;

// Extract the high and low words:
uint32_t high = w.words.high;
uint32_t low = w.words.low;
```

The union has the following members:

-   **value**: `double` double-precision floating-point number.

-   **words**: `struct` struct having the following members:

    -   **high**: `uint32_t` higher order word.
    -   **low**: `uint32_t` lower order word.

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
#include "stdlib/number/float64/base/to_words.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    uint32_t high;
    uint32_t low;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_float64_to_words( x[ i ], &high, &low );
        printf( "%lf => high: %u, low: %u\n", x[ i ], high, low );
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

-   <span class="package-name">[`@stdlib/number-float64/base/from-words`][@stdlib/number/float64/base/from-words]</span><span class="delimiter">: </span><span class="description">create a double-precision floating-point number from a higher order word and a lower order word.</span>
-   <span class="package-name">[`@stdlib/number-float32/base/to-word`][@stdlib/number/float32/base/to-word]</span><span class="delimiter">: </span><span class="description">return an unsigned 32-bit integer corresponding to the IEEE 754 binary representation of a single-precision floating-point number.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-to-words.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-to-words

[test-image]: https://github.com/stdlib-js/number-float64-base-to-words/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/number-float64-base-to-words/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-to-words/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-to-words?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-to-words.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-to-words/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-to-words/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-float64-base-to-words/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-float64-base-to-words/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-float64-base-to-words/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-float64-base-to-words/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-float64-base-to-words/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-float64-base-to-words/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-to-words/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/number/float64/base/from-words]: https://www.npmjs.com/package/@stdlib/number-float64-base-from-words

[@stdlib/number/float32/base/to-word]: https://www.npmjs.com/package/@stdlib/number-float32-base-to-word

<!-- </related-links> -->

</section>

<!-- /.links -->
