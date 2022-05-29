import React from 'react';
import ReactDOM from 'react-dom';

import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  
  <SpeechProvider appId="9b9f12a8-3215-41f6-989e-580e31006199" language="en-US">
    <Provider>
      <App />
    </Provider>
    </SpeechProvider>,
  document.getElementById('root'),
);