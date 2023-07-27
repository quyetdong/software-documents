import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// const { PORT } = process.env;
// console.log(`fron port ${PORT}`);
// console.log(`fron env ${JSON.stringify(process.env, null, 2)}`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

