import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeActionBar(props) {
  return (
      <View style={styles.container}>
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPress={() => {props.screenRequest("play")}}>
            <Text style={styles.text}>Play</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPress={() => props.modalCreate(true)}>
            <Text style={styles.text}>Create</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPress={() => {props.screenRequest("edit")}}>
            <Text style={styles.text}>Edit</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 15
    },
    text: {
      fontSize: 24
    }
});