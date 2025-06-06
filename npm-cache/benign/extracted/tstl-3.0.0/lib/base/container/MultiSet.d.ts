/**
 * @packageDocumentation
 * @module std.base
 */
import { SetContainer } from "./SetContainer";
import { IForwardIterator } from "../../iterator/IForwardIterator";
/**
 * Basic set container allowing multiple keys.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Source Derived type extending this {@link MultiSet}
 * @template IteratorT Iterator type
 * @template ReverseT Reverse iterator type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare abstract class MultiSet<Key, Source extends MultiSet<Key, Source, IteratorT, ReverseT>, IteratorT extends MultiSet.Iterator<Key, Source, IteratorT, ReverseT>, ReverseT extends MultiSet.ReverseIterator<Key, Source, IteratorT, ReverseT>> extends SetContainer<Key, false, Source, IteratorT, ReverseT> {
    /**
     * Insert an element.
     *
     * @param pair A tuple to be referenced for the insert.
     * @return An iterator to the newly inserted element.
     */
    insert(key: Key): IteratorT;
    /**
     * Insert an element with hint.
     *
     * @param hint Hint for the position where the element can be inserted.
     * @param pair A tuple to be referenced for the insert.
     * @return An iterator to the newly inserted element.
     */
    insert(hint: IteratorT, key: Key): IteratorT;
    /**
     * Insert range elements.
     *
     * @param first Input iterator of the first position.
     * @param last Input iteartor of the last position.
     */
    insert<InputIterator extends Readonly<IForwardIterator<Key, InputIterator>>>(begin: InputIterator, end: InputIterator): void;
    protected abstract _Key_eq(x: Key, y: Key): boolean;
    protected _Erase_by_val(key: Key): number;
    /**
     * @inheritDoc
     */
    merge(source: Source): void;
}
/**
 *
 */
export declare namespace MultiSet {
    /**
     * Iterator of {@link MultiSet}
     *
     * @author Jenogho Nam <http://samchon.org>
     */
    type Iterator<Key, SourceT extends MultiSet<Key, SourceT, IteratorT, ReverseT>, IteratorT extends Iterator<Key, SourceT, IteratorT, ReverseT>, ReverseT extends ReverseIterator<Key, SourceT, IteratorT, ReverseT>> = SetContainer.Iterator<Key, false, SourceT, IteratorT, ReverseT>;
    /**
     * Reverse iterator of {@link MultiSet}
     *
     * @author Jenogho Nam <http://samchon.org>
     */
    type ReverseIterator<Key, SourceT extends MultiSet<Key, SourceT, IteratorT, ReverseT>, IteratorT extends Iterator<Key, SourceT, IteratorT, ReverseT>, ReverseT extends ReverseIterator<Key, SourceT, IteratorT, ReverseT>> = SetContainer.ReverseIterator<Key, false, SourceT, IteratorT, ReverseT>;
}
