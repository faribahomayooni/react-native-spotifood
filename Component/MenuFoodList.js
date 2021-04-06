import * as React from 'react';
import { Dimensions, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import Colors from "../constants/Colors"
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SpotiFoodBoldText from './SpotifoodBoldText'
import SpotiFoodext from './SpotiFoodText'
import { useState } from 'react'

const { width, height } = Dimensions.get('window')
const MenuFoodList = (Props) => {
  const [count, setcount] = useState(0)
  console.log(Props.item)
  return (
    <View style={[styles.container]} >
      <Image style={[styles.ImageStyle]} source={{ uri: `https://menusite.ir/uploads/item_images/${Props.item.image}` }} />
      <View style={{ backgroundColor: Colors.mainBackground }}>
        <SpotiFoodBoldText name={Props.item.name} style={{ marginTop: 0 }} />
        <View style={styles.fooddescrible}>
          <SpotiFoodext name={Props.item.description.slice(0, 71)} style={{ marginRight: width * 0.050, marginTop: width * 0.03,width:width*0.50 }} />
        </View>
        <View style={styles.priceandadd}>
          {count === 0 &&
            <TouchableOpacity style={styles.addItems} onPress={() => setcount(count + 1)}>
              <Icon name="plus" size={15} style={{ color: "white", fontWeight: "bold" }} />
            </TouchableOpacity>
          }
          {count !== 0 &&
            <View style={styles.star}>
              <TouchableOpacity onPress={() => setcount(count + 1)}>
                <Icon name="plus" size={15} style={{ color: "white", fontWeight: "bold" }} />
              </TouchableOpacity>
              <SpotiFoodext name={count} style={styles.text} />
              <TouchableOpacity onPress={() => setcount(count - 1)}>
                <Icon name="minus" size={15} style={{ color: "white", fontWeight: "bold" }} />
              </TouchableOpacity>
            </View>}
          <View style={[styles.price, { ...Props.locationStyle }]}>
            <SpotiFoodext name={Props.item.price} style={{ fontSize: width * 0.025, color: Colors.globalGreen, marginLeft: 5 }} />
            <SpotiFoodext name="تومان" style={{ fontSize: width * 0.025 }} />
          </View>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "gray",
    width: width * 0.95,
    height: width * 0.40,
    marginTop: width * 0.020,
    margin: 5,
    backgroundColor: Colors.mainBackground,
    flexDirection: "row-reverse",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    
  },
  starTitle: {
    shadowColor: "gray",
    shadowOffset: { height: 2 },
    shadowOpacity: 0.3, zIndex: 2, backgroundColor: "black", opacity: 0.6
  },
  icons: {
    color: "black",
    alignSelf: "flex-end"
  },
  star: {
    width: width * 0.20,
    justifyContent: "space-around",
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    marginRight: width * 0.050,
    backgroundColor: Colors.globalGreen,
    borderRadius: 5,
    padding: 3,
    marginLeft: 5,
  },
  text: {
    fontSize: width * 0.035,
    color: "white",
  },
  price: {
    flexDirection: "row-reverse",
    alignSelf: "center",
    marginRight: width * 0.050,
    backgroundColor: "black",
    shadowOpacity: 0.3,
    marginLeft: width * 0.038
  },
  ImageStyle: {
    borderRadius: 90,
    borderWidth: 3,
    backgroundColor: "#1C1C1C",
    borderColor: "gray",
    width: width * 0.30,
    height: width * 0.30,
  },
  priceandadd: {
    flexDirection: "row",
    marginTop: width * 0.1,
    backgroundColor: Colors.mainBackground,
    justifyContent: "space-between",
  },
  fooddescrible: {
    // flex:1.2,
    // height:50,
   
    width: width * 0.55,
    backgroundColor: Colors.mainBackground
  },
  addItems: {
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 5
  }

});

export default MenuFoodList