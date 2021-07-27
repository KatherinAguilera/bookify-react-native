/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import BookListItem from '../components/Book/BookListItem';

const BOOK_LIST = [
  {
    id: 1,
    title: 'Hacia rutas salvajes',
    cover: 'https://picsum.photos/200',
  },
  {
    id: 2,
    title: 'El nombre del viento',
    cover: 'https://picsum.photos/200',
  },
  {
    id: 3,
    title: 'La aurora',
    cover: 'https://picsum.photos/200',
  },
  {
    id: 4,
    title: 'Hombres Invisibles',
    cover: 'https://picsum.photos/200',
  },
];
export default function Home({navigation}){
  function handleOnPress (){
    navigation.navigate('Library')
  }
  return (
    <View>
      {/* <TouchableHighlight onPress={() => navigation.navigate('Library')}>
        <Text>Hola soy el home</Text>
      </TouchableHighlight> */}
      <FlatList
        data= {BOOK_LIST}
        renderItem = {({item}) => <BookListItem book={item} onPress= {handleOnPress} />}
        keyExtractor={item=> item.id}
        />
    </View>
  );
}