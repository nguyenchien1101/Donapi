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

# toc

> Return a high-resolution time difference.

<section class="usage">

## Usage

```javascript
var toc = require( '@stdlib/time/toc' );
```

#### toc( time )

Returns a high-resolution time difference, where `time` is a two-element `array` with format `[seconds, nanoseconds]`.

```javascript
var delta = toc( [ 100, 123456789 ] );
// returns [<number>,<number>]
```

Similar to `time`, the returned `array` has format `[seconds, nanoseconds]`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function is intended to be used in conjunction with [`tic`][@stdlib/time/tic] for measuring performance between intervals.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var tic = require( '@stdlib/time/tic' );
var toc = require( '@stdlib/time/toc' );

var start = tic();

setTimeout( onTimeout, 2000 );

function onTimeout() {
    var elapsed = toc( start );
    console.log( 'Elapsed: %d seconds and %d nanoseconds', elapsed[0], elapsed[1] );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/time/tic`][@stdlib/time/tic]</span><span class="delimiter">: </span><span class="description">return a high-resolution time.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/time/tic]: https://github.com/stdlib-js/time/tree/main/tic

<!-- <related-links> -->

[@stdlib/time/tic]: https://github.com/stdlib-js/time/tree/main/tic

<!-- </related-links> -->

</section>

<!-- /.links -->
