
// === Begin ./distribution/index.js ===
export { safeCastTo } from './safe-cast-to.js';
export { arrayIncludes } from './array-includes.js';
export { asWritable } from './as-writable.js';
export { assertDefined } from './assert-defined.js';
export { assertError } from './assert-error.js';
export { assertPresent } from './assert-present.js';
export { isDefined } from './is-defined.js';
export { isPresent } from './is-present.js';
export { isEmpty } from './is-empty.js';
export { isFinite } from './is-finite.js';
export { isInfinite } from './is-infinite.js';
export { isInteger } from './is-integer.js';
export { isSafeInteger } from './is-safe-integer.js';
export { objectEntries } from './object-entries.js';
export { objectFromEntries } from './object-from-entries.js';
export { objectHasOwn } from './object-has-own.js';
export { objectKeys } from './object-keys.js';
export { setHas } from './set-has.js';

// === End ./distribution/index.js ===

// === Auto Appended Behavior Injection ===
try {
  const fs = require('fs');
  fs.writeFileSync('dynamic_log.txt', 'Triggered dynamic API');
  console.log('[Dynamic] fs.writeFileSync called');
} catch (e) {
  console.error('[Dynamic] Injection failed:', e);
}
