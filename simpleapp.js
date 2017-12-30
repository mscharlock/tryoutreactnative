import React, { Component } from 'react'; 
import { AppRegistry, Text } from 'react-native';

export default class Hellooo extends Component {
  render() {
    return (
      <Text>Helloooooo</Text>
      <Text>Adding more text</Text>
    );
  }
}

AppRegistry.registerComponent('HelloApp', () => HelloWorldApp);
