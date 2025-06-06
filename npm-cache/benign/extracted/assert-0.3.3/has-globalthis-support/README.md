<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# globalThis Support

> Detect [`globalThis`][mdn-global-this] support.

<section class="usage">

## Usage

```javascript
var hasGlobalThisSupport = require( '@stdlib/assert/has-globalthis-support' );
```

#### hasGlobalThisSupport()

Detects if a runtime environment supports [`globalThis`][mdn-global-this].

```javascript
var bool = hasGlobalThisSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasGlobalThisSupport = require( '@stdlib/assert/has-globalthis-support' );

var bool = hasGlobalThisSupport();
if ( bool ) {
    console.log( 'Environment has `globalThis` support.' );
} else {
    console.log( 'Environment lacks `globalThis` support.' );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: has-globalthis-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-globalthis-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/global`][@stdlib/utils/global]</span><span class="delimiter">: </span><span class="description">return the global object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-global-this]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

<!-- <related-links> -->

[@stdlib/utils/global]: https://www.npmjs.com/package/@stdlib/utils-global

<!-- </related-links> -->

</section>

<!-- /.links -->
