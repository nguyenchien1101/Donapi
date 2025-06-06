<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isSameBooleanArray

> Test if two arguments are both [BooleanArrays][@stdlib/array/bool] and have the [same values][@stdlib/assert/is-same-value].

<section class="usage">

## Usage

```javascript
var isSameBooleanArray = require( '@stdlib/assert/is-same-booleanarray' );
```

#### isSameBooleanArray( v1, v2 )

Tests if two arguments are both [BooleanArrays][@stdlib/array/bool] and have the [same values][@stdlib/assert/is-same-value].

```javascript
var BooleanArray = require( '@stdlib/array/bool' );

var x = new BooleanArray( [ true, false ] );
var y = new BooleanArray( [ true, false ] );
var bool = isSameBooleanArray( x, y );
// returns true

bool = isSameBooleanArray( x, [ true, false ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var BooleanArray = require( '@stdlib/array/bool' );
var isSameBooleanArray = require( '@stdlib/assert/is-same-booleanarray' );

var x = new BooleanArray( [ true, false, false, true ] );
var y = new BooleanArray( [ true, false, false, true ] );
var out = isSameBooleanArray( x, y );
// returns true

x = new BooleanArray( [ true, false, false, true ] );
y = new BooleanArray( [ true, true, false, false ] );
out = isSameBooleanArray( x, y );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/bool]: https://www.npmjs.com/package/@stdlib/array-bool

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert/tree/main/is-same-value

</section>

<!-- /.links -->
