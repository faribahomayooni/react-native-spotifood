import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import{Image} from 'react-native'
import { View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PageContent from '../screens/PageContent';
import Home from '../screens/Home'
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import QRCodeScanner from '../screens/QRCode'

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint,activeBackgroundColor:"#1C1C1C"
      ,inactiveBackgroundColor:"#1C1C1C",showLabel:false }}>
      <BottomTab.Screen
        name="TabOne"
        component={()=><Home/>}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={()=><QRCodeScanner/>}
        options={{
          tabBarIcon: ({ color }) => 
           <View style={{width:50,height:43,borderRadius:15,borderWidth:0.5,backgroundColor:"#75a13c",alignItems:"center",justifyContent:"center",borderColor:"#75a13c"}}>  
              <Image style={{resizeMode:"stretch",width:25,height:25,tintColor:"white"}} source={require('../assets/images/QrCode.png')} />
           </View>    
           ,
        }}
      />
         <BottomTab.Screen
         name="TabThree"
         component={()=><PageContent/>}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
   
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
  return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={()=><PageContent/>}
        options={{ headerTitle: ''}}
        
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
