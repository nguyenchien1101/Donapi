const has = Object.prototype.hasOwnProperty;
/**
A strongly-typed version of `Object.hasOwn()`.

Returns a boolean indicating whether the given object has the given property as its own property.

@example
```
import {objectHasOwn} from 'ts-extras';

objectHasOwn({}, 'hello');
//=> false

objectHasOwn([1, 2, 3], 0);
//=> true
```

@category Improved builtin
@category Type guard
*/
export function objectHasOwn(object, key) {
    // TODO: Use `Object.hasOwn()` when targeting Node.js 16.
    return has.call(object, key);
}
