import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/views/Home';
import Library from './src/views/Library';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 15,
  },
});

const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    {/* Navegacion entre vistas */}
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title: 'Inicio'}} />
      <Stack.Screen name="Library" component={Library} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
