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

# isWriteOnlyPropertyIn

> Test if an object's own or inherited property is [write-only][@stdlib/utils/define-write-only-accessor].

<section class="usage">

## Usage

```javascript
var isWriteOnlyPropertyIn = require( '@stdlib/assert/is-write-only-property-in' );
```

#### isWriteOnlyPropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a [write-only][@stdlib/utils/define-write-only-accessor] `property`.

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
    'set': function setter( v ) {
        obj.foo = v;
    }
});

obj = new Foo();

bool = isWriteOnlyPropertyIn( obj, 'foo' );
// returns false

bool = isWriteOnlyPropertyIn( obj, 'beep' );
// returns false

bool = isWriteOnlyPropertyIn( obj, 'accessor' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isWriteOnlyPropertyIn( 'beep', 'length' );
    // returns false
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var defineProperty = require( '@stdlib/utils/define-property' );

    var obj = {};

    function setter( v ) {
        obj.null = v;
    }

    defineProperty( obj, 'null', {
        'configurable': false,
        'enumerable': true,
        'set': setter
    });

    var bool = isWriteOnlyPropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isWriteOnlyPropertyIn = require( '@stdlib/assert/is-write-only-property-in' );

var bool = isWriteOnlyPropertyIn( 'a', 'length' );
// returns false

bool = isWriteOnlyPropertyIn( { 'a': 'b' }, 'a' );
// returns false

bool = isWriteOnlyPropertyIn( [ 'a' ], 0 );
// returns false

bool = isWriteOnlyPropertyIn( { 'null': false }, null );
// returns false

bool = isWriteOnlyPropertyIn( { '[object Object]': false }, {} );
// returns false

bool = isWriteOnlyPropertyIn( {}, 'toString' );
// returns false

bool = isWriteOnlyPropertyIn( {}, 'hasOwnProperty' );
// returns false

bool = isWriteOnlyPropertyIn( null, 'a' );
// returns false

bool = isWriteOnlyPropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-read-only-property-in`][@stdlib/assert/is-read-only-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is read-only.</span>
-   <span class="package-name">[`@stdlib/assert/is-read-write-property-in`][@stdlib/assert/is-read-write-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own and inherited property is readable and writable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property-in`][@stdlib/assert/is-writable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is writable.</span>
-   <span class="package-name">[`@stdlib/assert/is-write-only-property`][@stdlib/assert/is-write-only-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is write-only.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/define-write-only-accessor]: https://www.npmjs.com/package/@stdlib/utils-define-write-only-accessor

<!-- <related-links> -->

[@stdlib/assert/is-read-only-property-in]: https://github.com/stdlib-js/assert/tree/main/is-read-only-property-in

[@stdlib/assert/is-read-write-property-in]: https://github.com/stdlib-js/assert/tree/main/is-read-write-property-in

[@stdlib/assert/is-writable-property-in]: https://github.com/stdlib-js/assert/tree/main/is-writable-property-in

[@stdlib/assert/is-write-only-property]: https://github.com/stdlib-js/assert/tree/main/is-write-only-property

<!-- </related-links> -->

</section>

<!-- /.links -->
