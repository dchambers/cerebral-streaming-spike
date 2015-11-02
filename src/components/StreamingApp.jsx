import React from 'react';

import Ticker from './Ticker.jsx';

class StreamingApp extends React.Component {
  render() {
    return (
      <div>
        <Ticker instrument="acme"/>
        <Ticker instrument="xeta"/>
      </div>
    );
  }
}

export default StreamingApp;
