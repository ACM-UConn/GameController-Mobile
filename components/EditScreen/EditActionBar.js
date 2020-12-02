import React, { useState } from 'react';
import { ImagePropTypes, Pressable, StyleSheet, Text, View } from 'react-native';

export default function EditActionBar(props) {
  return (
      <View style="styles.container">
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPress={() => {props.screenRequest("home")}}>
          <Text styles="styles.text">Back</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPress={() => {props.addButton()}}>
          <Text styles="styles.text">+</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPress={() => {props.visible()}}>
          <View styles={styles.menubutton}></View>
          <View styles={styles.menubutton}></View>
          <View styles={styles.menubutton}></View>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      paddingHorizontal: 10
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 15
    },
    text: {
      fontSize: 24
    },
    menubutton: {
      width: 25,
      height: 5,
      backgroundColor: "black",
      marginLeft: 6,
      marginRight: 6
    }
});
