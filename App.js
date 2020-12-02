import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen/HomeScreen';
import PlayScreen from './components/PlayScreen/PlayScreen';
import EditScreen from './components/EditScreen/EditScreen';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [cameraPermission, setCameraPermission] = useState(false);

  const changeScreen = (newScreen) => {
    if (newScreen === "home" || newScreen === "play" || newScreen === "edit") {
      setCurrentScreen(newScreen);
    }
  }

  useEffect(() => {
    requestCameraPermission();
  }, [])

  requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setCameraPermission(status === 'granted');
  };

  return (
    <View style={styles.container}>
      <HomeScreen shouldRender={currentScreen === "home"} changeScreen={(screen) => {changeScreen(screen)}}></HomeScreen>
      <PlayScreen shouldRender={currentScreen === "play"} changeScreen={(screen) => {changeScreen(screen)}} cameraPermission={cameraPermission} ></PlayScreen>
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
