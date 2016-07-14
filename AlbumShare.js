import React from 'react';

import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  View,
} from 'react-native';

import AlbumPicker from './Screens/AlbumPicker';

class AlbumShare extends React.Component {

  state = {
  }

  constructor(props, context) {
      super(props, context);
  }

  render() {
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

export default AlbumShare;
