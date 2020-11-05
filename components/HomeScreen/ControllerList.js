import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

const Data = [
    {
        id: 'fksfii4h3546mnmfjfj3',
        title: 'Xbox Controller'
    }
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
        width: '40%',
        height: '25%',
        marginTop: 70,
        marginRight: 200,
        alignContent: 'center',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
    },

});
