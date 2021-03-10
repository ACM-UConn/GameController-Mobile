import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, TextInput } from 'react-native';

export default function EditScreenModal(props) {
  const [value, onChangeText] = useState('');

  if (props.shouldRender) {
    return (
      <View style={styles.modalView}>
        <Text>new button</Text>
        <View style={styles.buttonName}>
          <Text>name: </Text>
          <TextInput
            style={{ height: 40, width: 200, borderWidth: 1, borderColor: 'black', borderRadius: 10  }}
            placeholder="Type here to translate!"
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
        {/* DROPDOWN for color */}
        {/* DROPDOWN for type */}
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
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    top: '50%',
    left: '50%',
    height: 400,
    marginTop: -200,
    width: 300,
    marginLeft: -150,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
  },
  buttonName: {
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: 'lightgrey',
  },
  createButton: {
    height: 50,
    width: 100,
    backgroundColor: 'black',
    borderRadius: 10
  },
})