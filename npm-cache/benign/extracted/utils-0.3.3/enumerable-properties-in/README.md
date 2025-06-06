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

# enumerablePropertiesIn

> Return an array of an object's own and inherited enumerable property names and [symbols][@stdlib/symbol/ctor].

<section class="usage">

## Usage

```javascript
var enumerablePropertiesIn = require( '@stdlib/utils/enumerable-properties-in' );
```

#### enumerablePropertiesIn( obj )

Returns an `array` of an object's own and inherited enumerable property names and [symbols][@stdlib/symbol/ctor].

```javascript
var obj = {
    'a': 'a'
};

var props = enumerablePropertiesIn( obj );
// returns [ 'a' ]
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
var enumerablePropertiesIn = require( '@stdlib/utils/enumerable-properties-in' );

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
var props = enumerablePropertiesIn( obj );
// e.g., returns [ 'a', 'foo', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/enumerable-properties`][@stdlib/utils/enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/enumerable-property-symbols-in`][@stdlib/utils/enumerable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-enumerable-properties`][@stdlib/utils/inherited-enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/keys-in`][@stdlib/utils/keys-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-properties-in`][@stdlib/utils/nonenumerable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/properties-in`][@stdlib/utils/properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/symbol/ctor]: https://www.npmjs.com/package/@stdlib/symbol-ctor

<!-- <related-links> -->

[@stdlib/utils/enumerable-properties]: https://github.com/stdlib-js/utils/tree/main/enumerable-properties

[@stdlib/utils/enumerable-property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/enumerable-property-symbols-in

[@stdlib/utils/inherited-enumerable-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-enumerable-properties

[@stdlib/utils/keys-in]: https://github.com/stdlib-js/utils/tree/main/keys-in

[@stdlib/utils/nonenumerable-properties-in]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-properties-in

[@stdlib/utils/properties-in]: https://github.com/stdlib-js/utils/tree/main/properties-in

<!-- </related-links> -->

</section>

<!-- /.links -->
