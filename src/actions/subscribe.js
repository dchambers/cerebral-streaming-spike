import getSubscription from '../utils/getSubscription.js';

export default function subscribe(input, state, output, services) {
	let streamlinkSubscription;
	const subscription = getSubscription(input.topic,
		function(resolve, reject) {
			streamlinkSubscription = services.streamlink.subscribe(input.topic, function(data) {
				for(var key in data) {
					state.set(input.topic + '.' + key, data[key]);
				}
				resolve();
			});
		},
		function(resolve, reject) {
			streamlinkSubscription.close();
			resolve();
		}
	);

	return subscription.increment();
}
