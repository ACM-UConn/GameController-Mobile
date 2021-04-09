import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen/HomeScreen';
import PlayScreen from './components/PlayScreen/PlayScreen';
import EditScreen from './components/EditScreen/EditScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Permissions from 'expo-permissions';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [cameraPermission, setCameraPermission] = useState(false);
  const getAllKeys = async () => {
    let keys = []
    // let values = [];
    try {
      keys = await AsyncStorage.getAllKeys()
      // for(var i in keys)
      // {
      //   const jsonValue = await AsyncStorage.getItem(i);
      //   console.log(values);
      //   values.push(JSON.parse(jsonValue));
      // }
    }
    catch(e) {
      console.log('There is an Error! ', e)
    }
    return keys;
  }
  
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
    <SafeAreaView style={styles.container}>
      <HomeScreen allKeys={() => getAllKeys()} shouldRender={currentScreen === "home"} changeScreen={(screen) => {changeScreen(screen)}}></HomeScreen>
      <PlayScreen shouldRender={currentScreen === "play"} changeScreen={(screen) => {changeScreen(screen)}} cameraPermission={cameraPermission} ></PlayScreen>
      <EditScreen shouldRender={currentScreen === "edit"} changeScreen={(screen) => {changeScreen(screen)}}></EditScreen>
    </SafeAreaView>
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
