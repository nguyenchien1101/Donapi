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

# propertyDescriptorIn

> Return a property descriptor for an object's own or inherited property.

<section class="usage">

## Usage

```javascript
var propertyDescriptorIn = require( '@stdlib/utils/property-descriptor-in' );
```

#### propertyDescriptorIn( obj, property )

Returns a property descriptor for an object's own or inherited property.

```javascript
var obj = {
    'a': 1,
    'b': 2
};

var desc = propertyDescriptorIn( obj, 'a' );
// returns {'configurable':true,'enumerable':true,'writable':true,'value':1}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function differs from the built-in `Object.getOwnPropertyDescriptor()` as follows:

    -   If provided `null` or `undefined`, the function returns `null`, rather than throwing an error.
    -   If an object does not have a provided property, the function returns `null`, rather than `undefined`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var propertyDescriptorIn = require( '@stdlib/utils/property-descriptor-in' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'value': 'qux',
        'configurable': true,
        'writable': true,
        'enumerable': false
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var desc = propertyDescriptorIn( obj, 'foo' );

console.log( desc );
// => {'configurable':true,'enumerable':true,'writable':true,'value':['bar']}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/has-property`][@stdlib/assert/has-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property, either own or inherited.</span>
-   <span class="package-name">[`@stdlib/utils/define-property`][@stdlib/utils/define-property]</span><span class="delimiter">: </span><span class="description">define (or modify) an object property.</span>
-   <span class="package-name">[`@stdlib/utils/property-descriptor`][@stdlib/utils/property-descriptor]</span><span class="delimiter">: </span><span class="description">return a property descriptor for an object's own property.</span>
-   <span class="package-name">[`@stdlib/utils/property-descriptors-in`][@stdlib/utils/property-descriptors-in]</span><span class="delimiter">: </span><span class="description">return an object's own and inherited property descriptors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/has-property]: https://www.npmjs.com/package/@stdlib/assert-has-property

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils/tree/main/define-property

[@stdlib/utils/property-descriptor]: https://github.com/stdlib-js/utils/tree/main/property-descriptor

[@stdlib/utils/property-descriptors-in]: https://github.com/stdlib-js/utils/tree/main/property-descriptors-in

<!-- </related-links> -->

</section>

<!-- /.links -->
