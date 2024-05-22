import React from 'react';
import ReactDOM from 'react-dom/client';
 import App from './App';
 import { Provider } from 'react-redux';
<<<<<<< HEAD
=======
 import {BrowserRouter} from 'react-router-dom'
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
 import store from './Store/app/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

