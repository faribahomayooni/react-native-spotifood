import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator ,Alert,TouchableOpacity,Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Dimensions } from 'react-native';
import Colors from "../constants/Colors"
import PageContent from './PageContent';
import SpotiFoodText from '../Component/SpotiFoodText'
import ConstName from '../constants/ConstName';

const { width, height } = Dimensions.get("window")
const QRCode=(Props)=> {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   (async () => {
    //     const { status } = await BarCodeScanner.requestPermissionsAsync();
    //     setHasPermission(status === 'granted');
    //   })();
    // }, 1000);

  }, []);

  onSuccess = e => {
    console.log("show address ****",e)
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    if(e.data.slice(0,19)==="https://menusite.ir"){
      Props.navigation.push("QRCodeMenuResult",{name:e.data.slice(22,50)})}
      else{
        Alert.alert(
          "",
          "بارکد رستوران قابل شناسایی نیست",
          [
         
            { text: "باشه", onPress: () => console.log("OK Pressed") }
          ]
        );
      } 
    }
    
  
  if (hasPermission === false) {
    return <View style={styles.lodingStyle}>
      <SpotiFoodText name={ConstName.NoAccessCamera}></SpotiFoodText>
    </View>;
  }

  return (
    <PageContent>
      {/* <View style={styles.container}> */}
      <QRCodeScanner
        onRead={(e)=>onSuccess(e)}
        // flashMode={RNCamera.Constants.FlashMode.torch}
      />
      {/* </View> */}
    </PageContent>
  );
}

export default QRCode
const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    width: width,
    height: width * 0.80,
    borderRadius: 30,
    backgroundColor: Colors.mainBackground,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: width * 0.60,
    alignSelf:"center"
  },
  lodingStyle: {
    backgroundColor: Colors.mainBackground,
    minHeight: height,
    justifyContent: "center",
    alignItems: "center"
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});