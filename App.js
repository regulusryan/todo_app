import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/header';
import { Avatar } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Todo from './screens/Todo';

class App extends React.Component {
  render() {
    return (
      // Container.
      <View style={styles.container}>
        <Header textIwant={'helllllo'} />
        <Header textIwant={'goodbye'} />
        {/* <Header textIwant={'Hello World'} /> */}
        <Avatar
          rounded
          small
          title={';)'}
        />
        <Text style={styles.bigblue}>Open up App.js to start working on your app!</Text>
        <Button
          title="Go to Todo"
          onPress={() => this.props.navigation.navigate('TodoScreen')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  TodoScreen: Todo,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

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
