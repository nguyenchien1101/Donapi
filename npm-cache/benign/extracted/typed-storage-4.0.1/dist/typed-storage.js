import { string } from 'ts-serde/primitive';
export const typedStorage = (key, arg, opts) => {
    const isCustomSerde = arg && 'serialize' in arg && 'deserialize' in arg;
    const { serialize, deserialize } = (isCustomSerde ? arg : string);
    const options = isCustomSerde ? opts : arg;
    const storage = typeof window !== 'undefined'
        ? options?.sessionStorage
            ? sessionStorage
            : localStorage
        : null;
    return {
        get: () => deserialize(storage?.getItem(key) ?? ''),
        set: (value) => {
            const str = serialize(value);
            storage?.setItem(key, str);
        },
        addListener: (callback) => {
            const listener = (event) => {
                if (event.key === key) {
                    callback(event);
                }
            };
            if (typeof window !== 'undefined') {
                addEventListener('storage', listener);
            }
            return () => {
                if (typeof window !== 'undefined') {
                    removeEventListener('storage', listener);
                }
            };
        }
    };
};
