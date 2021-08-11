import React from 'react'
import { StyleSheet, View ,Text, FlatList, TouchableOpacity} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CategoryGridTile from '../components/CategoryGridTile'
import Colors from '../Constants/Colors'
import {CATEGORIES} from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'



const CategoriesScreen = (props) => {
    const renderGridItem=(itemdata)=>{
        return(
<CategoryGridTile  title={itemdata.item.title} color={itemdata.item.color} onSelect={()=>{
    props.navigation.navigate({routeName:'CategoriesMeals',params:{
        categoryId:itemdata.item.id,

        
    }})

}}     />
        )
    }
    return (
       <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}  />


    )
}
CategoriesScreen.navigationOptions={
    headerTitle: 'Meal Categories',
    // headerLeft:<HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item title="Menu" iconName='ios-menu' onPress={()=>{

    //     }} />

        
    // </HeaderButtons>
    
    // ,
    headerStyle:{
        backgroundColor:Colors.primaryColor,
        
        
    },
    headerTintColor:"white"
}
const styles=StyleSheet.create({

})
export default CategoriesScreen
