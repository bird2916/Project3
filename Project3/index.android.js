import React, {Component} from 'react';
import {Text, AppRegistry} from 'react-native';
import {Container, StyleProvider} from 'native-base';
import getTheme from './src/themes/components';
import nineLessons from './src/themes/variables/nineLessons';

import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';

export default class MyProject extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(nineLessons)}>
      <Container>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Container>
      </StyleProvider >
    );
  }
}


AppRegistry.registerComponent('Project3', () => Project3);