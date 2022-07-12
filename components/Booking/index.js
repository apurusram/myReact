import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button, Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import StyledButton from '../StyledButton';



const UselessTextInput = () => {

  const [loading, setLoad] = useState(false);


  

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'BMW', value: 'bmw'},
    {label: 'Mercedes', value: 'mercedes'}
  ]);




  return (
    <SafeAreaView>    
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={onChangeText}
        value={text || ''}
      />
      <TextInput
        placeholder="Mobile number"
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number || ''}
        keyboardType="numeric"
      />  
     <TextInput
        placeholder="Booking date"
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number || ''}
        keyboardType="numeric"
      /> 
      <TextInput
        placeholder="Return date"
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number || ''}
        keyboardType="numeric"
      />

      <DropDownPicker
        placeholder="Select your car"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        showTickIcon={false}
        style={styles.input}
        placeholderStyle={{
          color: "grey",
        }}
        dropDownContainerStyle={{
          backgroundColor: "#dfdfdf",
          padding: 10,
          width: Dimensions.get('window').width - 24,
          marginLeft: '12px'
          
        }}

        arrowIconStyle={{
          width: 20,
          height: 20,
          alignSelf: 'flex-end',
          justifyContent: 'center',
          marginTop: -15,
        }}

    />

        <StyledButton type="primary" 
            content={"Submit"} 
            onPress={() => {            
              setLoad(loading+1)
              setTimeout(function(){
                setLoad(0)
                alert("We have received your booking info.")                
              }, 3000)
              
              

            }} />  


        <ActivityIndicator 
        animating={loading}/>
   


        


      
     

     


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;