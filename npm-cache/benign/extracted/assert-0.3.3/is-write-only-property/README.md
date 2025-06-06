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

# isWriteOnlyProperty

> Test if an object's own property is [write-only][@stdlib/utils/define-write-only-accessor].

<section class="usage">

## Usage

```javascript
var isWriteOnlyProperty = require( '@stdlib/assert/is-write-only-property' );
```

#### isWriteOnlyProperty( value, property )

Returns a `boolean` indicating if a `value` has a [write-only][@stdlib/utils/define-write-only-accessor] `property`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {
    'foo': 'bar'
};

defineProperty( obj, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'boop'
});

defineProperty( obj, 'accessor', {
    'configurable': false,
    'enumerable': true,
    'set': function setter( v ) {
        obj.foo = v;
    }
});

var bool = isWriteOnlyProperty( obj, 'foo' );
// returns false

bool = isWriteOnlyProperty( obj, 'beep' );
// returns false

bool = isWriteOnlyProperty( obj, 'accessor' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isWriteOnlyProperty( 'beep', 'length' );
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

    var bool = isWriteOnlyProperty( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isWriteOnlyProperty = require( '@stdlib/assert/is-write-only-property' );

var bool = isWriteOnlyProperty( 'a', 'length' );
// returns false

bool = isWriteOnlyProperty( { 'a': 'b' }, 'a' );
// returns false

bool = isWriteOnlyProperty( [ 'a' ], 0 );
// returns false

bool = isWriteOnlyProperty( { 'null': false }, null );
// returns false

bool = isWriteOnlyProperty( { '[object Object]': false }, {} );
// returns false

bool = isWriteOnlyProperty( {}, 'toString' );
// returns false

bool = isWriteOnlyProperty( {}, 'hasOwnProperty' );
// returns false

bool = isWriteOnlyProperty( null, 'a' );
// returns false

bool = isWriteOnlyProperty( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-read-only-property`][@stdlib/assert/is-read-only-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is read-only.</span>
-   <span class="package-name">[`@stdlib/assert/is-read-write-property`][@stdlib/assert/is-read-write-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is readable and writable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property`][@stdlib/assert/is-writable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is writable.</span>
-   <span class="package-name">[`@stdlib/assert/is-write-only-property-in`][@stdlib/assert/is-write-only-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is write-only.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/define-write-only-accessor]: https://www.npmjs.com/package/@stdlib/utils-define-write-only-accessor

<!-- <related-links> -->

[@stdlib/assert/is-read-only-property]: https://github.com/stdlib-js/assert/tree/main/is-read-only-property

[@stdlib/assert/is-read-write-property]: https://github.com/stdlib-js/assert/tree/main/is-read-write-property

[@stdlib/assert/is-writable-property]: https://github.com/stdlib-js/assert/tree/main/is-writable-property

[@stdlib/assert/is-write-only-property-in]: https://github.com/stdlib-js/assert/tree/main/is-write-only-property-in

<!-- </related-links> -->

</section>

<!-- /.links -->
