import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  name: ['acme.name'],
  bid: ['acme.bid'],
  ask: ['acme.ask']
})
class StreamingApp extends React.Component {
  render() {
    let button;
    if(this.props.bid == '-') {
      button = <button onClick={() => this.props.signals.subscribe({topic:'acme'})}>Subscribe</button>;
    }
    else {
      button = <button onClick={() => this.props.signals.unsubscribe({topic:'acme'})}>Unsubscribe</button>;
    }

    return (
      <div>
        <div>{this.props.name}: <span className="bid">{this.props.bid}</span> / <span className="ask">{this.props.ask}</span></div>
        {button}
      </div>
    );
  }
}

export default StreamingApp;
