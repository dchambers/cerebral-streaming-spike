export default function update(input, state, output, services) {
  if(input.instance) {
    state.set(input.topic + '.subscribers.' + input.instance, true);
  }

  for(var key in input.data) {
  	state.set(input.topic + '.' + key, input.data[key]);
  }

  state.unset(input.topic + '.loading');
}
