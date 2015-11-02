import React from 'react';
import {HOC} from 'cerebral-react';

import formatPrice from '../utils/formatPrice.js';

class Ticker extends React.Component {
  render() {
    let prices, button;
    if(!this.props.subscribed) {
			prices = <span>- / -</span>;
      button = <button className="btn btn-sm btn-success" disabled={this.props.loading}
				onClick={() => this.props.signals.subscribe({topic:this.props.instrument, instance:this.props.instance})}>Subscribe</button>;
    }
    else {
			prices = <span><span className="bid">{formatPrice(this.props.bid)}</span> / <span className="ask">{formatPrice(this.props.ask)}</span></span>;
      button = <button className="btn btn-sm btn-danger" disabled={this.props.loading}
				onClick={() => this.props.signals.unsubscribe({topic:this.props.instrument, instance:this.props.instance})}>Unsubscribe</button>;
    }

    return (
			<div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.name} {button}</h3>
        </div>
        <div className="panel-body">
					{prices}
        </div>
      </div>
    );
  }
}
Ticker = HOC(Ticker, function(props) {
	return {
	  name: [props.instrument + '.name'],
	  bid: [props.instrument + '.bid'],
	  ask: [props.instrument + '.ask'],
    loading: [props.instrument + '.loading'],
		subscribed: [props.instrument + '.subscribers.' + props.instance],
	};
});

export default Ticker;
