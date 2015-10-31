import {getSubscription} from '../utils/subscriber.js';

export default function unsubscribe(input, state, output, services) {
	const subscription = getSubscription(input.topic);

	return subscription.removeSubscriber();
}
