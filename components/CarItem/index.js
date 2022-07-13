import React from 'react';
import {View, Text, ImageBackground, Linking} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const CarItem = (props) => {

    const { name, tagline, image } = props.car;

    const navigation = useNavigation();





    return (
    
        <View style={styles.carContainer}> 
          <ImageBackground 
            source={image}
            style={styles.image}
          />

          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{tagline}</Text>
          </View>

          <View style={styles.buttonsContainer}>
            
            <StyledButton type="primary" 
            content={"Call for info"} 
            onPress={() => {            
              Linking.openURL('tel:2530000')

            }}/>  

            
            <StyledButton type="secondary" 
            content={"Book now"} 
            onPress={() => {
              navigation.navigate('Booking');

            }}/> 

          </View>
         

        </View>

    );
};

export default CarItem;