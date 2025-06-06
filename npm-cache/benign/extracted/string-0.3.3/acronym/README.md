<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# acronym

> Generate an acronym for a given string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var acronym = require( '@stdlib/string/acronym' );
```

#### acronym( str\[, options] )

Generates an acronym for a given string.

```javascript
var out = acronym( 'the quick brown fox' );
// returns 'QBF'

out = acronym( 'Hard-boiled eggs' );
// returns 'HBE'
```

The function accepts the following `options`:

-   **stopwords**: list of custom stop words. If not specified, the function uses a default set of stop words from the English language that were deemed words one would likely want to exclude from the acronym generation (a subset of the stop words from [@stdlib/datasets/stopwords-en][@stdlib/datasets/stopwords-en]).

By default, the function uses a list of common English stop words. To use a custom list, set the `stopwords` option.

```javascript
var out = acronym( 'the quick brown fox', {
    'stopwords': []
});
// returns 'TQBF'

out = acronym( 'the quick brown fox', {
    'stopwords': [ 'the', 'quick', 'brown', 'fox' ]
});
// returns ''
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var acronym = require( '@stdlib/string/acronym' );

var str = 'Test-driven development';
var out = acronym( str );
// returns 'TDD'

str = 'Industrial Business Machines';
out = acronym( str );
// returns 'IBM'

str = 'National Aeronautics and Space Administration';
out = acronym( str );
// returns 'NASA'

str = 'To be determined...';
out = acronym( str, {
    'stopwords': []
});
// returns 'TBD'
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: acronym [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --stopwords str       Comma-separated list of custom stop words.
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
    $ echo -n $'quick brown fox\nAlpha-Centauri' | acronym --split /\r?\n/

    # Escaped...
    $ echo -n $'quick brown fox\nAlpha-Centauri' | acronym --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ acronym 'the quick brown fox'
QBF
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'the quick brown fox'' | acronym
QBF
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'quick brown fox\tAlpha-Centauri' | acronym --split '\t'
QBF
AC
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[@stdlib/datasets/stopwords-en]: https://www.npmjs.com/package/@stdlib/datasets-stopwords-en

</section>

<!-- /.links -->
