import React from 'react'
import { StyleSheet, View ,Text} from 'react-native'
import Colors from '../Constants/Colors'
import { CATEGORIES } from '../data/dummy-data'
const CategoryMealsScreen = (props) => {

const catId=props.navigation.getParam('categoryId')
// console.log(catId);
const selectedCategory=CATEGORIES.find(cat=>cat.id===catId)

    return (
        <View style={styles.screen}>
        <Text>
            {selectedCategory.title}
        </Text>

    </View>
    )
}

CategoryMealsScreen.navigationOptions=(navigationData)=>{
    const catId=navigationData.navigation.getParam('categoryId')
    const selectedCategory=CATEGORIES.find(cat=>cat.id===catId)

    return {
        headerTitle:selectedCategory.title,
        headerStyle:{
            backgroundColor:Colors.primaryColor,
            
            
        },
        headerTintColor:"white"
    }
    
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoryMealsScreen
