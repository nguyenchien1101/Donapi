/**
Check whether an array is empty.

This is useful because doing `array.length === 0` on its own won't work as a type-guard.

@example
```
import {isEmpty} from 'ts-extras';

isEmpty([1, 2, 3]);
//=> false

isEmpty([]);
//=> true
```

@category Type guard
*/
export declare function isEmpty(array: readonly unknown[]): array is readonly [];
export declare function isEmpty(array: unknown[]): array is [];
