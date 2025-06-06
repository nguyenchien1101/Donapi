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

# isNamedTypedTupleLike

> Test if a value is [named typed tuple][@stdlib/utils/named-typed-tuple]-like.

<section class="usage">

## Usage

```javascript
var isNamedTypedTupleLike = require( '@stdlib/assert/is-named-typed-tuple-like' );
```

#### isNamedTypedTupleLike( value )

Tests if a value is [named typed tuple][@stdlib/utils/named-typed-tuple]-like.

```javascript
var namedtypedtuple = require( '@stdlib/utils/named-typed-tuple' );

var Point = namedtypedtuple( [ 'x', 'y' ] );
var p = new Point();

var bool = isNamedTypedTupleLike( p );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var namedtypedtuple = require( '@stdlib/utils/named-typed-tuple' );
var isNamedTypedTupleLike = require( '@stdlib/assert/is-named-typed-tuple-like' );

var Point = namedtypedtuple( [ 'x', 'y' ] );
var p = new Point();

var bool = isNamedTypedTupleLike( p );
// returns true

bool = isNamedTypedTupleLike( [ 1, 2, 3, 4 ] );
// returns false

bool = isNamedTypedTupleLike( {} );
// returns false

bool = isNamedTypedTupleLike( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/named-typed-tuple`][@stdlib/utils/named-typed-tuple]</span><span class="delimiter">: </span><span class="description">named typed tuple.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/named-typed-tuple]: https://www.npmjs.com/package/@stdlib/utils-named-typed-tuple

<!-- </related-links> -->

</section>

<!-- /.links -->
