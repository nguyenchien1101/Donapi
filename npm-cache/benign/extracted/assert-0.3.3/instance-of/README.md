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

# instanceOf

> Test whether a value has in its prototype chain a specified constructor as a prototype property.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var instanceOf = require( '@stdlib/assert/instance-of' );
```

#### instanceOf( value, constructor )

Tests whether a `value` has in its prototype chain a specified `constructor` as a `prototype` property.

```javascript
var inherit = require( '@stdlib/utils/inherit' );

function Foo() {
    return this;
}

function Bar() {
    return this;
}
inherit( Bar, Foo );

var bar = new Bar();

var bool = instanceOf( bar, Foo );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function throws a `TypeError` if provided a `constructor` argument which is not callable.

    ```javascript
    var bool = instanceOf( {}, null );
    // throws <TypeError>
    ```

-   While the prototype of an `object` created using object literal notion is `undefined`, the function returns `true` when provided an `object` literal and the `Object` constructor. This maintains consistent behavior with the `instanceof` operator.

    <!-- FIXME: apparent issue with realms when linting doctest values -->

    <!-- eslint-disable stdlib/doctest -->

    ```javascript
    var Object = require( '@stdlib/object/ctor' );

    var bool = ( {} instanceof Object );
    // returns true

    bool = instanceOf( {}, Object );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- FIXME: apparent issue with realms when linting doctest values -->

<!-- eslint-disable stdlib/doctest -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var Object = require( '@stdlib/object/ctor' );
var Function = require( '@stdlib/function/ctor' );
var instanceOf = require( '@stdlib/assert/instance-of' );

var bool = instanceOf( [], Array );
// returns true

bool = instanceOf( [], Object );
// returns true

bool = instanceOf( {}, Object );
// returns true

bool = instanceOf( new Date(), Date );
// returns true

bool = instanceOf( /.*/, RegExp );
// returns true

bool = instanceOf( instanceOf, Function );
// returns true

bool = instanceOf( null, Object );
// returns false

bool = instanceOf( 5, Number );
// returns false

bool = instanceOf( '5', String );
// returns false

bool = instanceOf( void 0, Object );
// returns false

bool = instanceOf( {}, Array );
// returns false

bool = instanceOf( {}, Function );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-prototype-of`][@stdlib/assert/is-prototype-of]</span><span class="delimiter">: </span><span class="description">test if an object's prototype chain contains a provided prototype.</span>
-   <span class="package-name">[`@stdlib/utils/constructor-name`][@stdlib/utils/constructor-name]</span><span class="delimiter">: </span><span class="description">determine the name of a value's constructor.</span>
-   <span class="package-name">[`@stdlib/utils/inherit`][@stdlib/utils/inherit]</span><span class="delimiter">: </span><span class="description">implement prototypical inheritance by replacing the prototype of one constructor with the prototype of another constructor.</span>
-   <span class="package-name">[`@stdlib/utils/type-of`][@stdlib/utils/type-of]</span><span class="delimiter">: </span><span class="description">determine a value's type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-prototype-of]: https://github.com/stdlib-js/assert/tree/main/is-prototype-of

[@stdlib/utils/constructor-name]: https://www.npmjs.com/package/@stdlib/utils-constructor-name

[@stdlib/utils/inherit]: https://www.npmjs.com/package/@stdlib/utils-inherit

[@stdlib/utils/type-of]: https://www.npmjs.com/package/@stdlib/utils-type-of

<!-- </related-links> -->

</section>

<!-- /.links -->
