/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import BookListItem from '../components/Book/BookListItem';

const BOOK_LIST = [
  {
    id: 1,
    title: 'Hacia rutas salvajes',
  },
  {
    id: 2,
    title: 'El nombre del viento',
  },
  {
    id: 3,
    title: 'La aurora',
  },
  {
    id: 4,
    title: 'Hombres Invisibles',
  },
];
export default function Home({navigation}){
  return (
    <View>
      {/* <TouchableHighlight onPress={() => navigation.navigate('Library')}>
        <Text>Hola soy el home</Text>
      </TouchableHighlight> */}
      <FlatList
        data= {BOOK_LIST}
        renderItem = {({item}) => <BookListItem book={item} />}
        keyExtractor={item=> item.id}
        />
    </View>
  );
}