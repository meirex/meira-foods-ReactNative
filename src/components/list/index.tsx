import { View } from 'react-native';
import {useState, useEffect} from "react";
import { RestaurantItem } from "./item";
export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}

export  function RestaurantVerticallist() { 

        const [restaurants,setRestaurants ] = useState<RestaurantProps[]>([])
        
        useEffect (() => {
                async function getFoods() {
                const response  = await fetch("http://172.31.112.1:3000/restaurants")
                const data = await response.json()
                setRestaurants(data)
                }
        
        
            getFoods()
        }, [] ) 

 return (
   <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
    {restaurants.map( item => (
         <RestaurantItem item={item} key={item.id}/>
    ))}  
   </View>
  );
}