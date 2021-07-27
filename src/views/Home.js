import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
export default function Home({navigation}){
  return (
    <View>
      <TouchableHighlight onPress={() => navigation.navigate('Library')}>
        <Text>Hola soy el home</Text>
      </TouchableHighlight>
    </View>
  );
}