import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

class AlbumShare extends React.Component {

  state = {
  }

  constructor(props, context) {
      super(props, context);
  }

  render() {
      return (
    <View style={styles.container}>
    <Text>This is to share</Text>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default AlbumShare;
