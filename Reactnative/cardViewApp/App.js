import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import CardView from './components/CardView';
import Header from './components/Header';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(){
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header style={styles.header}></Header>
        <ScrollView style={styles.cardContainer}>
          {this.state.data.map((data, index) => (
            <CardView
              data={data}
              key={index}
            />
          ))}
        </ScrollView>
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
