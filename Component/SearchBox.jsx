import * as React from 'react';
import { Dimensions, StyleSheet, Image,TextInput } from 'react-native';
import { Text, View } from './Themed';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')
const SearchBox = (Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.box}>
                <Ionicons size={15} style={{ color: "white" }} name="options-outline" />
            </TouchableOpacity>
            <TextInput style={styles.textInput}  placeholder={"نام رستوارن مورد نظرتان را بنویسید"}/>
            <TouchableOpacity>
                <Ionicons size={20} style={{ color: "gray", marginRight: width * 0.03 }} name="ios-search" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: width * 0.97,
        height: width * 0.15,
        borderRadius: 30,
        backgroundColor: "black",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    box:{
        width: width * 0.06,
         height: width * 0.06,
         justifyContent: "center",
         alignItems: "center",
         borderRadius: 20, 
         backgroundColor: "gray"
    },
    textInput:{
        color:"white",
        width:width*0.80,
        alignSelf:"center",
        justifyContent:"flex-end",
        padding:10,
        fontSize:width*0.030,
    }

});
export default SearchBox