import React from 'react';

import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Font } from 'exponent';

import AlbumPicker from './Screens/AlbumPicker';

class AppContainer extends React.Component {

  state = {
      assetsLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
        awesome: 'https://github.com/FortAwesome/Font-Awesome/raw/master/fonts/fontawesome-webfont.ttf',
    });

    this.setState({assetsLoaded: true});
  }

  render() {
      if (!this.state.assetsLoaded) {
        return <View />;
      }

      return (
    <View style={styles.container}>
      <AlbumPicker />
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'ios' ? 24 : 24,
  },
});

AppRegistry.registerComponent('main', () => AppContainer);
