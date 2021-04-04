import * as React from 'react';
import { Dimensions, StyleSheet, Image,Text } from 'react-native';
// import { Text, View } from './Themed. js';

const { width, height } = Dimensions.get('window')
const SpotiFoodText=(Props)=> {
  return (     
        <Text style={[styles.TextStyle,{...Props.style}]}>{Props.name}</Text>     
  );
}

const styles = StyleSheet.create({
  TextStyle: {
    color: "white",
     fontSize: width * 0.025,
     fontFamily:"IranSans" 
  },
  
});
 export default SpotiFoodText