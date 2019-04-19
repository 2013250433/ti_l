import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text } from 'react-native';
import CardView from './components/CardView';
import Header from './components/Header';

export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header style={styles.header}></Header>
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
      </SafeAreaView>
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
