import * as React from 'react';
import { Dimensions, StyleSheet,View } from 'react-native';
import Colors from "../constants/Colors"
import EditScreenInfo from './EditScreenInfo';
import  SpotifoodBoldText from '../components/SpotifoodBoldText'
import  SpotifoodText from '../components/SpotiFoodText'


const {width,height}=Dimensions.get('window')
export default function Header() {
  return (
    <View style={styles.container}>    
      <SpotifoodBoldText name={"Spotifood"} style={styles.title}/>
      <SpotifoodText  name={"restaurant Menu"} style={styles.Subtitle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor:Colors.mainBackground,
    marginTop:width*0.073
  },
  title: {
    fontSize:width*0.060,
    color:'white',
    marginTop:10
  },
  Subtitle: {
    fontSize:width*0.030,
    color:Colors.globalGreen,
    marginTop:-5,
    marginLeft:width*0.030
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
