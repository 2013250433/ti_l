import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, Button, ScrollView, Image, Dimensions } from 'react-native';
import CardView from './components/CardView';
import Header from './components/Header';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class Home extends React.Component {

  constructor(props){
    super(props);
    console.log(Dimensions.get('window').width)
  }

  componentDidMount(){
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Image
          style={{width: Dimensions.get('window').width}}
          source={require('./src/main01.jpg')}
          resizeMode='stretch'
          />
          <TouchableHighlight onPress={() => this.props.navigation.navigate('News')}>
            <Image
            style={{width: Dimensions.get('window').width}}
            source={require('./src/main02.jpg')}
            resizeMode='stretch'
            />
          </TouchableHighlight>
          <Image
          style={{width: Dimensions.get('window').width}}
          source={require('./src/main03.jpg')}
          resizeMode='stretch'
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

/*
<Header style={styles.header}></Header>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('News')}
        />
        <FlatList styles={styles.cardContainer}
          data={[
            {key: 'title aaaaaaaaaaaaaaassssss', message: 'message'},
            {key: 'title1', message: 'message'},
            {key: 'title2', message: 'message'},
            {key: 'title3', message: 'message'},
            {key: 'title4', message: 'message'},
            {key: 'title5', message: 'message'},
            {key: 'title6', message: 'message'},
            {key: 'title7', message: 'message'},
            {key: 'title8', message: 'message'},
          ]}
          renderItem={({item}) => (<CardView title={item.key} message={item.message}/>)}
        />
*/

class News extends React.Component {
  render(){
    return(
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}>
      <Image
      style={{width: Dimensions.get('window').width}}
      source={require('./src/send01-06.jpg')}
      resizeMode='stretch'
      />
    </ScrollView>
    );

  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  }
});

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  News: {screen: News},
},{
  initialRouteName: "Home"
}
);

const App = createAppContainer(MainNavigator);

export default App;