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

# Read-Only

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Define][@stdlib/utils/define-property] a **read-only** property.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-define-read-only-property
```

</section>

<section class="usage">

## Usage

```javascript
var setReadOnly = require( '@stdlib/utils-define-read-only-property' );
```

#### setReadOnly( obj, prop, value )

[Defines][@stdlib/utils/define-property] a **read-only** property.

<!-- run throws: true -->

```javascript
var obj = {};

setReadOnly( obj, 'foo', 'bar' );

obj.foo = 'boop';
// throws <Error>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Read-only properties are **enumerable** and **non-configurable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var setReadOnly = require( '@stdlib/utils-define-read-only-property' );

function Foo( name ) {
    if ( !(this instanceof Foo) ) {
        return new Foo( name );
    }
    setReadOnly( this, 'name', name );
    return this;
}

var foo = new Foo( 'beep' );

try {
    foo.name = 'boop';
} catch ( err ) {
    console.error( err.message );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-define-read-only-accessor`][@stdlib/utils/define-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a read-only accessor.</span>
-   <span class="package-name">[`@stdlib/utils-define-read-write-accessor`][@stdlib/utils/define-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a read-write accessor.</span>
-   <span class="package-name">[`@stdlib/utils-define-write-only-accessor`][@stdlib/utils/define-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a write-only accessor.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-define-read-only-property.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-define-read-only-property

[test-image]: https://github.com/stdlib-js/utils-define-read-only-property/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/utils-define-read-only-property/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-define-read-only-property/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-define-read-only-property?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-define-read-only-property.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-define-read-only-property/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-define-read-only-property/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-define-read-only-property/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-define-read-only-property/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-define-read-only-property/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-define-read-only-property/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-define-read-only-property/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-define-read-only-property/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-define-read-only-property/main/LICENSE

[@stdlib/utils/define-property]: https://www.npmjs.com/package/@stdlib/utils-define-property

<!-- <related-links> -->

[@stdlib/utils/define-read-only-accessor]: https://www.npmjs.com/package/@stdlib/utils-define-read-only-accessor

[@stdlib/utils/define-read-write-accessor]: https://www.npmjs.com/package/@stdlib/utils-define-read-write-accessor

[@stdlib/utils/define-write-only-accessor]: https://www.npmjs.com/package/@stdlib/utils-define-write-only-accessor

<!-- </related-links> -->

</section>

<!-- /.links -->
