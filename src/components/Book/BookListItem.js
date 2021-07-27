/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingLeft: 15,
    borderBottomColor: '#E0e0e0',
    borderBottomWidth: 1,
  },
  image:{
    width: 50,
    height: 50,
    marginRight: 10,
  },
  icon:{
    color: '#e0ef',
    marginLeft: 'auto',
    marginRight: '16',
  },
});
export default function BookListItem({book, onPress}){
  return (
    <TouchableOpacity onPress= {onPress}>
      <View style={styles.container}>
        <Image source= {{uri: book.cover}} style={styles.image}/>
        <Text>{book.title}</Text>
        <Icon name="add-circle" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}