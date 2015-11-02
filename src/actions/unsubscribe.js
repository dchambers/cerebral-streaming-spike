import {getSubscription} from '../utils/subscriber.js';

export default function unsubscribe(input, state, output, services) {
	const subscription = getSubscription(input.topic);
	state.unset(input.topic + '.subscribers.' + input.instance);

	if(subscription.removeSubscriber()) {
		state.unset(input.topic + '.bid');
		state.unset(input.topic + '.ask');
	}
}
