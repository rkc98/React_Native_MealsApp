import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import MealItem from '../components/MealItem'
import MealList from '../components/MealList'
import Colors from '../Constants/Colors'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsScreen = (props) => {

    

    const catId = props.navigation.getParam('categoryId')
    // console.log(catId);
    // const selectedCategory=CATEGORIES.find(cat=>cat.id===catId)
    const display = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0)
    return (

<MealList listData={display} navigation={props.navigation} />
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Colors.primaryColor,


        },
        headerTintColor: "white"
    }

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CategoryMealsScreen
