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

# Time

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Time utilities.

<section class="installation">

## Installation

```bash
npm install @stdlib/time
```

</section>

<section class="usage">

## Usage

```javascript
var time = require( '@stdlib/time' );
```

#### time

Namespace containing time utilities.

```javascript
var ns = time;
// returns {...}
```

### Calendar Utilities

<!-- <toc keywords="+calendar"> -->

<div class="namespace-toc">

-   <span class="signature">[`dayOfQuarter( [month[, day, year]] )`][@stdlib/time/day-of-quarter]</span><span class="delimiter">: </span><span class="description">determine the day of the quarter.</span>
-   <span class="signature">[`dayOfYear( [month[, day, year]] )`][@stdlib/time/day-of-year]</span><span class="delimiter">: </span><span class="description">determine the day of the year.</span>
-   <span class="signature">[`daysInMonth( [month[, year]] )`][@stdlib/time/days-in-month]</span><span class="delimiter">: </span><span class="description">determine the number of days in a month.</span>
-   <span class="signature">[`daysInYear( [value] )`][@stdlib/time/days-in-year]</span><span class="delimiter">: </span><span class="description">determine the number of days in a year according to the Gregorian calendar.</span>
-   <span class="signature">[`hoursInMonth( [month[, year]] )`][@stdlib/time/hours-in-month]</span><span class="delimiter">: </span><span class="description">determine the number of hours in a month.</span>
-   <span class="signature">[`hoursInYear( [value] )`][@stdlib/time/hours-in-year]</span><span class="delimiter">: </span><span class="description">determine the number of hours in a year according to the Gregorian calendar.</span>
-   <span class="signature">[`isoWeeksInYear( [value] )`][@stdlib/time/iso-weeks-in-year]</span><span class="delimiter">: </span><span class="description">determine the number of ISO weeks in a year according to the Gregorian calendar.</span>
-   <span class="signature">[`minutesInMonth( [month[, year]] )`][@stdlib/time/minutes-in-month]</span><span class="delimiter">: </span><span class="description">determine the number of minutes in a month.</span>
-   <span class="signature">[`minutesInYear( [value] )`][@stdlib/time/minutes-in-year]</span><span class="delimiter">: </span><span class="description">determine the number of minutes in a year according to the Gregorian calendar.</span>
-   <span class="signature">[`quarterOfYear( [month] )`][@stdlib/time/quarter-of-year]</span><span class="delimiter">: </span><span class="description">determine the quarter of the year.</span>
-   <span class="signature">[`secondsInMonth( [month[, year]] )`][@stdlib/time/seconds-in-month]</span><span class="delimiter">: </span><span class="description">determine the number of seconds in a month.</span>
-   <span class="signature">[`secondsInYear( [value] )`][@stdlib/time/seconds-in-year]</span><span class="delimiter">: </span><span class="description">determine the number of seconds in a year according to the Gregorian calendar.</span>

</div>

<!-- </toc> -->

```javascript
var num = time.daysInYear( 2000 );
// returns 366

num = time.hoursInMonth( 2, 2017 );
// returns 672
```

### Timer Utilities

<!-- <toc keywords="+timer"> -->

<div class="namespace-toc">

-   <span class="signature">[`tic()`][@stdlib/time/tic]</span><span class="delimiter">: </span><span class="description">return a high-resolution time.</span>
-   <span class="signature">[`toc( time )`][@stdlib/time/toc]</span><span class="delimiter">: </span><span class="description">return a high-resolution time difference.</span>

</div>

<!-- </toc> -->

```javascript
var time = require( '@stdlib/time' );

var start = time.tic();

setTimeout( onTimeout, 2000 );

function onTimeout() {
    var elapsed = time.toc( start );
    console.log( 'Elapsed: %d seconds and %d nanoseconds', elapsed[0], elapsed[1] );
}
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var time = require( '@stdlib/time' );

console.log( objectKeys( time ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/time.svg
[npm-url]: https://npmjs.org/package/@stdlib/time

[test-image]: https://github.com/stdlib-js/time/actions/workflows/test.yml/badge.svg?branch=v0.3.3
[test-url]: https://github.com/stdlib-js/time/actions/workflows/test.yml?query=branch:v0.3.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time/tree/deno
[deno-readme]: https://github.com/stdlib-js/time/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/time/tree/umd
[umd-readme]: https://github.com/stdlib-js/time/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/time/tree/esm
[esm-readme]: https://github.com/stdlib-js/time/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/time/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time/main/LICENSE

<!-- <toc-links> -->

[@stdlib/time/tic]: https://github.com/stdlib-js/time/tree/main/tic

[@stdlib/time/toc]: https://github.com/stdlib-js/time/tree/main/toc

[@stdlib/time/day-of-quarter]: https://github.com/stdlib-js/time/tree/main/day-of-quarter

[@stdlib/time/day-of-year]: https://github.com/stdlib-js/time/tree/main/day-of-year

[@stdlib/time/days-in-month]: https://github.com/stdlib-js/time/tree/main/days-in-month

[@stdlib/time/days-in-year]: https://github.com/stdlib-js/time/tree/main/days-in-year

[@stdlib/time/hours-in-month]: https://github.com/stdlib-js/time/tree/main/hours-in-month

[@stdlib/time/hours-in-year]: https://github.com/stdlib-js/time/tree/main/hours-in-year

[@stdlib/time/iso-weeks-in-year]: https://github.com/stdlib-js/time/tree/main/iso-weeks-in-year

[@stdlib/time/minutes-in-month]: https://github.com/stdlib-js/time/tree/main/minutes-in-month

[@stdlib/time/minutes-in-year]: https://github.com/stdlib-js/time/tree/main/minutes-in-year

[@stdlib/time/quarter-of-year]: https://github.com/stdlib-js/time/tree/main/quarter-of-year

[@stdlib/time/seconds-in-month]: https://github.com/stdlib-js/time/tree/main/seconds-in-month

[@stdlib/time/seconds-in-year]: https://github.com/stdlib-js/time/tree/main/seconds-in-year

<!-- </toc-links> -->

</section>

<!-- /.links -->
