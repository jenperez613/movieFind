import React from 'react';
import ReactDOMCLient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')
const root = ReactDOMCLient.createRoot(container)
root.render(<App tab="profile"/>)

