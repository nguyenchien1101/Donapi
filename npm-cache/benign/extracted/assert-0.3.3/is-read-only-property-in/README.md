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

# isReadOnlyPropertyIn

> Test if an object's own or inherited property is [read-only][@stdlib/utils/define-read-only-property].

<section class="usage">

## Usage

```javascript
var isReadOnlyPropertyIn = require( '@stdlib/assert/is-read-only-property-in' );
```

#### isReadOnlyPropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a [read-only][@stdlib/utils/define-read-only-property] `property`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var bool;
var obj;

function Foo() {
    this.foo = 'bar';
    return this;
}

defineProperty( Foo.prototype, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

defineProperty( Foo.prototype, 'accessor', {
    'configurable': false,
    'enumerable': true,
    'get': function getter() {
        return obj.foo;
    }
});

obj = new Foo();

bool = isReadOnlyPropertyIn( obj, 'foo' );
// returns false

bool = isReadOnlyPropertyIn( obj, 'beep' );
// returns true

bool = isReadOnlyPropertyIn( obj, 'accessor' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isReadOnlyPropertyIn( 'beep', 'length' );
    // returns true
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var defineProperty = require( '@stdlib/utils/define-property' );

    var obj = {};

    defineProperty( obj, 'null', {
        'configurable': false,
        'enumerable': true,
        'writable': false,
        'value': true
    });

    var bool = isReadOnlyPropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isReadOnlyPropertyIn = require( '@stdlib/assert/is-read-only-property-in' );

var bool = isReadOnlyPropertyIn( 'a', 'length' );
// returns true

bool = isReadOnlyPropertyIn( { 'a': 'b' }, 'a' );
// returns false

bool = isReadOnlyPropertyIn( [ 'a' ], 0 );
// returns false

bool = isReadOnlyPropertyIn( { 'null': false }, null );
// returns false

bool = isReadOnlyPropertyIn( { '[object Object]': false }, {} );
// returns false

bool = isReadOnlyPropertyIn( {}, 'toString' );
// returns false

bool = isReadOnlyPropertyIn( {}, 'hasOwnProperty' );
// returns false

bool = isReadOnlyPropertyIn( null, 'a' );
// returns false

bool = isReadOnlyPropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-read-only-property`][@stdlib/assert/is-read-only-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is read-only.</span>
-   <span class="package-name">[`@stdlib/assert/is-read-write-property-in`][@stdlib/assert/is-read-write-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own and inherited property is readable and writable.</span>
-   <span class="package-name">[`@stdlib/assert/is-readable-property-in`][@stdlib/assert/is-readable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is readable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property-in`][@stdlib/assert/is-writable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is writable.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/define-read-only-property]: https://www.npmjs.com/package/@stdlib/utils-define-read-only-property

<!-- <related-links> -->

[@stdlib/assert/is-read-only-property]: https://github.com/stdlib-js/assert/tree/main/is-read-only-property

[@stdlib/assert/is-read-write-property-in]: https://github.com/stdlib-js/assert/tree/main/is-read-write-property-in

[@stdlib/assert/is-readable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-readable-property-in

[@stdlib/assert/is-writable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-writable-property-in

<!-- </related-links> -->

</section>

<!-- /.links -->
