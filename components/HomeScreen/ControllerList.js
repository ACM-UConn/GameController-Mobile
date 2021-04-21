import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ScrollView, Pressable, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ControllerList(props) {

    const keys = props.Keys();

    const [highlight, setHighlight] = useState()
    const data = props.controllerData;
    
    const onRender = props.render;

    const highlightOn = (id) => {
      setHighlight(id);
      if(id != null)
      {
        props.selected(id)
      }
    }

    useEffect(() => {
      props.dataGet();
    }, [onRender])

    const clearData = async () => {
      try {
        await AsyncStorage.clear()
        console.log("Data has been cleared")
      } catch (error) {
        console.log("Error has occured");
        console.error(error);
      }
    }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.listContent}>
        {data.map(item => (
          <Pressable onPress = {() => setHighlight()} onLongPress={() => highlightOn(item.id)} delayLongPress={400} key={item.id} style={[{backgroundColor: (highlight == item.id) ? 'grey' : 'white'}, styles.controllerItem]}>
            <Text>{item.title}</Text>
          </Pressable>
        ))}
        {/* <Button title="Clear Data" onPress={() => clearData()} /> */}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
    },
    listContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    itemText: {
        fontSize: 40
    },
    controllerItem: {
        shadowColor: "darkgray",
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 7,
        marginVertical: 10,
        padding: 20,
        borderRadius: 20,
    },
});
