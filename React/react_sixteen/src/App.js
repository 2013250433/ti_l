import React, { Component, Fragment } from 'react';


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

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
      </Fragment>
    );
    
  }
}

export default App;
