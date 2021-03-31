import * as React from 'react';
import { Dimensions, StyleSheet, Image, TouchableOpacity, ProgressBarAndroidComponent } from 'react-native';
import Colors from "../constants/Colors"
import EditScreenInfo from './EditScreenInfo';
import { Text, View } from './Themed';
import { Ionicons } from '@expo/vector-icons';
import SpotiFoodBoldText from './SpotifoodBoldText'
import SpotiFoodext from './SpotiFoodText'

const { width, height } = Dimensions.get('window')
export default function RestaurantSlider(Props) {
  return (
    <TouchableOpacity style={[styles.container, {...Props.style }]} >
      <Image style={[styles.ImageStyle,{...Props.ImageStyle}]} source={require('../assets/images/large.jpg')} />
      <View style={[styles.shadow,Props.ImageStyle]}>
        <SpotiFoodBoldText name={"رستوران ارکیده"} />
        <View style={styles.star}>
          <Ionicons size={12} style={styles.icons} name="ios-star" />
          <SpotiFoodext name="4.7" style={styles.text} />
        </View>
        <SpotiFoodext name={"ایتالیایی|دریایی|فست فود|سالاد"} style={{ marginRight: width * 0.050 }} />
        <View style={[styles.location,{...Props.locationStyle}]}>
          <SpotiFoodext name="تجریش" style={{ fontSize: width * 0.020 }} />
          <Ionicons size={15} style={{ color: "white", alignSelf: "flex-end" }} name="ios-location" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 0.5,
    width: width * 0.75,
    height: width * 0.40,
    marginTop: width * 0.030,
   margin: 5,

  },
  starTitle: {
    shadowColor: "black",
    shadowOffset: { height: 2 },
    shadowOpacity: 0.3, zIndex: 2, backgroundColor: "black", opacity: 0.6
  },
  icons: {
    color: "black",
    alignSelf: "flex-end"
  },
  star: {
    width:width*0.12,
    justifyContent:"space-around",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginRight: width * 0.050,
    backgroundColor: Colors.globalGreen,
    borderRadius: 5,
    padding: 3,
    marginLeft: 5,
    marginTop: -13
  },
  text: {
    fontSize: width * 0.023,
    color: "black",
    fontWeight: "bold"
  },
  location: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: width * 0.050,
    backgroundColor: "black",
    shadowOpacity: 0.3
  },
  ImageStyle: {
    // flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#1C1C1C",
    borderColor: "#1C1C1C",
    width: width * 0.75,
    height: width * 0.40,
  },
  shadow: {
    position: 'absolute',
    width: width * 0.75,
    height: width * 0.40, borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { height: 2 },
    shadowOpacity: 0.3, zIndex: 2, backgroundColor: "black", opacity: 0.6
  },

});
