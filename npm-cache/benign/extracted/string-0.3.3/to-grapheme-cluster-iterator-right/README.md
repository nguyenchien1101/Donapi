<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# graphemeClusters2iteratorRight

> Create an iterator which iterates from right to left over [grapheme clusters][unicode-text-segmentation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var graphemeClusters2iteratorRight = require( '@stdlib/string/to-grapheme-cluster-iterator-right' );
```

#### graphemeClusters2iteratorRight( src\[, mapFcn\[, thisArg]] )

Returns an iterator which iterates from right to left over each [grapheme cluster][unicode-text-segmentation] in a `string`.

<!-- eslint-disable id-length -->

```javascript
var iter = graphemeClusters2iteratorRight( '🌷🍕' );

var v = iter.next().value;
// returns '🍕'

v = iter.next().value;
// returns '🌷'

var bool = iter.next().done;
// returns true
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

To invoke a function for each `src` value, provide a callback function.

<!-- eslint-disable id-length -->

```javascript
function fcn( v ) {
    return v + v;
}

var it = graphemeClusters2iteratorRight( 'beep', fcn );
// returns <Object>

var v = it.next().value;
// returns 'pp'

v = it.next().value;
// returns 'ee'

v = it.next().value;
// returns 'ee'

// ...
```

The invoked function is provided three arguments:

-   **value**: [grapheme cluster][unicode-text-segmentation].
-   **index**: iterated value index.
-   **src**: source string.

<!-- eslint-disable id-length -->

```javascript
function fcn( v, i ) {
    return v + i;
}

var it = graphemeClusters2iteratorRight( 'bar', fcn );
// returns <Object>

var v = it.next().value;
// returns 'r2'

v = it.next().value;
// returns 'a1'

v = it.next().value;
// returns 'b0'

// ...
```

To set the callback function execution context, provide a `thisArg`.

<!-- eslint-disable id-length -->

```javascript
function fcn( v ) {
    this.count += 1;
    return v;
}

var ctx = {
    'count': 0
};

var it = graphemeClusters2iteratorRight( '🌷🍕', fcn, ctx );
// returns <Object>

var v = it.next().value;
// returns '🍕'

v = it.next().value;
// returns '🌷'

var count = ctx.count;
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke a string's `@@iterator` method, regardless of whether this method is defined. To convert a string to an implementation defined iterator, invoke this method directly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var graphemeClusters2iteratorRight = require( '@stdlib/string/to-grapheme-cluster-iterator-right' );

function repeat( str ) {
    return str + str;
}

// Create an iterator which iterates over grapheme clusters:
var it = graphemeClusters2iteratorRight( 'Iñtërnâtiônàlizætiøn', repeat );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
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

-   <span class="package-name">[`@stdlib/array/to-iterator-right`][@stdlib/array/to-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/string/to-grapheme-cluster-iterator`][@stdlib/string/to-grapheme-cluster-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over grapheme clusters.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[unicode-text-segmentation]: http://www.unicode.org/reports/tr29/

<!-- <related-links> -->

[@stdlib/array/to-iterator-right]: https://www.npmjs.com/package/@stdlib/array-to-iterator-right

[@stdlib/string/to-grapheme-cluster-iterator]: https://github.com/stdlib-js/string/tree/main/to-grapheme-cluster-iterator

<!-- </related-links> -->

</section>

<!-- /.links -->
