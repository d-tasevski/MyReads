export const isEmpty = obj =>
	obj === undefined ||
	obj === null ||
	(typeof obj === 'object' && Object.keys(obj).length === 0) ||
	(typeof obj === 'string' && obj.trim().length === 0);

export const throttle = (func, limit) => {
	let lastFunc;
	let lastRan;
	return function() {
		const context = this;
		const args = arguments;
		if (!lastRan) {
			func.apply(context, args);
			lastRan = Date.now();
		} else {
			clearTimeout(lastFunc);
			lastFunc = setTimeout(function() {
				if (Date.now() - lastRan >= limit) {
					func.apply(context, args);
					lastRan = Date.now();
				}
			}, limit - (Date.now() - lastRan));
		}
	};
};
