import React from 'react';
import {HOC} from 'cerebral-react';

import formatPrice from '../utils/formatPrice.js';

class Ticker extends React.Component {
  render() {
    let button;
    if(!this.props.bid) {
      button = <button onClick={() => this.props.signals.subscribe({topic:this.props.instrument})}>Subscribe</button>;
    }
    else {
      button = <button onClick={() => this.props.signals.unsubscribe({topic:this.props.instrument})}>Unsubscribe</button>;
    }

    return (
      <div>
        <div>{this.props.name}: <span className="bid">{formatPrice(this.props.bid)}</span> / <span className="ask">{formatPrice(this.props.ask)}</span></div>
        {button}
      </div>
    );
  }
}
Ticker = HOC(Ticker, function(props) {
	return {
	  name: [props.instrument + '.name'],
	  bid: [props.instrument + '.bid'],
	  ask: [props.instrument + '.ask']
	};
});

export default Ticker;
