import* as React from 'react';
import {useState,useEffect} from 'react'
import { Dimensions, StyleSheet, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from "../constants/Colors"

const { width, height } = Dimensions.get('window')
const FoodsIcon = (Props) => {
  
    
    const selectItem=(u)=>{
        Props.selected(Props.url.id)
        console.log("!!!!!!!!!!",Props.url)
        // setSelectedFood(u)
    }

    // console.log("########",Props.selectfood)
    return (
        <TouchableOpacity style={[styles.container,{borderColor:Props.selectfood===Props.url.id?Colors.MenuColor:"gray",backgroundColor:Props.selectfood===Props.url.id?Colors.MenuColor:Colors.mainBackground}]} onPress={()=>selectItem(Props.url)}>
            <Image style={[styles.ImageStyle,{tintColor:Props.selectfood===Props.url.id?"white":"gray",backgroundColor:Props.selectfood===Props.url.id?Colors.MenuColor:Colors.mainBackground,borderColor:Props.selectfood===Props.url.id?Colors.MenuColor:Colors.mainBackground}]} source={Props.url.url} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 70,
        borderWidth: 0.5,
        width: width * 0.17,
        height: width * 0.17,
         margin: 5,
         borderColor:"gray",
         alignItems:"center",
         justifyContent:"center"
    },
    ImageStyle: {
        backgroundColor: "#1C1C1C",
        borderColor: "#1C1C1C",
        borderRadius: 70,
        borderWidth: 0.5,
        width: width * 0.10,
        height: width * 0.10,
        tintColor:"gray",
        resizeMode:"contain"
    },
   
});
 export default FoodsIcon