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

# inheritedNonEnumerablePropertySymbols

> Return an array of an object's inherited non-enumerable [symbol][@stdlib/symbol/ctor] properties.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var inheritedNonEnumerablePropertySymbols = require( '@stdlib/utils/inherited-nonenumerable-property-symbols' );
```

#### inheritedNonEnumerablePropertySymbols( obj\[, level] )

Returns an `array` of an object's inherited non-enumerable [symbol][@stdlib/symbol/ctor] properties.

<!-- eslint-disable id-length -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );

var hasSymbols = hasSymbolSupport();
var symbols;
var f;

function Foo() {
    if ( hasSymbols ) {
        defineProperty( this, Symbol( 'a' ), {
            'configurable': false,
            'enumerable': false,
            'writable': false,
            'value': 'a'
        });
    }
    return this;
}

if ( hasSymbols ) {
    defineProperty( Foo.prototype, Symbol( 'b' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'b'
    });
}

f = new Foo();
symbols = inheritedNonEnumerablePropertySymbols( f );
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

<!-- eslint-disable id-length -->

```javascript
var symbols = inheritedNonEnumerablePropertySymbols( [], 1 );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var inheritedNonEnumerablePropertySymbols = require( '@stdlib/utils/inherited-nonenumerable-property-symbols' );

var hasSymbols = hasSymbolSupport();
var symbols;
var obj;

function Foo() {
    this.a = 'a';
    defineProperty( this, 'b', {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'a';
        defineProperty( this, Symbol( 'b' ), {
            'configurable': false,
            'enumerable': false,
            'writable': false,
            'value': 'b'
        });
    }
    return this;
}

Foo.prototype.c = 'c';
defineProperty( Foo.prototype, 'd', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'd'
});
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'c';
    defineProperty( Foo.prototype, Symbol( 'd' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'd'
    });
}

obj = new Foo();
symbols = inheritedNonEnumerablePropertySymbols( obj );

console.log( symbols );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/inherited-nonenumerable-properties`][@stdlib/utils/inherited-nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-nonenumerable-property-names`][@stdlib/utils/inherited-nonenumerable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-properties`][@stdlib/utils/nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-property-names`][@stdlib/utils/nonenumerable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-property-symbols`][@stdlib/utils/nonenumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-property-symbols-in`][@stdlib/utils/nonenumerable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/property-symbols`][@stdlib/utils/property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

[@stdlib/symbol/ctor]: https://www.npmjs.com/package/@stdlib/symbol-ctor

<!-- <related-links> -->

[@stdlib/utils/inherited-nonenumerable-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-nonenumerable-properties

[@stdlib/utils/inherited-nonenumerable-property-names]: https://github.com/stdlib-js/utils/tree/main/inherited-nonenumerable-property-names

[@stdlib/utils/nonenumerable-properties]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-properties

[@stdlib/utils/nonenumerable-property-names]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-property-names

[@stdlib/utils/nonenumerable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-property-symbols

[@stdlib/utils/nonenumerable-property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-property-symbols-in

[@stdlib/utils/property-symbols]: https://github.com/stdlib-js/utils/tree/main/property-symbols

<!-- </related-links> -->

</section>

<!-- /.links -->
