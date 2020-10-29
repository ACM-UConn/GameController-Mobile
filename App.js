import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen/HomeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  return (
    <View style={styles.container}>
      <Text>Hey</Text>
      <HomeScreen></HomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
