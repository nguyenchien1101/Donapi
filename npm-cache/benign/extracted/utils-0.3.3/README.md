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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Utils

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Utilities.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils
```

</section>

<section class="usage">

## Usage

```javascript
var utils = require( '@stdlib/utils' );
```

#### utils

Namespace containing utilities.

```javascript
var o = utils;
// returns {...}
```

The namespace has the following sub-namespaces:

<!-- <toc pattern="async"> -->

<div class="namespace-toc">

-   <span class="signature">[`async`][@stdlib/utils/async]</span><span class="delimiter">: </span><span class="description">async utilities.</span>

</div>

<!-- </toc> -->

### Data Structures

<!-- <toc keywords="+data structure"> -->

<div class="namespace-toc">

-   <span class="signature">[`CircularBuffer( buffer )`][@stdlib/utils/circular-buffer]</span><span class="delimiter">: </span><span class="description">circular buffer constructor.</span>
-   <span class="signature">[`CompactAdjacencyMatrix( N )`][@stdlib/utils/compact-adjacency-matrix]</span><span class="delimiter">: </span><span class="description">compact adjacency matrix constructor.</span>
-   <span class="signature">[`DoublyLinkedList()`][@stdlib/utils/doubly-linked-list]</span><span class="delimiter">: </span><span class="description">doubly linked list constructor.</span>
-   <span class="signature">[`FIFO()`][@stdlib/utils/fifo]</span><span class="delimiter">: </span><span class="description">first-in-first-out (FIFO) queue.</span>
-   <span class="signature">[`LinkedList()`][@stdlib/utils/linked-list]</span><span class="delimiter">: </span><span class="description">singly linked list.</span>
-   <span class="signature">[`namedtypedtuple( fields[, options] )`][@stdlib/utils/named-typed-tuple]</span><span class="delimiter">: </span><span class="description">create a factory for generating named typed tuples.</span>
-   <span class="signature">[`Stack()`][@stdlib/utils/stack]</span><span class="delimiter">: </span><span class="description">stack data structure.</span>

</div>

<!-- </toc> -->

### Collections

<!-- <toc pattern="+(append|any*|bifurcate*|count-by*|every*|for-each*|group*|inmap*|key-by*|none*|pop|prepend|push|reduce*|*shift|some*|tabulate*|until-each*|while-each*)" ignore="*propert*" > -->

<div class="namespace-toc">

-   <span class="signature">[`anyByRight( collection, predicate[, thisArg ] )`][@stdlib/utils/any-by-right]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a collection passes a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="signature">[`anyBy( collection, predicate[, thisArg ] )`][@stdlib/utils/any-by]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a collection passes a test implemented by a predicate function.</span>
-   <span class="signature">[`any( collection )`][@stdlib/utils/any]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a collection is truthy.</span>
-   <span class="signature">[`append( collection1, collection2 )`][@stdlib/utils/append]</span><span class="delimiter">: </span><span class="description">add elements from one collection to the end of another collection.</span>
-   <span class="signature">[`bifurcateBy( collection, [options,] predicate )`][@stdlib/utils/bifurcate-by]</span><span class="delimiter">: </span><span class="description">split values into two groups according to a predicate function.</span>
-   <span class="signature">[`bifurcateIn( obj, [options,] predicate )`][@stdlib/utils/bifurcate-in]</span><span class="delimiter">: </span><span class="description">split an object's **own** and **inherited** property values into two groups according to a predicate function.</span>
-   <span class="signature">[`bifurcateOwn( obj, [options,] predicate )`][@stdlib/utils/bifurcate-own]</span><span class="delimiter">: </span><span class="description">split an object's **own** property values into two groups according to a predicate function.</span>
-   <span class="signature">[`bifurcate( collection, [options,] filter )`][@stdlib/utils/bifurcate]</span><span class="delimiter">: </span><span class="description">split values into two groups.</span>
-   <span class="signature">[`countBy( collection, [options,] indicator )`][@stdlib/utils/count-by]</span><span class="delimiter">: </span><span class="description">group values according to an indicator function and return group counts.</span>
-   <span class="signature">[`everyByRight( collection, predicate[, thisArg ] )`][@stdlib/utils/every-by-right]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection pass a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="signature">[`everyBy( collection, predicate[, thisArg ] )`][@stdlib/utils/every-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection pass a test implemented by a predicate function.</span>
-   <span class="signature">[`every( collection )`][@stdlib/utils/every]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection are truthy.</span>
-   <span class="signature">[`forEachRight( collection, fcn[, thisArg ] )`][@stdlib/utils/for-each-right]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection, iterating from the right to left.</span>
-   <span class="signature">[`forEach( collection, fcn[, thisArg ] )`][@stdlib/utils/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection.</span>
-   <span class="signature">[`groupBy( collection, [options,] indicator )`][@stdlib/utils/group-by]</span><span class="delimiter">: </span><span class="description">group values according to an indicator function.</span>
-   <span class="signature">[`groupIn( obj, [options,] indicator )`][@stdlib/utils/group-in]</span><span class="delimiter">: </span><span class="description">group an object's **own** and **inherited** property values according to an indicator function.</span>
-   <span class="signature">[`groupOwn( obj, [options,] indicator )`][@stdlib/utils/group-own]</span><span class="delimiter">: </span><span class="description">group an object's **own** property values according to an indicator function.</span>
-   <span class="signature">[`group( collection, [options,] groups )`][@stdlib/utils/group]</span><span class="delimiter">: </span><span class="description">group values as arrays associated with distinct keys.</span>
-   <span class="signature">[`inmapRight( collection, fcn[, thisArg ] )`][@stdlib/utils/inmap-right]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection and update the collection in-place, iterating from right to left.</span>
-   <span class="signature">[`inmap( collection, fcn[, thisArg ] )`][@stdlib/utils/inmap]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection and update the collection in-place.</span>
-   <span class="signature">[`keyByRight( collection, fcn[, thisArg ] )`][@stdlib/utils/key-by-right]</span><span class="delimiter">: </span><span class="description">convert a collection to an object whose keys are determined by a provided function and whose values are the collection values, iterating from right to left.</span>
-   <span class="signature">[`keyBy( collection, fcn[, thisArg ] )`][@stdlib/utils/key-by]</span><span class="delimiter">: </span><span class="description">convert a collection to an object whose keys are determined by a provided function and whose values are the collection values.</span>
-   <span class="signature">[`noneByRight( collection, predicate[, thisArg ] )`][@stdlib/utils/none-by-right]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection fail a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="signature">[`noneBy( collection, predicate[, thisArg ] )`][@stdlib/utils/none-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection fail a test implemented by a predicate function.</span>
-   <span class="signature">[`none( collection )`][@stdlib/utils/none]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection are falsy.</span>
-   <span class="signature">[`pop( collection )`][@stdlib/utils/pop]</span><span class="delimiter">: </span><span class="description">remove and return the last element of a collection.</span>
-   <span class="signature">[`prepend( collection1, collection2 )`][@stdlib/utils/prepend]</span><span class="delimiter">: </span><span class="description">add elements from one collection to the beginning of another collection.</span>
-   <span class="signature">[`push( collection, ...items )`][@stdlib/utils/push]</span><span class="delimiter">: </span><span class="description">add one or more elements to the end of a collection.</span>
-   <span class="signature">[`reduceRight( arr, initial, reducer[, thisArg ] )`][@stdlib/utils/reduce-right]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array while iterating from right to left and return the accumulated result.</span>
-   <span class="signature">[`reduce( arr, initial, reducer[, thisArg ] )`][@stdlib/utils/reduce]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array and return the accumulated result.</span>
-   <span class="signature">[`reduce2d( arr, initial, fcn[, thisArg] )`][@stdlib/utils/reduce2d]</span><span class="delimiter">: </span><span class="description">reduce the number of dimensions by one of a two-dimensional nested array by applying a function against an accumulator and each element along the innermost dimension and returning the accumulation results as a one-dimensional array.</span>
-   <span class="signature">[`shift( collection )`][@stdlib/utils/shift]</span><span class="delimiter">: </span><span class="description">remove and return the first element of a collection.</span>
-   <span class="signature">[`someByRight( collection, n, predicate[, thisArg ] )`][@stdlib/utils/some-by-right]</span><span class="delimiter">: </span><span class="description">test whether a collection contains at least `n` elements which pass a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="signature">[`someBy( collection, n, predicate[, thisArg ] )`][@stdlib/utils/some-by]</span><span class="delimiter">: </span><span class="description">test whether a collection contains at least `n` elements which pass a test implemented by a predicate function.</span>
-   <span class="signature">[`some( collection, n )`][@stdlib/utils/some]</span><span class="delimiter">: </span><span class="description">test whether a collection contains at least `n` elements which are truthy.</span>
-   <span class="signature">[`tabulateBy( collection[, options,] indicator )`][@stdlib/utils/tabulate-by]</span><span class="delimiter">: </span><span class="description">generate a frequency table according to an indicator function.</span>
-   <span class="signature">[`tabulate( collection )`][@stdlib/utils/tabulate]</span><span class="delimiter">: </span><span class="description">generate a frequency table.</span>
-   <span class="signature">[`unshift( collection, ...items )`][@stdlib/utils/unshift]</span><span class="delimiter">: </span><span class="description">add one or more elements to the beginning of a collection.</span>
-   <span class="signature">[`untilEachRight( collection, predicate, fcn[, thisArg ] )`][@stdlib/utils/until-each-right]</span><span class="delimiter">: </span><span class="description">until a test condition is true, invoke a function for each element in a collection, iterating from right to left.</span>
-   <span class="signature">[`untilEach( collection, predicate, fcn[, thisArg ] )`][@stdlib/utils/until-each]</span><span class="delimiter">: </span><span class="description">until a test condition is true, invoke a function for each element in a collection.</span>
-   <span class="signature">[`whileEachRight( collection, predicate, fcn[, thisArg ] )`][@stdlib/utils/while-each-right]</span><span class="delimiter">: </span><span class="description">while a test condition is true, invoke a function for each element in a collection, iterating from right to left.</span>
-   <span class="signature">[`whileEach( collection, predicate, fcn[, thisArg ] )`][@stdlib/utils/while-each]</span><span class="delimiter">: </span><span class="description">while a test condition is true, invoke a function for each element in a collection.</span>

</div>

<!-- </toc> -->

### Arrays

<!-- <toc pattern="+(from-entries|find|flatten-array|index-of|*pluck*|zip|unzip)"> -->

<div class="namespace-toc">

-   <span class="signature">[`deepPluck( arr, path[, options] )`][@stdlib/utils/deep-pluck]</span><span class="delimiter">: </span><span class="description">extract a nested property value from each element of an object array.</span>
-   <span class="signature">[`find( arr, [opts,] clbk )`][@stdlib/utils/find]</span><span class="delimiter">: </span><span class="description">find elements in an array-like object that satisfy a test condition.</span>
-   <span class="signature">[`flattenArray( arr[, options] )`][@stdlib/utils/flatten-array]</span><span class="delimiter">: </span><span class="description">flatten an array.</span>
-   <span class="signature">[`objectFromEntries( entries )`][@stdlib/utils/from-entries]</span><span class="delimiter">: </span><span class="description">create an object from key-value pairs.</span>
-   <span class="signature">[`indexOf( arr, searchElement[, fromIndex] )`][@stdlib/utils/index-of]</span><span class="delimiter">: </span><span class="description">return the first index at which a given element can be found.</span>
-   <span class="signature">[`pluck( arr, prop[, options] )`][@stdlib/utils/pluck]</span><span class="delimiter">: </span><span class="description">extract a property value from each element of an object array.</span>
-   <span class="signature">[`unzip( arr[, idx] )`][@stdlib/utils/unzip]</span><span class="delimiter">: </span><span class="description">unzip a zipped array (i.e., a nested array of tuples).</span>
-   <span class="signature">[`zip( arr1, arr2,...[, opts] )`][@stdlib/utils/zip]</span><span class="delimiter">: </span><span class="description">generate array tuples from input arrays.</span>

</div>

<!-- </toc> -->

### Objects

<!-- <toc pattern="+(capitalize-keys|deep-get|deep-set|define-read-only*|entries*|flatten-object|for-in|for-own|get-prototype-of|keys-in|*-keys|map-keys*|map-values*|merge|move-property|object-inverse*|omit*|pick*|uncapitalize-keys|uppercase-keys|values*|*descriptor*|*accessor*|*propert*)"> -->

<div class="namespace-toc">

-   <span class="signature">[`capitalizeKeys( obj )`][@stdlib/utils/capitalize-keys]</span><span class="delimiter">: </span><span class="description">convert the first letter of each object key to uppercase.</span>
-   <span class="signature">[`commonKeys( obj1, obj2[, obj3[,...,objN]] )`][@stdlib/utils/common-keys]</span><span class="delimiter">: </span><span class="description">return the common own property names of two or more objects.</span>
-   <span class="signature">[`deepGet( obj, path[, options] )`][@stdlib/utils/deep-get]</span><span class="delimiter">: </span><span class="description">get a nested property value.</span>
-   <span class="signature">[`deepSet( obj, path, value[, options] )`][@stdlib/utils/deep-set]</span><span class="delimiter">: </span><span class="description">set a nested property value.</span>
-   <span class="signature">[`setConfigurableReadOnlyAccessor( obj, prop, getter )`][@stdlib/utils/define-configurable-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a configurable **read-only** accessor.</span>
-   <span class="signature">[`setConfigurableReadOnly( obj, prop, value )`][@stdlib/utils/define-configurable-read-only-property]</span><span class="delimiter">: </span><span class="description">define a configurable **read-only** property.</span>
-   <span class="signature">[`setConfigurableReadWriteAccessor( obj, prop, getter, setter )`][@stdlib/utils/define-configurable-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a configurable **read-write** accessor.</span>
-   <span class="signature">[`setConfigurableWriteOnlyAccessor( obj, prop, setter )`][@stdlib/utils/define-configurable-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a configurable **write-only** accessor.</span>
-   <span class="signature">[`setMemoizedConfigurableReadOnly( obj, prop, fcn )`][@stdlib/utils/define-memoized-configurable-read-only-property]</span><span class="delimiter">: </span><span class="description">define a configurable memoized **read-only** object property.</span>
-   <span class="signature">[`defineMemoizedProperty( obj, prop, descriptor )`][@stdlib/utils/define-memoized-property]</span><span class="delimiter">: </span><span class="description">define a memoized object property.</span>
-   <span class="signature">[`setMemoizedReadOnly( obj, prop, fcn )`][@stdlib/utils/define-memoized-read-only-property]</span><span class="delimiter">: </span><span class="description">define a memoized **read-only** object property.</span>
-   <span class="signature">[`setNonEnumerableProperty( obj, prop, value )`][@stdlib/utils/define-nonenumerable-property]</span><span class="delimiter">: </span><span class="description">define a **non-enumerable** property.</span>
-   <span class="signature">[`setNonEnumerableReadOnlyAccessor( obj, prop, getter )`][@stdlib/utils/define-nonenumerable-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable **read-only** accessor.</span>
-   <span class="signature">[`setNonEnumerableReadOnly( obj, prop, value )`][@stdlib/utils/define-nonenumerable-read-only-property]</span><span class="delimiter">: </span><span class="description">define a non-enumerable **read-only** property.</span>
-   <span class="signature">[`setNonEnumerableReadWriteAccessor( obj, prop, getter, setter )`][@stdlib/utils/define-nonenumerable-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable **read-write** accessor.</span>
-   <span class="signature">[`setNonEnumerableWriteOnlyAccessor( obj, prop, setter )`][@stdlib/utils/define-nonenumerable-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a non-enumerable **write-only** accessor.</span>
-   <span class="signature">[`defineProperties( obj, properties )`][@stdlib/utils/define-properties]</span><span class="delimiter">: </span><span class="description">define (and/or modify) object properties.</span>
-   <span class="signature">[`defineProperty( obj, prop, descriptor )`][@stdlib/utils/define-property]</span><span class="delimiter">: </span><span class="description">define (or modify) an object property.</span>
-   <span class="signature">[`setReadOnlyAccessor( obj, prop, getter )`][@stdlib/utils/define-read-only-accessor]</span><span class="delimiter">: </span><span class="description">define a **read-only** accessor.</span>
-   <span class="signature">[`setReadOnly( obj, prop, value )`][@stdlib/utils/define-read-only-property]</span><span class="delimiter">: </span><span class="description">define a **read-only** property.</span>
-   <span class="signature">[`setReadWriteAccessor( obj, prop, getter, setter )`][@stdlib/utils/define-read-write-accessor]</span><span class="delimiter">: </span><span class="description">define a **read-write** accessor.</span>
-   <span class="signature">[`setWriteOnlyAccessor( obj, prop, setter )`][@stdlib/utils/define-write-only-accessor]</span><span class="delimiter">: </span><span class="description">define a **write-only** accessor.</span>
-   <span class="signature">[`objectEntriesIn( obj )`][@stdlib/utils/entries-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property key-value pairs.</span>
-   <span class="signature">[`objectEntries( obj )`][@stdlib/utils/entries]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property key-value pairs.</span>
-   <span class="signature">[`enumerablePropertiesIn( obj )`][@stdlib/utils/enumerable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names and symbols.</span>
-   <span class="signature">[`enumerableProperties( obj )`][@stdlib/utils/enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names and symbols.</span>
-   <span class="signature">[`enumerablePropertySymbolsIn( obj )`][@stdlib/utils/enumerable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable symbol properties.</span>
-   <span class="signature">[`enumerablePropertySymbols( obj )`][@stdlib/utils/enumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable symbol properties.</span>
-   <span class="signature">[`flattenObject( obj[, options] )`][@stdlib/utils/flatten-object]</span><span class="delimiter">: </span><span class="description">flatten an object.</span>
-   <span class="signature">[`forIn( obj, fcn[, thisArg ] )`][@stdlib/utils/for-in]</span><span class="delimiter">: </span><span class="description">invoke a function for each own and inherited enumerable property of an object.</span>
-   <span class="signature">[`forOwn( obj, fcn[, thisArg ] )`][@stdlib/utils/for-own]</span><span class="delimiter">: </span><span class="description">invoke a function for each own enumerable property of an object.</span>
-   <span class="signature">[`getPrototypeOf( value )`][@stdlib/utils/get-prototype-of]</span><span class="delimiter">: </span><span class="description">return the prototype of a provided object.</span>
-   <span class="signature">[`inheritedEnumerableProperties( obj[, level] )`][@stdlib/utils/inherited-enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names and symbols.</span>
-   <span class="signature">[`inheritedEnumerablePropertySymbols( obj[, level] )`][@stdlib/utils/inherited-enumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable symbol properties.</span>
-   <span class="signature">[`inheritedKeys( obj[, level] )`][@stdlib/utils/inherited-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names.</span>
-   <span class="signature">[`inheritedNonEnumerableProperties( obj[, level] )`][@stdlib/utils/inherited-nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names and symbols.</span>
-   <span class="signature">[`inheritedNonEnumerablePropertyNames( obj[, level] )`][@stdlib/utils/inherited-nonenumerable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable property names.</span>
-   <span class="signature">[`inheritedNonEnumerablePropertySymbols( obj[, level] )`][@stdlib/utils/inherited-nonenumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited non-enumerable symbol properties.</span>
-   <span class="signature">[`inheritedProperties( obj[, level] )`][@stdlib/utils/inherited-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited property names and symbols.</span>
-   <span class="signature">[`inheritedPropertyDescriptor( obj, property[, level] )`][@stdlib/utils/inherited-property-descriptor]</span><span class="delimiter">: </span><span class="description">return a property descriptor for an object's inherited property.</span>
-   <span class="signature">[`inheritedPropertyDescriptors( obj[, level] )`][@stdlib/utils/inherited-property-descriptors]</span><span class="delimiter">: </span><span class="description">return an object's inherited property descriptors.</span>
-   <span class="signature">[`inheritedPropertyNames( obj[, level] )`][@stdlib/utils/inherited-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable and non-enumerable property names.</span>
-   <span class="signature">[`inheritedPropertySymbols( obj[, level] )`][@stdlib/utils/inherited-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited symbol properties.</span>
-   <span class="signature">[`inheritedWritableProperties( obj[, level] )`][@stdlib/utils/inherited-writable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited writable property names and symbols.</span>
-   <span class="signature">[`inheritedWritablePropertyNames( obj[, level] )`][@stdlib/utils/inherited-writable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited writable property names.</span>
-   <span class="signature">[`inheritedWritablePropertySymbols( obj[, level] )`][@stdlib/utils/inherited-writable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited writable symbol properties.</span>
-   <span class="signature">[`keysIn( obj )`][@stdlib/utils/keys-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names.</span>
-   <span class="signature">[`lowercaseKeys( obj )`][@stdlib/utils/lowercase-keys]</span><span class="delimiter">: </span><span class="description">convert each object key to lowercase.</span>
-   <span class="signature">[`mapKeys( obj, transform )`][@stdlib/utils/map-keys]</span><span class="delimiter">: </span><span class="description">map keys from one object to a new object having the same values.</span>
-   <span class="signature">[`mapValues( obj, transform )`][@stdlib/utils/map-values]</span><span class="delimiter">: </span><span class="description">map values from one object to a new object having the same keys.</span>
-   <span class="signature">[`merge( target, source1[, source2[,...,sourceN]] )`][@stdlib/utils/merge]</span><span class="delimiter">: </span><span class="description">merge and extend objects.</span>
-   <span class="signature">[`moveProperty( source, prop, target )`][@stdlib/utils/move-property]</span><span class="delimiter">: </span><span class="description">move a property from one object to another object.</span>
-   <span class="signature">[`nonEnumerablePropertiesIn( obj )`][@stdlib/utils/nonenumerable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable property names and symbols.</span>
-   <span class="signature">[`nonEnumerableProperties( obj )`][@stdlib/utils/nonenumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable property names and symbols.</span>
-   <span class="signature">[`nonEnumerablePropertyNamesIn( obj )`][@stdlib/utils/nonenumerable-property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable property names.</span>
-   <span class="signature">[`nonEnumerablePropertyNames( obj )`][@stdlib/utils/nonenumerable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable property names.</span>
-   <span class="signature">[`nonEnumerablePropertySymbolsIn( obj )`][@stdlib/utils/nonenumerable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable symbol properties.</span>
-   <span class="signature">[`nonEnumerablePropertySymbols( obj )`][@stdlib/utils/nonenumerable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own non-enumerable symbol properties.</span>
-   <span class="signature">[`nonIndexKeys( obj )`][@stdlib/utils/nonindex-keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names which are not integer indices.</span>
-   <span class="signature">[`objectInverseBy( obj, [options,] transform )`][@stdlib/utils/object-inverse-by]</span><span class="delimiter">: </span><span class="description">invert an object, such that keys become values and values become keys, according to a transform function.</span>
-   <span class="signature">[`objectInverse( obj[, options] )`][@stdlib/utils/object-inverse]</span><span class="delimiter">: </span><span class="description">invert an object, such that keys become values and values become keys.</span>
-   <span class="signature">[`omitBy( obj, predicate )`][@stdlib/utils/omit-by]</span><span class="delimiter">: </span><span class="description">return a partial object copy excluding properties for which a predicate (function) returns a truthy value.</span>
-   <span class="signature">[`omit( obj, keys )`][@stdlib/utils/omit]</span><span class="delimiter">: </span><span class="description">return a partial object copy excluding specified keys.</span>
-   <span class="signature">[`pickArguments( fcn, indices[, thisArg] )`][@stdlib/utils/pick-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function with specified arguments.</span>
-   <span class="signature">[`pickBy( obj, predicate )`][@stdlib/utils/pick-by]</span><span class="delimiter">: </span><span class="description">return a partial object copy containing properties for which a predicate (function) returns a truthy value.</span>
-   <span class="signature">[`pick( obj, keys )`][@stdlib/utils/pick]</span><span class="delimiter">: </span><span class="description">return a partial object copy containing only specified keys.</span>
-   <span class="signature">[`propertiesIn( obj )`][@stdlib/utils/properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited property names and symbols.</span>
-   <span class="signature">[`properties( obj )`][@stdlib/utils/properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names and symbols.</span>
-   <span class="signature">[`propertyDescriptorIn( obj, property )`][@stdlib/utils/property-descriptor-in]</span><span class="delimiter">: </span><span class="description">return a property descriptor for an object's own or inherited property.</span>
-   <span class="signature">[`propertyDescriptor( obj, property )`][@stdlib/utils/property-descriptor]</span><span class="delimiter">: </span><span class="description">return a property descriptor for an object's own property.</span>
-   <span class="signature">[`propertyDescriptorsIn( obj )`][@stdlib/utils/property-descriptors-in]</span><span class="delimiter">: </span><span class="description">return an object's own and inherited property descriptors.</span>
-   <span class="signature">[`propertyDescriptors( obj )`][@stdlib/utils/property-descriptors]</span><span class="delimiter">: </span><span class="description">return an object's own property descriptors.</span>
-   <span class="signature">[`propertyNamesIn( obj )`][@stdlib/utils/property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable and non-enumerable property names.</span>
-   <span class="signature">[`propertyNames( obj )`][@stdlib/utils/property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names.</span>
-   <span class="signature">[`propertySymbolsIn( obj )`][@stdlib/utils/property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited symbol properties.</span>
-   <span class="signature">[`propertySymbols( obj )`][@stdlib/utils/property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own symbol properties.</span>
-   <span class="signature">[`uncapitalizeKeys( obj )`][@stdlib/utils/uncapitalize-keys]</span><span class="delimiter">: </span><span class="description">convert the first letter of each object key to lowercase.</span>
-   <span class="signature">[`uppercaseKeys( obj )`][@stdlib/utils/uppercase-keys]</span><span class="delimiter">: </span><span class="description">convert each object key to uppercase.</span>
-   <span class="signature">[`objectValuesIn( obj )`][@stdlib/utils/values-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property values.</span>
-   <span class="signature">[`objectValues( obj )`][@stdlib/utils/values]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property values.</span>
-   <span class="signature">[`writablePropertiesIn( obj )`][@stdlib/utils/writable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited writable property names and symbols.</span>
-   <span class="signature">[`writableProperties( obj )`][@stdlib/utils/writable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable property names and symbols.</span>
-   <span class="signature">[`writablePropertyNamesIn( obj )`][@stdlib/utils/writable-property-names-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited writable property names.</span>
-   <span class="signature">[`writablePropertyNames( obj )`][@stdlib/utils/writable-property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable property names.</span>
-   <span class="signature">[`writablePropertySymbolsIn( obj )`][@stdlib/utils/writable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited writable symbol properties.</span>
-   <span class="signature">[`writablePropertySymbols( obj )`][@stdlib/utils/writable-property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own writable symbol properties.</span>

</div>

<!-- </toc> -->

### Functions

<!-- <toc pattern="+(argument-function|compose*|constant-function|curry*|do*|function*|identity*|map-function*|memoize|noop|papply*|*-arguments|uncurry*|until|until-async|*waterfall|while)"> -->

<div class="namespace-toc">

-   <span class="signature">[`argumentFunction( idx )`][@stdlib/utils/argument-function]</span><span class="delimiter">: </span><span class="description">create an argument function.</span>
-   <span class="signature">[`compose( ...fcn )`][@stdlib/utils/compose]</span><span class="delimiter">: </span><span class="description">function composition.</span>
-   <span class="signature">[`constantFunction( x )`][@stdlib/utils/constant-function]</span><span class="delimiter">: </span><span class="description">constant function.</span>
-   <span class="signature">[`curryRight( fcn[, arity][, thisArg] )`][@stdlib/utils/curry-right]</span><span class="delimiter">: </span><span class="description">transform a function into a sequence of functions each accepting a single argument.</span>
-   <span class="signature">[`curry( fcn[, arity][, thisArg] )`][@stdlib/utils/curry]</span><span class="delimiter">: </span><span class="description">transform a function into a sequence of functions each accepting a single argument.</span>
-   <span class="signature">[`doUntilEachRight( collection, fcn, predicate[, thisArg ] )`][@stdlib/utils/do-until-each-right]</span><span class="delimiter">: </span><span class="description">until a test condition is true, invoke a function for each element in a collection, iterating from right to left.</span>
-   <span class="signature">[`doUntilEach( collection, fcn, predicate[, thisArg ] )`][@stdlib/utils/do-until-each]</span><span class="delimiter">: </span><span class="description">until a test condition is true, invoke a function for each element in a collection.</span>
-   <span class="signature">[`doUntil( fcn, predicate[, thisArg ] )`][@stdlib/utils/do-until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="signature">[`doWhileEachRight( collection, fcn, predicate[, thisArg ] )`][@stdlib/utils/do-while-each-right]</span><span class="delimiter">: </span><span class="description">while a test condition is true, invoke a function for each element in a collection, iterating from right to left.</span>
-   <span class="signature">[`doWhileEach( collection, fcn, predicate[, thisArg ] )`][@stdlib/utils/do-while-each]</span><span class="delimiter">: </span><span class="description">while a test condition is true, invoke a function for each element in a collection.</span>
-   <span class="signature">[`doWhile( fcn, predicate[, thisArg ] )`][@stdlib/utils/do-while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>
-   <span class="signature">[`filterArguments( fcn, predicate[, thisArg] )`][@stdlib/utils/filter-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function according to a predicate function.</span>
-   <span class="signature">[`functionName( fcn )`][@stdlib/utils/function-name]</span><span class="delimiter">: </span><span class="description">determine a function's name.</span>
-   <span class="signature">[`functionSequence( ...fcn )`][@stdlib/utils/function-sequence]</span><span class="delimiter">: </span><span class="description">function sequence.</span>
-   <span class="signature">[`identity( x )`][@stdlib/utils/identity-function]</span><span class="delimiter">: </span><span class="description">identity function.</span>
-   <span class="signature">[`mapArguments( fcn, clbk[, thisArg] )`][@stdlib/utils/map-arguments]</span><span class="delimiter">: </span><span class="description">create a function that applies arguments to a provided function after transforming arguments according to a callback function.</span>
-   <span class="signature">[`mapFun( fcn, n[, thisArg ] )`][@stdlib/utils/map-function]</span><span class="delimiter">: </span><span class="description">invoke a function `n` times and return an array of accumulated function return values.</span>
-   <span class="signature">[`maskArguments( fcn, mask[, thisArg] )`][@stdlib/utils/mask-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function according to an argument mask.</span>
-   <span class="signature">[`memoize( fcn[, hashFunction] )`][@stdlib/utils/memoize]</span><span class="delimiter">: </span><span class="description">memoize a function.</span>
-   <span class="signature">[`noop()`][@stdlib/utils/noop]</span><span class="delimiter">: </span><span class="description">function which does nothing.</span>
-   <span class="signature">[`papplyRight( fcn[, ...args] )`][@stdlib/utils/papply-right]</span><span class="delimiter">: </span><span class="description">partially apply function arguments from the right.</span>
-   <span class="signature">[`papply( fcn[, ...args] )`][@stdlib/utils/papply]</span><span class="delimiter">: </span><span class="description">partially apply function arguments.</span>
-   <span class="signature">[`rejectArguments( fcn, predicate[, thisArg] )`][@stdlib/utils/reject-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function according to a predicate function.</span>
-   <span class="signature">[`reorderArguments( fcn, indices[, thisArg] )`][@stdlib/utils/reorder-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function with reordered arguments.</span>
-   <span class="signature">[`reverseArguments( fcn[, thisArg] )`][@stdlib/utils/reverse-arguments]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function with arguments in reverse order.</span>
-   <span class="signature">[`uncurryRight( fcn[, arity][, thisArg] )`][@stdlib/utils/uncurry-right]</span><span class="delimiter">: </span><span class="description">transform a curried function into a function invoked with multiple arguments.</span>
-   <span class="signature">[`uncurry( fcn[, arity][, thisArg] )`][@stdlib/utils/uncurry]</span><span class="delimiter">: </span><span class="description">transform a curried function into a function invoked with multiple arguments.</span>
-   <span class="signature">[`until( predicate, fcn[, thisArg ] )`][@stdlib/utils/until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="signature">[`whilst( predicate, fcn[, thisArg ] )`][@stdlib/utils/while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>

</div>

<!-- </toc> -->

### Error Handling

<!-- <toc pattern="try-*"> -->

<div class="namespace-toc">

-   <span class="signature">[`trycatch( x, y )`][@stdlib/utils/try-catch]</span><span class="delimiter">: </span><span class="description">if a function does not throw, return the function return value; otherwise, return `y`.</span>
-   <span class="signature">[`tryFunction( fcn )`][@stdlib/utils/try-function]</span><span class="delimiter">: </span><span class="description">wrap a function in a try/catch block.</span>
-   <span class="signature">[`tryRequire( id )`][@stdlib/utils/try-require]</span><span class="delimiter">: </span><span class="description">wrap `require` in a try/catch block.</span>
-   <span class="signature">[`trythen( x, y )`][@stdlib/utils/try-then]</span><span class="delimiter">: </span><span class="description">if a function does not throw, return the function return value; otherwise, return the return value of a second function.</span>

</div>

<!-- </toc> -->

### General Utilities

<!-- <toc pattern="*" ignore="+(append|any*|bifurcate*|count-by*|every*|for-each*|group*|inmap*|key-by*|none*|pop|prepend|push|reduce*|*shift|some*|tabulate*|until-each*|while-each*)" ignore="+(capitalize-keys|deep-get|deep-set|define-read-only*|entries*|flatten-object|for-in|for-own|get-prototype-of|keys-in|lowercase-keys|map-keys*|map-values*|merge|move-property|object-inverse*|omit*|pick*|uncapitalize-keys|uppercase-keys|values*)" ignore="+(argument-function|compose*|constant-function|curry*|do*|function*|identity*|map-function*|memoize|noop|papply*|*-arguments|uncurry*|until|until-async|*waterfall|while)" ignore="try-*" ignore="+(from-entries|find|flatten-array|index-of|*pluck*|zip|unzip|async)"> -->

<div class="namespace-toc">

-   <span class="signature">[`commonKeysIn( obj1, obj2[, obj3[,...,objN]] )`][@stdlib/utils/common-keys-in]</span><span class="delimiter">: </span><span class="description">return the common own and inherited property names of two or more objects.</span>
-   <span class="signature">[`constructorName( value )`][@stdlib/utils/constructor-name]</span><span class="delimiter">: </span><span class="description">determine the name of a value's constructor.</span>
-   <span class="signature">[`convertPath( from, to )`][@stdlib/utils/convert-path]</span><span class="delimiter">: </span><span class="description">convert between POSIX and Windows paths.</span>
-   <span class="signature">[`copy( value[, level] )`][@stdlib/utils/copy]</span><span class="delimiter">: </span><span class="description">copy or deep clone a value to an arbitrary depth.</span>
-   <span class="signature">[`decorateAfter( fcn, arity, after[, thisArg] )`][@stdlib/utils/decorate-after]</span><span class="delimiter">: </span><span class="description">decorate a provided function such that the function's return value is provided as an argument to another function.</span>
-   <span class="signature">[`dirname( path )`][@stdlib/utils/dirname]</span><span class="delimiter">: </span><span class="description">return a directory name.</span>
-   <span class="signature">[`dsv`][@stdlib/utils/dsv]</span><span class="delimiter">: </span><span class="description">utilities for working with data formatted as delimiter-separated values (DSV).</span>
-   <span class="signature">[`rescape( str )`][@stdlib/utils/escape-regexp-string]</span><span class="delimiter">: </span><span class="description">escape a regular expression string or pattern.</span>
-   <span class="signature">[`evil( str )`][@stdlib/utils/eval]</span><span class="delimiter">: </span><span class="description">alias for `eval` global.</span>
-   <span class="signature">[`extname( filename )`][@stdlib/utils/extname]</span><span class="delimiter">: </span><span class="description">return a filename extension.</span>
-   <span class="signature">[`getGlobal( [codegen] )`][@stdlib/utils/global]</span><span class="delimiter">: </span><span class="description">return the global object.</span>
-   <span class="signature">[`ifelse( bool, x, y )`][@stdlib/utils/if-else]</span><span class="delimiter">: </span><span class="description">if a condition is truthy, return `x`; otherwise, return `y`.</span>
-   <span class="signature">[`ifthen( bool, x, y )`][@stdlib/utils/if-then]</span><span class="delimiter">: </span><span class="description">if a condition is truthy, invoke `x`; otherwise, invoke `y`.</span>
-   <span class="signature">[`inherit( ctor, superCtor )`][@stdlib/utils/inherit]</span><span class="delimiter">: </span><span class="description">implement prototypical inheritance by replacing the prototype of one constructor with the prototype of another constructor.</span>
-   <span class="signature">[`objectKeys( obj )`][@stdlib/utils/keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names.</span>
-   <span class="signature">[`mapReduceRight( arr, initial, mapper, reducer[, thisArg ] )`][@stdlib/utils/map-reduce-right]</span><span class="delimiter">: </span><span class="description">perform a single-pass map-reduce operation against each element in an array while iterating from right to left and return the accumulated result.</span>
-   <span class="signature">[`mapReduce( arr, initial, mapper, reducer[, thisArg ] )`][@stdlib/utils/map-reduce]</span><span class="delimiter">: </span><span class="description">perform a single-pass map-reduce operation against each element in an array and return the accumulated result.</span>
-   <span class="signature">[`mapRight( arr, fcn[, thisArg] )`][@stdlib/utils/map-right]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array, iterating from right to left.</span>
-   <span class="signature">[`map( arr, fcn[, thisArg] )`][@stdlib/utils/map]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array.</span>
-   <span class="signature">[`map2Right( x, y, fcn[, thisArg] )`][@stdlib/utils/map2-right]</span><span class="delimiter">: </span><span class="description">apply a function to elements in two input arrays while iterating from right to left and assign the results to an output array.</span>
-   <span class="signature">[`map2( x, y, fcn[, thisArg] )`][@stdlib/utils/map2]</span><span class="delimiter">: </span><span class="description">apply a function to elements in two input arrays and assign the results to an output array.</span>
-   <span class="signature">[`map2d( arr, fcn[, thisArg] )`][@stdlib/utils/map2d]</span><span class="delimiter">: </span><span class="description">apply a function to each nested element in an array of arrays and assign the result to a nested element in a new array of arrays.</span>
-   <span class="signature">[`map3d( arr, fcn[, thisArg] )`][@stdlib/utils/map3d]</span><span class="delimiter">: </span><span class="description">apply a function to each nested element in a three-dimensional nested array and assign the result to a nested element in a new three-dimensional nested array.</span>
-   <span class="signature">[`map4d( arr, fcn[, thisArg] )`][@stdlib/utils/map4d]</span><span class="delimiter">: </span><span class="description">apply a function to each nested element in a four-dimensional nested array and assign the result to a nested element in a new four-dimensional nested array.</span>
-   <span class="signature">[`map5d( arr, fcn[, thisArg] )`][@stdlib/utils/map5d]</span><span class="delimiter">: </span><span class="description">apply a function to each nested element in a five-dimensional nested array and assign the result to a nested element in a new five-dimensional nested array.</span>
-   <span class="signature">[`naryFunction( fcn, arity[, thisArg] )`][@stdlib/utils/nary-function]</span><span class="delimiter">: </span><span class="description">create a function that invokes a provided function with a specified number of arguments.</span>
-   <span class="signature">[`nativeClass( value )`][@stdlib/utils/native-class]</span><span class="delimiter">: </span><span class="description">determine the specification defined classification of an object.</span>
-   <span class="signature">[`nextTick( clbk[, ...args] )`][@stdlib/utils/next-tick]</span><span class="delimiter">: </span><span class="description">add a callback to the "next tick queue".</span>
-   <span class="signature">[`openURL()`][@stdlib/utils/open-url]</span><span class="delimiter">: </span><span class="description">open a URL.</span>
-   <span class="signature">[`parallel( files, [options,] clbk )`][@stdlib/utils/parallel]</span><span class="delimiter">: </span><span class="description">execute scripts in parallel.</span>
-   <span class="signature">[`parseJSON( str[, reviver] )`][@stdlib/utils/parse-json]</span><span class="delimiter">: </span><span class="description">parse a string as JSON.</span>
-   <span class="signature">[`realmax( dtype )`][@stdlib/utils/real-max]</span><span class="delimiter">: </span><span class="description">return the maximum finite value capable of being represented by a numeric real type.</span>
-   <span class="signature">[`realmin( dtype )`][@stdlib/utils/real-min]</span><span class="delimiter">: </span><span class="description">return the smallest positive normal value capable of being represented by a numeric real type.</span>
-   <span class="signature">[`reFromString( str )`][@stdlib/utils/regexp-from-string]</span><span class="delimiter">: </span><span class="description">create a regular expression from a regular expression string.</span>
-   <span class="signature">[`safeintmax( dtype )`][@stdlib/utils/safe-int-max]</span><span class="delimiter">: </span><span class="description">return the maximum safe integer capable of being represented by a numeric real type.</span>
-   <span class="signature">[`safeintmin( dtype )`][@stdlib/utils/safe-int-min]</span><span class="delimiter">: </span><span class="description">return the minimum safe integer capable of being represented by a numeric real type.</span>
-   <span class="signature">[`sizeOf( dtype )`][@stdlib/utils/size-of]</span><span class="delimiter">: </span><span class="description">return the size (in bytes) of the canonical binary representation of a specified numeric type.</span>
-   <span class="signature">[`thunk( fcn[, ...args] )`][@stdlib/utils/thunk]</span><span class="delimiter">: </span><span class="description">generate a thunk.</span>
-   <span class="signature">[`timeit( code, [options,] clbk )`][@stdlib/utils/timeit]</span><span class="delimiter">: </span><span class="description">time a snippet.</span>
-   <span class="signature">[`typemax( dtype )`][@stdlib/utils/type-max]</span><span class="delimiter">: </span><span class="description">return the maximum value of a specified numeric type.</span>
-   <span class="signature">[`typemin( dtype )`][@stdlib/utils/type-min]</span><span class="delimiter">: </span><span class="description">return the minimum value of a specified numeric type.</span>
-   <span class="signature">[`typeOf( value )`][@stdlib/utils/type-of]</span><span class="delimiter">: </span><span class="description">determine a value's type.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var utils = require( '@stdlib/utils' );

console.log( objectKeys( utils ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils

[test-image]: https://github.com/stdlib-js/utils/actions/workflows/test.yml/badge.svg?branch=v0.3.3
[test-url]: https://github.com/stdlib-js/utils/actions/workflows/test.yml?query=branch:v0.3.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils/main/LICENSE

<!-- <toc-links> -->

[@stdlib/utils/common-keys-in]: https://github.com/stdlib-js/utils/tree/main/common-keys-in

[@stdlib/utils/constructor-name]: https://github.com/stdlib-js/utils/tree/main/constructor-name

[@stdlib/utils/convert-path]: https://github.com/stdlib-js/utils/tree/main/convert-path

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils/tree/main/copy

[@stdlib/utils/decorate-after]: https://github.com/stdlib-js/utils/tree/main/decorate-after

[@stdlib/utils/dirname]: https://github.com/stdlib-js/utils/tree/main/dirname

[@stdlib/utils/dsv]: https://github.com/stdlib-js/utils/tree/main/dsv

[@stdlib/utils/escape-regexp-string]: https://github.com/stdlib-js/utils/tree/main/escape-regexp-string

[@stdlib/utils/eval]: https://github.com/stdlib-js/utils/tree/main/eval

[@stdlib/utils/extname]: https://github.com/stdlib-js/utils/tree/main/extname

[@stdlib/utils/global]: https://github.com/stdlib-js/utils/tree/main/global

[@stdlib/utils/if-else]: https://github.com/stdlib-js/utils/tree/main/if-else

[@stdlib/utils/if-then]: https://github.com/stdlib-js/utils/tree/main/if-then

[@stdlib/utils/inherit]: https://github.com/stdlib-js/utils/tree/main/inherit

[@stdlib/utils/keys]: https://github.com/stdlib-js/utils/tree/main/keys

[@stdlib/utils/map-reduce-right]: https://github.com/stdlib-js/utils/tree/main/map-reduce-right

[@stdlib/utils/map-reduce]: https://github.com/stdlib-js/utils/tree/main/map-reduce

[@stdlib/utils/map-right]: https://github.com/stdlib-js/utils/tree/main/map-right

[@stdlib/utils/map]: https://github.com/stdlib-js/utils/tree/main/map

[@stdlib/utils/map2-right]: https://github.com/stdlib-js/utils/tree/main/map2-right

[@stdlib/utils/map2]: https://github.com/stdlib-js/utils/tree/main/map2

[@stdlib/utils/map2d]: https://github.com/stdlib-js/utils/tree/main/map2d

[@stdlib/utils/map3d]: https://github.com/stdlib-js/utils/tree/main/map3d

[@stdlib/utils/map4d]: https://github.com/stdlib-js/utils/tree/main/map4d

[@stdlib/utils/map5d]: https://github.com/stdlib-js/utils/tree/main/map5d

[@stdlib/utils/nary-function]: https://github.com/stdlib-js/utils/tree/main/nary-function

[@stdlib/utils/native-class]: https://github.com/stdlib-js/utils/tree/main/native-class

[@stdlib/utils/next-tick]: https://github.com/stdlib-js/utils/tree/main/next-tick

[@stdlib/utils/open-url]: https://github.com/stdlib-js/utils/tree/main/open-url

[@stdlib/utils/parallel]: https://github.com/stdlib-js/utils/tree/main/parallel

[@stdlib/utils/parse-json]: https://github.com/stdlib-js/utils/tree/main/parse-json

[@stdlib/utils/real-max]: https://github.com/stdlib-js/utils/tree/main/real-max

[@stdlib/utils/real-min]: https://github.com/stdlib-js/utils/tree/main/real-min

[@stdlib/utils/regexp-from-string]: https://github.com/stdlib-js/utils/tree/main/regexp-from-string

[@stdlib/utils/safe-int-max]: https://github.com/stdlib-js/utils/tree/main/safe-int-max

[@stdlib/utils/safe-int-min]: https://github.com/stdlib-js/utils/tree/main/safe-int-min

[@stdlib/utils/size-of]: https://github.com/stdlib-js/utils/tree/main/size-of

[@stdlib/utils/thunk]: https://github.com/stdlib-js/utils/tree/main/thunk

[@stdlib/utils/timeit]: https://github.com/stdlib-js/utils/tree/main/timeit

[@stdlib/utils/type-max]: https://github.com/stdlib-js/utils/tree/main/type-max

[@stdlib/utils/type-min]: https://github.com/stdlib-js/utils/tree/main/type-min

[@stdlib/utils/type-of]: https://github.com/stdlib-js/utils/tree/main/type-of

[@stdlib/utils/try-catch]: https://github.com/stdlib-js/utils/tree/main/try-catch

[@stdlib/utils/try-function]: https://github.com/stdlib-js/utils/tree/main/try-function

[@stdlib/utils/try-require]: https://github.com/stdlib-js/utils/tree/main/try-require

[@stdlib/utils/try-then]: https://github.com/stdlib-js/utils/tree/main/try-then

[@stdlib/utils/argument-function]: https://github.com/stdlib-js/utils/tree/main/argument-function

[@stdlib/utils/compose]: https://github.com/stdlib-js/utils/tree/main/compose

[@stdlib/utils/constant-function]: https://github.com/stdlib-js/utils/tree/main/constant-function

[@stdlib/utils/curry-right]: https://github.com/stdlib-js/utils/tree/main/curry-right

[@stdlib/utils/curry]: https://github.com/stdlib-js/utils/tree/main/curry

[@stdlib/utils/do-until-each-right]: https://github.com/stdlib-js/utils/tree/main/do-until-each-right

[@stdlib/utils/do-until-each]: https://github.com/stdlib-js/utils/tree/main/do-until-each

[@stdlib/utils/do-until]: https://github.com/stdlib-js/utils/tree/main/do-until

[@stdlib/utils/do-while-each-right]: https://github.com/stdlib-js/utils/tree/main/do-while-each-right

[@stdlib/utils/do-while-each]: https://github.com/stdlib-js/utils/tree/main/do-while-each

[@stdlib/utils/do-while]: https://github.com/stdlib-js/utils/tree/main/do-while

[@stdlib/utils/filter-arguments]: https://github.com/stdlib-js/utils/tree/main/filter-arguments

[@stdlib/utils/function-name]: https://github.com/stdlib-js/utils/tree/main/function-name

[@stdlib/utils/function-sequence]: https://github.com/stdlib-js/utils/tree/main/function-sequence

[@stdlib/utils/identity-function]: https://github.com/stdlib-js/utils/tree/main/identity-function

[@stdlib/utils/map-arguments]: https://github.com/stdlib-js/utils/tree/main/map-arguments

[@stdlib/utils/map-function]: https://github.com/stdlib-js/utils/tree/main/map-function

[@stdlib/utils/mask-arguments]: https://github.com/stdlib-js/utils/tree/main/mask-arguments

[@stdlib/utils/memoize]: https://github.com/stdlib-js/utils/tree/main/memoize

[@stdlib/utils/noop]: https://github.com/stdlib-js/utils/tree/main/noop

[@stdlib/utils/papply-right]: https://github.com/stdlib-js/utils/tree/main/papply-right

[@stdlib/utils/papply]: https://github.com/stdlib-js/utils/tree/main/papply

[@stdlib/utils/reject-arguments]: https://github.com/stdlib-js/utils/tree/main/reject-arguments

[@stdlib/utils/reorder-arguments]: https://github.com/stdlib-js/utils/tree/main/reorder-arguments

[@stdlib/utils/reverse-arguments]: https://github.com/stdlib-js/utils/tree/main/reverse-arguments

[@stdlib/utils/uncurry-right]: https://github.com/stdlib-js/utils/tree/main/uncurry-right

[@stdlib/utils/uncurry]: https://github.com/stdlib-js/utils/tree/main/uncurry

[@stdlib/utils/until]: https://github.com/stdlib-js/utils/tree/main/until

[@stdlib/utils/while]: https://github.com/stdlib-js/utils/tree/main/while

[@stdlib/utils/capitalize-keys]: https://github.com/stdlib-js/utils/tree/main/capitalize-keys

[@stdlib/utils/common-keys]: https://github.com/stdlib-js/utils/tree/main/common-keys

[@stdlib/utils/deep-get]: https://github.com/stdlib-js/utils/tree/main/deep-get

[@stdlib/utils/deep-set]: https://github.com/stdlib-js/utils/tree/main/deep-set

[@stdlib/utils/define-configurable-read-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-configurable-read-only-accessor

[@stdlib/utils/define-configurable-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-configurable-read-only-property

[@stdlib/utils/define-configurable-read-write-accessor]: https://github.com/stdlib-js/utils/tree/main/define-configurable-read-write-accessor

[@stdlib/utils/define-configurable-write-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-configurable-write-only-accessor

[@stdlib/utils/define-memoized-configurable-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-memoized-configurable-read-only-property

[@stdlib/utils/define-memoized-property]: https://github.com/stdlib-js/utils/tree/main/define-memoized-property

[@stdlib/utils/define-memoized-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-memoized-read-only-property

[@stdlib/utils/define-nonenumerable-property]: https://github.com/stdlib-js/utils/tree/main/define-nonenumerable-property

[@stdlib/utils/define-nonenumerable-read-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-nonenumerable-read-only-accessor

[@stdlib/utils/define-nonenumerable-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-nonenumerable-read-only-property

[@stdlib/utils/define-nonenumerable-read-write-accessor]: https://github.com/stdlib-js/utils/tree/main/define-nonenumerable-read-write-accessor

[@stdlib/utils/define-nonenumerable-write-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-nonenumerable-write-only-accessor

[@stdlib/utils/define-properties]: https://github.com/stdlib-js/utils/tree/main/define-properties

[@stdlib/utils/define-property]: https://github.com/stdlib-js/utils/tree/main/define-property

[@stdlib/utils/define-read-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-read-only-accessor

[@stdlib/utils/define-read-only-property]: https://github.com/stdlib-js/utils/tree/main/define-read-only-property

[@stdlib/utils/define-read-write-accessor]: https://github.com/stdlib-js/utils/tree/main/define-read-write-accessor

[@stdlib/utils/define-write-only-accessor]: https://github.com/stdlib-js/utils/tree/main/define-write-only-accessor

[@stdlib/utils/entries-in]: https://github.com/stdlib-js/utils/tree/main/entries-in

[@stdlib/utils/entries]: https://github.com/stdlib-js/utils/tree/main/entries

[@stdlib/utils/enumerable-properties-in]: https://github.com/stdlib-js/utils/tree/main/enumerable-properties-in

[@stdlib/utils/enumerable-properties]: https://github.com/stdlib-js/utils/tree/main/enumerable-properties

[@stdlib/utils/enumerable-property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/enumerable-property-symbols-in

[@stdlib/utils/enumerable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/enumerable-property-symbols

[@stdlib/utils/flatten-object]: https://github.com/stdlib-js/utils/tree/main/flatten-object

[@stdlib/utils/for-in]: https://github.com/stdlib-js/utils/tree/main/for-in

[@stdlib/utils/for-own]: https://github.com/stdlib-js/utils/tree/main/for-own

[@stdlib/utils/get-prototype-of]: https://github.com/stdlib-js/utils/tree/main/get-prototype-of

[@stdlib/utils/inherited-enumerable-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-enumerable-properties

[@stdlib/utils/inherited-enumerable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/inherited-enumerable-property-symbols

[@stdlib/utils/inherited-keys]: https://github.com/stdlib-js/utils/tree/main/inherited-keys

[@stdlib/utils/inherited-nonenumerable-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-nonenumerable-properties

[@stdlib/utils/inherited-nonenumerable-property-names]: https://github.com/stdlib-js/utils/tree/main/inherited-nonenumerable-property-names

[@stdlib/utils/inherited-nonenumerable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/inherited-nonenumerable-property-symbols

[@stdlib/utils/inherited-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-properties

[@stdlib/utils/inherited-property-descriptor]: https://github.com/stdlib-js/utils/tree/main/inherited-property-descriptor

[@stdlib/utils/inherited-property-descriptors]: https://github.com/stdlib-js/utils/tree/main/inherited-property-descriptors

[@stdlib/utils/inherited-property-names]: https://github.com/stdlib-js/utils/tree/main/inherited-property-names

[@stdlib/utils/inherited-property-symbols]: https://github.com/stdlib-js/utils/tree/main/inherited-property-symbols

[@stdlib/utils/inherited-writable-properties]: https://github.com/stdlib-js/utils/tree/main/inherited-writable-properties

[@stdlib/utils/inherited-writable-property-names]: https://github.com/stdlib-js/utils/tree/main/inherited-writable-property-names

[@stdlib/utils/inherited-writable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/inherited-writable-property-symbols

[@stdlib/utils/keys-in]: https://github.com/stdlib-js/utils/tree/main/keys-in

[@stdlib/utils/lowercase-keys]: https://github.com/stdlib-js/utils/tree/main/lowercase-keys

[@stdlib/utils/map-keys]: https://github.com/stdlib-js/utils/tree/main/map-keys

[@stdlib/utils/map-values]: https://github.com/stdlib-js/utils/tree/main/map-values

[@stdlib/utils/merge]: https://github.com/stdlib-js/utils/tree/main/merge

[@stdlib/utils/move-property]: https://github.com/stdlib-js/utils/tree/main/move-property

[@stdlib/utils/nonenumerable-properties-in]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-properties-in

[@stdlib/utils/nonenumerable-properties]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-properties

[@stdlib/utils/nonenumerable-property-names-in]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-property-names-in

[@stdlib/utils/nonenumerable-property-names]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-property-names

[@stdlib/utils/nonenumerable-property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-property-symbols-in

[@stdlib/utils/nonenumerable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/nonenumerable-property-symbols

[@stdlib/utils/nonindex-keys]: https://github.com/stdlib-js/utils/tree/main/nonindex-keys

[@stdlib/utils/object-inverse-by]: https://github.com/stdlib-js/utils/tree/main/object-inverse-by

[@stdlib/utils/object-inverse]: https://github.com/stdlib-js/utils/tree/main/object-inverse

[@stdlib/utils/omit-by]: https://github.com/stdlib-js/utils/tree/main/omit-by

[@stdlib/utils/omit]: https://github.com/stdlib-js/utils/tree/main/omit

[@stdlib/utils/pick-arguments]: https://github.com/stdlib-js/utils/tree/main/pick-arguments

[@stdlib/utils/pick-by]: https://github.com/stdlib-js/utils/tree/main/pick-by

[@stdlib/utils/pick]: https://github.com/stdlib-js/utils/tree/main/pick

[@stdlib/utils/properties-in]: https://github.com/stdlib-js/utils/tree/main/properties-in

[@stdlib/utils/properties]: https://github.com/stdlib-js/utils/tree/main/properties

[@stdlib/utils/property-descriptor-in]: https://github.com/stdlib-js/utils/tree/main/property-descriptor-in

[@stdlib/utils/property-descriptor]: https://github.com/stdlib-js/utils/tree/main/property-descriptor

[@stdlib/utils/property-descriptors-in]: https://github.com/stdlib-js/utils/tree/main/property-descriptors-in

[@stdlib/utils/property-descriptors]: https://github.com/stdlib-js/utils/tree/main/property-descriptors

[@stdlib/utils/property-names-in]: https://github.com/stdlib-js/utils/tree/main/property-names-in

[@stdlib/utils/property-names]: https://github.com/stdlib-js/utils/tree/main/property-names

[@stdlib/utils/property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/property-symbols-in

[@stdlib/utils/property-symbols]: https://github.com/stdlib-js/utils/tree/main/property-symbols

[@stdlib/utils/uncapitalize-keys]: https://github.com/stdlib-js/utils/tree/main/uncapitalize-keys

[@stdlib/utils/uppercase-keys]: https://github.com/stdlib-js/utils/tree/main/uppercase-keys

[@stdlib/utils/values-in]: https://github.com/stdlib-js/utils/tree/main/values-in

[@stdlib/utils/values]: https://github.com/stdlib-js/utils/tree/main/values

[@stdlib/utils/writable-properties-in]: https://github.com/stdlib-js/utils/tree/main/writable-properties-in

[@stdlib/utils/writable-properties]: https://github.com/stdlib-js/utils/tree/main/writable-properties

[@stdlib/utils/writable-property-names-in]: https://github.com/stdlib-js/utils/tree/main/writable-property-names-in

[@stdlib/utils/writable-property-names]: https://github.com/stdlib-js/utils/tree/main/writable-property-names

[@stdlib/utils/writable-property-symbols-in]: https://github.com/stdlib-js/utils/tree/main/writable-property-symbols-in

[@stdlib/utils/writable-property-symbols]: https://github.com/stdlib-js/utils/tree/main/writable-property-symbols

[@stdlib/utils/deep-pluck]: https://github.com/stdlib-js/utils/tree/main/deep-pluck

[@stdlib/utils/find]: https://github.com/stdlib-js/utils/tree/main/find

[@stdlib/utils/flatten-array]: https://github.com/stdlib-js/utils/tree/main/flatten-array

[@stdlib/utils/from-entries]: https://github.com/stdlib-js/utils/tree/main/from-entries

[@stdlib/utils/index-of]: https://github.com/stdlib-js/utils/tree/main/index-of

[@stdlib/utils/pluck]: https://github.com/stdlib-js/utils/tree/main/pluck

[@stdlib/utils/unzip]: https://github.com/stdlib-js/utils/tree/main/unzip

[@stdlib/utils/zip]: https://github.com/stdlib-js/utils/tree/main/zip

[@stdlib/utils/any-by-right]: https://github.com/stdlib-js/utils/tree/main/any-by-right

[@stdlib/utils/any-by]: https://github.com/stdlib-js/utils/tree/main/any-by

[@stdlib/utils/any]: https://github.com/stdlib-js/utils/tree/main/any

[@stdlib/utils/append]: https://github.com/stdlib-js/utils/tree/main/append

[@stdlib/utils/bifurcate-by]: https://github.com/stdlib-js/utils/tree/main/bifurcate-by

[@stdlib/utils/bifurcate-in]: https://github.com/stdlib-js/utils/tree/main/bifurcate-in

[@stdlib/utils/bifurcate-own]: https://github.com/stdlib-js/utils/tree/main/bifurcate-own

[@stdlib/utils/bifurcate]: https://github.com/stdlib-js/utils/tree/main/bifurcate

[@stdlib/utils/count-by]: https://github.com/stdlib-js/utils/tree/main/count-by

[@stdlib/utils/every-by-right]: https://github.com/stdlib-js/utils/tree/main/every-by-right

[@stdlib/utils/every-by]: https://github.com/stdlib-js/utils/tree/main/every-by

[@stdlib/utils/every]: https://github.com/stdlib-js/utils/tree/main/every

[@stdlib/utils/for-each-right]: https://github.com/stdlib-js/utils/tree/main/for-each-right

[@stdlib/utils/for-each]: https://github.com/stdlib-js/utils/tree/main/for-each

[@stdlib/utils/group-by]: https://github.com/stdlib-js/utils/tree/main/group-by

[@stdlib/utils/group-in]: https://github.com/stdlib-js/utils/tree/main/group-in

[@stdlib/utils/group-own]: https://github.com/stdlib-js/utils/tree/main/group-own

[@stdlib/utils/group]: https://github.com/stdlib-js/utils/tree/main/group

[@stdlib/utils/inmap-right]: https://github.com/stdlib-js/utils/tree/main/inmap-right

[@stdlib/utils/inmap]: https://github.com/stdlib-js/utils/tree/main/inmap

[@stdlib/utils/key-by-right]: https://github.com/stdlib-js/utils/tree/main/key-by-right

[@stdlib/utils/key-by]: https://github.com/stdlib-js/utils/tree/main/key-by

[@stdlib/utils/none-by-right]: https://github.com/stdlib-js/utils/tree/main/none-by-right

[@stdlib/utils/none-by]: https://github.com/stdlib-js/utils/tree/main/none-by

[@stdlib/utils/none]: https://github.com/stdlib-js/utils/tree/main/none

[@stdlib/utils/pop]: https://github.com/stdlib-js/utils/tree/main/pop

[@stdlib/utils/prepend]: https://github.com/stdlib-js/utils/tree/main/prepend

[@stdlib/utils/push]: https://github.com/stdlib-js/utils/tree/main/push

[@stdlib/utils/reduce-right]: https://github.com/stdlib-js/utils/tree/main/reduce-right

[@stdlib/utils/reduce]: https://github.com/stdlib-js/utils/tree/main/reduce

[@stdlib/utils/reduce2d]: https://github.com/stdlib-js/utils/tree/main/reduce2d

[@stdlib/utils/shift]: https://github.com/stdlib-js/utils/tree/main/shift

[@stdlib/utils/some-by-right]: https://github.com/stdlib-js/utils/tree/main/some-by-right

[@stdlib/utils/some-by]: https://github.com/stdlib-js/utils/tree/main/some-by

[@stdlib/utils/some]: https://github.com/stdlib-js/utils/tree/main/some

[@stdlib/utils/tabulate-by]: https://github.com/stdlib-js/utils/tree/main/tabulate-by

[@stdlib/utils/tabulate]: https://github.com/stdlib-js/utils/tree/main/tabulate

[@stdlib/utils/unshift]: https://github.com/stdlib-js/utils/tree/main/unshift

[@stdlib/utils/until-each-right]: https://github.com/stdlib-js/utils/tree/main/until-each-right

[@stdlib/utils/until-each]: https://github.com/stdlib-js/utils/tree/main/until-each

[@stdlib/utils/while-each-right]: https://github.com/stdlib-js/utils/tree/main/while-each-right

[@stdlib/utils/while-each]: https://github.com/stdlib-js/utils/tree/main/while-each

[@stdlib/utils/circular-buffer]: https://github.com/stdlib-js/utils/tree/main/circular-buffer

[@stdlib/utils/compact-adjacency-matrix]: https://github.com/stdlib-js/utils/tree/main/compact-adjacency-matrix

[@stdlib/utils/doubly-linked-list]: https://github.com/stdlib-js/utils/tree/main/doubly-linked-list

[@stdlib/utils/fifo]: https://github.com/stdlib-js/utils/tree/main/fifo

[@stdlib/utils/linked-list]: https://github.com/stdlib-js/utils/tree/main/linked-list

[@stdlib/utils/named-typed-tuple]: https://github.com/stdlib-js/utils/tree/main/named-typed-tuple

[@stdlib/utils/stack]: https://github.com/stdlib-js/utils/tree/main/stack

[@stdlib/utils/async]: https://github.com/stdlib-js/utils/tree/main/async

<!-- </toc-links> -->

</section>

<!-- /.links -->
