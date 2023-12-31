import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/GlobalStyle'
import { GlobalProvider } from './context/Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyle />
      <App />
    </GlobalProvider>
</React.StrictMode>
);

