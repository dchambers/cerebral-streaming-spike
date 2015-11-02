import {createSubscription} from '../utils/subscriber.js';

export default function subscribe(controller) {
	return function subscribe(input, state, output, services) {
		createSubscription(input.topic, output, function(subscription) {
			let subscriptionId;

			subscription.onCreate = function() {
				subscriptionId = services.streamlink.subscribe(input.topic, function(data) {
					subscription.output({data: data});
				});
			};

			subscription.onEmit = function(data) {
				data.topic = input.topic;
				controller.signals.priceUpdate(data);
			};

			subscription.onDestroy = function() {
				services.streamlink.unsubscribe(subscriptionId);
			};
		});
	};
};
