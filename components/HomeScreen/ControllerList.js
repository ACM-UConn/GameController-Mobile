import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, Pressable } from 'react-native';

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

    const Stuff = props.Keys()
    console.log(Stuff['_U'])

    const [highlight, setHighlight] = useState()
    
    const getObject = async (value) => {
        try {
          const jsonValue = await AsyncStorage.getItem(value)
          if (value != null) {
            console.log(jsonValue)
            return jsonValue
          }
        }
        catch(e){
          console.log('There is an Error! ', e)
        }
    }

    let values = Data.map((item) =>
        <Pressable onPress = {() => setHighlight()} onLongPress={() => setHighlight(item.id)} delayLongPress={400} key={item.id} style={[{backgroundColor: (highlight == item.id) ? 'grey' : 'white'}, styles.controllerItem]}>
            <Text>{item.title}</Text>
        </Pressable>
    );


  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.listContent}>
        {values}
    </ScrollView>
        // <View style={styles.container}>
        //     <FlatList 
        //         data={Data}
        //         renderItem={renderController}
        //         keyExtractor={item => item.id}
        //     />
        // </View>
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
