import { useEffect, useMemo, useRef } from 'react';
const normalizeKey = (key) => {
    return key.toLowerCase();
};
export function useKeyPress(keys, callback) {
    const lastKeyPressed = useRef(new Set([]));
    const keysSet = useMemo(() => {
        return new Set(keys.map((key) => normalizeKey(key)));
    }, [keys]);
    const handleKeyDown = (e) => {
        if (e.repeat)
            return; // To prevent this function from triggering on key hold e.g. Ctrl hold
        lastKeyPressed.current?.add(normalizeKey(e.key));
        // To bypass TypeScript check for the new ECMAScript method `isSubset`
        if (keysSet.isSubsetOf(lastKeyPressed.current)) {
            e.preventDefault();
            callback(e);
        }
    };
    const handleKeyUp = (e) => {
        lastKeyPressed.current?.delete(normalizeKey(e.key));
    };
    const handleBlur = () => {
        lastKeyPressed.current?.clear();
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('blur', handleBlur);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('blur', handleBlur);
        };
    }, [keysSet, callback]);
}
