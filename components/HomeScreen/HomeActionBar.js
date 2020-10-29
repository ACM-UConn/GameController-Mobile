import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

export default function HomeActionBar() {
  return (
      <View>
        <TouchableHighlight>
          <View>
            <Text>Play</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View>
            <Text>Create</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View>
            <Text>Edit</Text>
          </View>
        </TouchableHighlight>
      </View>
  );
}

const styles = StyleSheet.create({
    
});