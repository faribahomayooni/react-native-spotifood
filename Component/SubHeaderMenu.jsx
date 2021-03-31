import * as React from 'react';
import { Dimensions, StyleSheet, View, Image,ScrollView } from 'react-native';
import Colors from "../constants/Colors"
import FoodsIcon from '../components/FoodsIcon'
const { width, height } = Dimensions.get('window')
const FoodsList =
  [{id:0, url: require(`../assets/images/coffee-64.png`) },
  { id:1,url: require(`../assets/images/cupcake-64.png`) },
  {id:2, url: require(`../assets/images/dim-sum-64.png`) },
  {id:3, url: require(`../assets/images/french-fries-64.png`) },
  {id:4, url: require(`../assets/images/macaron-64.png`) },
  {id:5, url: require(`../assets/images/pizza-64.png`) },
  {id:6, url: require(`../assets/images/salad-64.png`) },
  {id:7, url: require(`../assets/images/soda-64.png`) },
  {id:8, url: require(`../assets/images/rice-bowl-64.png`) },
  {id:9, url: require(`../assets/images/steak-64.png`) }]


const SubHeaderMenu = (Props) => {
    const [selectfood,setselectfood]=React.useState(0)
  const onPress=()=>{
Props.navigation.push("QRCode")
  }

  const selected=(selectedId)=>{
    setselectfood(selectedId)
    Props.selectedResult(selectedId)
  }
  // console.log("############",Props.items)
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: Colors.mainBackground,scaleX:-1,padding:width*0.020 }}>
        <ScrollView horizontal={true}>
          { Props.items.length!==0 && Props.items!==undefined &&
          Props.items.map((items, index) => {
            return (
              <FoodsIcon key={index} url={FoodsList[index]} style={{scaleX:-1}} selected={selected} items={items} selectfood={selectfood}/>
            )
          })
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"black",
  },
});


export default SubHeaderMenu

