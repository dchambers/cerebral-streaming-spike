## Introduction

This repository shows how streaming can be used with [Cerebral](christianalfoni.com/cerebral/) and [Baobab](https://github.com/Yomguithereal/baobab).

A subscription signal is created that _outputs_ the first packet of data it receives, causing the signal to complete at that point. Subsequent data updates for the subscription then emit _update_ signals, so that the view updates when there's new data available. If a subscription already exists when a subscription signal is being processed, the last data packet received for that subscription is immediately _outputted_, removing the need for an additional round-trip to the server.

The re-usable parts of this solution have been placed within the [subscriber](https://github.com/dchambers/cerebral-streaming-spike/blob/master/src/utils/subscriber.js) module (this could potentially be packaged into its own NPM library), allowing custom subscriber actions to be written with very few lines of code, for example:

~~~js
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
~~~

In production, care would need to be taken to prevent Cerebral from saving every signal, eventually causing the browser window to crash. Ideally, Cerebral would allow the last _X_ actions to be saved only, since this would still allow time-travel and easier debugging of recent events, but without the otherwise inevitable window lock-up.

## Installing & Using

To use type `npm install` to install, then `npm start` to run the server. You will need to install the [Cerebral Debugger](https://chrome.google.com/webstore/detail/cerebral-debugger/ddefoknoniaeoikpgneklcbjlipfedbb?hl=en) to make full sense of what's going on. The developer experience is currently sub-optimal since there's presently no sourcemap or hot-reloading support.
