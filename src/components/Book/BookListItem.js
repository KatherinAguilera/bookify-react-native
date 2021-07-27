/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function BookListItem({book}){
  return (
    <View>
      <Text>{book.title}</Text>
    </View>
  );
}