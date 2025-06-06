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

# inheritedWritablePropertySymbols

> Return an array of an object's inherited writable [symbol][@stdlib/symbol/ctor] properties.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var inheritedWritablePropertySymbols = require( '@stdlib/utils/inherited-writable-property-symbols' );
```

#### inheritedWritablePropertySymbols( obj\[, level] )

Returns an `array` of an object's inherited writable [symbol][@stdlib/symbol/ctor] properties.

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
            'writable': true,
            'value': 'a'
        });
    }
    return this;
}

if ( hasSymbols ) {
    defineProperty( Foo.prototype, Symbol( 'b' ), {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
}

f = new Foo();
symbols = inheritedWritablePropertySymbols( f );
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

<!-- eslint-disable id-length -->

```javascript
var symbols = inheritedWritablePropertySymbols( [], 1 );
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
var inheritedWritablePropertySymbols = require( '@stdlib/utils/inherited-writable-property-symbols' );

var hasSymbols = hasSymbolSupport();
var symbols;
var obj;

function Foo() {
    this.a = 'a';
    defineProperty( this, 'b', {
        'configurable': false,
        'enumerable': false,
        'writable': false,
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
symbols = inheritedWritablePropertySymbols( obj );

console.log( symbols );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/inherited-writable-property-names`][@stdlib/utils/inherited-writable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited writable property names.</span>
-   <span class="package-name">[`@stdlib/utils/writable-property-symbols`][@stdlib/utils/writable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/writable-property-symbols-in`][@stdlib/utils/writable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited writable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/properties`][@stdlib/utils/properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

[@stdlib/symbol/ctor]: https://www.npmjs.com/package/@stdlib/symbol-ctor

<!-- <related-links> -->

[@stdlib/utils/inherited-writable-property-names]: https://github.com/stdlib-js/utils/tree/main/inherited-writable-property-names

[@stdlib/utils/writable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/writable-property-symbols

[@stdlib/utils/writable-property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/writable-property-symbols-in

[@stdlib/utils/properties]: https://github.com/stdlib-js/utils/tree/main/properties

<!-- </related-links> -->

</section>

<!-- /.links -->
