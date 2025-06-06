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

# inheritedProperties

> Return an array of an object's inherited property names and [symbols][@stdlib/symbol/ctor].

<section class="usage">

## Usage

```javascript
var inheritedProperties = require( '@stdlib/utils/inherited-properties' );
```

#### inheritedProperties( obj\[, level] )

Returns an `array` of an object's inherited property names and [symbols][@stdlib/symbol/ctor].

```javascript
var props = inheritedProperties( [ 1, 2, 3 ] );
// returns [...]
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var props = inheritedProperties( [ 1, 2, 3 ], 1 );
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
var defineProperty = require( '@stdlib/utils/define-property' );
var inheritedProperties = require( '@stdlib/utils/inherited-properties' );

var hasSymbols = hasSymbolSupport();

function Foo() {
    this.a = 'b';
    defineProperty( this, 'foo', {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'bar'
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
    'value': 'bap'
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

var obj = new Foo();
var props = inheritedProperties( obj );
// returns [ ..., 'c', 'bip', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/properties`][@stdlib/utils/properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/properties-in`][@stdlib/utils/properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-names`][@stdlib/utils/inherited-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-property-symbols`][@stdlib/utils/inherited-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/symbol/ctor]: https://www.npmjs.com/package/@stdlib/symbol-ctor

<!-- <related-links> -->

[@stdlib/utils/properties]: https://github.com/stdlib-js/utils/tree/main/properties

[@stdlib/utils/properties-in]: https://github.com/stdlib-js/utils/tree/main/properties-in

[@stdlib/utils/inherited-property-names]: https://github.com/stdlib-js/utils/tree/main/inherited-property-names

[@stdlib/utils/inherited-property-symbols]: https://github.com/stdlib-js/utils/tree/main/inherited-property-symbols

<!-- </related-links> -->

</section>

<!-- /.links -->
