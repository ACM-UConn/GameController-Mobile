import  React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ControllerPlay from './ControllerPlay.js'
import ControllerConnect from './ControllerConnect.js';
let socket = null;

export default function PlayScreen(props) {
  const [connected, setConnected] = useState('scan');

  const handleData = (data) => {
    socket = new WebSocket('ws://172.20.1.168:7070/events/');
    setConnected('loading');
    socket.onopen = () => {
      socket.send(JSON.stringify({'type': 'init', 'keys': [{'name': 'A', 'action': 'left'}, {'name': 'D', 'action': 'right'}, {'name': 'S', 'action': 'down'}, {'name': 'W', 'action': 'up'}]}))
    }
    setConnected('playing');
  }

  const handleButtonPress = (buttonPressed) => {
    console.log(buttonPressed);
    socket.send(JSON.stringify(buttonPressed));
  }

  const handleNav = (place) => {
    props.changeScreen(place);
    setConnected('scan');
    socket.close();
  }
  
  if(props.shouldRender) {
    if(connected == 'playing'){
      return(
        <View style={styles.container}>
          <ControllerPlay buttonPress={(buttonPressed) => handleButtonPress(buttonPressed)} navigate={(place) => {handleNav(place)}}></ControllerPlay>
        </View>
      )
    }
    else if(connected == 'scan'){
        return(
          <View style={styles.container}>
            <ControllerConnect passData={(data) => handleData(data)} cameraPerms={props.cameraPermission}></ControllerConnect>
          </View>
        )
    }
  }
  return (
      null
  );
}

// get info from App.js to tell controller list to render

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});