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

# writablePropertiesIn

> Return an array of an object's own and inherited writable property names and [symbols][@stdlib/symbol/ctor].

<section class="usage">

## Usage

```javascript
var writablePropertiesIn = require( '@stdlib/utils/writable-properties-in' );
```

#### writablePropertiesIn( obj )

Returns an `array` of an object's own and inherited writable property names and [symbols][@stdlib/symbol/ctor].

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {};

defineProperty( obj, 'a', {
    'configurable': false,
    'enumerable': false,
    'writable': true,
    'value': 'a'
});

var props = writablePropertiesIn( obj );
// returns [ 'a', ... ]
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
var defineProperty = require( '@stdlib/utils/define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var writablePropertiesIn = require( '@stdlib/utils/writable-properties-in' );

var hasSymbols = hasSymbolSupport();

function Foo() {
    this.a = 'a';
    defineProperty( this, 'b', {
        'configurable': true,
        'enumerable': true,
        'writable': false,
        'value': 'b'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'a';
        defineProperty( this, Symbol( 'b' ), {
            'configurable': true,
            'enumerable': true,
            'writable': false,
            'value': 'b'
        });
    }
    return this;
}

Foo.prototype.foo = 'bar';
defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'foo' ) ] = 'bar';
    defineProperty( Foo.prototype, Symbol( 'beep' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'boop'
    });
}

var obj = new Foo();
var props = writablePropertiesIn( obj );
// e.g., returns [ 'a', 'foo', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/inherited-writable-properties`][@stdlib/utils/inherited-writable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited writable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/writable-properties`][@stdlib/utils/writable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/properties-in`][@stdlib/utils/properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/symbol/ctor]: https://www.npmjs.com/package/@stdlib/symbol-ctor

<!-- <related-links> -->

[@stdlib/utils/inherited-writable-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-writable-properties

[@stdlib/utils/writable-properties]: https://github.com/stdlib-js/utils/tree/main/writable-properties

[@stdlib/utils/properties-in]: https://github.com/stdlib-js/utils/tree/main/properties-in

<!-- </related-links> -->

</section>

<!-- /.links -->
