import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './config/axios';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider
      toastOptions={{
        defaultOptions: {
          isClosable: true,
          position: 'top-right',
        },
      }}
    >
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
