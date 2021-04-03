import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator ,Alert} from 'react-native';
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
    setTimeout(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, 1000);

  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // var d="https://menusite.ir/s/demo"
    if(data.slice(0,19)==="https://menusite.ir"){
    Props.navigation.push("QRCodeMenuResult",{name:data.slice(22,50)})}
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

  if (hasPermission === null) {
    return <View style={styles.lodingStyle}>
      <SpotiFoodText name={ConstName.Loading}></SpotiFoodText>
      <ActivityIndicator size={"large"} color={Colors.globalGreen} />
    </View>;
  }
  if (hasPermission === false) {
    return <View style={styles.lodingStyle}>
      <SpotiFoodText name={ConstName.NoAccessCamera}></SpotiFoodText>
    </View>;
  }

  return (
    <PageContent>
      <View style={styles.container}>
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      </View>
    </PageContent>
  );
}

export default QRCode
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: width,
    height: width * 0.80,
    borderRadius: 30,
    backgroundColor: Colors.mainBackground,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: width * 0.60
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