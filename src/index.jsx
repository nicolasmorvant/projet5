import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router' 
import './styles/Index/Index.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
)


reportWebVitals();
