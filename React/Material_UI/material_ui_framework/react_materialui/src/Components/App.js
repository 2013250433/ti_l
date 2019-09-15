import React, {Component, Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Header, Footer} from './Layouts';
import Exercise from './Exercise';

export default class extends Component {
	render(){
		return(
			<Fragment>
				<Header />
				<Exercise />
				<Footer />
			</Fragment>
		)
	}
}

/*
//instead of
function App(){
	
}
export default App;
*/