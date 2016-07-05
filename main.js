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

import { Font } from 'exponent';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class AppContainer extends React.Component {

  state = {
      assetsLoaded: false,
      dataSource: ds.cloneWithRows([
           "First Album",
           "Second Album",
           "Third Album",
       ]),
  }


  constructor(props, context) {
      super(props, context);
  }

  render() {
      return (
    <View style={styles.container}>
    <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>} />
    <TouchableHighlight
onPress={this.onSharePressed.bind(this)}
style={styles.button}
>
<Text
    style={styles.buttonText}
>
    Share
</Text>
</TouchableHighlight>
    </View>
    );
  }

  onSharePressed() {
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
