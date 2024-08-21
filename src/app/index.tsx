import { Text, View, ScrollView} from "react-native";
import  Constants  from "expo-constants"

import {Header} from "../components/header"
import {Banner} from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { FoodsAlta } from "../components/alta";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticallist } from "../components/list";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
   <ScrollView
    style={{ flex: 1 }} 
    className="bg-slate-200" 
    showsVerticalScrollIndicator= {false}
   >
     <View className="w-full px-4" style={{marginTop: statusBarHeight +8}}> 
      <Header/>
     
     
      <Banner/>
      </View>
    <Search/>
    <Section
    name="Mais pedidos"
    label="Veja mais"
    action={() => console.log("clicou no veja mais!!!")}
    size="text-lg"/>

    <FoodsAlta/>

    <Section
    name="Em alta no MeiraFoods"
    label="Veja mais"
    action={() => console.log("clicou no veja mais!!!")}
    size="text-lg"/>
   <Restaurants/>  

   <Section
    name="Restaurantes"
    label="Veja mais"
    action={() => console.log("clicou no restaurantes!!!")}
    size="text-lg"/>
   <RestaurantVerticallist/>
  
   </ScrollView>
  );
}
