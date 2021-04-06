import * as React from 'react';
import { Dimensions, StyleSheet, View, FlatList, TouchableOpacity, Text,ActivityIndicator,Image } from 'react-native';
import MenuHeader from '../Component/MenuHeader'
import SubHeaderMenu from '../Component/SubHeaderMenu'
import MenuFoodList from '../Component/MenuFoodList'
import SpotiFoodText from '../Component/SpotiFoodText'
import {useState,useEffect} from 'react'
import {getMenu} from '../Function/globalFunction'
import  Colors  from '../constants/Colors';
const { width, height } = Dimensions.get('window')

const QRCodeMenuResult = (Props) => {
  console.log(Props.navigation)
  const [loading, setLoading] = useState(true);
  const [returantMenu,setResturantMenu]=useState("")
  const [MenuItems,setMenuItems]=useState(0)
  const onPress = () => {
    Props.navigation.pop()
    console.log("pop navigate")
  }

 useEffect(()=>{
 
 
  //  console.log("4444444444444444444",Props.route.params.name)
   var resName=Props.route.params.name
getMenu(resName).then((res) => {
  console.log("***********######",res.data.data),
  setResturantMenu(res.data.data.menus)
  const initial= res.data.data.menus[0].items
setMenuItems(initial)
})
.catch((error) => {
  console.error(error)
})


 },[])

  
  const renderItem = ({ item }) => <MenuFoodList item={item} />;
  const ListEmptyComponent = () => {
    return (<View style={{ justifyContent: 'center', alignItems: "center", minHeight: height * 0.70 }}>
      <View style={{ width: width * 0.50, height: width * 0.50, alignItems: "center", justifyContent: "center", borderRadius: 100 }}>
        <SpotiFoodText name={"نتیجه ای یافت نشد"} style={{ marginRight: 10 }} />
      </View>
    </View>)
  }


    const renderFooter = () => {
      return (
        //Footer View with Load More button
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.loadMoreBtn}>
            <Text style={styles.btnText}>مشاهده  موارد بیشتر</Text>
            {loading ? (
              <ActivityIndicator
                color="white"
                style={{marginLeft: 8}} />
            ) : null}
          </TouchableOpacity>
        </View>
      );
    };


    const selectedResult=(index)=>{
// if(index!==undefined && index!==NaN){
 var data= returantMenu[index].items
        setMenuItems([])
       setMenuItems(data)
      // }
    }
  return (
    <View style={styles.container}>
      <MenuHeader onPress={onPress} />
      <SubHeaderMenu items={returantMenu} selectedResult={selectedResult}/>
      <FlatList
        data={MenuItems}
        renderItem={renderItem}
        keyExtractor={item => item.item_id.toString()}
        ListEmptyComponent={ListEmptyComponent}
        // ListFooterComponent={renderFooter}
      />
      {/* <TouchableOpacity style={styles.waiterStyle}>
         <Image source={require('../assets/images/index.png')} style={{width:width*0.15,height:width*0.15,borderRadius:70}}/>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    marginTop: width * 0.073,
    minHeight: height,
    paddingBottom: width * 0.50
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor:Colors.globalGreen,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  waiterStyle:{
    borderRadius:70,
    padding:10,
    backgroundColor:Colors.MenuColor,
    width:width*0.19,
    height:width*0.19,
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    top:height<700?width*1.3:1.7,
    left:width*0.75
  }
});


export default QRCodeMenuResult

