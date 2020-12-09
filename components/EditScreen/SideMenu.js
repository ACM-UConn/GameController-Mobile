import React from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native';

export default function SideMenu(props) {

  let keys = null;
  let fields = null;

  if (props.buttonData !== null) {
    keys = Object.keys(props.buttonData)

    fields = keys.map((item) =>
      <View style={styles.itemContainer} key={item}>
        <View style={styles.itemBody}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
        <View style={styles.itemBody}>
          <TextInput style={styles.itemText} defaultValue={typeof(props.buttonData[item]) === 'string' ? props.buttonData[item] : props.buttonData[item].toString()}/>
        </View>
      </View>
    );
  }

  if (props.visible) {
    return(
      <View style={styles.container}>
        <View style={styles.menuHeader}>
          <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'grey' : 'white'}, styles.exitBtn]} onPress={() => {props.closeMenu()}}>
            <Text style={styles.text}>Close</Text>
          </Pressable>
        </View>
        <View style={styles.listHeader}>
          <View style={styles.headerBody}>
            <Text style={styles.itemText}>Attributes</Text>
          </View>
          <View style={styles.headerBody}>
            <Text style={styles.itemText}>Values</Text>
          </View>
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
    width: "30%",
    alignItems: "center",
    borderRadius: 8,
    padding: 5,
  },

  itemContainer: {
    flex: 1,
    flexDirection: "row",
  },

  itemBody: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "darkgrey",
    borderWidth: 2,
  },

  itemText: {
    fontSize: 15,
    color: "white"
  },

  menuHeader: {
    flex: 0.2,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },

  menuBody: {
    flex: 0.6,
  },

  listHeader: {
    flex: 0.2,
    flexDirection: 'row'
  },

  headerBody: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  }

});