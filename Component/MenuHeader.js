import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Colors from "../constants/Colors"
import EditScreenInfo from './EditScreenInfo';
import SpotifoodBoldText from '../components/SpotifoodBoldText'
import SpotifoodText from '../components/SpotiFoodText'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity } from 'react-native';


const { width, height } = Dimensions.get('window')
export default function Header(Props) {
    return (
        <View style={styles.container}>
                <SpotifoodText name={"رستوران ایتالیایی وی کافه"} style={styles.Subtitle} />
            <TouchableOpacity onPress={Props.onPress}>
                <Icon size={20} name="ios-arrow-forward" style={{ color: "white" }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.mainBackground,
        padding: 15,
        flexDirection: "row",
        justifyContent:"flex-end"
    },
    Subtitle: {
        fontSize: width * 0.030,
       marginRight:width*0.030
    },

});
