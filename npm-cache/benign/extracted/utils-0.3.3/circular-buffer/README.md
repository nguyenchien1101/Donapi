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

# Circular Buffer

> Circular buffer constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var circularBuffer = require( '@stdlib/utils/circular-buffer' );
```

#### circularBuffer( buffer )

Returns a new circular buffer instance.

```javascript
var buf = circularBuffer( 3 );
// returns <CircularBuffer>
```

The `buffer` argument may either be a integer which specifies the buffer size or an array-like object to use as the underlying buffer.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Use a typed array as the underlying buffer:
var buf = circularBuffer( new Float64Array( 3 ) );
// returns <CircularBuffer>
```

##### circularBuffer.prototype.clear()

Clears a buffer.

```javascript
var buf = circularBuffer( 3 );
// returns <CircularBuffer>

// Add values to the buffer:
buf.push( 'foo' );
buf.push( 'bar' );
buf.push( 'beep' );

// Get the number of elements currently in the buffer:
var n = buf.count;
// returns 3

// Clear all buffer items:
buf.clear();

// Get the number of elements in the buffer:
n = buf.count;
// returns 0
```

##### circularBuffer.prototype.count

Read-only property which returns the number of elements currently in the buffer.

```javascript
var buf = circularBuffer( 3 );
// returns <CircularBuffer>

// Add values to the buffer:
buf.push( 'foo' );
buf.push( 'bar' );

// Determine how many elements are in the buffer:
var n = buf.count;
// returns 2
```

##### circularBuffer.prototype.full

Read-only property which returns a `boolean` indicating if a buffer is full.

```javascript
var buf = circularBuffer( 3 );
// returns <CircularBuffer>

// Add values to the buffer:
buf.push( 'foo' );
buf.push( 'bar' );

// Determine if the buffer is full:
var bool = buf.full;
// returns false

// Add another value to the buffer:
buf.push( 'beep' );

// Determine if the buffer is full:
bool = buf.full;
// returns true
```

##### circularBuffer.prototype.iterator( \[niters] )

Returns an iterator for iterating over a buffer. If an environment supports `Symbol.iterator`, the returned iterator is iterable.

```javascript
var buf = circularBuffer( 2 );

// Add values to the buffer:
buf.push( 'foo' );
buf.push( 'bar' );
buf.push( 'beep' );
buf.push( 'boop' );

// Create an iterator:
var it = buf.iterator();

// Iterate over the buffer...
var v = it.next().value;
// returns 'beep'

v = it.next().value;
// returns 'boop'

v = it.next().value;
// returns 'beep'

v = it.next().value;
// returns 'boop'

v = it.next().value;
// returns 'beep'
```

By default, provided a buffer is **full**, the method returns an infinite iterator. To limit the number of iterations, provide an `niters` argument.

```javascript
var buf = circularBuffer( 2 );

// Add values to the buffer:
buf.push( 'foo' );
buf.push( 'bar' );
buf.push( 'beep' );
buf.push( 'boop' );

// Create an iterator:
var it = buf.iterator( buf.length );

// Iterate over the buffer...
var v = it.next().value;
// returns 'beep'

v = it.next().value;
// returns 'boop'

var bool = it.next().done;
// returns true
```

A returned iterator does **not** iterate over partially full circular buffers.

```javascript
var buf = circularBuffer( 5 );

// Add values to the buffer:
buf.push( 'foo' );
buf.push( 'bar' );

// Create an iterator:
var it = buf.iterator();

// Determine if the buffer is full:
var bool = buf.full;
// returns false

// Iterate over the buffer...
bool = it.next().done;
// returns true
```

If iterating over a partially full circular buffer is necessary, use `buf.toArray()` and iterate over the returned array.

##### circularBuffer.prototype.length

Read-only property returning the buffer length (i.e., capacity).

```javascript
var buf = circularBuffer( [ 0, 0, 0 ] );

// Get the buffer length:
var len = buf.length;
// returns 3
```

##### circularBuffer.prototype.push( value )

Adds a value to the buffer.

```javascript
var buf = circularBuffer( 3 );

// Fill the buffer...
var v = buf.push( 'foo' );
// returns undefined

v = buf.push( 'bar' );
// returns undefined

v = buf.push( 'beep' );
// returns undefined

// Now that the buffer is full, each push will cause a value to be removed:
v = buf.push( 'boop' );
// returns 'foo'
```

When a circular buffer is empty or partially full, this method returns `undefined`. Once a circular buffer is **full**, the method returns removed values.

##### circularBuffer.prototype.toArray()

Returns an array of buffer values.

```javascript
var buf = circularBuffer( 3 );

// Add values to the buffer:
buf.push( 'foo' );
buf.push( 'bar' );
buf.push( 'beep' );
buf.push( 'boop' );

// Get an array of buffer values:
var vals = buf.toArray();
// returns [ 'bar', 'beep', 'boop' ]
```

##### circularBuffer.prototype.toJSON()

Serializes a circular buffer as JSON.

```javascript
var buf = circularBuffer( 3 );

// Add values to the buffer:
buf.push( 'foo' );
buf.push( 'bar' );
buf.push( 'beep' );
buf.push( 'boop' );

// Serialize to JSON:
var o = buf.toJSON();
// returns { 'type': 'circular-buffer', 'length': 3, 'data': [ 'bar', 'beep', 'boop' ] }
```

**Note**: `JSON.stringify()` implicitly calls this method when stringifying a circular buffer instance.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The constructor supports array-like object `buffer` arguments which use getter and setter accessors for element access (e.g., [`Complex64Array`][@stdlib/array/complex64], [`Complex128Array`][@stdlib/array/complex128], etc).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var circularBuffer = require( '@stdlib/utils/circular-buffer' );

// Create a circular buffer capable of holding 5 elements:
var buf = circularBuffer( 5 );
console.log( 'Buffer length: %s', buf.length );

// Continuously add values to the buffer...
var v;
var i;
for ( i = 0; i < 100; i++ ) {
    v = buf.push( i );
    console.log( 'Count: %d. Added value: %s. Removed value: %s.', buf.count, i, ( v === void 0 ) ? '(none)' : v );
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

-   <span class="package-name">[`@stdlib/utils/fifo`][@stdlib/utils/fifo]</span><span class="delimiter">: </span><span class="description">first-in-first-out (FIFO) queue.</span>
-   <span class="package-name">[`@stdlib/utils/stack`][@stdlib/utils/stack]</span><span class="delimiter">: </span><span class="description">stack.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex64]: https://www.npmjs.com/package/@stdlib/array-complex64

[@stdlib/array/complex128]: https://www.npmjs.com/package/@stdlib/array-complex128

<!-- <related-links> -->

[@stdlib/utils/fifo]: https://github.com/stdlib-js/utils/tree/main/fifo

[@stdlib/utils/stack]: https://github.com/stdlib-js/utils/tree/main/stack

<!-- </related-links> -->

</section>

<!-- /.links -->
