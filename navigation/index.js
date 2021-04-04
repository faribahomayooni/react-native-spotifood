import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NotFoundScreen from '../Screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import QRCode from '../Screens/QRCode';
import StartQRCode from '../Screens/StartQRCode'
import Splash from '../Screens/Splash'
// import BottomTabNavigator from './BottomTabNavigator';

import LinkingConfiguration from './LinkingConfiguration';
import QRCodeMenuResult from '../Screens/QRCodeMenuResult'


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer initialRouteName="Splash"  keyboardHandlingEnabled={true}
    headerMode={'none'}>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
           <Stack.Screen name="Splash" component={Splash}  />
           <Stack.Screen name="StartQRCode" component={StartQRCode}  />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal


function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StartQRCode" component={StartQRCode}  />
       {/* <Stack.Screen name="QRCodeMenuResult" component={QRCodeMenuResult}  />
      <Stack.Screen name="QRCode" component={QRCode} />
   <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />  */}
    </Stack.Navigator>
  );
}
