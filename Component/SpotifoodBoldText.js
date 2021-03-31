import * as React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';
import Colors from "../constants/Colors"
import EditScreenInfo from './EditScreenInfo';
import { Text, View } from './Themed';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')
const SpotiFoodBoldText=(Props)=> {
  return (     
        <Text style={[styles.BoldText,{...Props.style}]}>{Props.name}</Text>     
  );
}

const styles = StyleSheet.create({
  BoldText: {
    color: "white",
    marginTop: width * 0.20,
    marginRight: width * 0.050,
    fontWeight: "bold",
    fontSize: width * 0.035,
    fontFamily:"IranSans" 
  },
  
});
 export default SpotiFoodBoldText