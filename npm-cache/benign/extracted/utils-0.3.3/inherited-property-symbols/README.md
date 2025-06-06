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

# inheritedPropertySymbols

> Return an array of an object's inherited [symbol][@stdlib/symbol/ctor] properties.

<section class="usage">

## Usage

```javascript
var inheritedPropertySymbols = require( '@stdlib/utils/inherited-property-symbols' );
```

#### inheritedPropertySymbols( obj\[, level] )

Returns an `array` of an object's inherited [symbol][@stdlib/symbol/ctor] properties.

```javascript
var symbols = inheritedPropertySymbols( [ 1, 2, 3 ] );
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var symbols = inheritedPropertySymbols( [ 1, 2, 3 ], 1 );
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
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var inheritedPropertySymbols = require( '@stdlib/utils/inherited-property-symbols' );

var hasSymbols = hasSymbolSupport();

function Foo() {
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
    }
    return this;
}

if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'd';
}

var obj = new Foo();
var symbols = inheritedPropertySymbols( obj );
// e.g., returns [ Symbol(c) ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/inherited-keys`][@stdlib/utils/inherited-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-descriptors`][@stdlib/utils/inherited-property-descriptors]</span><span class="delimiter">: </span><span class="description">return an object's inherited property descriptors.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-names`][@stdlib/utils/inherited-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/property-symbols`][@stdlib/utils/property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/property-symbols-in`][@stdlib/utils/property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/symbol/ctor]: https://www.npmjs.com/package/@stdlib/symbol-ctor

<!-- <related-links> -->

[@stdlib/utils/inherited-keys]: https://github.com/stdlib-js/utils/tree/main/inherited-keys

[@stdlib/utils/inherited-property-descriptors]: https://github.com/stdlib-js/utils/tree/main/inherited-property-descriptors

[@stdlib/utils/inherited-property-names]: https://github.com/stdlib-js/utils/tree/main/inherited-property-names

[@stdlib/utils/property-symbols]: https://github.com/stdlib-js/utils/tree/main/property-symbols

[@stdlib/utils/property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/property-symbols-in

<!-- </related-links> -->

</section>

<!-- /.links -->
