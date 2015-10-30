import getSubscription from '../utils/getSubscription.js';

export default function unsubscribe(input, state, output, services) {
	const subscription = getSubscription(input.topic);

	return subscription.decrement();
}
