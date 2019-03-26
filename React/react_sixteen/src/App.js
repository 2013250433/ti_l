//import React, { Component, Fragment } from 'react';
import React, { Component } from 'react';

/*
import {createPortal} from "react-dom";

const BoundaryHoc = ProtectedComponent => class Boundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch = () => {
    this.setState({
      hasError: true
    });
  }

  render() {
    const {hasError} = this.state;
    if(hasError){
      return <ErrorFallback/>
    } else {
      return <ProtectedComponent/>
    }
  }
} 
class ErrorMaker extends Component{
  state = {
    friends: ["jisu", "flynn", "dall", "kneeprayer"]
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      })
    },2000)
  }
  render(){
    const {friends} = this.state;
    return friends.map(friend => ` ${friend}`)
  }
}

const PErrorMaker = BoundaryHoc(ErrorMaker)

class Portals extends Component{
  render(){
    return createPortal(
      <Message />,
      document.getElementById("touchme")
    )
  }
}
const PPortals = BoundaryHoc(Portals)

const Message = () => "Just touched it!";

class ReturnTypes extends Component{
  render(){
    return "hello";
  }
}

/*
    <Fragment></Fragment> -> <></>
    
    <Fragment>
    <header></header>,
    <div></div>,
    <footer></footer>
    </Fragment>

    [<header key={1}></header>,
    <div key={2}></div>,
    <footer key={3}></footer>]

    <span>
    <header></header>,
    <div></div>,
    <footer></footer>
    </span>
*/


//const ErrorFallback = () => " Sorry something went wrong";

const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
  const {pizzas} = state;
  
  if(pizzas < MAX_PIZZAS){
    return {
      pizzas: pizzas + 1
    }
  } else {
    return null;
  }
}
class Controlled extends Component {
  state = {
    pizzas:0
  }
  render (){
    const { pizzas } = this.state;
    return <button onClick={this._handleClick}>{`I have eaten ${pizzas} ${
      pizzas === 1 ? "pizza" : "pizzas"
    }`}</button>
  }

  _handleClick = () => {
    this.setState(eatPizza);
    //this.setState(pizzas:null)
  }
}
class App extends Component {
  /*
  state = {
    hasError: false
  };

  componentDidCatch = (error, info) => {
    console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
    this.setState({
      hasError : true
    });
  }
  

    const {hasError} = this.state;
        {hasError ? <ErrorFallback /> : <ErrorMaker/>}
  */

  render() {
    return ( <Controlled/>
    );
    
  }
}

export default App;
// export default BoundaryHoc(App);
