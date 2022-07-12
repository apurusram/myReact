import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';
import Booking from './components/Booking';


const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/favicon.png')}
    />
  );
}

export default function App() {




  return (
    <NavigationContainer>
   
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="RVN Car Rental" component={CarsList} 
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
        <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>


    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 

  


});
