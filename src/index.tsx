import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/fonts/Exo2.0/Exo2.0-Thin.otf';
import './index.css';
import './assets/fonts/TrebuchetMS/stylesheet.css'
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <div className="main">
        <App />
    </div>
);
