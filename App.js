
import React,{useState,useEffect} from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import {View,Image, Dimensions,StatusBarÙˆ} from 'react-native'
// import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/index.js';
// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';

const {width,height}=Dimensions.get('window')
export default function App() {
  // let [fontsLoaded] = Font({
  //   'IRAN_Sans': require('./assets/fonts/IranianSans.ttf'),
  // // });
  // const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  const [splash, setSplash] = useState(true);
  // const [fontsLoaded, setfontsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 30);
  }, []);

//   const loadFonts=async()=> {
// return Font.loadAsync({
//       // Load a font `Montserrat` from a static resource
//       'IranSans': require('./assets/fonts/IranianSans.ttf'),  
//     });
//   }

//   if(!fontsLoaded){
//     return(
//       <AppLoading
//       startAsync={loadFonts}
//       onFinish={()=>setfontsLoaded(true)}
//       onError={(err)=>console.error(err)}/>
//     )
//   }

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
    return (
        
           <Navigation/>    
 
    );
}
