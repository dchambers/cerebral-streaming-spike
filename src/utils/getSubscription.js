const subscriptions = {};

class Subscription {
	constructor(identifier, subscriber, unsubscriber) {
		this.count = 0;
		this.identifier = identifier;
		this.subscriber = subscriber;
		this.unsubscriber = unsubscriber;
	}

	increment() {
		if(this.count++ === 0) {
			return new Promise(function(resolve, reject) {
				this.subscriber(resolve, reject);
			}.bind(this));
		}
		else {
			return Promise.resolve();
		}
	}

	decrement() {
		if(--this.count === 0) {
			return new Promise(function(resolve, reject) {
				this.unsubscriber(resolve, reject);
			}.bind(this));
			delete subscriptions[this.identifier];
		}
		else {
			return Promise.resolve();
		}
	}
}

function getSubscription(identifier, subscriber, unsubscriber) {
	if(!subscriptions[identifier]) {
		subscriptions[identifier] = new Subscription(identifier, subscriber, unsubscriber);
	}

	return subscriptions[identifier];
}

export default getSubscription;
