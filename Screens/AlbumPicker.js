import React from 'react-native';

const {
    View,
    Text,
    TouchableHighlight,
} = React;

const styles = React.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#F7F7F7',
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        backgroundColor: '#666',
    },
});

class AlbumPicker extends React.Component {
    state = {
        dataSource: null,
    }
    constructor(props, context) {
        super(props, context);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.setState({
            dataSource: ds.cloneWithRows(this._genRows({})),
        });
    }

    onSharePressed() {
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

    _genRows(initialObj) {
        return [
            "First Album",
            "Second Album",
            "Third Album"
        ];
    }
}

export default AlbumPicker;
