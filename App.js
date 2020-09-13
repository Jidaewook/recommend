import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  Text,
  View,
  Image, 
  Dimensions,
  FlatList,
  Platform,
  StyleSheet
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        Recommend
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});