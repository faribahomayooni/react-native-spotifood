import React from 'react';
import { StyleSheet, Text, View,Image,Dimension } from 'react-native';

const {width,height}=Dimension.get('window')

export default class Splash extends React.Component {
componentDidMount(){
  setTimeout(() => {
      this.props.navigation.replace('StartQRCode');
  }, 1000)
}


  render() {

    return (
      (<View style={{backgroundColor:"black"}}>
            <Image style={{resizeMode:"stretch",width:width,height:height}} source={require('../assets/images/splash.png')} />
       </View>)
    );
  }
}

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