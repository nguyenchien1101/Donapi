/**
Assert that the given value is defined, meaning it is not `undefined`.

If the value is `undefined`, a helpful `TypeError` will be thrown.

@example
```
import {assertDefined} from 'ts-extras';

const unicorn = 'unicorn';
assertDefined(unicorn);

const notUnicorn = undefined;
assertDefined(notUnicorn);
//=> TypeError: Expected a defined value, got `undefined`
```

@category Type guard
*/
export declare function assertDefined<T>(value: T | undefined): asserts value is T;
