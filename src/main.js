import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
import "@/assets/scss/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(<App />, document.querySelector('#app'));

