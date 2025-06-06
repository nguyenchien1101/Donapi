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

# isReadOnlyProperty

> Test if an object's own property is [read-only][@stdlib/utils/define-read-only-property].

<section class="usage">

## Usage

```javascript
var isReadOnlyProperty = require( '@stdlib/assert/is-read-only-property' );
```

#### isReadOnlyProperty( value, property )

Returns a `boolean` indicating if a `value` has a [read-only][@stdlib/utils/define-read-only-property] `property`.

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
    'get': function getter() {
        return obj.foo;
    }
});

var bool = isReadOnlyProperty( obj, 'foo' );
// returns false

bool = isReadOnlyProperty( obj, 'beep' );
// returns true

bool = isReadOnlyProperty( obj, 'accessor' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isReadOnlyProperty( 'beep', 'length' );
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

    var bool = isReadOnlyProperty( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isReadOnlyProperty = require( '@stdlib/assert/is-read-only-property' );

var bool = isReadOnlyProperty( 'a', 'length' );
// returns true

bool = isReadOnlyProperty( { 'a': 'b' }, 'a' );
// returns false

bool = isReadOnlyProperty( [ 'a' ], 0 );
// returns false

bool = isReadOnlyProperty( { 'null': false }, null );
// returns false

bool = isReadOnlyProperty( { '[object Object]': false }, {} );
// returns false

bool = isReadOnlyProperty( {}, 'toString' );
// returns false

bool = isReadOnlyProperty( {}, 'hasOwnProperty' );
// returns false

bool = isReadOnlyProperty( null, 'a' );
// returns false

bool = isReadOnlyProperty( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-read-only-property-in`][@stdlib/assert/is-read-only-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is read-only.</span>
-   <span class="package-name">[`@stdlib/assert/is-read-write-property`][@stdlib/assert/is-read-write-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is readable and writable.</span>
-   <span class="package-name">[`@stdlib/assert/is-readable-property`][@stdlib/assert/is-readable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is readable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property`][@stdlib/assert/is-writable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is writable.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/utils/define-read-only-property]: https://www.npmjs.com/package/@stdlib/utils-define-read-only-property

<!-- <related-links> -->

[@stdlib/assert/is-read-only-property-in]: https://github.com/stdlib-js/assert/tree/main/is-read-only-property-in

[@stdlib/assert/is-read-write-property]: https://github.com/stdlib-js/assert/tree/main/is-read-write-property

[@stdlib/assert/is-readable-property]: https://github.com/stdlib-js/assert/tree/main/is-readable-property

[@stdlib/assert/is-writable-property]: https://github.com/stdlib-js/assert/tree/main/is-writable-property

<!-- </related-links> -->

</section>

<!-- /.links -->
