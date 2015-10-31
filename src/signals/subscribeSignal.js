import subscribe from '../actions/subscribe.js';
import update from '../actions/update.js';

export default function subscribeSignal(controller) {
  return [
    [
        subscribe(controller)
    ],
    update
  ];
};
