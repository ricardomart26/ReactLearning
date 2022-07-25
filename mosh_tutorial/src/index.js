import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/Counters';
// import Background from './components/background_img';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Counters />
    {/* <Background /> */}

  </React.StrictMode>
);
