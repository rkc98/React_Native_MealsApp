import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MealList from '../components/MealList'
import Colors from '../Constants/Colors'
import { MEALS } from '../data/dummy-data'

const FavouritesScreen = (props) => {
    const favMeals = MEALS.filter(meal => meal.categoryId==='m1')
    return (
<MealList listData={favMeals} navigation={props.navigation} />
    )
}
FavouritesScreen.navigationOptions={
    headerTitle: 'Your Favourites',
    headerStyle:{
        backgroundColor:Colors.primaryColor,
        
        
    },
    headerTintColor:"white"
}

export default FavouritesScreen
