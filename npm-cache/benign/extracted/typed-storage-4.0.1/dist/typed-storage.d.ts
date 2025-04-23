import { Serde } from 'ts-serde';
import { Options } from './types/Options.js';
import { TypedStorage } from './types/TypedStorage.js';
export declare const typedStorage: {
    <T>(key: string, serde: Serde<T>, options?: Options): TypedStorage<T>;
    (key: string, options?: Options): TypedStorage<string>;
};
