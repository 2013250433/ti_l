import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight, AlertIOS,} from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyArkT5z136deZBSAtACTe1uk4Ke-XOZmCY",
  authDomain: "fir-react-native-database.firebaseapp.com",
  databaseURL: "https://fir-react-native-database.firebaseio.com",
  projectId: "fir-react-native-database",
  storageBucket: "fir-react-native-database.appspot.com",
  messagingSenderId: "1071836387909"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource(
        {rowHasChanged: (row1, row2) => row1 !== row2,}
      )
    };
    this.itemsRef = firebaseApp.database().ref();
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  /*
  this.listenForItems(this.itemsRef);
  this.setState({
    dataSource: this.state.dataSource.cloneWithRows([{title:'pizza'}])
  })
  */

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap)=>{
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      })

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    })
  }
  _renderItem(item){
    const onPress = () => {
      AlertIOS.prompt(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text)=>this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text)=>console.log('Cancel')}
        ],
        'default'
      );
    }
    return(
      <ListItem item={item} onPress={onPress} />
    );
  }

  _addItem(){
    AlertIOS.prompt(
      'Add new Item',
      null,
      [
        {
          text:'Add',
          onPress: (text)=> {
            this.itemsRef.push({title: text})
          }
        }
      ],
      'plain-text'
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery List"/>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)}/>
        <ActionButton title="Add" onPress={this._addItem.bind(this)} />
      </View>
    );
  }
}

class ActionButton extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onPress}>
          <Text>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class ListItem extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View>
          <Text>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

class StatusBar extends React.Component{
  render(){
    return (
      <View>
        <View />
        <View>
          <Text>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
