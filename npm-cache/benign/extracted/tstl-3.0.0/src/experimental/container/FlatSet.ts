//================================================================
/**
 * @packageDocumentation
 * @module std.experimental
 */
//================================================================
import { UniqueTreeSet } from "../../internal/container/associative/UniqueTreeSet";
import { ITreeContainer } from "../../internal/container/associative/ITreeContainer";

import { SetElementVector } from "../../internal/container/associative/SetElementVector";

import { IForwardIterator } from "../../iterator/IForwardIterator";
import { Comparator } from "../../internal/functional/Comparator";
import { Temporary } from "../../internal/functional/Temporary";
import { lower_bound, upper_bound } from "../../algorithm/binary_search";

/**
 * Unique-key Set based on sorted array.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class FlatSet<Key> extends UniqueTreeSet<
    Key,
    FlatSet<Key>,
    FlatSet.Iterator<Key>,
    FlatSet.ReverseIterator<Key>
> {
    private key_comp_!: Comparator<Key>;

    /* ---------------------------------------------------------
        CONSTURCTORS
    --------------------------------------------------------- */
    /**
     * Default Constructor.
     *
     * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Note that, because *equality* is predicated by `!comp(x, y) && !comp(y, x)`, the function must not cover the *equality* like `<=` or `>=`. It must exclude the *equality* like `<` or `>`. Default is {@link less}.
     */
    public constructor(comp?: Comparator<Key>);

    /**
     * Initializer Constructor.
     *
     * @param items Items to assign.
     * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Note that, because *equality* is predicated by `!comp(x, y) && !comp(y, x)`, the function must not cover the *equality* like `<=` or `>=`. It must exclude the *equality* like `<` or `>`. Default is {@link less}.
     */
    public constructor(items: Key[], comp?: Comparator<Key>);

    /**
     * Copy Constructor.
     *
     * @param obj Object to copy.
     */
    public constructor(obj: FlatSet<Key>);

    /**
     * Range Constructor.
     *
     * @param first Input iterator of the first position.
     * @param last Input iterator of the last position.
     * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Note that, because *equality* is predicated by `!comp(x, y) && !comp(y, x)`, the function must not cover the *equality* like `<=` or `>=`. It must exclude the *equality* like `<` or `>`. Default is {@link less}.
     */
    public constructor(
        first: Readonly<IForwardIterator<Key>>,
        last: Readonly<IForwardIterator<Key>>,
        comp?: Comparator<Key>,
    );

    public constructor(...args: any[]) {
        // INITIALIZATION
        super((thisArg) => new SetElementVector(thisArg));

        // OVERLOADINGS
        ITreeContainer.construct<
            Key,
            Key,
            FlatSet<Key>,
            FlatSet.Iterator<Key>,
            FlatSet.ReverseIterator<Key>,
            Key
        >(
            this,
            FlatSet,
            (comp) => {
                this.key_comp_ = comp;
            },
            ...args,
        );
    }

    /**
     * @inheritDoc
     */
    public swap(obj: FlatSet<Key>): void {
        // SWAP CONTENTS
        [this.data_, obj.data_] = [obj.data_, this.data_];
        SetElementVector._Swap_associative(
            this.data_ as Temporary,
            obj.data_ as Temporary,
        );

        // SWAP COMPARATORS
        [this.key_comp_, obj.key_comp_] = [obj.key_comp_, this.key_comp_];
    }

    /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    public nth(index: number): FlatSet.Iterator<Key> {
        return (this.data_ as SetElementVector<Key, true, FlatSet<Key>>).nth(
            index,
        );
    }

    /**
     * @inheritDoc
     */
    public key_comp(): Comparator<Key> {
        return this.key_comp_;
    }

    /**
     * @inheritDoc
     */
    public lower_bound(key: Key): FlatSet.Iterator<Key> {
        return lower_bound(this.begin(), this.end(), key, this.value_comp());
    }

    /**
     * @inheritDoc
     */
    public upper_bound(key: Key): FlatSet.Iterator<Key> {
        return upper_bound(this.begin(), this.end(), key, this.value_comp());
    }

    /* ---------------------------------------------------------
        POST-PROCESS
    --------------------------------------------------------- */
    protected _Handle_insert({}, {}): void {}

    protected _Handle_erase({}, {}): void {}
}

/**
 *
 */
export namespace FlatSet {
    // HEAD
    export type Iterator<Key> = SetElementVector.Iterator<
        Key,
        true,
        FlatSet<Key>
    >;
    export type ReverseIterator<Key> = SetElementVector.ReverseIterator<
        Key,
        true,
        FlatSet<Key>
    >;

    // BODY
    export const Iterator = SetElementVector.Iterator;
    export const ReverseIterator = SetElementVector.ReverseIterator;

    export const __MODULE = "experimental";
}
