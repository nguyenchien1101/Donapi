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

# toWord

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an unsigned 32-bit integer corresponding to the [IEEE 754][ieee754] binary representation of a [single-precision floating-point number][ieee754].

<section class="installation">

## Installation

```bash
npm install @stdlib/number-float32-base-to-word
```

</section>

<section class="usage">

## Usage

```javascript
var toWordf = require( '@stdlib/number-float32-base-to-word' );
```

#### toWordf( x )

Returns an unsigned 32-bit `integer` corresponding to the [IEEE 754][ieee754] binary representation of a [single-precision floating-point number][ieee754].

```javascript
var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );

var f32 = float64ToFloat32( 1.337 );
// returns 1.3370000123977661

var w = toWordf( f32 ); // => 0 01111111 01010110010001011010001
// returns 1068180177
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The equivalent of this function in C/C++,

    ```c
    unsigned int toWordf(float x) {
        return *(unsigned int*)&x;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var randu = require( '@stdlib/random-base-randu' );
var toWordf = require( '@stdlib/number-float32-base-to-word' );

var word;
var f64;
var f32;
var i;

// Convert single-precision floating-point numbers to integers representing the binary literal...
for ( i = 0; i < 1000; i++ ) {
    f64 = (randu()*100.0) - 50.0;
    f32 = float64ToFloat32( f64 );
    word = toWordf( f32 );
    console.log( 'float64: %d => float32: %d => word: %d', f64, f32, word );
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
#include "stdlib/number/float32/base/to_word.h"
```

#### stdlib_base_float32_to_word( x, \*word )

Converts a [single-precision floating-point number][ieee754] to an unsigned 32-bit integer corresponding to the number's [IEEE 754][ieee754] binary representation.

```c
#include <stdint.h>

uint32_t word;
stdlib_base_float32_to_word( 3.14f, &word );
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **word**: `[out] uint32_t*` destination.

```c
void stdlib_base_float32_to_word( const float x, uint32_t *word );
```

#### stdlib_base_float32_word_t

An opaque type definition for a union for converting between a [single-precision floating-point number][ieee754] and an unsigned 32-bit integer.

```c
#include <stdint.h>

stdlib_base_float32_word_t w;

// Assign a single-precision floating-point number:
w.value = 3.14f;

// Retrieve the word:
uint32_t word = w.word;
```

The union has the following members:

-   **value**: `float` [single-precision floating-point number][ieee754].
-   **word**: `uint32_t` word.

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
#include "stdlib/number/float32/base/to_word.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    uint32_t word;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_float32_to_word( x[ i ], &word );
        printf( "%f => word: %u\n", x[ i ], word );
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

-   <span class="package-name">[`@stdlib/number-float32/base/from-word`][@stdlib/number/float32/base/from-word]</span><span class="delimiter">: </span><span class="description">create a single-precision floating-point number from an unsigned integer corresponding to an IEEE 754 binary representation.</span>
-   <span class="package-name">[`@stdlib/number-float64/base/to-words`][@stdlib/number/float64/base/to-words]</span><span class="delimiter">: </span><span class="description">split a double-precision floating-point number into a higher order word and a lower order word.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float32-base-to-word.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float32-base-to-word

[test-image]: https://github.com/stdlib-js/number-float32-base-to-word/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/number-float32-base-to-word/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float32-base-to-word/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float32-base-to-word?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float32-base-to-word.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float32-base-to-word/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float32-base-to-word/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-float32-base-to-word/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-float32-base-to-word/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-float32-base-to-word/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-float32-base-to-word/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-float32-base-to-word/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-float32-base-to-word/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float32-base-to-word/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/number/float32/base/from-word]: https://www.npmjs.com/package/@stdlib/number-float32-base-from-word

[@stdlib/number/float64/base/to-words]: https://www.npmjs.com/package/@stdlib/number-float64-base-to-words

<!-- </related-links> -->

</section>

<!-- /.links -->
