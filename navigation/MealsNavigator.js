import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Colors from '../Constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

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
const MealFavTabNavigator=createBottomTabNavigator({
    Meals:MealsNavigator,
    Favourites:FavouritesScreen
})
export default createAppContainer(MealFavTabNavigator);