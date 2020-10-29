import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen/HomeScreen';
import PlayScreen from './components/PlayScreen/PlayScreen';
import EditScreen from './components/EditScreen/EditScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  const changeScreen = (newScreen) => {
    if (newScreen === "home" || newScreen === "play" || newScreen === "edit") {
      setCurrentScreen(newScreen);
    }
  }

  return (
    <View style={styles.container}>
      <HomeScreen shouldRender={currentScreen === "home"} changeScreen={(screen) => {changeScreen(screen)}}></HomeScreen>
      <PlayScreen shouldRender={currentScreen === "play"} changeScreen={(screen) => {changeScreen(screen)}}></PlayScreen>
      <EditScreen shouldRender={currentScreen === "edit"} changeScreen={(screen) => {changeScreen(screen)}}></EditScreen>
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
