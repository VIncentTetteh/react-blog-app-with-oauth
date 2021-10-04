import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './configs/reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-qyk5d80j.us.auth0.com"
    clientId="ZuPAQlsU7KgDQtBQCN1oNRY9DL1Hwobn"
    redirectUri={window.location.origin}
  > 
      <App />
      
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
