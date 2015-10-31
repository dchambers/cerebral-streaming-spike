export default function update(input, state, output, services) {
  for(var key in input.data) {
  	state.set(input.topic + '.' + key, input.data[key]);
  }
}
