import React from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    ListView,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F7F7F7',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: 'flex-end',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
    },
    listItem: {
        marginLeft: 5,
        fontSize: 18,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FAFAFA',
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05A5D1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        backgroundColor: '#666',
    },
});

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});


class AlbumPicker extends React.Component {

    state = {
        dataSource: ds.cloneWithRows([
            "First Album",
            "Second Album",
            "Third Album",
        ]),
    }

    constructor(props, context) {
        super(props, context);
    }

    onSharePressed() {
    }

    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.header}>Albums</Text>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={styles.listItem}>{rowData}</Text>} />
            <TouchableHighlight onPress={this.onSharePressed.bind(this)} style={styles.button} >
            <Text
                style={styles.buttonText}
            >
                Share
            </Text>
            </TouchableHighlight>
        </View>
      );
    }
}

export default AlbumPicker;
