import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../Constants/Colors'
import { MEALS } from '../data/dummy-data'

const MealDetailsScreen = () => {
    return (
 <View style={styles.screen}>
        <Text>
            The Meals Details Screen!!
        </Text>

    </View>
    )
}
MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedCategory = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Colors.primaryColor,


        },
        headerTintColor: "white"
    }

}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default MealDetailsScreen
