import "mocha";
import { datable } from "../../src/types/types";
declare const expectObjectToBeEquals: <T>(item1: T, item2: T) => void;
declare const expectDateToBeEquals: (date1: datable | null | undefined, date2: datable | null | undefined) => void;
declare const expectDatableToBeEquals: (array1: (datable | undefined | null)[], array2: (datable | undefined | null)[]) => void;
export { expectObjectToBeEquals, expectDateToBeEquals, expectDatableToBeEquals, };
