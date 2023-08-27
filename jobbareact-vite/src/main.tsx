import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { BrowserRouter } from "react-router-dom";
// import { PublicClientApplication } from '@azure/msal-browser';
// import { MsalProvider } from '@azure/msal-react';
// import { msalConfig } from './authConfig';

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
// const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <MsalProvider instance={msalInstance}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </MsalProvider> */}
  </React.StrictMode>,
);