import { FlatList } from 'react-native';
import { useState, useEffect } from "react";
import {CardFood } from "./foods";

export interface FoodProps {
   id: string;
   name: string;
   price: number;
   time: string;
   delivery: number;
   rating: number;
   image: string;
   restaurantId: string;
}



export function FoodsAlta() {
 const [foods, setFoods] = useState<FoodProps[]>([])
 
useEffect (() => {
     async function getFoods() {
        const response  = await fetch("http://172.31.112.1:3000/foods")
        const data = await response.json()
        setFoods(data)
     }


    getFoods()
}, [] ) 
    return (
   <FlatList
        data={foods}
        renderItem={ ({item} ) => <CardFood food={item}/> }
        horizontal={true}
        contentContainerStyle={{gap: 16, paddingLeft: 16, paddingRight: 16}}
        showsHorizontalScrollIndicator={false}
   
   />
  );
}