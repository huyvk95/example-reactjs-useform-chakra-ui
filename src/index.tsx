import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';

import { App } from './App';
import store from './store';
import { theme } from './styles';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
