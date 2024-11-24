
// Team Members:
// Samaher Saud - 2108986
// Hebah Alahmari - 2105304
// Reem Alhussaini - 2105023
// Lama Althabiti - 2112562

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure the global styles are applied
import Counter from './components/Counter'; // Import the Counter component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App"> 
      <Counter />
    </div>
  </React.StrictMode>
);
