import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './components/App';
import { AuthContext } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AuthContext.Provider
          value={{
            username: 'user1',
            password: 'pass123456789test',
          }}
        >
          <App />
        </AuthContext.Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
