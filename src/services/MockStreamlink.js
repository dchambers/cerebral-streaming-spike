function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default class MockStreamlink {
	subscribe(topic, callback) {
		let midPrice = (topic == 'acme') ? 57.32 : 21.48;

		return setInterval(function() {
			midPrice = midPrice + getRandomArbitrary(-0.01, 0.01);
			callback({
				bid: midPrice - 0.01,
				ask: midPrice + 0.01
			});
		}, 200);
	}

	unsubscribe(subscriptionId) {
		clearInterval(subscriptionId);
	}
}
