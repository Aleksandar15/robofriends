// import React from 'react'; in 12.10.5edited
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';  removed 14.10.0
import Scroll from '../components/Scroll';
// import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// const state = {
// 	robots: robots,
// 	searchfield: ''
// }       12.12.12

// const App = () => { in 12.10.4removed
	class App extends Component {
		constructor () {
			// here we can DECLARE the state  -- and can change
			super()
			this.state = {
				robots: [],
				searchfield: ''
			}
			// console.log('1/constructor');   for testing 14.9.0
		}
		// 			<CardList robots = { robots }/> in 12. 13.2 changes
		// bcuz robots  =>  this.state.robots  //which is REACT component
	// aa and this.state.ROBOTS our state(robots) is passed down as PROPS
	// as PROPS inside CardList, even tho in APP.js is a state

	// this will be after 14.6.3
	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(reponse=>	reponse.json())
			.then(users =>this.setState({ robots: users }));
		// console.log('check');  14.8
		// this.setState({ robots: robots });   14.11.11 bastard removed
			// console.log('2/componentDidMount'); for testing 14.9.0
	}

	onSearchChange = (event) => {
		// here we paste the API i guess  14.10.1
		this.setState({ searchfield: event.target.value })
		// console.log(event.target.value); 12.22.22 he removed this
	}
		render() {
		const { robots, searchfield } = this.state;
		const filteredRbots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			})
				// console.log('3/render');        for testing 14.9.0
			// if (this.state.robots.length === 0) {
// 16. 5.5 shortening the code, by const,
// 	I can shorten up this.state in If(robots.length)
 	// Ooh I am so smart, I already cut of   If(robots.length) = 0
 		// so the only modification is IF(!robots.length) =/ 0
			// 	return <h1>Loading</h1>
			// }	else { }  - inside is the return() bellow/ 14.14.41
	// also .then(users =>{}) - has to be EMPTY inside componentDidMount

		// return !robots.length ?
		// 	<h1>Loading</h1> : (   - smart if else statement,
				// 19.React 16. 7.0

			return !robots.length ?
			<h1>Loading</h1> : (
		<div className ='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>

			<CardList robots = { filteredRbots }/>

			</Scroll>
		</div>
	);
		}
}

export default App;