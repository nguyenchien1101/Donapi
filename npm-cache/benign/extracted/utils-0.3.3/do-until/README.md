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

# doUntil

> Invoke a function until a test condition is true.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var doUntil = require( '@stdlib/utils/do-until' );
```

#### doUntil( fcn, predicate\[, thisArg ] )

Invokes a `function` until a `predicate` function returns `true`. Note that the `predicate` function is evaluated **after** executing `fcn`; thus, `fcn` **always** executes at least once.

```javascript
function predicate( i ) {
    return ( i >= 5 );
}

function beep( i ) {
    console.log( 'boop: %d', i );
}

doUntil( beep, predicate );
/* =>
    boop: 0
    boop: 1
    boop: 2
    boop: 3
    boop: 4
*/
```

Both the `predicate` function and the `function` to invoke are provided a single argument:

-   **i**: iteration number (starting from zero).

To set the function execution context for the invoked function, provide a `thisArg`.

```javascript
function predicate( i ) {
    return ( i >= 5 );
}

function count() {
    this.count += 1;
}

var context = {
    'count': 0
};

doUntil( count, predicate, context );

console.log( context.count );
// => 5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var doUntil = require( '@stdlib/utils/do-until' );

function predicate() {
    return ( randu() <= 0.05 );
}

function log( i ) {
    console.log( i );
}

doUntil( log, predicate );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/async/do-until`][@stdlib/utils/async/do-until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/do-until-each`][@stdlib/utils/do-until-each]</span><span class="delimiter">: </span><span class="description">until a test condition is true, invoke a function for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils/do-while`][@stdlib/utils/do-while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/until`][@stdlib/utils/until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/while`][@stdlib/utils/while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/async/do-until]: https://github.com/stdlib-js/utils/tree/main/async/do-until

[@stdlib/utils/do-until-each]: https://github.com/stdlib-js/utils/tree/main/do-until-each

[@stdlib/utils/do-while]: https://github.com/stdlib-js/utils/tree/main/do-while

[@stdlib/utils/until]: https://github.com/stdlib-js/utils/tree/main/until

[@stdlib/utils/while]: https://github.com/stdlib-js/utils/tree/main/while

<!-- </related-links> -->

</section>

<!-- /.links -->
