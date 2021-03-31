import * as React from 'react';
import { StyleSheet } from 'react-native';
import Header from '../components/Header'
import Colors from "../constants/Colors"

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window')
const PageContent=(Props)=> {
  return (
    <View style={styles.container}>
      <Header/>
      {Props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:Colors.mainBackground,
    marginTop:width*0.073
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
 export default PageContent