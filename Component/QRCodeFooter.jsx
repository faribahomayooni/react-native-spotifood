import * as React from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import Colors from "../constants/Colors"
import SpotifoodBoldText from '../components/SpotifoodBoldText'
import SpotifoodText from '../components/SpotiFoodText'
import constName from '../constants/ConstName'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')
const QRCodeFooter = (Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.TEXT}>
                <SpotifoodText style={{ fontSize: width * 0.030, marginTop: width * 0.050 }} name={constName.ScanResturantQRCode} />
                <TouchableOpacity style={{ marginTop: width * 0.05 }}>
                    <Ionicons size={20} name="ios-chevron-back" style={{ color: "white", alignSelf: "center", marginRight: width * 0.180 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.backbutton}>
                <TouchableOpacity style={styles.scannerStyle} onPress={Props.onPress}>
                    <Image source={require('../assets/images/QrCode.png')} style={{ width: width * 0.050, height: width * 0.050, tintColor: "white" }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: width * 0.050,
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        backgroundColor:Colors.mainBackground
    },
    scannerStyle: {
        borderRadius:20,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:Colors.globalGreen,
       width:width*0.20,height:width*0.17,
       shadowColor:Colors.globalGreen,
       shadowOffset: {width:75, height:75,},
       shadowOpacity: 0.2,
     elevation:2,
    },
    TEXT: {
        flexDirection: 'row-reverse',
    },
    backbutton:{

    }

});


export default QRCodeFooter