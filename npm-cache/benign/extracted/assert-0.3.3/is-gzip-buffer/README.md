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

# isgzipBuffer

> Test if a value is a [gzip][gzip-rfc-1952] buffer.

<section class="usage">

## Usage

```javascript
var isgzipBuffer = require( '@stdlib/assert/is-gzip-buffer' );
```

#### isgzipBuffer( value )

Tests if a value is a [`gzip`][gzip-rfc-1952] buffer.

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );

var buf = new Uint8Array( 20 );
buf[ 0 ] = 31;  // 0x1f => magic number
buf[ 1 ] = 139; // 0x8b
buf[ 2 ] = 8;   // 0x08 => compression method

var bool = isgzipBuffer( buf );
// returns true

bool = isgzipBuffer( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A [gzip][gzip-rfc-1952] buffer is defined as either a Node.js [`Buffer`][@stdlib/buffer/ctor] or [`Uint8Array`][@stdlib/array/uint8] which contains a 10-byte header, a body containing the compressed payload, and an 8-byte footer containing a CRC-32 checksum and the length of the original uncompressed data, modulo `2^32`.
-   This function only examines the 10-byte header to ensure the header includes the expected magic number and compression method. The function does not perform an integrity check.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var isgzipBuffer = require( '@stdlib/assert/is-gzip-buffer' );

var buf = new Uint8Array( 20 );
buf[ 0 ] = 31;  // 0x1f => magic number
buf[ 1 ] = 139; // 0x8b
buf[ 2 ] = 8;   // 0x08 => compression method

var bool = isgzipBuffer( buf );
// returns true

bool = isgzipBuffer( new Float32Array( 20 ) );
// returns false

bool = isgzipBuffer( new Int8Array( 20 ) );
// returns false

bool = isgzipBuffer( new Uint8Array( 20 ) );
// returns false

bool = isgzipBuffer( new Uint8ClampedArray( 20 ) );
// returns false

bool = isgzipBuffer( new Int16Array( 20 ) );
// returns false

bool = isgzipBuffer( new Uint16Array( 20 ) );
// returns false

bool = isgzipBuffer( new Int32Array( 20 ) );
// returns false

bool = isgzipBuffer( new Uint32Array( 20 ) );
// returns false

bool = isgzipBuffer( new Float64Array( 20 ) );
// returns false

bool = isgzipBuffer( new Array( 20 ) );
// returns false

bool = isgzipBuffer( {} );
// returns false

bool = isgzipBuffer( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-buffer`][@stdlib/assert/is-buffer]</span><span class="delimiter">: </span><span class="description">test if a value is a Buffer object.</span>
-   <span class="package-name">[`@stdlib/assert/is-uint8array`][@stdlib/assert/is-uint8array]</span><span class="delimiter">: </span><span class="description">test if a value is a Uint8Array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gzip-rfc-1952]: https://tools.ietf.org/html/rfc1952

[@stdlib/buffer/ctor]: https://www.npmjs.com/package/@stdlib/buffer-ctor

[@stdlib/array/uint8]: https://www.npmjs.com/package/@stdlib/array-uint8

<!-- <related-links> -->

[@stdlib/assert/is-buffer]: https://github.com/stdlib-js/assert/tree/main/is-buffer

[@stdlib/assert/is-uint8array]: https://github.com/stdlib-js/assert/tree/main/is-uint8array

<!-- </related-links> -->

</section>

<!-- /.links -->
