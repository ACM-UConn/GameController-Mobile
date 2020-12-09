import React from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

export default function SideMenu(props) {

  let keys = null;
  let fields = null;

  if (props.buttonData !== null) {
    keys = Object.keys(props.buttonData)

    fields = keys.map((item) =>
      <View style={styles.itemContainer}>
        <View style={styles.itemKey}>
          <Text style={styles.itemText}> {item} </Text>
        </View>
        <View style={styles.itemValue}>
          <Text style={styles.itemText}>{props.buttonData[item]}</Text>
        </View>
      </View>
  );
  }

  if (props.visible) {
    return(
      <View style={styles.container}>
        <View style={styles.menuHeader}>
          <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'grey' : 'white'}, styles.exitBtn]} onPress={() => {props.closeMenu()}}>
            <Text style={styles.text}>Back</Text>
          </Pressable>
        </View>
        <ScrollView style={styles.menuBody}>
          {fields}
        </ScrollView>
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
    backgroundColor: 'grey',
    flexDirection: "column",
  },

  exitBtn: {
    width: "40%",
    alignItems: "center",
    borderRadius: 8,
    padding: 15
  },

  itemContainer: {
    flex: 1,
    flexDirection: "row",
  },

  itemKey: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },

  itemValue: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },

  itemText: {
    fontSize: 15,
    color: "white"
  },

  menuHeader: {
    flex: 0.3,
    justifyContent: "flex-start"
  },

  menuBody: {
    flex: 0.7,
  }

});