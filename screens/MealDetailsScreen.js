import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import {HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Colors from '../Constants/Colors'
import { MEALS } from '../data/dummy-data'
const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    );
  };

const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text>{selectedMeal.duration}m</Text>
          <Text>{selectedMeal.complexity.toUpperCase()}</Text>
          <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </ScrollView>
    )
}
MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        
        headerRight: ()=> <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item iconName='ios-star' onPress={()=>{
    
                    }} />
                </HeaderButtons>
        ,
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTintColor: "white"
    }
    

}
const styles=StyleSheet.create({
    image: {
        width: '100%',
        height: 200
      },
      details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
      },
      listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
      }
    });

export default MealDetailsScreen
