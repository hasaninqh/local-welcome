import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';	
import './index.css';	
import App from './App';	
//import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
	
 ReactDOM.render(<App />, document.getElementById('root'));	
 //ReactDOM.render(<AppRouter />, document.getElementById('root'));
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
>>>>>>> raj/add_reactstrap_support

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
