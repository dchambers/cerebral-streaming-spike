export default function loading(input, state, output, services) {
	state.set(input.topic + '.loading', true);
}
