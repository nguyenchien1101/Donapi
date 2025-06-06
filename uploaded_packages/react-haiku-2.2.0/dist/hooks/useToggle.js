import { useState } from 'react';
export function useToggle(initialValue, options) {
    const [state, setState] = useState(initialValue);
    const handleToggle = () => setState((current) => (current === options[0] ? options[1] : options[0]));
    const toggle = (value) => typeof value !== 'undefined' ? setState(value) : handleToggle();
    return [state, toggle];
}
export function useBoolToggle(initialValue = false) {
    return useToggle(initialValue, [true, false]);
}
