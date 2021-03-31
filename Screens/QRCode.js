import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator ,Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
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
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={ConstName.ScanAgain} onPress={() => setScanned(false)} />}
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
  }
});