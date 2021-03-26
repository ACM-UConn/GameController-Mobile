import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, ScrollView, Pressable, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Data = [
    {
        id: 'fksfii4h3546mnmfjfj3',
        title: 'Xbox Controller'
    },
    {
        id: 'fkdjfkjdkljgkhh',
        title: 'PS5 Controller'
    },
    {
        id:'asjjfkjieijmdm243',
        title: 'Rocket League(Xbox)'
    },
]

export default function ControllerList(props) {

    const keys = props.Keys();

    const [highlight, setHighlight] = useState()
    const [data, setData] = useState([])

    const onRender = props.render;
    const array_objects = [];
    
    const storeData = async () => {
        try {
          const jsonValue = JSON.stringify({ id: "fksfii4h3546", title: "Xbox Controller" });
          await AsyncStorage.setItem("fksfii4h3546mnmfj3", jsonValue);
          console.log('Success (dexters voice)');
    
        } catch (error) {
          console.log("An Error has occurred");
          console.error(error);
        }
    }

    const getControllerObject = async (key) => {
        try {
          const jsonValue = await AsyncStorage.getItem(key);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
          console.log("An Error has occurred");
          console.error(error);
        }
    }

    useEffect(() => {
        keys.then(function(value) {
          for(var i in value) {
            const values = getControllerObject(value[i]);
            values.then(function(value2) {
              array_objects.push(value2);
            });
          }
        });
        setData(array_objects);
    }, []);

    const clearAll = async () => {
      try {
        await AsyncStorage.clear()
      } catch(e) {
        console.error(e);
      }
      console.log('Done.')
    }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.listContent}>
        {data.map(item => (
          <Pressable onPress = {() => setHighlight()} onLongPress={() => setHighlight(item.id)} delayLongPress={400} key={item.id} style={[{backgroundColor: (highlight == item.id) ? 'grey' : 'white'}, styles.controllerItem]}>
            <Text>{item.title}</Text>
          </Pressable>
        ))}
        {/* <Button title="Store Data" onPress={() => storeData()} />
        <Button title="Clear storage" onPress={() => clearAll()} /> */}
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
