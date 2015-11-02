import loading from '../actions/loading.js';
import subscribe from '../actions/subscribe.js';
import update from '../actions/update.js';

export default function subscribeSignal(controller) {
  return [
    loading,
    [
        subscribe(controller)
    ],
    update
  ];
};
