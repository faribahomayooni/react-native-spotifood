import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const Splash = (props) => {

    useEffect(()=>{
      setTimeout(() => {
      props.navigation.replace('StartQRCode');
      }, 1000)
    },[])

  return(
    <View style={{  width: 100, height: 100 }}>
        <Image style={{resizeMode:"stretch",width:width,height:height}} source={require('../assets/images/splash.png')} />
       </View>
  )
}
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aabbcc',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});