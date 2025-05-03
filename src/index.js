import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from "react-router";
import reportWebVitals from './reportWebVitals';
import 'nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
      {/* Persistgate de null khi kh nao duoc data tu store cua redux */}
    <PersistGate loading={null} persistor={persistor}> 
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
