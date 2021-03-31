import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Colors from "../constants/Colors"
import PageContent from './PageContent';
import RestaurantSlider from '../components/RestaurantSlider'
import { ScrollView } from 'react-native-gesture-handler';
import FoodsIcon from "../components/FoodsIcon"
import { View } from '../components/Themed';
import SearchBox from '../components/SearchBox'
import { BarCodeScanner } from 'expo-barcode-scanner';
import SpotiFoodBoldText from '../components/SpotifoodBoldText';


const { width, height } = Dimensions.get('window')
const FoodsList =
  [{ url: require(`../assets/images/coffee-64.png`) },
  { url: require(`../assets/images/cupcake-64.png`) },
  { url: require(`../assets/images/dim-sum-64.png`) },
  { url: require(`../assets/images/french-fries-64.png`) },
  { url: require(`../assets/images/macaron-64.png`) },
  { url: require(`../assets/images/pizza-64.png`) },
  { url: require(`../assets/images/salad-64.png`) },
  { url: require(`../assets/images/soda-64.png`) },
  { url: require(`../assets/images/rice-bowl-64.png`) },
  { url: require(`../assets/images/steak-64.png`) }]

const Home = () => {
  const [RestaurantList, setRestaurantList] = useState([1, 1, 1, 1, 1])
  return (
    <PageContent>
      <View style={{ flex: 0.4, backgroundColor: Colors.mainBackground }}>
        <ScrollView horizontal={true} style={{ height: width * 0.05 ,scaleX:-1}}>
          {RestaurantList.map((items, index) => {
            return (
              <RestaurantSlider style={{scaleX:-1}} />
            )
          })
          }
        </ScrollView>
      </View>
      <View style={{ flex: 0.2, backgroundColor: Colors.mainBackground,scaleX:-1 }}>
        <ScrollView horizontal={true}>
          {FoodsList.map((items, index) => {
            return (
              <FoodsIcon url={items.url} style={{scaleX:-1}} items={items} index={index}/>
            )
          })
          }
        </ScrollView>
      </View>
      <View style={{flex:0.14,backgroundColor: Colors.mainBackground}}>
      <SearchBox />
      </View>
      <SpotiFoodBoldText name={"رستوران های اطراف شما (میدان آرژانتین)"} style={styles.aroundText} />
      <View style={{ flex: 0.5, backgroundColor: Colors.mainBackground }}>
        <ScrollView style={{ height: width * 0.05 }}>
          {RestaurantList.map((items, index) => {
            return (
              <RestaurantSlider style={{ width: width * 0.95 }} ImageStyle={{width: width * 0.95 }} locationStyle={{alignSelf:"flex-start",marginLeft:5}} />
            )
          })
          }
        </ScrollView>
      </View>

    </PageContent>
  )
}

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    color: 'white',
    marginTop: 10
  },
  Subtitle: {
    fontSize: 13,
    color: Colors.globalGreen,
    marginTop: -5
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  aroundText: {
    marginTop: width * 0.020, alignSelf: "flex-end", color: "gray"
  }
});

export default Home