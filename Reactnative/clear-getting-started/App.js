import React from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {t: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{height:20}}
          placeholder="Type here"
          onChangeText={(t)=> this.setState({t})}
        />
        <Greeting name="Berry"/>
        <Greeting name="Elly"/>
        <Greeting name="John"/> 
        <Blink text="blinkier"></Blink>
      </View>
    );
  }
}

class Greeting extends React.Component {
  render(){
    return (
      <View>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends React.Component {
  constructor(props){
    super(props);
    this.state = {isShowingText: true};
    
    setInterval(()=> {
      this.setState(previousState => (
        {isShowingText : !previousState.isShowingText}
      ))
    },1000);
  }

  render(){
    if(!this.state.isShowingText){
      return null;
    } else {
      return(
      <Text style={[styles.red, styles.big]}>{this.props.text}</Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
  },
  big: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
