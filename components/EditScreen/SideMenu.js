import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function SideMenu(props) {
  if (props.visible) {
    return(
      <View style={styles.container}>
        <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'grey' : 'white'}, styles.exitBtn]} onPress={() => {props.closeMenu()}}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
        <Text>This is the side bar...</Text>
      </View>
    );
  }
  else {
    return(null);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    height: 250,
    backgroundColor: 'grey'
  },

  exitBtn: {
    position: 'absolute',
    right: 25,
    top: 25,
    borderRadius: 8,
    padding: 15
  },

});