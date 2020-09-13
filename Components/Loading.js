import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Loading = () => {
    return (
        <View style={styles.loadingContainer}>
            <Text style={styles.paragraph}>
                Loading...
            </Text>
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paragraph: {
        margin: 24,
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});