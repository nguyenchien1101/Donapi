import is from '@sindresorhus/is';
import test from '../test.js';
const ofTypeDeep = (object, predicate) => {
    if (!is.plainObject(object)) {
        test(object, 'deep values', predicate, false);
        return true;
    }
    return Object.values(object).every(value => ofTypeDeep(value, predicate));
};
/**
Test all the values in the object against a provided predicate.

@hidden

@param predicate - Predicate to test every value in the given object against.
*/
const ofTypeDeepSafe = (object, predicate) => {
    try {
        return ofTypeDeep(object, predicate);
    }
    catch (error) {
        return error.message;
    }
};
export default ofTypeDeepSafe;
