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

# isWhitespace

> Test whether a string contains only [white space][whitespace] characters.

<section class="usage">

## Usage

```javascript
var isWhitespace = require( '@stdlib/assert/is-whitespace' );
```

#### isWhitespace( value )

Tests whether a string contains only [white space][whitespace] characters.

```javascript
var bool = isWhitespace( '             ' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A [white space][whitespace] character is defined as one of the 25 characters defined as a [white space][whitespace] ("WSpace=Y","WS") character in the Unicode 9.0 character database, as well as one related [white space][whitespace] character without the Unicode character property "WSpace=Y" (zero width non-breaking space which was deprecated as of Unicode 3.2).
-   For non-string values, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isWhitespace = require( '@stdlib/assert/is-whitespace' );

var out = isWhitespace( '              ' );
// returns true

out = isWhitespace( '' );
// returns false

out = isWhitespace( '\\r\\n' );
// returns false

out = isWhitespace( 123 );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: is-whitespace [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'   \nboop' | is-whitespace --split /\r?\n/

    # Escaped...
    $ echo -n $'   \nboop' | is-whitespace --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-whitespace foo
false
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'foo' | is-whitespace
false
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '   \tbar' | is-whitespace --split '\t'
true
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/regexp/whitespace`][@stdlib/regexp/whitespace]</span><span class="delimiter">: </span><span class="description">return a regular expression to match a white space character.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[whitespace]: https://en.wikipedia.org/wiki/Whitespace_character

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/regexp/whitespace]: https://www.npmjs.com/package/@stdlib/regexp-whitespace

<!-- </related-links> -->

</section>

<!-- /.links -->
