import React from 'react';
import {HOC} from 'cerebral-react';

import formatPrice from '../utils/formatPrice.js';

class Ticker extends React.Component {
  render() {
    let prices, button;
    if(!this.props.subscribed) {
			prices = <span/>;
      button = <button onClick={() => this.props.signals.subscribe({topic:this.props.instrument, instance:this.props.instance})}>Subscribe</button>;
    }
    else {
			prices = <span><span className="bid">{formatPrice(this.props.bid)}</span> / <span className="ask">{formatPrice(this.props.ask)}</span></span>;
      button = <button onClick={() => this.props.signals.unsubscribe({topic:this.props.instrument, instance:this.props.instance})}>Unsubscribe</button>;
    }

    return (
      <div>
        <div>{this.props.name}: {prices}</div>
        {button}
      </div>
    );
  }
}
Ticker = HOC(Ticker, function(props) {
	return {
	  name: [props.instrument + '.name'],
	  bid: [props.instrument + '.bid'],
	  ask: [props.instrument + '.ask'],
		subscribed: [props.instrument + '.subscribers.' + props.instance],
	};
});

export default Ticker;
