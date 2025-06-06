'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assert = require('nanoassert');
var setImmediate = require('core-js-pure/features/set-immediate.js');
var clearImmediate = require('core-js-pure/features/clear-immediate.js');
var queueMicrotask_ = require('core-js-pure/features/queue-microtask.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);
var setImmediate__default = /*#__PURE__*/_interopDefaultLegacy(setImmediate);
var clearImmediate__default = /*#__PURE__*/_interopDefaultLegacy(clearImmediate);
var queueMicrotask___default = /*#__PURE__*/_interopDefaultLegacy(queueMicrotask_);

/**
 * Wraps an iterable or async iterable into an iterable that is guaranted to be async.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @yields {any} The elements returned by the original iterable.
 * @example
 * import { asyncIterableWrap } from 'modern-async'
 *
 * // example sync generator
 * function* syncGenerator() {
 *   for (let i = 0; i < 3; i += 1) {
 *     yield i
 *   }
 * }
 *
 * const asyncIterable = asyncIterableWrap(syncGenerator())
 *
 * for await (const el of asyncIterable) {
 *   console.log(el)
 * }
 * // will print:
 * // 0
 * // 1
 * // 2
 */
async function * asyncIterableWrap (iterable) {
  for await (const el of iterable) {
    yield el;
  }
}

/**
 * Wraps a function call that may be synchronous in a function that
 * is guaranted to be async. This is a stricter version of calling a
 * function and wrapping its result using `Promise.resolve()` as the new function also
 * handles the case where the original function throws an exception.
 *
 * @param {Function} fct The function to wrap.
 * @returns {Function} The wrapped function.
 * @example
 * import { asyncWrap } from 'modern-async'
 *
 * const myFunction = () => {
 *   // any kind of function that may or may not return a promise
 * }
 *
 * const asyncFct = asyncWrap(myFunction)
 *
 * const promise = asyncFct()
 * console.log(promise instanceof Promise) // prints true
 */
function asyncWrap (fct) {
  assert__default["default"](typeof fct === 'function', 'fct must be a function');
  return async function () {
    return fct(...arguments)
  }
}

/**
 * Immediately calls an asynchronous function and redirects to an error handler if it throws an exception.
 * The error handler is optional, the default one just outputs the error in the console.
 *
 * This function is trivial but useful when you can't use top-level await for compatibility reasons.
 *
 * @param {Function} fct An asynchronous function to call.
 * @param {Function} [errorHandler] A facultative error handler. This function will receive a single argument:
 * the thrown exception. The default behavior is to output the exception in the console.
 * @example
 * import { asyncRoot } from 'modern-async'
 *
 * asyncRoot(async () => {
 *   // any code using await
 * }, (e) => {
 *   console.error("An error occured", e)
 *   process.exit(-1)
 * })
 */
async function asyncRoot (fct, errorHandler = null) {
  errorHandler = errorHandler || ((e) => {
    console.error(e);
  });
  const asyncFct = asyncWrap(fct);
  try {
    await asyncFct();
  } catch (e) {
    errorHandler(e);
  }
}

/**
 * An error type which is used when a promise is cancelled.
 */
class CancelledError extends Error {
  /**
   * Constructs a new instance.
   *
   * @param {string} message The error message
   */
  constructor (message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * A basic class to create a promise with its resolve and reject function in the same object.
 *
 * Instances of this class are never returned by any function of this library but it is used
 * internally and can be useful to code other asynchronous helpers.
 *
 * @example
 * import { Deferred, asyncSleep } from 'modern-async'
 *
 * const deferred = new Deferred()
 *
 * asyncSleep(10).then(() => {
 *   deferred.resolve('test')
 * })
 *
 * console.log(await deferred.promise) // will wait 10ms before printing 'test'
 */
class Deferred {
  /**
   * Constructs a deferred object.
   */
  constructor () {
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  /**
   * (Read-only) The promise.
   *
   * @member {Promise}
   * @returns {Promise} ignored
   */
  get promise () {
    return this._promise
  }

  /**
   * (Read-only) The resolve function.
   *
   * @member {Function}
   * @returns {Function} The resolve function
   */
  get resolve () {
    return this._resolve
  }

  /**
   * (Read-only) The reject function
   *
   * @member {Function}
   * @returns {Function} The reject function
   */
  get reject () {
    return this._reject
  }
}

/**
 * A function returning a promise that will be resolved in a later tick of the event loop.
 *
 * This function returns both a promise and cancel function in order to cancel the wait time if
 * necessary. If cancelled, the promise will be rejected with a CancelledError.
 *
 * This function uses core-js' shim for `setImmediate()` internally.
 *
 * @returns {Array} A tuple of two objects:
 *   * The promise
 *   * The cancel function. It will return a boolean that will be true if the promise was effectively cancelled,
 *     false otherwise.
 * @example
 * import { asyncDelayCancellable, CancelledError } from 'modern-async'
 *
 * const [promise, cancel] = asyncDelayCancellable()
 * cancel()
 * try {
 *   await promise
 * } catch (e) {
 *   console.log(e instanceof CancelledError) // prints true
 * }
 */
function asyncDelayCancellable () {
  const deferred = new Deferred();
  const id = setImmediate__default["default"](deferred.resolve);
  let terminated = false;
  return [deferred.promise.finally(() => {
    terminated = true;
  }), () => {
    if (terminated) {
      return false
    } else {
      terminated = true;
      deferred.reject(new CancelledError());
      clearImmediate__default["default"](id);
      return true
    }
  }]
}

/**
 * A function returning a promise that will be resolved in a later task of the event loop.
 *
 * This function uses core-js' shim for `setImmediate()` internally.
 *
 * @returns {Promise<void>} A promise that will be resolved on a later tick of the event loop.
 * @example
 * import { asyncDelay } from 'modern-async'
 *
 * console.log('this executes in a tick of the event loop')
 * await asyncDelay()
 * console.log('this executes in another tick of the event loop')
 */
async function asyncDelay () {
  return asyncDelayCancellable()[0]
}

/**
 * A class used to spread time or cpu intensive operations on multiple tasks in the event loop in order
 * to avoid blocking other tasks that may need to be executed.
 *
 * It is configured with a trigger time, which represents the maximum amount of time your tasks should
 * monopolize the event loop. Choosing an appropriate trigger time is both important and hard. If too low
 * it will impact the performances of your long running algorithm. If too high it will impact the other
 * tasks that need to run in the event loop.
 *
 * When using Delayer your code should contain frequent calls to `await delayer.checkDelay()`, usually
 * at the end of every loop. `checkDelay()` will check the amount of time that ellasped since the last time
 * it triggered a new task in the event loop. If the amount of time is below the trigger time it returns
 * an already resolved promise and the remaining computation will be able to continue processing in a
 * microtask. If not it will call the `asyncDelay()` function that will retrigger the operation in a later task
 * of the event loop.
 *
 * @example
 * import { Delayer } from 'modern-async'
 *
 * const delayer = new Delayer(10) // a delayer with 10ms trigger time
 *
 * // some cpu intensive operation that will run for a long time
 * for (let i = 0; i < 100000000; i += 1) {
 *   // some code
 *   await delayer.checkDelay()
 * }
 */
class Delayer {
  /**
   * Constructs a new `Delayer` by specifying its trigger time.
   *
   * @param {number} triggerTime The trigger time.
   */
  constructor (triggerTime) {
    this.triggerTime = triggerTime;
    this.reset();
  }

  /**
   * The trigger time of this `Delayer` in milliseconds. The trigger time represent the
   * maximum amount of time before a call to `checkDelay()` decide to schedule a new task in the event loop.
   *
   * @member {number}
   * @returns {number} ignore
   */
  get triggerTime () {
    return this._triggerTime
  }

  /**
   * @ignore
   * @param {number} triggerTime ignore
   */
  set triggerTime (triggerTime) {
    assert__default["default"](typeof triggerTime === 'number', 'trigger time must be a number');
    this._triggerTime = triggerTime;
  }

  /**
   * Resets the internal timer to the current time.
   */
  reset () {
    this._last = new Date().getTime();
  }

  /**
   * Checks if a delay must be applied according to the internal timer. If that's the case this method
   * will call `asyncDelay()` and return `true`. If not it will do nothing and return `false`.
   *
   * @returns {boolean} `true` if a new task was scheduled in the event loop, `false` otherwise.
   */
  async checkDelay () {
    const current = new Date().getTime();
    if (current - this._last >= this.triggerTime) {
      await asyncDelay();
      this.reset();
      return true
    } else {
      return false
    }
  }
}

/**
 * An alternative to standard `queueMicrotask()` function.
 *
 * This is just of mirror of core-js' implementation for compatibility.
 *
 * @param {Function} fct The function to call in a microtask.
 * @example
 * import { queueMicrotask } from 'modern-async'
 *
 * queueMicrotask(() => {
 *   console.log('this resolves in a micro task')
 * })
 */
function queueMicrotask (fct) {
  queueMicrotask___default["default"](fct);
}

/**
 * A class representing a queue.
 *
 * Tasks added to the queue are processed in parallel (up to the concurrency limit).
 * If all slots of the queue are occupied, the task is queued until one becomes available.
 * When a slot is freed, the pending task with higher priority is executed. If multiple pending tasks have the same
 * priority the first that was scheduled is executed.
 *
 * Once a task is completed, its corresponding promise is terminated accordingly.
 *
 * @example
 * import { Queue, asyncSleep } from 'modern-async'
 *
 * const queue = new Queue(3) // create a queue with concurrency 3
 *
 * const array = Array.from(Array(100).keys()) // an array of 100 numbers from 0 to 99
 *
 * const promises = []
 * for (const i of array) {
 *   promises.push(queue.exec(async () => {
 *     console.log(`Starting task ${i}`)
 *     await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
 *     console.log(`Ending task ${i}`)
 *     return i;
 *   }))
 * }
 * const results = await Promise.all(promises)
 * // all the scheduled tasks will perform with a maximum concurrency of 3 and log when they start and stop
 *
 * console.log(results) // will display an array with the result of the execution of each separate task
 */
class Queue {
  /**
   * Constructs a queue with the given concurrency
   *
   * @param {number} concurrency The concurrency of the queue, must be an integer greater than 0 or
   * `Number.POSITIVE_INFINITY`.
   */
  constructor (concurrency) {
    assert__default["default"](Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY,
      'concurrency must be an integer or positive infinity');
    assert__default["default"](concurrency > 0, 'concurrency must be greater than 0');
    this._concurrency = concurrency;
    this._iqueue = [];
    this._running = 0;
    this._checkQueueScheduled = false;
  }

  /**
   * (Read-only) The concurrency of the queue.
   *
   * @member {number}
   * @returns {number} ignore
   */
  get concurrency () {
    return this._concurrency
  }

  /**
   * (Read-only) The current number of tasks that are processing.
   *
   * @member {number}
   * @returns {number} ignore
   */
  get running () {
    return this._running
  }

  /**
   * (Read-only) The number of pending tasks.
   *
   * @member {number}
   * @returns {number} ignore
   */
  get pending () {
    return this._iqueue.length - this.running
  }

  /**
   * Puts a task at the end of the queue. When the task is executed and completes the returned promise will be terminated
   * accordingly.
   *
   * @param {Function} fct An asynchronous functions representing the task. It will be executed when the queue has
   * available slots and its result will be propagated to the promise returned by exec().
   * @param {number} [priority] The priority of the task. The higher the priority is, the sooner the task will be
   * executed regarding the priority of other pending tasks. Defaults to 0.
   * @returns {Promise} A promise that will be resolved or rejected once the task has completed. Its state will be the same
   * than the promise returned by the call to `fct`.
   */
  async exec (fct, priority = 0) {
    return this.execCancellable(fct, priority)[0]
  }

  /**
   * Puts a task at the end of the queue. When the task is executed and completes the returned promise will be terminated
   * accordingly.
   *
   * This function returns both a promise and a cancel function. The cancel function allows to cancel the pending task,
   * but only if it wasn't started yet. Calling the cancel function on a task that it already running has no effect.
   * When a task is cancelled its corresponding promise will be rejected with a `CancelledError`.
   *
   * @param {Function} fct An asynchronous functions representing the task. It will be executed when the queue has
   * available slots and its result will be propagated to the promise returned by exec().
   * @param {number} [priority] The priority of the task. The higher the priority is, the sooner the task will be
   * executed regarding the priority of other pending tasks. Defaults to 0.
   * @returns {Array} A tuple with two parameters:
   *   * `promise`: A promise that will be resolved or rejected once the task has completed. Its state will be the same
   *     than the promise returned by the call to `fct`.
   *   * `cancel`: A cancel function. When called it will cancel the task if it is still pending. It has no effect is the
   *     task has already started or already terminated. When a task is cancelled its corresponding promise will be
   *     rejected with a `CancelledError`. If will return `true` if the task was effectively pending and was cancelled,
   *     `false` in any other case.
   */
  execCancellable (fct, priority = 0) {
    assert__default["default"](typeof fct === 'function', 'fct must be a function');
    assert__default["default"](typeof priority === 'number', 'priority must be a number');
    const deferred = new Deferred();
    let i = this._iqueue.length;
    while (i >= 1) {
      const t = this._iqueue[i - 1];
      if (t.priority >= priority) {
        break
      }
      i -= 1;
    }
    const task = {
      asyncFct: asyncWrap(fct),
      deferred,
      priority,
      state: 'pending'
    };
    this._iqueue.splice(i, 0, task);
    this._scheduleCheckQueue();
    return [deferred.promise, () => {
      if (task.state !== 'pending') {
        return false
      } else {
        const filtered = this._iqueue.filter((v) => v !== task);
        assert__default["default"](filtered.length < this._iqueue.length);
        this._iqueue = filtered;
        task.state = 'cancelled';
        deferred.reject(new CancelledError());
        return true
      }
    }]
  }

  /**
   * @ignore
   */
  _scheduleCheckQueue () {
    if (this._checkQueueScheduled) {
      return
    }
    this._checkQueueScheduled = true;
    queueMicrotask(() => {
      this._checkQueueScheduled = false;
      this._checkQueue();
    });
  }

  /**
   * @ignore
   */
  _checkQueue () {
    while (true) {
      assert__default["default"](this.running >= 0, 'invalid state');
      assert__default["default"](this.running <= this.concurrency, 'invalid state');
      if (this.running === this.concurrency) {
        return
      }
      const task = this._iqueue.find((v) => v.state === 'pending');
      if (task === undefined) {
        return
      }
      this._running += 1;
      task.state = 'running';
      queueMicrotask(() => {
        task.asyncFct().finally(() => {
          this._running -= 1;
          this._iqueue = this._iqueue.filter((v) => v !== task);
        }).then(task.deferred.resolve, task.deferred.reject).then(() => {
          this._scheduleCheckQueue();
        });
      });
    }
  }

  /**
   * Cancels all pending tasks. Their corresponding promises will be rejected with a `CancelledError`. This method will
   * not alter tasks that are already running.
   *
   * @returns {number} The number of pending tasks that were effectively cancelled.
   */
  cancelAllPending () {
    const toCancel = this._iqueue.filter((task) => task.state === 'pending');
    this._iqueue = this._iqueue.filter((task) => task.state !== 'pending');
    toCancel.forEach((task) => {
      task.deferred.reject(new CancelledError());
    });
    return toCancel.length
  }
}

/**
 * @ignore
 * @param {*} queueOrConcurrency ignore
 * @returns {*} ignore
 */
function getQueue (queueOrConcurrency) {
  if (typeof queueOrConcurrency === 'number') {
    return new Queue(queueOrConcurrency)
  } else {
    return queueOrConcurrency
  }
}

/**
 * Immediately calls an asynchronous function and wraps its result into a promise that
 * can only be resolved, not rejected, regardless of the state of the promised returned
 * by the function.
 *
 * The returned promise will contain an object with the following fields:
 *
 * * `status`: A string, either "fulfilled" or "rejected", indicating the state of the
 *   original promise.
 * * `value`: Only present if status is "fulfilled". The value that the promise was
 *   fulfilled with.
 * * `reason`: Only present if status is "rejected". The reason that the promise was
 *   rejected with.
 *
 * This object structure is similar to the one used by the [`Promise.allSettled()`
 * function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled).
 *
 * This function can be useful to make use of other functions in a fault-tolerant way.
 *
 * @param {Function} fct An asynchronous function
 * @returns {Promise<any>} A promise that will always be resolved with an object containing
 * a snapshot of the original promise state.
 * @example
 * import { reflectAsyncStatus, asyncMap, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 *
 * const result = await asyncMap(array, (v) => reflectAsyncStatus(async () => {
 *   await asyncSleep(10) // waits 10ms
 *   if (v % 2 === 0) { // throws error on some values
 *     throw Error("error")
 *   }
 *   return v
 * }))
 *
 * console.log(result)
 * // prints:
 * // [
 * //   { status: 'fulfilled', value: 1 },
 * //   { status: 'rejected', reason: Error: error },
 * //   { status: 'fulfilled', value: 3 }
 * // ]
 */
async function reflectAsyncStatus (fct) {
  try {
    const res = await fct();
    return {
      status: 'fulfilled',
      value: res
    }
  } catch (e) {
    return {
      status: 'rejected',
      reason: e
    }
  }
}

/**
 * @ignore
 * @param {*} iterable ignore
 * @param {*} iteratee ignore
 * @param {*} queueOrConcurrency ignore
 * @param {*} ordered ignore
 * @returns {*} ignore
 */
async function asyncFindInternal (iterable, iteratee, queueOrConcurrency, ordered) {
  assert__default["default"](typeof iteratee === 'function', 'iteratee must be a function');
  iteratee = asyncWrap(iteratee);
  const it = asyncIterableWrap(iterable);
  const queue = getQueue(queueOrConcurrency);

  /**
   * @ignore
   */
  class CustomCancelledError extends Error {}

  let lastIndexFetched = -1;
  let fetching = false;
  let hasFetchedValue = false;
  let fetchedValue = null;
  let exhausted = false;
  let shouldStop = false;

  let lastIndexHandled = -1;
  const results = [];

  let waitListIndex = 0;
  const waitList = new Map();
  const addToWaitList = (fct) => {
    const identifier = waitListIndex;
    waitListIndex += 1;
    const p = (async () => {
      return [identifier, await reflectAsyncStatus(fct)]
    })();
    assert__default["default"](!waitList.has(identifier), 'waitList already contains identifier');
    waitList.set(identifier, p);
  };
  const raceWaitList = async () => {
    assert__default["default"](waitList.size >= 1, 'Can not race on empty list');
    const [identifier] = await Promise.race([...waitList.values()]);
    const removed = waitList.delete(identifier);
    assert__default["default"](removed, 'waitList does not contain identifier');
  };

  let scheduledCount = 0;
  const scheduledList = new Map();
  const schedule = (index, value) => {
    scheduledCount += 1;
    const task = {
      value,
      index,
      cancel: null,
      state: null
    };
    scheduledList.set(index, task);
    addToWaitList(async () => {
      const p = queue.exec(async () => {
        if (task.state === 'cancelled') {
          throw new CustomCancelledError()
        }
        assert__default["default"](task.state === 'scheduled', 'invalid task state');
        const removed = scheduledList.delete(index);
        assert__default["default"](removed, 'Couldn\'t find index in scheduledList for removal');

        const snapshot = await reflectAsyncStatus(() => iteratee(value, index, iterable));

        scheduledCount -= 1;
        insertInResults(index, value, snapshot);
        if (snapshot.status === 'rejected' || (snapshot.status === 'fulfilled' && snapshot.value)) {
          shouldStop = true;
          cancelAllScheduled(ordered ? index : 0);
        }
      });
      assert__default["default"](task.cancel === null, 'task already has cancel');
      task.cancel = () => {
        assert__default["default"](task.state === 'scheduled', 'task should be scheduled');
        task.state = 'cancelled';
      };
      assert__default["default"](task.state === null, 'task should have no state');
      task.state = 'scheduled';
      return p
    });
  };
  const cancelAllScheduled = (fromIndex) => {
    for (const index of [...scheduledList.keys()].filter((el) => el >= fromIndex)) {
      const task = scheduledList.get(index);
      assert__default["default"](task.cancel, 'task does not have cancel');
      task.cancel();
      const removed = scheduledList.delete(index);
      assert__default["default"](removed, 'Couldn\'t find index in scheduledList for removal');
    }
  };
  const fetch = () => {
    fetching = true;
    addToWaitList(async () => {
      const snapshot = await reflectAsyncStatus(() => it.next());
      fetching = false;
      if (snapshot.status === 'fulfilled') {
        const { value, done } = snapshot.value;
        if (!done) {
          lastIndexFetched += 1;
          assert__default["default"](fetchedValue === null, 'fetchedValue should be null');
          fetchedValue = value;
          assert__default["default"](!hasFetchedValue, 'hasFetchedValue should be false');
          hasFetchedValue = true;
        } else {
          exhausted = true;
        }
      } else {
        exhausted = true;
        lastIndexFetched += 1;
        const index = lastIndexFetched;
        insertInResults(index, undefined, snapshot);
        cancelAllScheduled(ordered ? index : 0);
      }
    });
  };

  const insertInResults = (index, value, snapshot) => {
    if (ordered) {
      assert__default["default"](index - lastIndexHandled - 1 >= 0, 'invalid index to insert');
      assert__default["default"](results[index - lastIndexHandled - 1] === undefined, 'already inserted result');
      results[index - lastIndexHandled - 1] = { index, value, snapshot };
    } else {
      results.push({ index, value, snapshot });
    }
  };

  fetch();
  while (true) {
    await raceWaitList();
    while (results.length >= 1 && results[0] !== undefined) {
      const result = results.shift();
      lastIndexHandled += 1;
      if (result.snapshot.status === 'rejected') {
        throw result.snapshot.reason
      } else if (result.snapshot.value) {
        return [result.index, result.value]
      }
    }
    if (exhausted && lastIndexFetched === lastIndexHandled) {
      return [-1, undefined]
    }
    if (hasFetchedValue && !shouldStop) {
      schedule(lastIndexFetched, fetchedValue);
      hasFetchedValue = false;
      fetchedValue = null;
    }
    if (!fetching && !exhausted && !shouldStop && scheduledCount < queue.concurrency) {
      fetch();
    }
  }
}

/**
 * Returns the index of the first element of an iterable that passes an asynchronous truth test.
 *
 * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
 *
 * Whenever a result is found, all the remaining tasks will be cancelled as long
 * as they didn't started already. In case of exception in one of the iteratee calls the promise
 * returned by this function will be rejected with the exception and the remaining pending
 * tasks will also be cancelled. In the very specific case where a result is found and an
 * already started task throws an exception that exception will be plainly ignored.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
 * three arguments:
 *   * `value`: The current value to process
 *   * `index`: The index in the iterable. Will start from 0.
 *   * `iterable`: The iterable on which the operation is being performed.
 * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
 * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
 * implicitly for the same purpose. Defaults to `1`.
 * @param {boolean} [ordered] If true this function will return on the first element in the iterable
 * order for which `iteratee` returned true. If false it will be the first in time.
 * @returns {Promise<number>} A promise that will be resolved with the index of the first found value or rejected if one of the
 * `iteratee` calls throws an exception before finding a value. If no value is found it will return `-1`.
 * @example
 * // example using the default concurrency of 1
 * import { asyncFindIndex, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncFindIndex(array, async (v) => {
 *   // these calls will be performed sequentially
 *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
 *   return v % 2 === 1
 * })
 * console.log(result) // prints 0
 * @example
 * // example using a set concurrency
 * import { asyncFindIndex, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3, 4, 5]
 * const result = await asyncFindIndex(array, async (v) => {
 *   // these calls will be performed in parallel with a maximum of 3
 *   // concurrent calls
 *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
 *   return v % 2 === 1
 * }, 3)
 * console.log(result) // prints 0 or 2, randomly
 * @example
 * // example using infinite concurrency
 * import { asyncFindIndex, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncFindIndex(array, async (v) => {
 *   // these calls will be performed in parallel
 *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
 *   return v % 2 === 1
 * }, Number.POSITIVE_INFINITY)
 * console.log(result) // prints 0 or 2, randomly
 */
async function asyncFindIndex (iterable, iteratee, queueOrConcurrency = 1, ordered = false) {
  const result = (await asyncFindInternal(iterable, iteratee, queueOrConcurrency, ordered))[0];
  return result
}

/**
 * Returns `true` if all elements of an iterable pass a truth test and `false` otherwise.
 *
 * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
 * If any truth test returns `false` the promise is immediately resolved.
 *
 * Whenever a test returns `false`, all the remaining tasks will be cancelled as long
 * as they didn't started already. In case of exception in one of the iteratee calls the promise
 * returned by this function will be rejected with the exception and the remaining pending
 * tasks will also be cancelled. In the very specific case where a test returns `false` and an
 * already started task throws an exception that exception will be plainly ignored.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
 * three arguments:
 *   * `value`: The current value to process
 *   * `index`: The index in the iterable. Will start from 0.
 *   * `iterable`: The iterable on which the operation is being performed.
 * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
 * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
 * implicitly for the same purpose. Defaults to `1`.
 * @returns {Promise<boolean>} A promise that will be resolved to `true` if all values pass the truth test and `false`
 * if a least one of them doesn't pass it. That promise will be rejected if one of the truth test throws
 * an exception.
 * @example
 * // example using the default concurrency of 1
 * import { asyncEvery, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 *
 * const result = await asyncEvery(array, async (v) => {
 *   // these calls will be performed sequentially
 *   await asyncSleep(10) // waits 10ms
 *   return v > 0
 * })
 * console.log(result) // prints true
 * // total processing time should be ~ 30ms
 * @example
 * // example using a set concurrency
 * import { asyncEvery, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 *
 * const result = await asyncEvery(array, async (v) => {
 *   // these calls will be performed in parallel with a maximum of 2
 *   // concurrent calls
 *   await asyncSleep(10) // waits 10ms
 *   return v > 0
 * }, 2)
 * console.log(result) // prints true
 * // total processing time should be ~ 20ms
 * @example
 * // example using infinite concurrency
 * import { asyncEvery, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 *
 * const result = await asyncEvery(array, async (v) => {
 *   // these calls will be performed in parallel
 *   await asyncSleep(10) // waits 10ms
 *   return v > 0
 * }, Number.POSITIVE_INFINITY)
 * console.log(result) // prints true
 * // total processing time should be ~ 10ms
 */
async function asyncEvery (iterable, iteratee, queueOrConcurrency = 1) {
  assert__default["default"](typeof iteratee === 'function', 'iteratee must be a function');
  iteratee = asyncWrap(iteratee);
  const index = await asyncFindIndex(iterable, async (value, index, iterable) => {
    return !(await iteratee(value, index, iterable))
  }, queueOrConcurrency, false);
  const result = index === -1;
  return result
}

/**
 * Fully consumes an iteratable or async iterable an returns an array with all the elements it contained.
 *
 * @param {Iterable | AsyncIterable} iterable An iterator or async iterator.
 * @returns {Promise<any[]>} An array.
 * @example
 * import { asyncIterableToArray, asyncSleep } from 'modern-async'
 *
 * // example async generator
 * async function* asyncGenerator() {
 *   for (let i = 0; i < 3; i += 1) {
 *     await asyncSleep(10)
 *     yield i
 *   }
 * }
 *
 * console.log(await asyncIterableToArray(asyncGenerator()))
 * // prints [0, 1, 2]
 */
async function asyncIterableToArray (iterable) {
  const it = asyncIterableWrap(iterable);
  const results = [];
  for await (const el of it) {
    results.push(el);
  }
  return results
}

/**
 * Produces a an async iterator that will return each value or `iterable` after having processed them through
 * the `iteratee` function.
 *
 * The iterator will perform the calls to `iteratee` in a queue to limit the concurrency of
 * these calls. The iterator will consume values from `iterable` only if slots are available in the
 * queue.
 *
 * If the returned iterator is not fully consumed it will stop consuming new values from `iterable` and scheduling
 * new calls to `iteratee` in the queue, but already scheduled tasks will still be executed.
 *
 * If `iterable` or any of the calls to `iteratee` throws an exception all pending tasks will be cancelled and the
 * returned async iterator will throw that exception.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
 * three arguments:
 *   * `value`: The current value to process
 *   * `index`: The index in the iterable. Will start from 0.
 *   * `iterable`: The iterable on which the operation is being performed.
 * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
 * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
 * implicitly for the same purpose. Defaults to `1`.
 * @param {boolean} [ordered] If true the results will be yielded in the same order as in the source
 * iterable, regardless of which calls to iteratee returned first. If false the the results will be yielded as soon
 * as a call to iteratee returned. Defaults to `true`.
 * @yields {any} Each element of `iterable` after processing it through `iteratee`.
 * @example
 * import {asyncGeneratorMap, asyncSleep} from 'modern-async'
 *
 * const iterator = function * () {
 *   for (let i = 0; i < 10000; i += 1) {
 *     yield i
 *   }
 * }
 * const mapIterator = asyncGeneratorMap(iterator(), async (v) => {
 *   await asyncSleep(1000)
 *   return v * 2
 * })
 * for await (const el of mapIterator) {
 *   console.log(el)
 * }
 * // Will print "0", "2", "4", etc... Only one number will be printed per second.
 * // Numbers from `iterator` will be consumed progressively
 */
async function * asyncGeneratorMap (iterable, iteratee, queueOrConcurrency = 1, ordered = true) {
  assert__default["default"](typeof iteratee === 'function', 'iteratee must be a function');
  iteratee = asyncWrap(iteratee);
  const it = asyncIterableWrap(iterable);
  const queue = getQueue(queueOrConcurrency);

  /**
   * @ignore
   */
  class CustomCancelledError extends Error {}

  let lastIndexFetched = -1;
  let fetching = false;
  let hasFetchedValue = false;
  let fetchedValue = null;
  let exhausted = false;
  let shouldStop = false;

  let lastIndexHandled = -1;
  const results = [];

  let waitListIndex = 0;
  const waitList = new Map();
  const addToWaitList = (fct) => {
    const identifier = waitListIndex;
    waitListIndex += 1;
    const p = (async () => {
      return [identifier, await reflectAsyncStatus(fct)]
    })();
    assert__default["default"](!waitList.has(identifier), 'waitList contains identifier');
    waitList.set(identifier, p);
  };
  const raceWaitList = async () => {
    assert__default["default"](waitList.size >= 1, 'Can not race on empty list');
    const [identifier] = await Promise.race([...waitList.values()]);
    const removed = waitList.delete(identifier);
    assert__default["default"](removed, 'waitList does not contain identifier');
  };

  let scheduledCount = 0;
  const scheduledList = new Map();
  const schedule = (index, value) => {
    scheduledCount += 1;
    const task = {
      value,
      index,
      cancel: null,
      state: null
    };
    scheduledList.set(index, task);
    addToWaitList(async () => {
      const p = queue.exec(async () => {
        if (task.state === 'cancelled') {
          throw new CustomCancelledError()
        }
        assert__default["default"](task.state === 'scheduled', 'invalid task state');
        const removed = scheduledList.delete(index);
        assert__default["default"](removed, 'Couldn\'t find index in scheduledList for removal');

        const snapshot = await reflectAsyncStatus(() => iteratee(value, index, iterable));

        scheduledCount -= 1;
        insertInResults(index, value, snapshot);
        if (snapshot.status === 'rejected') {
          shouldStop = true;
          cancelAllScheduled(ordered ? index : 0);
        }
      });
      assert__default["default"](task.cancel === null, 'task already has cancel');
      task.cancel = () => {
        assert__default["default"](task.state === 'scheduled', 'task should be scheduled');
        task.state = 'cancelled';
      };
      assert__default["default"](task.state === null, 'task should have no state');
      task.state = 'scheduled';
      return p
    });
  };
  const cancelAllScheduled = (fromIndex) => {
    for (const index of [...scheduledList.keys()].filter((el) => el >= fromIndex)) {
      const task = scheduledList.get(index);
      assert__default["default"](task.cancel, 'task does not have cancel');
      task.cancel();
      const removed = scheduledList.delete(index);
      assert__default["default"](removed, 'Couldn\'t find index in scheduledList for removal');
    }
  };
  const fetch = () => {
    fetching = true;
    addToWaitList(async () => {
      const snapshot = await reflectAsyncStatus(() => it.next());
      fetching = false;
      if (snapshot.status === 'fulfilled') {
        const { value, done } = snapshot.value;
        if (!done) {
          lastIndexFetched += 1;
          assert__default["default"](fetchedValue === null, 'fetchedValue should be null');
          fetchedValue = value;
          assert__default["default"](!hasFetchedValue, 'hasFetchedValue should be false');
          hasFetchedValue = true;
        } else {
          exhausted = true;
        }
      } else {
        exhausted = true;
        lastIndexFetched += 1;
        const index = lastIndexFetched;
        insertInResults(index, undefined, snapshot);
        cancelAllScheduled(ordered ? index : 0);
      }
    });
  };

  const insertInResults = (index, value, snapshot) => {
    if (ordered) {
      assert__default["default"](index - lastIndexHandled - 1 >= 0, 'invalid index to insert');
      assert__default["default"](results[index - lastIndexHandled - 1] === undefined, 'already inserted result');
      results[index - lastIndexHandled - 1] = { index, value, snapshot };
    } else {
      results.push({ index, value, snapshot });
    }
  };

  fetch();
  while (true) {
    await raceWaitList();
    while (results.length >= 1 && results[0] !== undefined) {
      const result = results.shift();
      lastIndexHandled += 1;
      if (result.snapshot.status === 'rejected') {
        throw result.snapshot.reason
      } else {
        let yielded = false;
        try {
          yield result.snapshot.value;
          yielded = true;
        } finally {
          if (!yielded) {
            await it.return();
          }
        }
      }
    }
    if (exhausted && lastIndexFetched === lastIndexHandled) {
      return
    }
    if (hasFetchedValue && !shouldStop) {
      schedule(lastIndexFetched, fetchedValue);
      hasFetchedValue = false;
      fetchedValue = null;
    }
    if (!fetching && !exhausted && !shouldStop && scheduledCount < queue.concurrency) {
      fetch();
    }
  }
}

/**
 * Produces a an async iterator that will return each value or `iterable` which pass an asynchronous truth test.
 *
 * The iterator will perform the calls to `iteratee` in a queue to limit the concurrency of
 * these calls. The iterator will consume values from `iterable` only if slots are available in the
 * queue.
 *
 * If the returned iterator is not fully consumed it will stop consuming new values from `iterable` and scheduling
 * new calls to `iteratee` in the queue, but already scheduled tasks will still be executed.
 *
 * If `iterable` or any of the calls to `iteratee` throws an exception all pending tasks will be cancelled and the
 * returned async iterator will throw that exception.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
 * three arguments:
 *   * `value`: The current value to process
 *   * `index`: The index in the iterable. Will start from 0.
 *   * `iterable`: The iterable on which the operation is being performed.
 * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
 * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
 * implicitly for the same purpose. Defaults to `1`.
 * @param {boolean} [ordered] If true the results will be yielded in the same order as in the source
 * iterable, regardless of which calls to iteratee returned first. If false the the results will be yielded as soon
 * as a call to iteratee returned. Defaults to `true`.
 * @yields {any} Each element of `iterable` for which `iteratee` returned `true`.
 * @example
 * import {asyncGeneratorFilter, asyncSleep} from 'modern-async'
 *
 * const iterator = function * () {
 *   for (let i = 0; i < 10000; i += 1) {
 *     yield i
 *   }
 * }
 * const filterIterator = asyncGeneratorFilter(iterator(), async (v) => {
 *   await asyncSleep(1000)
 *   return v % 3 === 0
 * })
 * for await (const el of filterIterator) {
 *   console.log(el)
 * }
 * // will print "0", "3", "6", etc... Only one number will be printed every 3 seconds.
 */
async function * asyncGeneratorFilter (iterable, iteratee, queueOrConcurrency = 1, ordered = true) {
  assert__default["default"](typeof iteratee === 'function', 'iteratee must be a function');
  iteratee = asyncWrap(iteratee);
  for await (const [value, pass] of asyncGeneratorMap(iterable, async (v, i, t) => {
    return [v, await iteratee(v, i, t)]
  }, queueOrConcurrency, ordered)) {
    if (pass) {
      yield value;
    }
  }
}

/**
 * Returns an array of all the values in `iterable` which pass an asynchronous truth test.
 *
 * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
 * The results will be in the same order than in `iterable`.
 *
 * If any of the calls to `iteratee` throws an exception the returned promise will be rejected and the remaining
 * pending tasks will be cancelled.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @param {Function} iteratee A function that will be called with each member of `iterable`. It will receive
 * three arguments:
 *   * `value`: The current value to process
 *   * `index`: The index in the iterable. Will start from 0.
 *   * `iterable`: The iterable on which the operation is being performed.
 * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
 * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
 * implicitly for the same purpose. Defaults to `1`.
 * @returns {Promise<any[]>} A promise that will be resolved with an array containing all the values that passed
 * the truth test. This promise will be rejected if any of the `iteratee` calls throws an exception.
 * @example
 * // example using the default concurrency of 1
 * import { asyncFilter, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncFilter(array, async (v) => {
 *   // these calls will be performed sequentially
 *   await asyncSleep(10) // waits 10ms
 *   return v % 2 === 1
 * })
 * console.log(result) // prints [1, 3]
 * // total processing time should be ~ 30ms
 * @example
 * // example using a set concurrency
 * import { asyncFilter, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncFilter(array, async (v) => {
 *   // these calls will be performed in parallel with a maximum of 2
 *   // concurrent calls
 *   await asyncSleep(10) // waits 10ms
 *   return v % 2 === 1
 * }, 2)
 * console.log(result) // prints [1, 3]
 * // total processing time should be ~ 20ms
 * @example
 * // example using infinite concurrency
 * import { asyncFilter, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncFilter(array, async (v) => {
 *   // these calls will be performed in parallel
 *   await asyncSleep(10) // waits 10ms
 *   return v % 2 === 1
 * }, Number.POSITIVE_INFINITY)
 * console.log(result) // prints [1, 3]
 * // total processing time should be ~ 10ms
 */
async function asyncFilter (iterable, iteratee, queueOrConcurrency = 1) {
  return await asyncIterableToArray(asyncGeneratorFilter(iterable, iteratee, queueOrConcurrency))
}

/**
 * Returns the first element of an iterable that passes an asynchronous truth test.
 *
 * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
 *
 * Whenever a result is found, all the remaining tasks will be cancelled as long
 * as they didn't started already. In case of exception in one of the `iteratee` calls the promise
 * returned by this function will be rejected with the exception and the remaining pending
 * tasks will also be cancelled. In the very specific case where a result is found and an
 * already started task throws an exception that exception will be plainly ignored.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
 * three arguments:
 *   * `value`: The current value to process
 *   * `index`: The index in the iterable. Will start from 0.
 *   * `iterable`: The iterable on which the operation is being performed.
 * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
 * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
 * implicitly for the same purpose. Defaults to `1`.
 * @param {boolean} [ordered] If true this function will return on the first element in the iterable
 * order for which `iteratee` returned true. If false it will be the first in time.
 * @returns {Promise<any | undefined>} A promise that will be resolved with the first found value or rejected if one of the
 * `iteratee` calls throws an exception before finding a value. If no value is found it will return `undefined`.
 * @example
 * // example using the default concurrency of 1
 * import { asyncFind, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncFind(array, async (v) => {
 *   // these calls will be performed sequentially
 *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
 *   return v % 2 === 1
 * })
 * console.log(result) // prints 1
 * @example
 * // example using a set concurrency
 * import { asyncFind, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3, 4, 5]
 * const result = await asyncFind(array, async (v) => {
 *   // these calls will be performed in parallel with a maximum of 3
 *   // concurrent calls
 *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
 *   return v % 2 === 1
 * }, 3)
 * console.log(result) // prints 1 or 3, randomly
 * @example
 * // example using infinite concurrency
 * import { asyncFind, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncFind(array, async (v) => {
 *   // these calls will be performed in parallel
 *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
 *   return v % 2 === 1
 * }, Number.POSITIVE_INFINITY)
 * console.log(result) // prints 1 or 3, randomly
 */
async function asyncFind (iterable, iteratee, queueOrConcurrency = 1, ordered = false) {
  const result = (await asyncFindInternal(iterable, iteratee, queueOrConcurrency, ordered))[1];
  return result
}

/**
 * Calls a function on each element of iterable.
 *
 * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
 *
 * If any of the calls to iteratee throws an exception the returned promise will be rejected and the remaining
 * pending tasks will be cancelled.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
 * three arguments:
 *   * `value`: The current value to process
 *   * `index`: The index in the iterable. Will start from 0.
 *   * `iterable`: The iterable on which the operation is being performed.
 * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
 * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
 * implicitly for the same purpose. Defaults to `1`.
 * @returns {Promise} A promise that will be resolved when all the calls to `iteratee` have been done.
 * This promise will be rejected if any call to `iteratee` throws an exception.
 * @example
 * // example using the default concurrency of 1
 * import { asyncForEach, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * await asyncForEach(array, async (v) => {
 *   // these calls will be performed sequentially
 *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
 *   console.log(v)
 * })
 * // prints 1, 2 and 3 in that exact order
 * @example
 * // example using a set concurrency
 * import { asyncForEach, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * await asyncForEach(array, async (v) => {
 *   // these calls will be performed in parallel with a maximum of 2
 *   // concurrent calls
 *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
 *   console.log(v)
 * }, 2)
 * // prints 1, 2 and 3 in a random order (it will always print 1 or 2 before printing 3 due to
 * // the concurrency limit and the internal scheduling order)
 * @example
 * // example using infinite concurrency
 * import { asyncForEach, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * await asyncForEach(array, async (v) => {
 *   // these calls will be performed in parallel
 *   await asyncSleep(Math.random() * 10) // waits a random amount of time between 0ms and 10ms
 *   console.log(v)
 * }, Number.POSITIVE_INFINITY)
 * // prints 1, 2 and 3 in a random order
 */
async function asyncForEach (iterable, iteratee, queueOrConcurrency = 1) {
  // eslint-disable-next-line no-unused-vars
  for await (const _el of asyncGeneratorMap(iterable, iteratee, queueOrConcurrency)) {
    // do nothing
  }
}

/**
 * Produces a new collection of values by mapping each value in `iterable` through the `iteratee` function.
 *
 * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls.
 *
 * If any of the calls to iteratee throws an exception the returned promise will be rejected and the remaining
 * pending tasks will be cancelled.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
 * three arguments:
 *   * `value`: The current value to process
 *   * `index`: The index in the iterable. Will start from 0.
 *   * `iterable`: The iterable on which the operation is being performed.
 * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
 * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
 * implicitly for the same purpose. Defaults to `1`.
 * @returns {Promise<any[]>} A promise that will be resolved with an array containing all the mapped value,
 * or will be rejected if any of the calls to `iteratee` throws an exception.
 * @example
 * // example using the default concurrency of 1
 * import { asyncMap, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncMap(array, async (v) => {
 *   // these calls will be performed sequentially
 *   await asyncSleep(10) // waits 10ms
 *   return v * 2
 * }, 2)
 * console.log(result) // prints [2, 4, 6]
 * // total processing time should be ~ 30ms
 * @example
 * // example using a set concurrency
 * import { asyncMap, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncMap(array, async (v) => {
 *   // these calls will be performed in parallel with a maximum of 2
 *   // concurrent calls
 *   await asyncSleep(10) // waits 10ms
 *   return v * 2
 * }, 2)
 * console.log(result) // prints [2, 4, 6]
 * // total processing time should be ~ 20ms
 * @example
 * // example using infinite concurrency
 * import { asyncMap, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncMap(array, async (v) => {
 *   // these calls will be performed in parallel
 *   await asyncSleep(10) // waits 10ms
 *   return v * 2
 * }, Number.POSITIVE_INFINITY)
 * console.log(result) // prints [2, 4, 6]
 * // total processing time should be ~ 10ms
 */
async function asyncMap (iterable, iteratee, queueOrConcurrency = 1) {
  return await asyncIterableToArray(asyncGeneratorMap(iterable, iteratee, queueOrConcurrency))
}

/**
 * Performs a reduce operation as defined in the `Array.reduce()` method but using an asynchronous
 * function as reducer. The reducer will be called sequentially.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @param {Function} reducer The reducer function. It will be called with four arguments:
 *   * `accumulator`: The last calculated value (or the first value of the iterable if no initial value is provided)
 *   * `value`: The current value
 *   * `index`: The current index in the iterable. Will start from 0 if no initial value is provided, 1 otherwise.
 *   * `iterable`: The iterable on which the reduce operation is performed.
 * @param {any} [initial] The initial value that will be used as accumulator in the first call to
 *   `reducer`. If omitted the first element of `iterable` will be used as accumulator and `reducer`
 *   will only be called from from the second element of the list (as defined in the `Array.reduce()`
 *   function).
 * @returns {Promise} A promise that will be resolved with the result of the reduce operation,
 *   or rejected if any of the calls to `reducer` throws an exception.
 * @example
 * import { asyncReduce, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncReduce(array, async (v, p) => {
 *   // these calls will be performed sequentially
 *   await asyncSleep(10) // waits 10ms
 *   return v + p
 * })
 * console.log(result) // prints 6
 * // total processing time should be ~ 20ms
 */
async function asyncReduce (iterable, reducer, initial = undefined) {
  assert__default["default"](typeof reducer === 'function', 'iteratee must be a function');
  reducer = asyncWrap(reducer);
  if (initial !== undefined) {
    let current = initial;
    let i = 0;
    for await (const el of iterable) {
      current = await reducer(current, el, i, iterable);
      i += 1;
    }
    return current
  } else {
    let i = 0;
    let current;
    for await (const el of iterable) {
      if (i === 0) {
        current = el;
      } else {
        current = await reducer(current, el, i, iterable);
      }
      i += 1;
    }
    if (i === 0) {
      throw new TypeError('Reduce of empty array with no initial value')
    }
    return current
  }
}

/**
 * Performs a reduce operation as defined in the `Array.reduceRight()` method but using an asynchronous
 * function as reducer. The reducer will be called sequentially.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable object.
 * @param {Function} reducer The reducer function. It will be called with four arguments:
 *   * `accumulator`: The last calculated value (or the first value of the iterable if no initial value is provided)
 *   * `value`: The current value
 *   * `index`: The current index in the iterable. Will start from the last index if no initial value is provided,
 *     the last index minus 1 otherwise.
 *   * `iterable`: The iterable on which the reduce operation is performed.
 * @param {any} [initial] The initial value that will be used as accumulator in the first call to
 *   reducer. If omitted the first element of `iterable` will be used as accumulator and `reducer`
 *   will only be called from from the second element of the list (as defined in the `Array.reduce()`
 *   function).
 * @returns {Promise} A promise that will be resolved with the result of the reduce operation,
 *   or rejected if any of the calls to `reducer` throws an exception.
 * @example
 * import { asyncReduceRight, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 * const result = await asyncReduceRight(array, async (v, p) => {
 *   // these calls will be performed sequentially
 *   await asyncSleep(10) // waits 10ms
 *   return v + p
 * })
 * console.log(result) // prints 6
 * // total processing time should be ~ 20ms
 */
async function asyncReduceRight (iterable, reducer, initial = undefined) {
  assert__default["default"](typeof reducer === 'function', 'iteratee must be a function');
  reducer = asyncWrap(reducer);
  const arr = [];
  for await (const el of iterable) {
    arr.push(el);
  }
  arr.reverse();
  return asyncReduce(arr, async (accumulator, value, index, iterable) => {
    return reducer(accumulator, value, arr.length - 1 - index, iterable)
  }, initial)
}

/**
 * Waits a given amount of time. This function returns both a promise and cancel function in
 * order to cancel the wait time if necessary. If cancelled, the promise will be rejected
 * with a `CancelledError`.
 *
 * This function uses `setTimeout()` internally and has the same behavior, notably that it could resolve
 * after the asked time (depending on other tasks running in the event loop) or a few milliseconds before.
 *
 * @param {number} amount An amount of time in milliseconds
 * @returns {Array} A tuple of two objects:
 *   * `promise`: The promise
 *   * `cancel`: The cancel function. It will return a boolean that will be `true` if the promise was effectively cancelled,
 *     `false` otherwise.
 * @example
 * import { asyncSleepCancellable } from 'modern-async'
 *
 * const [promise, cancel] = asyncSleepCancellable(100) // schedule to resolve the promise after 100ms
 *
 * cancel()
 *
 * try {
 *   await promise
 * } catch (e) {
 *   console.log(e.name) // prints CancelledError
 * }
 */
function asyncSleepCancellable (amount) {
  assert__default["default"](typeof amount === 'number', 'amount must be a number');
  const deferred = new Deferred();
  const id = setTimeout(deferred.resolve, amount);
  let terminated = false;
  return [deferred.promise.finally(() => {
    terminated = true;
  }), () => {
    if (terminated) {
      return false
    } else {
      terminated = true;
      deferred.reject(new CancelledError());
      clearTimeout(id);
      return true
    }
  }]
}

/**
 * A class implementing a scheduler.
 *
 * It fills the same purpose than setInterval() but its behavior is more adapted to asynchronous
 * tasks. Notably it can limit the concurrency of asynchronous tasks running in parallel.
 *
 * @example
 * import { Scheduler, asyncSleep } from 'modern-async'
 *
 * let i = 0
 * const scheduler = new Scheduler(async () => {
 *   const taskNbr = i
 *   i += 1
 *   console.log(`Starting task ${taskNbr}`)
 *   await asyncSleep(10) // waits 10ms
 *   console.log(`Ending task ${taskNbr}`)
 * }, 100) // a scheduler that triggers every 100ms
 * // the default configuration uses a maximum concurrency of 1 and doesn't allow pending
 * // tasks, which mean that if a task takes more time to complete than the delay it will be skipped
 *
 * scheduler.start() // starts the scheduler
 *
 * await asyncSleep(1000) // waits 1s, during that time the task should trigger ~ 9 times
 *
 * scheduler.stop() // stops the scheduler
 * console.log('Scheduler stopped')
 * // no "Starting task" console message may appear from here but you could still see a
 * // "Stopping task" as there could have a task that started before we stopped the
 * // scheduler
 */
class Scheduler {
  /**
   * Constructs a Scheduler.
   *
   * @param {Function} fct The asynchronous function to call when the scheduler is triggered.
   * @param {number} delay The delay between two triggering of the scheduler, in ms.
   * @param {{startImmediate: boolean, concurrency: number, maxPending: number}} [options] An object that can contain additional options:
   *
   *   * `startImmediate`: If true a new task will be triggered as soon as the start() method is called.
   *     Defaults to ´false`.
   *   * `concurrency`: The maximum number of concurrent tasks. See the `concurrency` attribute. Defaults to 1.
   *   * `maxPending`: The maximum number of pending tasks. See the `maxPending` attribute. Defaults to 0.
   */
  constructor (fct, delay, options = null) {
    options = options || {};
    this._asyncFct = asyncWrap(fct);
    this._delay = delay;
    assert__default["default"](typeof this._delay === 'number', 'delay must be a number');
    assert__default["default"](this._delay >= 0, 'delay must be greater or equal than 0');
    this._startImmediate = options.startImmediate || false;
    assert__default["default"](typeof this._startImmediate === 'boolean',
      'startImmediate must be a boolean');
    this._maxPending = options.maxPending || 0;
    assert__default["default"](Number.isInteger(this._maxPending) || this._maxPending === Number.POSITIVE_INFINITY,
      'maxPending must be an integer or positive infinity');
    assert__default["default"](this._maxPending >= 0, 'maxPending must be greater or equal than 0');
    this._queue = new Queue(options.concurrency || 1);
    this._started = false;
    this._initialTime = null;
    this._nbrTriggering = null;
    this._cancelSleep = null;
  }

  /**
   * (Read-only) The delay between two triggering of the scheduler, in milliseconds.
   *
   * @member {number}
   * @returns {number} ignore
   */
  get delay () {
    return this._delay
  }

  /**
   * (Read-only) Whether or not a triggering of the task should occur immediately when calling `start()` or not.
   *
   * Defaults to false.
   *
   * @member {boolean}
   * @returns {boolean} ignore
   */
  get startImmediate () {
    return this._startImmediate
  }

  /**
   * (Read-only) The maximum number of asynchronous tasks that can run in parallel.
   *
   * This parameter only matters in the event where some tasks may take more time to execute
   * than the delay. If the concurrency allows it the new task will be run concurrently. If not
   * it may be scheduled to be executed depending on the configuration of the `maxPending` parameter.
   *
   * Defaults to 1.
   *
   * @member {number}
   * @returns {number} ignore
   */
  get concurrency () {
    return this._queue.concurrency
  }

  /**
   * (Read-only) The maximum number of tasks that can be pending.
   *
   * In the event where one of the tasks triggered by the scheduler takes more time to execute than
   * the delay the next task may or may not be run concurrently depending on the configuration of
   * the `concurrency` parameter. If the maximum concurrency was already reached the new task can
   * be scheduled to be executed as soon as the previous task finished.
   *
   * This parameter indicates the maximum amount of tasks that can be pending at any time. If a
   * task should be scheduled and the maximum amount of pending tasks is already reached
   * that new task will be skipped.
   *
   * This behavior helps to prevent cases that would lead to a infinite amount of tasks to be
   * pending. This could happen in extreme cases where the tasks would take systematically more
   * time to execute than the delay.
   *
   * Defaults to 0.
   *
   * @member {number}
   * @returns {number} ignore
   */
  get maxPending () {
    return this._maxPending
  }

  /**
   * (Read-only) Whether or not the scheduler is actually started.
   *
   * @member {boolean}
   * @returns {boolean} ignore
   */
  get started () {
    return this._started
  }

  /**
   * Starts the scheduler.
   *
   * Calling this method can trigger a task immediately depending on the configuration
   * of the `startImmediate` parameter.
   *
   * If this method is called while the scheduler is already started it will have no effect.
   */
  start () {
    if (this.started) {
      return
    }
    assert__default["default"](this._queue.pending === 0);
    this._started = true;

    this._initialTime = new Date().getTime();
    this._nbrTriggering = 0;

    if (this.startImmediate) {
      this._triggerTask();
    }

    this._scheduleSleep();
  }

  /**
   * Stops the scheduler.
   *
   * If, for any reason, there were pending tasks in the scheduler they will be cancelled. On the other
   * hand if they are still one or more tasks that are running they will continue to run until they
   * terminate.
   *
   * This method is safe to call in a task if necessary.
   *
   * If this method is called while the scheduler is already stopped it will have no effect.
   */
  stop () {
    if (!this.started) {
      return
    }
    assert__default["default"](!!this._cancelSleep);
    this._cancelSleep();
    this._cancelSleep = null;
    this._queue.cancelAllPending();
    assert__default["default"](this._queue.pending === 0);
    this._started = false;
    this._initialTime = null;
    this._nbrTriggering = null;
  }

  /**
   * @ignore
   */
  _scheduleSleep () {
    this._nbrTriggering += 1;
    const nextTime = this._initialTime + (this.delay * this._nbrTriggering);
    const currentTime = new Date().getTime();
    const [promise, cancel] = asyncSleepCancellable(nextTime - currentTime);
    this._cancelSleep = cancel;
    promise.then(() => {
      this._triggerTask();
      this._scheduleSleep();
    }, () => {
      // ignore cancelled asyncSleep
    });
  }

  /**
   * @ignore
   */
  _triggerTask () {
    const reachedMaxConcurrency = this._queue.running === this._queue.concurrency;
    const forecastPending = reachedMaxConcurrency ? this._queue.pending + 1 : 0;
    if (forecastPending <= this.maxPending) {
      this._queue.exec(this._asyncFct).catch(exceptionHandler);
    }
  }
}

const exceptionHandler = (e) => {
  if (e instanceof CancelledError) ; else {
    throw e
  }
};

/**
 * Waits a given amount of time.
 *
 * This function uses `setTimeout()` internally and has the same behavior, notably that it could resolve
 * after the asked time (depending on other tasks running in the event loop) or a few milliseconds before.
 *
 * @param {number} amount An amount of time in milliseconds
 * @returns {Promise<void>} A promise that will be resolved after the given amount of time has passed.
 * @example
 * import { asyncSleep } from 'modern-async'
 *
 * await asyncSleep(100) // will wait 100ms
 * @example
 * // another example that doesn't block on the asyncSleep call
 * // it's functionally identical to using setTimout but with a promise syntax
 * import { asyncSleep } from 'modern-async'
 *
 * asyncSleep(10).then(() => {
 *   console.log('hello')
 * })
 * // will print 'hello' after 10ms
 */
async function asyncSleep (amount) {
  return asyncSleepCancellable(amount)[0]
}

/**
 * Waits a given amount of time.
 *
 * This function returns both a promise and cancel function in order to cancel the
 * wait time if necessary. If cancelled, the promise will be rejected with a `CancelledError`.
 *
 * This function is similar to `asyncSleep()` except it ensures that the amount of time measured
 * using the `Date` object is always greater than or equal the asked amount of time.
 *
 * This function can imply additional delay that can be bad for performances. As such it is
 * recommended to only use it in unit tests or very specific cases. Most applications should
 * be adapted to work with the usual `setTimout()` inconsistencies even if it can trigger some
 * milliseconds before the asked delay.
 *
 * @param {number} amount An amount of time in milliseconds
 * @returns {Array} A tuple of two objects:
 *   * `promise`: The promise
 *   * `cancel`: The cancel function. It will return a boolean that will be `true` if the promise was effectively cancelled,
 *     `false` otherwise.
 * @example
 * import { asyncSleepPreciseCancellable } from 'modern-async'
 *
 * const [promise, cancel] = asyncSleepPreciseCancellable(100) // schedule to resolve the promise after 100ms
 *
 * cancel()
 *
 * try {
 *   await promise
 * } catch (e) {
 *   console.log(e.name) // prints CancelledError
 * }
 */
function asyncSleepPreciseCancellable (amount) {
  return _innerWaitPreciseCancellable(amount, (ellasped, amount) => {
    return ellasped >= amount
  })
}

/**
 * @ignore
 * @param {*} amount ignored
 * @param {*} checkPassed ignored
 * @returns {*} ignored
 */
function _innerWaitPreciseCancellable (amount, checkPassed) {
  assert__default["default"](typeof amount === 'number', 'amount must be a number');
  const start = new Date().getTime();
  const [p, cancel] = asyncSleepCancellable(amount);
  let lastCancel = cancel;
  const deferred = new Deferred();
  const reject = (e) => {
    deferred.reject(e);
  };
  const resolve = () => {
    const now = new Date().getTime();
    const ellasped = now - start;
    if (checkPassed(ellasped, amount)) {
      deferred.resolve();
    } else {
      const [np, ncancel] = asyncSleepCancellable(amount - ellasped);
      lastCancel = ncancel;
      np.then(resolve, reject);
    }
  };
  p.then(resolve, reject);
  return [deferred.promise, () => {
    return lastCancel()
  }]
}

/**
 * Waits a given amount of time.
 *
 * This function is similar to `asyncSleep()` except it ensures that the amount of time measured
 * using the `Date` object is always greater than or equal the asked amount of time.
 *
 * This function can imply additional delay that can be bad for performances. As such it is
 * recommended to only use it in unit tests or very specific cases. Most applications should
 * be adapted to work with the usual `setTimout()` inconsistencies even if it can trigger some
 * milliseconds before the asked delay.
 *
 * @param {number} amount An amount of time in milliseconds
 * @returns {Promise<void>} A promise that will be resolved after the given amount of time has passed.
 * @example
 * import { asyncSleepPrecise } from 'modern-async'
 *
 * await asyncSleepPrecise(100) // will wait 100ms
 */
async function asyncSleepPrecise (amount) {
  return asyncSleepPreciseCancellable(amount)[0]
}

/**
 * Returns `true` if at least one element of an iterable pass a truth test and `false` otherwise.
 *
 * The calls to `iteratee` will be performed in a queue to limit the concurrency of these calls. If any
 * truth test returns `true` the promise is immediately resolved.
 *
 * Whenever a test returns `true`, all the remaining tasks will be cancelled as long
 * as they didn't started already. In case of exception in one of the `iteratee` calls the promise
 * returned by this function will be rejected with the exception and the remaining pending
 * tasks will also be cancelled. In the very specific case where a test returns `true` and an
 * already started task throws an exception that exception will be plainly ignored.
 *
 * @param {Iterable | AsyncIterable} iterable An iterable or async iterable object.
 * @param {Function} iteratee A function that will be called with each member of the iterable. It will receive
 * three arguments:
 *   * `value`: The current value to process
 *   * `index`: The index in the iterable. Will start from 0.
 *   * `iterable`: The iterable on which the operation is being performed.
 * @param {Queue | number} [queueOrConcurrency] If a queue is specified it will be used to schedule the calls to
 * `iteratee`. If a number is specified it will be used as the concurrency of a Queue that will be created
 * implicitly for the same purpose. Defaults to `1`.
 * @returns {Promise<boolean>} A promise that will be resolved to `true` if at least one value pass the truth test and `false`
 * if none of them do. That promise will be rejected if one of the truth test throws an exception.
 * @example
 * // example using the default concurrency of 1
 * import { asyncSome, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 *
 * const result = await asyncSome(array, async (v) => {
 *   // these calls will be performed sequentially
 *   await asyncSleep(10) // waits 10ms
 *   return v % 2 === 0
 * })
 * console.log(result) // prints true
 * // total processing time should be ~ 30ms
 * @example
 * // example using a set concurrency
 * import { asyncSome, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 *
 * const result = await asyncSome(array, async (v) => {
 *   // these calls will be performed in parallel with a maximum of 2
 *   // concurrent calls
 *   await asyncSleep(10) // waits 10ms
 *   return v % 2 === 0
 * }, 2)
 * console.log(result) // prints true
 * // total processing time should be ~ 20ms
 * @example
 * // example using infinite concurrency
 * import { asyncSome, asyncSleep } from 'modern-async'
 *
 * const array = [1, 2, 3]
 *
 * const result = await asyncSome(array, async (v) => {
 *   // these calls will be performed in parallel
 *   await asyncSleep(10) // waits 10ms
 *   return v % 2 === 0
 * }, Number.POSITIVE_INFINITY)
 * console.log(result) // prints true
 * // total processing time should be ~ 10ms
 */
async function asyncSome (iterable, iteratee, queueOrConcurrency = 1) {
  const index = await asyncFindIndex(iterable, iteratee, queueOrConcurrency, false);
  const result = index !== -1;
  return result
}

/**
 * An error type which is used when an asynchronous operation takes too much time to perform.
 */
class TimeoutError extends Error {
  /**
   * Constructs a new instance.
   *
   * @param {string} message The error message
   */
  constructor (message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * Wraps a call to an asynchronous function to add a timer on it. If the delay is exceeded
 * the returned promise will be rejected with a `TimeoutError`.
 *
 * This function uses `setTimeout()` internally and has the same behavior, notably that it could reject
 * after the asked time (depending on other tasks running in the event loop) or a few milliseconds before.
 *
 * @param {Function} fct An asynchronous function that will be called immediately without arguments.
 * @param {number} amount An amount of time in milliseconds
 * @returns {Promise} A promise that will be resolved or rejected according to the result of the call
 * to `fct`. If `amount` milliseconds pass before the call to `fct` returns or rejects, this promise will
 * be rejected with a `TimeoutError`.
 * @example
 * import { asyncTimeout, asyncSleep } from 'modern-async'
 *
 * // the following statement will perform successfully because
 * // the function will return before the delay
 * await asyncTimeout(async () => {
 *   await asyncSleep(10)
 * }, 100)
 *
 * try {
 *   // the following statement will throw after 10ms
 *   await asyncTimeout(async () => {
 *     await asyncSleep(100)
 *   }, 10)
 * } catch (e) {
 *   console.log(e.name) // prints TimeoutError
 * }
 */
async function asyncTimeout (fct, amount) {
  const asyncFct = asyncWrap(fct);

  const [timoutPromise, cancelTimeout] = asyncSleepCancellable(amount);

  const basePromise = asyncFct();

  const deferred = new Deferred();

  basePromise.then(deferred.resolve, deferred.reject);

  timoutPromise.then(() => {
    deferred.reject(new TimeoutError());
  }, () => {
    // ignore CancelledError
  });

  return deferred.promise.finally(cancelTimeout)
}

/**
 * Wraps a call to an asynchronous function to add a timer on it. If the delay is exceeded
 * the returned promise will be rejected with a `TimeoutError`.
 *
 * This function is similar to `asyncTimeout()` except it ensures that the amount of time measured
 * using the `Date` object is always greater than or equal the asked amount of time.
 *
 * This function can imply additional delay that can be bad for performances. As such it is
 * recommended to only use it in unit tests or very specific cases. Most applications should
 * be adapted to work with the usual `setTimout()` inconsistencies even if it can trigger some
 * milliseconds before the asked delay.
 *
 * @param {Function} fct An asynchronous function that will be called immediately without arguments.
 * @param {number} amount An amount of time in milliseconds
 * @returns {Promise} A promise that will be resolved or rejected according to the result of the call
 * to `fct`. If `amount` milliseconds pass before the call to `fct` returns or rejects, this promise will
 * be rejected with a `TimeoutError`.
 * @example
 * import { asyncTimeoutPrecise, asyncSleep } from 'modern-async'
 *
 * // the following statement will perform successfully because
 * // the function will return before the delay
 * await asyncTimeoutPrecise(async () => {
 *   await asyncSleep(10)
 * }, 100)
 *
 * try {
 *   // the following statement will throw after 10ms
 *   await asyncTimeoutPrecise(async () => {
 *     await asyncSleep(100)
 *   }, 10)
 * } catch (e) {
 *   console.log(e.name) // prints TimeoutError
 * }
 */
async function asyncTimeoutPrecise (fct, amount) {
  const asyncFct = asyncWrap(fct);

  const [timoutPromise, cancelTimeout] = asyncSleepPreciseCancellable(amount);

  const basePromise = asyncFct();

  const deferred = new Deferred();

  basePromise.then(deferred.resolve, deferred.reject);

  timoutPromise.then(() => {
    deferred.reject(new TimeoutError());
  }, () => {
    // ignore CancelledError
  });

  return deferred.promise.finally(cancelTimeout)
}

exports.CancelledError = CancelledError;
exports.Deferred = Deferred;
exports.Delayer = Delayer;
exports.Queue = Queue;
exports.Scheduler = Scheduler;
exports.TimeoutError = TimeoutError;
exports.asyncDelay = asyncDelay;
exports.asyncDelayCancellable = asyncDelayCancellable;
exports.asyncEvery = asyncEvery;
exports.asyncFilter = asyncFilter;
exports.asyncFind = asyncFind;
exports.asyncFindIndex = asyncFindIndex;
exports.asyncForEach = asyncForEach;
exports.asyncGeneratorFilter = asyncGeneratorFilter;
exports.asyncGeneratorMap = asyncGeneratorMap;
exports.asyncIterableToArray = asyncIterableToArray;
exports.asyncIterableWrap = asyncIterableWrap;
exports.asyncMap = asyncMap;
exports.asyncReduce = asyncReduce;
exports.asyncReduceRight = asyncReduceRight;
exports.asyncRoot = asyncRoot;
exports.asyncSleep = asyncSleep;
exports.asyncSleepCancellable = asyncSleepCancellable;
exports.asyncSleepPrecise = asyncSleepPrecise;
exports.asyncSleepPreciseCancellable = asyncSleepPreciseCancellable;
exports.asyncSome = asyncSome;
exports.asyncTimeout = asyncTimeout;
exports.asyncTimeoutPrecise = asyncTimeoutPrecise;
exports.asyncWrap = asyncWrap;
exports.queueMicrotask = queueMicrotask;
exports.reflectAsyncStatus = reflectAsyncStatus;
