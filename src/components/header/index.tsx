import { View, Pressable, Text} from "react-native";
import {Ionicons, Feather} from '@expo/vector-icons'

export function Header() {
  return (
    <View className=" w-full flex-row items-center justify-between"
    >
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Ionicons name= "menu" size={20} color="#121212"/>
      </Pressable>


     <View className="flex fkex-col items-center justify-center">
      <Text className="text-center text-sm text-slate-600" >Localização</Text>
     

     
      <View className="flex-row items-center gap-1 justify-center">
        <Feather name="map-pin" size={14} color="#FF0000"/>
        <Text className="text-lg font-bold">Salvador </Text>
      </View>
     </View>


      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Feather name= "bell" size={20} color="#121212"/>
      </Pressable>

    
      
    </View>
  );
}