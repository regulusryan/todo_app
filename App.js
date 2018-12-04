import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          rounded
          small
          title={';)'}
        />
        <Text style={styles.bigblue}>Open up App.js to start working on your app!</Text>
        <Button
          title={'Hello'}
          onPress={() => { console.log('happy'); }}
          color="yellow"
        />
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
