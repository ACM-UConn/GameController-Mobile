import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SideMenu(props) {
  if (props.visible) {
    return(
      <View style={styles.container}>
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
    width: 100,
    height: 300
  },
});