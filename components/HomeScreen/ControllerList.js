import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

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

export default function ControllerList() {

    const renderController = itemData => (
        <View style={styles.controllerItem}>
            <Text>{itemData.item.title}</Text>
        </View>
    )


  return (
        <FlatList 
            data={Data}
            renderItem={renderController}
            keyExtractor={item => item.id}
        />
  );
}


const styles = StyleSheet.create({
    itemText: {
        fontSize: 40
    },
    controllerItem: {
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 15,
        borderRadius: 20
    },

});
