import React from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';

const MasonryLayout = props => {
	const columnWrapper = {};
	const result = [];
	
	//create columns
	for(let i=0; i<props.columns; i++){
		columnWrapper[`column${i}`] = [];
	}
	
	//divide the children into columns
	for(let i=0; i<props.children.length; i++){
		const columnIndex = i % props.columns;
		columnWrapper[`column${columnIndex}`].push(
			<div style={{marginBottom: `${props.gap}px`}}>
				{props.children[i]}
			</div>
		);
	}
	
	for(let i=0; i<props.columns;i++){
		result.push(
			<div
				style={{
					marginLeft: `${i > 0 ? props.gap : 0}px`,
					flex: 1,
				}}>
				{columnWrapper[`column${i}`]}
			</div>
		);
	}
	
	return(
		<div style={{display:'flex'}}>
			{result}
		</div>
	);
}

MasonryLayout.propTypes = {
	columns: PropTypes.number.isRequired,
	gap: PropTypes.number.isRequired,
	children: PropTypes.arrayOf(PropTypes.element),
}

MasonryLayout.defaultProps = {
	columns: 2,
	gap: 20,
}

function App() {
return(	
  <MasonryLayout columns={3} gap={25}>
	{
	[...Array(12).keys()].map(key=>{
		const height = 200 + Math.ceil(Math.random() * 300);
		
		return(
			<div style={{height: `${height}px`}} />
		)
	})
	}
  </MasonryLayout>
 );
}

export default App;
