import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card'; in 11.removed
// import CardList from './CardList'; in 12.removed
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import { robots } from './robots'; in 12.1m

ReactDOM.render(<App/>, document.getElementById('root'));
		// <CardList robots = { robots }/> 12.1m
	// , document.getElementById('root'));  -- samo go premestuvam

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
