import Controller from 'cerebral';
import Model from 'cerebral-baobab';

import subscribeSignal from './signals/subscribeSignal.js';
import priceUpdateSignal from './signals/priceUpdateSignal.js';
import unsubscribeSignal from './signals/unsubscribeSignal.js';
import MockStreamlink from './services/MockStreamlink.js';

const model = Model({
	'acme.name': 'Acme Corp',
  'acme.bid': '-',
	'acme.ask': '-'
});

const services = {
  streamlink: new MockStreamlink()
};

const controller = Controller(model, services);
controller.signal('subscribe', subscribeSignal(controller));
controller.signal('priceUpdate', priceUpdateSignal);
controller.signal('unsubscribe', unsubscribeSignal);

export default controller;
