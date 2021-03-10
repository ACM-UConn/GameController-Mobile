import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text } from 'react-native';

export default function EditScreenModal(props) {
  if (props.shouldRender) {
    return (
      <View style={styles.modalView}>
        <Text>New Button</Text>
        <Pressable onPress={() => props.makeButton()} style={styles.modalButton}>
          <Text>Hide Modal</Text>
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
    height: 100,
    marginTop: -50,
    width: 200,
    marginLeft: -100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
  },
  modalButton: {
    backgroundColor: 'blue',
    color: 'green',
    borderRadius: 10
  },
})