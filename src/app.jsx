import controller from './controller.js';
import {Container} from 'cerebral-react';
import React from 'react';
import ReactDOM from 'react-dom';

import StreamingApp from './components/StreamingApp.jsx';

ReactDOM.render(
  <Container controller={controller}>
    <StreamingApp/>
  </Container>
, document.querySelector('#streaming-app'));
