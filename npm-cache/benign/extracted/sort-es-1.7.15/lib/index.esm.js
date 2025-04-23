const getSorter = (options) => options.desc ? (result) => result * -1 : (result) => result;

const parseDate = (date) => new Date(date);
const parseNullableDate = (date) => new Date(date || 0);
/**
 * the sortable for the date values
 * @param options sortable options for byDate
 *
 * {@link https://sort-es.netlify.app/by-date byDate docs}
 * @version 1.0.0
 */
const byDate = (options = {
    desc: false,
    nullable: false,
}) => {
    const sorter = getSorter(options);
    const parser = options.customParser || (options.nullable ? parseNullableDate : parseDate);
    return (first, second) => sorter(parser(first).getTime() - parser(second).getTime());
};

/**
 * the sortable to sort the **number primitive**
 * @param options the options to sort the numbers correctly
 *
 * {@link https://sort-es.netlify.app/by-number byNumber docs}
 * @version 1.0.0
 */
const byNumber = (options = { desc: false, nullable: false }) => {
    const sorter = getSorter(options);
    return (first, second) => options.nullable
        ? sorter((first || 0) - (second || 0) || 0)
        : sorter((first - second) || 0);
};

const fixString = (value, options) => {
    if (options.nullable)
        value = value || "";
    if (options.lowercase)
        value = value.toLowerCase();
    return value;
};
/**
 * the sortable to sort the **string primitive**
 * @param options the options to sort the strings correctly
 *
 * {@link https://sort-es.netlify.app/by-string byString docs}
 * @version 1.0.0
 */
const byString = (options = {
    desc: false,
    nullable: false,
    lowercase: false,
}) => {
    const sorter = getSorter(options);
    return (first, second) => sorter(fixString(first, options).localeCompare(fixString(second, options)));
};

function isNumber(v) {
    return typeof v === "number";
}
function isString(v) {
    return typeof v === "string";
}
function isDate(v) {
    return v instanceof Date;
}

const byAny = (options = { desc: false }) => {
    return (first, second) => {
        if (isNumber(first) && isNumber(second))
            return byNumber(options)(first, second);
        if (isString(first) && isString(second))
            return byString(options)(first, second);
        if (isDate(first) && isDate(second))
            return byDate(options)(first, second);
        throw new Error("incorrect types of the 2 parameters");
    };
};

function byValue(discriminator, sortFn) {
    if (typeof discriminator === "function") {
        return (first, second) => {
            const firstItem = discriminator(first);
            const secondItem = discriminator(second);
            return sortFn(firstItem, secondItem);
        };
    }
    return (first, second) => {
        const firstItem = first[discriminator];
        const secondItem = second[discriminator];
        return sortFn(firstItem, secondItem);
    };
}

/**
 * the sortable that allow you to sort an array of **complex object** by multiple properties
 * @param sorter the array to determine the strategy to sort the elements
 *
 * {@link https://sort-es.netlify.app/by-values byValues docs}
 * @version 1.2.0
 */
function byValues(sorter) {
    return (first, second) => {
        for (const [prop, sortableFn] of sorter) {
            if (!sortableFn)
                continue;
            let sortResult;
            if (typeof prop === "function") {
                sortResult = sortableFn(prop(first), prop(second));
            }
            else {
                console.log(`you're running a deprecated option, checkout https://sort-es.netlify.app/breaking-changes/ `);
                sortResult = sortableFn(first[prop], second[prop]);
            }
            if (sortResult !== 0)
                return sortResult;
        }
        return 0;
    };
}

/**
 * the sortable for the boolean values
 * @param options sortable options for byBoolean
 *
 * {@link https://sort-es.netlify.app/by-boolean byBoolean docs}
 * @version 1.3.0
 */
const byBoolean = (options = { desc: false }) => {
    const sorter = getSorter(options);
    return (first, second) => sorter(Number(second || false) - Number(first || false));
};

/**
 * the sortable for the async values
 * @param asyncItems the async items
 * @param sortFn the sortable to apply to the async items
 *
 * {@link https://sort-es.netlify.app/by-async sortAsync docs}
 * @version 1.0.0
 */
const sortAsync = async (asyncItems, sortFn) => {
    const items = await Promise.all(asyncItems);
    return items.sort(sortFn);
};
class AsyncArray extends Array {
    constructor(items) {
        super(...items);
    }
    sortAsync(sortFn) {
        return Promise.all(this).then((items) => items.sort(sortFn));
    }
}

var index = {
    byAny,
    byDate,
    byValue,
    byValues,
    byString,
    byNumber,
    sortAsync,
    byBoolean,
    AsyncArray,
};

export { AsyncArray, byAny, byBoolean, byDate, byNumber, byString, byValue, byValues, index as default, sortAsync };
