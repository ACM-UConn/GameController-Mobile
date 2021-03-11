import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

export default function DropdownMenu(props) {
  const [value, setValue] = useState("select " + props.attribute);
  const [menuVisible, setMenuVisible] = useState(true);

  const updateValue = newValue => {
    setValue(newValue);
    setMenuVisible(!menuVisible);
  }
  
  const options = props.options.map((option) => {
    return(
      <Pressable onPress={() => updateValue(option)}>
        <Text>{option}</Text>
      </Pressable>
    )
  })
  
  return(
    <View style={styles.dropdownMenu}>
      
      <Pressable onPress={() => setMenuVisible(!menuVisible)}>
        <Text>{value}</Text>
      </Pressable>

      <ScrollView style={{ display: menuVisible, borderWidth: 1 }}>
        {options}
      </ScrollView>
    
    </View>
  )
}


const styles = StyleSheet.create({
  dropdownMenu: {
    position: 'relative',
    width: 200,
    borderWidth: 1
  }
})