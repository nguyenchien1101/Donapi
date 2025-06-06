<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# currentYear

> Current year.

<section class="usage">

## Usage

```javascript
var currentYear = require( '@stdlib/time/current-year' );
```

#### currentYear()

Returns the current year.

```javascript
var year = currentYear();
// returns <number>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The returned value is an integer.
-   The year is based on the local time zone.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var currentYear = require( '@stdlib/time/current-year' );

var year = currentYear();
// returns <number>
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: current-year [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ current-year
<number>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-current-year`][@stdlib/assert/is-current-year]</span><span class="delimiter">: </span><span class="description">test if a value is the current year.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/assert/is-current-year]: https://www.npmjs.com/package/@stdlib/assert-is-current-year

<!-- </related-links> -->

</section>

<!-- /.links -->
