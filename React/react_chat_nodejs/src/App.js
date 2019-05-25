import React from 'react';
import logo from './logo.svg';
import './style.css';

const DUMMY_DATA = [
	{
		senderId: "John",
		text: "Hi, Tim",
	},
	{
		senderId: "Tim",
		text: "Hi, John"
	}
]

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			messages: DUMMY_DATA
		}
	}
	
	render(){
		return(
			<div className="app">
				<MessageList messages={this.state.messages}/>
			</div>
		)
	}
}

class MessageList extends React.Component {
	render(){
		return (
			<ul className="message-list">
			{this.props.messages.map(message => {
				return (
					<li key={message.id}>
						<div>
						{message.senderId}
						</div>
						<div>
						{message.text}
						</div>
					</li>
				)
			})}
			</ul>
		)
	}
}
/*
function App() {
  return (
    <div className="App">
		<Title />
		<MessageList />
		<SendMessageForm />
    </div>
  );
}
*/
export default App;
