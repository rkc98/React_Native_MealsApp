import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Colors from '../Constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Platform } from 'react-native';

import React from 'react';
import FilterScreen from '../screens/FilterScreen';


const MealsNavigator=createStackNavigator({
    Categories: CategoriesScreen,
    CategoriesMeals:CategoryMealsScreen,
    MealDetail:MealDetailsScreen,

    
        // defaultNavigationOptions:{
        //     headerStyle:{
        //         backgroundColor:Colors.primaryColor,
                
                
        //     },
        //     headerTintColor:"white" 

        // }
    
    
})
const favNavigator=createStackNavigator({
    Favourites:FavouritesScreen,
    MealDetail:MealDetailsScreen,

})


const tabScreenconfig={Meals:{screen: MealsNavigator,navigationOptions:{
    tabBarIcon:(tabInfo)=>{
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor }  />
    },
    tabBarColor:Colors.primaryColor
}},
Favourites:{screen: favNavigator,navigationOptions:{
    tabBarLabel:"Favourites!",
    tabBarIcon:(tabInfo)=>{
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor }  />
    },
    tabBarColor:Colors.primaryColor
}}
}

const MealFavTabNavigator=Platform.OS==="android" ?createMaterialBottomTabNavigator(
    tabScreenconfig,
    {
        activeColorDark:Colors.accentColor,
        shifting:true
        
    }

) :createBottomTabNavigator({
   tabScreenconfig,

    tabBarOptions:{
        activeTintColor:Colors.accentColor
    }
}

)
// const FilterNavigator= createStackNavigator({
//     Filters:FilterScreen
// })
// const mainNavigator=createDrawerNavigator({
//     Mealsfav:MealFavTabNavigator,
//     Filters:FilterNavigator

// })


export default createAppContainer(MealFavTabNavigator);