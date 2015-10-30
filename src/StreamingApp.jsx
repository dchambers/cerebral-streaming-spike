import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  name: ['acme.name'],
  bid: ['acme.bid'],
  ask: ['acme.ask']
})
class StreamingApp extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.name}: <span className="bid">{this.props.bid}</span> / <span className="ask">{this.props.ask}</span></div>
        <button onClick={() => this.props.signals.subscribe({topic:'acme'})}>Subscribe</button>
      </div>
    );
  }
}

export default StreamingApp;
