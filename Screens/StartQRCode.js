import * as React from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import Colors from "../constants/Colors"
import QRHeader from '../Component/QRHeader'
import QRCodeFooter from '../Component/QRHeader'
import {StackScreenProps ,} from '@react-navigation/stack';
const { width, height } = Dimensions.get('window')


const StartQRCode = (Props) => {
  const onPress=()=>{
Props.navigation.push("QRCode")
  }
  // console.log(height)
  return (
    <View style={styles.container}>
      <QRHeader/>
      <Image source={require('../assets/images/ScannerImage.png')} style={styles.ImageStyle}/>
      <QRCodeFooter onPress={onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainBackground,
    marginTop: width * 0.058,
    minHeight: height,backgroundColor:Colors.mainBackground
  },
  ImageStyle: {
   height:(height<700)?height*0.70:height*0.78,
  resizeMode:"stretch"
  },
});


export default StartQRCode