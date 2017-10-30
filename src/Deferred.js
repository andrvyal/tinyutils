const PRIVATE = new WeakMap();

export default class Deferred {
  constructor() {
    let hidden = {};
    hidden.promise = new Promise((resolve, reject) => {
      hidden.resolve = resolve;
      hidden.reject = reject;
    });

    PRIVATE.set(this, hidden);
  }

  get promise() {
    let {promise} = PRIVATE.get(this);

    return promise;
  }

  reject() {
    let {reject} = PRIVATE.get(this);

    reject();
  }

  resolve() {
    let {resolve} = PRIVATE.get(this);

    resolve();
  }
}
