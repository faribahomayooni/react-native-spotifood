import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Colors from "../constants/Colors"
import EditScreenInfo from './EditScreenInfo';
import SpotifoodBoldText from '../Component/SpotifoodBoldText'
import SpotifoodText from '../Component/SpotiFoodText'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity } from 'react-native';


const { width, height } = Dimensions.get('window')
export default function Header(Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>Props.onPress}>
                {/* <Icon size={20} name="ios-close" style={{ color: "white" }} /> */}
            </TouchableOpacity>
            <View style={styles.LOGO}>
                <SpotifoodBoldText name={"Spotifood"} style={styles.title} />
                <SpotifoodText name={"restaurant Menu"} style={styles.Subtitle} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.mainBackground,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    LOGO: {
        alignItems: "flex-end",
    },
    title: {
        fontSize: width * 0.050,
        color: 'white',
        marginTop: 0
    },
    Subtitle: {
        fontSize: width * 0.030,
        color: Colors.globalGreen,
        marginTop: -5,
    },

});
