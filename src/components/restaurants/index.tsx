import {FlatList} from 'react-native';
import {useEffect, useState} from "react";
import {RestaurantItem} from "./horizontal";

export interface RestaurantProps {
    id: string;
    name: string;
    image: string;
}



export function Restaurants() {
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
    <FlatList
    data={restaurants}
    renderItem={ ({item} ) => <RestaurantItem item={item}/> }
    horizontal={true}
    contentContainerStyle={{gap: 16, paddingLeft: 16, paddingRight: 16}}
    showsHorizontalScrollIndicator={false}

/>
  );
}