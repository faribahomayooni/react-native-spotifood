import * as React from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import Colors from "../constants/Colors"
import QRHeader from '../Component/QRHeader'
import QRCodeFooter from '../Component/QRCodeFooter'
import {StackScreenProps ,} from '@react-navigation/stack';
const { width, height } = Dimensions.get('window')


const StartQRCode = (Props) => {
  console.log("hi start qrcode")
  const onPress=()=>{
Props.navigation.push("QRCode")
  }
  // console.log(height)

  const _onLayout=()=>{
    
  }

  return (
    <View style={styles.container}  onLayout={_onLayout()}>
      <QRHeader/>
      <Image source={require('../assets/images/ScannerImage.png')} style={styles.ImageStyle}/>
      <QRCodeFooter onPress={onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:Colors.mainBackground
  },
  ImageStyle: {
    width:"100%",
   height:(height<700)?height*0.70:height*0.78,
  // resizeMode:"contain"
  },
});


export default StartQRCode