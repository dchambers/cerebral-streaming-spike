const subscriptions = {};

class Subscription {
	constructor(identifier, output, setup) {
		this._count = 1;
		this._identifier = identifier;
		this._output = output;
		this._setup = setup;

		this._logSubscriberInfo();

		setup(this);
		this.onCreate();
	}

	addSubscriber(output) {
		this._count++;
		output(this._lastData);
		this._logSubscriberInfo();
	}

	removeSubscriber() {
		if(--this._count === 0) {
			this.onDestroy();
			delete subscriptions[this._identifier];
			this._logSubscriberInfo();
			return true;
		}
		else {
			this._logSubscriberInfo();
			return false;
		}
	}

	output(data) {
		this._lastData = data;
		if(this._output) {
			this._output(data);
			delete this._output;
		}
		else {
			this.onEmit(data);
		}
	}

	_logSubscriberInfo() {
		console.log(this._identifier + ' subscribers: ' + this._count);
	}
}

export function getSubscription(identifier, output, setup) {
	return subscriptions[identifier];
}

export function createSubscription(identifier, output, setup) {
	if(!subscriptions[identifier]) {
		subscriptions[identifier] = new Subscription(identifier, output, setup);
	}
	else {
		subscriptions[identifier].addSubscriber(output);
	}
}
