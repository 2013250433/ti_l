const DUMMY_DATA = [
	{
		senderId: "Tim",
		text: "마카롱 주문할께요"
	},
	{
		senderId: "John",
		text: "0.01eth 입니다."
	}
]

class App extends React.Component{
	
	constructor() {
		super()
		this.state = {
			messages: DUMMY_DATA
		}
	}
	
	render(){
		return(
			<div className="app">
				<Title />
				<MessageList messages={this.state.messages}/>
				<SendMessageForm />
			</div>
		)
	}
}

class MessageList extends React.Component{
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