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

# inheritedEnumerableProperties

> Return an array of an object's inherited enumerable property names and [symbols][@stdlib/symbol/ctor].

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var inheritedEnumerableProperties = require( '@stdlib/utils/inherited-enumerable-properties' );
```

#### inheritedEnumerableProperties( obj\[, level] )

Returns an `array` of an object's inherited enumerable property names and [symbols][@stdlib/symbol/ctor].

<!-- eslint-disable id-length -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

function Foo() {
    this.a = 'b';
    return this;
}

Foo.prototype.beep = 'boop';

var f = new Foo();
var props = inheritedEnumerableProperties( f );
// returns [ 'beep' ]
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

<!-- eslint-disable id-length -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var inherit = require( '@stdlib/utils/inherit' );

function Bar() {
    return this;
}

Bar.prototype.boop = 'beep';

function Foo() {
    Bar.call( this );
    this.a = 'b';
    return this;
}

inherit( Foo, Bar );
Foo.prototype.beep = 'boop';

var f = new Foo();
var pros = inheritedEnumerableProperties( f, 1 );
// returns [ 'beep' ]
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
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var defineProperty = require( '@stdlib/utils/define-property' );
var inheritedEnumerableProperties = require( '@stdlib/utils/inherited-enumerable-properties' );

var hasSymbols = hasSymbolSupport();
var props;
var obj;

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'qux'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
        defineProperty( this, 'beep', {
            'configurable': false,
            'enumerable': false,
            'writable': false,
            'value': 'boop'
        });
    }
    return this;
}

Foo.prototype.c = 'd';
defineProperty( Foo.prototype, 'bip', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'bop'
});
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'd';
    defineProperty( Foo.prototype, Symbol( 'e' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'f'
    });
}

obj = new Foo();
props = inheritedEnumerableProperties( obj );

console.log( props );
// e.g., => [ 'c', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/enumerable-properties`][@stdlib/utils/enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/enumerable-properties-in`][@stdlib/utils/enumerable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-enumerable-property-symbols`][@stdlib/utils/inherited-enumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-keys`][@stdlib/utils/inherited-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-nonenumerable-properties`][@stdlib/utils/inherited-nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-properties`][@stdlib/utils/inherited-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

[@stdlib/symbol/ctor]: https://www.npmjs.com/package/@stdlib/symbol-ctor

<!-- <related-links> -->

[@stdlib/utils/enumerable-properties]: https://github.com/stdlib-js/utils/tree/main/enumerable-properties

[@stdlib/utils/enumerable-properties-in]: https://github.com/stdlib-js/utils/tree/main/enumerable-properties-in

[@stdlib/utils/inherited-enumerable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/inherited-enumerable-property-symbols

[@stdlib/utils/inherited-keys]: https://github.com/stdlib-js/utils/tree/main/inherited-keys

[@stdlib/utils/inherited-nonenumerable-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-nonenumerable-properties

[@stdlib/utils/inherited-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-properties

<!-- </related-links> -->

</section>

<!-- /.links -->
