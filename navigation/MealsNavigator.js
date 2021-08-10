import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Colors from '../Constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

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

export default createAppContainer(MealsNavigator);