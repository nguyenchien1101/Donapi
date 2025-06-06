import { isPresent } from './is-present.js';
/**
Assert that the given value is present (non-nullable), meaning it is neither `null` or `undefined`.

If the value is not present (`undefined` or `null`), a helpful `TypeError` will be thrown.

@example
```
import {assertPresent} from 'ts-extras';

const unicorn = 'unicorn';
assertPresent(unicorn);

const notUnicorn = null;
assertPresent(notUnicorn);
//=> TypeError: Expected a present value, got `null`
```

@category Type guard
*/
export function assertPresent(value) {
    if (!isPresent(value)) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new TypeError(`Expected a present value, got \`${value}\``);
    }
}
