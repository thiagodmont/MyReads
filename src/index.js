import React from 'react'
import ReactDOM from 'react-dom'
import './global/styles.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './global/registerServiceWorker'

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
