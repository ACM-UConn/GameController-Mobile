import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

export default function HomeActionBar() {
  return (
      <View style={styles.container}>
        <TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.text}>
              Play
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.text}>
              Create
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.button}>
            <Text style={styles.text}>
              Edit
            </Text>
          </View>
        </TouchableHighlight>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 15
    },
    text: {
      fontSize: 24
    }
});