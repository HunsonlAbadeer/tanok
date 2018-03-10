export function actionIs(actionName) {
  return function () {
      return this.filter(({ action, streamName }) => action === `${streamName}.${actionName}`);
  };
}

export function parentIs(awaitedName) {
  console.error('This function is deprecated, use `nameIs` instead')
  return function () {
    return this.filter(({streamName}) => streamName === awaitedName);
  };
}

export function nameIs(awaitedName) {
  return function () {
    return this.filter(({streamName}) => streamName === awaitedName);
  };
}

export function filter(cond) {
  return function () {
    return this.filter(cond);
  };
}

export function debounce(time) {
  return function () {
    return this.debounce(time);
  };
}

export function throttle(time) {
  return function () {
    return this.throttle(time);
  };
}
