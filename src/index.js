import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
// css stylesheets can be created for each component
// place them in the src/style directory, and import them like this:
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<App />, document.getElementById('root'));
