import React from 'react';

import Ticker from './Ticker.jsx';

class StreamingApp extends React.Component {
  render() {
    return (
      <div>
        <Ticker instrument="acme" instance="primary"/>
        <Ticker instrument="acme" instance="secondary"/>
        <Ticker instrument="xeta" instance="primary"/>
        <Ticker instrument="xeta" instance="secondary"/>
      </div>
    );
  }
}

export default StreamingApp;
