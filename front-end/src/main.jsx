import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './store/store.js';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="845094381275-apbbb0qac239aa8c9f2kjvu08457dnq0.apps.googleusercontent.com">
    <Provider store={store}>
    <StrictMode>
        <App />
    </StrictMode>
    </Provider>
  </GoogleOAuthProvider>,
)
