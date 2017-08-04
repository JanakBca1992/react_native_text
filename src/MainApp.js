import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const MainApp = () => (
    <View style={styles.container}>
        {/* Normal text */}
        <Text style={styles.normalText}>
          Normal Text!
        </Text>
        {/* Bold text */}
        <Text style={styles.boldText}>
          Bold Text!
        </Text>
        {/* Colored text */}
        <Text style={styles.coloredText}>
          Colored Text!
        </Text>
        {/* Text with monospace fontStyle */}
        <Text style={styles.fontText}>
          Text with 'monospace' fontFamily!
        </Text>
        {/* Text with italic fontStyle */}
        <Text style={styles.fontStyle}>
          Text with 'italic' fontStyle!
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    normalText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    coloredText: {
        fontSize: 20,
        color: '#DD5044',
        textAlign: 'center',
        margin: 10,
    },
    fontText: {
        fontSize: 20,
        fontFamily: 'monospace',
        textAlign: 'center',
        margin: 10,
    },
    fontStyle: {
        fontSize: 20,
        fontStyle: "italic",
        textAlign: 'center',
        margin: 10,
    }
});

export default MainApp;