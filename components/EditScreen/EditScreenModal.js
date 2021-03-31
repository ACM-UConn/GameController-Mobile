import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, TextInput } from 'react-native';
import DropdownMenu from './DropdownMenu.js'

export default function EditScreenModal(props) {
  const [value, onChangeText] = useState('');

  if (props.shouldRender) {
    return (
      <View style={styles.modalView}>
        
        <Text>New Button</Text>

        <View style={styles.buttonName}>
          <Text>Name: </Text>
          <TextInput
            style={{ height: 40, width: 200, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
            placeholder="button name!"
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>

        <View style={styles.buttonType}>
          <Text>Type: </Text>
          <View style={styles.dropdownWrapper}>
            <DropdownMenu 
              attribute={"type"} 
              options={['button', 'joystick', 'dpad']}
            />
          </View>
        </View>

        <View style={styles.buttonColor}>
          <Text>Color: </Text>
          <View style={styles.dropdownWrapper}>
            <DropdownMenu 
              attribute={"color"} 
              options={['red', 'orange', 'yellow', 'green', 'blue', 'pink']}
            />
          </View>
        </View>

        <Pressable onPress={() => props.makeButton()} style={styles.createButton}>
          <Text style={ {color: "white"} }>Create</Text>
        </Pressable>
      
      </View>
    )
  } else {
    return null;
  }
}


const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    top: '50%',
    left: '50%',
    height: 400,
    marginTop: -200,
    width: 300,
    marginLeft: -150,
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
  },
  dropdownWrapper: {
    height: 50
  },
  buttonName: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: "center",
    borderWidth: 1
  },
  buttonType: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: "center",
    borderWidth: 1
  },
  buttonColor: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: "center",
    borderWidth: 1
  },
  createButton: {
    height: 50,
    width: 100,
    marginTop: 50,
    backgroundColor: 'black',
    borderRadius: 10
  },
})