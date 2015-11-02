import {getSubscription} from '../utils/subscriber.js';

export default function unsubscribe(input, state, output, services) {
	const subscription = getSubscription(input.topic);
	subscription.removeSubscriber();

	state.set(input.topic + '.subscribers.' + input.instance, false);
	state.set(input.topic + '.bid', null);
	state.set(input.topic + '.ask', null);
}
