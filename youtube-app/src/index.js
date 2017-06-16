import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const API_KEY = '';
// Components are javascript that produce HTML
// const we are saying that this is the final value of this variable. Its never going to change never going to reassign this value


ReactDOM.render(
        <App />
        // Change to JSX to render to the DOM
    , document.getElementById('root'));
