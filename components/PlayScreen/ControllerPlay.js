import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ControllerPlay(props) {
  
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'red' : 'darkred'}, styles.exitBtn]} onPress={() => {props.navigate('home')}}>
        <Text style={styles.text}>X</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPressIn={() => {props.buttonPress({button: "W", status: "pressed"})}} onPressOut={() => {props.buttonPress({button: "W", status: "released"})}}>
        <Text style={styles.text}>W</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPressIn={() => {props.buttonPress({button: "A", status: "pressed"})}} onPressOut={() => {props.buttonPress({button: "A", status: "released"})}}>
        <Text style={styles.text}>A</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPressIn={() => {props.buttonPress({button: "S", status: "pressed"})}} onPressOut={() => {props.buttonPress({button: "S", status: "released"})}}>
        <Text style={styles.text}>S</Text>
      </Pressable>
      <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPressIn={() => {props.buttonPress({button: "D", status: "pressed"})}} onPressOut={() => {props.buttonPress({button: "D", status: "released"})}}>
        <Text style={styles.text}>D</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  exitBtn: {
    position: 'absolute',
    left: -120,
    top: 50,
    borderRadius: 8,
    padding: 15
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 15
  },
  text: {
    fontSize: 24
  }
});