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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Byte Order

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Platform [byte order][endianness].

<section class="installation">

## Installation

```bash
npm install @stdlib/os-byte-order
```

</section>

<section class="usage">

## Usage

```javascript
var BYTE_ORDER = require( '@stdlib/os-byte-order' );
```

#### BYTE_ORDER

Platform byte order.

```javascript
console.log( BYTE_ORDER );
// => <string>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The following values are possible:

    -   `'little-endian'`
    -   `'big-endian'`
    -   `'mixed-endian'` (also known as "middle-endian")
    -   `'unknown'`

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var BYTE_ORDER = require( '@stdlib/os-byte-order' );

if ( BYTE_ORDER === 'little-endian' ) {
    console.log( 'Least significant byte comes first...' );
} else if ( BYTE_ORDER === 'big-endian' ) {
    console.log( 'Most significant byte comes first...' );
} else {
    console.log( 'This is uncommon...' );
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
#include "stdlib/os/byte_order.h"
```

#### STDLIB_OS_ORDER_LITTLE_ENDIAN

Macro for an arbitrary constant indicating little-endian order.

```c
#if defined(STDLIB_OS_BYTE_ORDER) && STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_LITTLE_ENDIAN

// Do something for little-endian...

#endif
```

If compiled on an unrecognized/unsupported platform, the macro is **not** defined.

#### STDLIB_OS_ORDER_BIG_ENDIAN

Macro for an arbitrary constant indicating big-endian order.

```c
#if defined(STDLIB_OS_BYTE_ORDER) && STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_BIG_ENDIAN

// Do something for big-endian...

#endif
```

If compiled on an unrecognized/unsupported platform, the macro is **not** defined.

#### STDLIB_OS_BYTE_ORDER

Macro which equals either `STDLIB_OS_ORDER_LITTLE_ENDIAN` or `STDLIB_OS_ORDER_BIG_ENDIAN` (or host defined) depending on the resolved platform byte order.

```c
#if defined(STDLIB_OS_BYTE_ORDER)

#if STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_LITTLE_ENDIAN

// Do something for little-endian...

#elif STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_BIG_ENDIAN

// Do something for big-endian...

#endif

#endif
```

If compiled on an unrecognized/unsupported platform, the macro is **not** defined.

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
#include "stdlib/os/byte_order.h"
#include <stdio.h>

int main( void ) {
#if defined(STDLIB_OS_BYTE_ORDER)
#if STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_LITTLE_ENDIAN
    printf( "Platform is little-endian...\n" );
#elif STDLIB_OS_BYTE_ORDER == STDLIB_OS_ORDER_BIG_ENDIAN
    printf( "Platform is big-endian...\n" );
#else
    printf( "Platform endianness is either mixed-endian or unknown...\n" )
#endif
#endif
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

## See Also

-   <span class="package-name">[`@stdlib/os-byte-order-cli`][@stdlib/os-byte-order-cli]</span><span class="delimiter">: </span><span class="description">CLI package for use as a command-line utility.</span>
-   <span class="package-name">[`@stdlib/assert-is-big-endian`][@stdlib/assert/is-big-endian]</span><span class="delimiter">: </span><span class="description">check if an environment is big endian.</span>
-   <span class="package-name">[`@stdlib/assert-is-little-endian`][@stdlib/assert/is-little-endian]</span><span class="delimiter">: </span><span class="description">check if an environment is little endian.</span>

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

[@stdlib/os-byte-order-cli]: https://www.npmjs.com/package/@stdlib/os-byte-order-cli

[npm-image]: http://img.shields.io/npm/v/@stdlib/os-byte-order.svg
[npm-url]: https://npmjs.org/package/@stdlib/os-byte-order

[test-image]: https://github.com/stdlib-js/os-byte-order/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/os-byte-order/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/os-byte-order/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/os-byte-order?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/os-byte-order.svg
[dependencies-url]: https://david-dm.org/stdlib-js/os-byte-order/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/os-byte-order#cli
[cli-url]: https://github.com/stdlib-js/os-byte-order/tree/cli
[@stdlib/os-byte-order]: https://github.com/stdlib-js/os-byte-order/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/os-byte-order/tree/deno
[deno-readme]: https://github.com/stdlib-js/os-byte-order/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/os-byte-order/tree/umd
[umd-readme]: https://github.com/stdlib-js/os-byte-order/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/os-byte-order/tree/esm
[esm-readme]: https://github.com/stdlib-js/os-byte-order/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/os-byte-order/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/os-byte-order/main/LICENSE

[endianness]: https://en.wikipedia.org/wiki/Endianness

<!-- <related-links> -->

[@stdlib/assert/is-big-endian]: https://www.npmjs.com/package/@stdlib/assert-is-big-endian

[@stdlib/assert/is-little-endian]: https://www.npmjs.com/package/@stdlib/assert-is-little-endian

<!-- </related-links> -->

</section>

<!-- /.links -->
