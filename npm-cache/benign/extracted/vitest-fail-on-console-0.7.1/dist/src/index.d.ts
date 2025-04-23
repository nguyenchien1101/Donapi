import { VitestFailOnConsoleFunction } from './types';

declare const init: ({ errorMessage, shouldFailOnAssert, shouldFailOnDebug, shouldFailOnError, shouldFailOnInfo, shouldFailOnLog, shouldFailOnWarn, skipTest, silenceMessage, afterEachDelay }?: VitestFailOnConsoleFunction) => void;
export default init;
