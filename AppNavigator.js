import React from 'react';

import {
  Navigator,
  StyleSheet,
} from 'react-native';

import AlbumShare from './Screens/AlbumShare';
import AlbumList from './Screens/AlbumList';

const ROUTES = {
  'share': AlbumShare,
  'albums': AlbumList,
};

class AppNavigator extends React.Component {

  renderScene(route, nav) {
    console.log('renderScene: ' + route);
    var Component = ROUTES[route.name];
    return (
        <Component route={route} nav={nav} />
    );
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromRight;
  }

  render() {
      return (
    <Navigator
        style={styles.container}
        initialRoute={{name: 'albums'}}
        configureScene={this.configureScene}
        renderScene={this.renderScene.bind(this)}
    />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNavigator;
