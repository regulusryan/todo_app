import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/header';
import { Avatar } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Todo from './screens/Todo';
import Flexbox from './screens/Flexbox';


class App extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      // Container.
      <View style={styles.container}>
        <Avatar
          rounded
          large
          title={';)'}
        />
        <View style={{ padding: 20 }} />
        <Header textIwant={'helllllo'} />
        <View style={{ padding: 20 }} />
        <Header textIwant={'goodbye'} />
        <View style={{ padding: 20 }} />

        <Button
          title="Go to Todo"
          onPress={() => this.props.navigation.navigate('TodoScreen')}
        />
        <View style={{ padding: 20 }} />
        <Button
          title="Go to Flexbox"
          onPress={() => this.props.navigation.navigate('FlexboxScreen')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  TodoScreen: Todo,
  FlexboxScreen: Flexbox
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
