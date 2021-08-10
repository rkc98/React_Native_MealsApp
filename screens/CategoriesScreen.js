import React from 'react'
import { StyleSheet, View ,Text, FlatList, TouchableOpacity} from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import Colors from '../Constants/Colors'
import {CATEGORIES} from '../data/dummy-data'



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
    headerStyle:{
        backgroundColor:Colors.primaryColor,
        
        
    },
    headerTintColor:"white"
}
const styles=StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
grid:{
    flex:1,
    margin:15,
    height:150
}
})
export default CategoriesScreen
