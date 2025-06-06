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

# propertiesIn

> Return an array of an object's own and inherited property names and [symbols][@stdlib/symbol/ctor].

<section class="usage">

## Usage

```javascript
var propertiesIn = require( '@stdlib/utils/properties-in' );
```

#### propertiesIn( obj )

Returns an `array` of an object's own and inherited property names and [symbols][@stdlib/symbol/ctor].

```javascript
var props = propertiesIn( [] );
// returns [...]
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
var propertiesIn = require( '@stdlib/utils/properties-in' );

var hasSymbols = hasSymbolSupport();

function Foo() {
    this.a = 'b';
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
    }
    return this;
}

Foo.prototype.foo = 'bar';
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'foo' ) ] = 'bar';
}

var obj = new Foo();
var props = propertiesIn( obj );
// returns [ 'a', 'foo', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/define-properties`][@stdlib/utils/define-properties]</span><span class="delimiter">: </span><span class="description">define (and/or modify) object properties.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-properties`][@stdlib/utils/inherited-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/properties`][@stdlib/utils/properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/property-names-in`][@stdlib/utils/property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/property-symbols-in`][@stdlib/utils/property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/symbol/ctor]: https://www.npmjs.com/package/@stdlib/symbol-ctor

<!-- <related-links> -->

[@stdlib/utils/define-properties]: https://github.com/stdlib-js/utils/tree/main/define-properties

[@stdlib/utils/inherited-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-properties

[@stdlib/utils/properties]: https://github.com/stdlib-js/utils/tree/main/properties

[@stdlib/utils/property-names-in]: https://github.com/stdlib-js/utils/tree/main/property-names-in

[@stdlib/utils/property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/property-symbols-in

<!-- </related-links> -->

</section>

<!-- /.links -->
