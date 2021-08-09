import React from 'react'
import { StyleSheet, View ,Text, FlatList, TouchableOpacity} from 'react-native'
import Colors from '../Constants/Colors'
import {CATEGORIES} from '../data/dummy-data'



const CategoriesScreen = (props) => {
    const renderGridItem=(itemdata)=>{
        return(
            <TouchableOpacity style={styles.grid} onPress={()=>{
                props.navigation.navigate({routeName:'CategoriesMeals',params:{
                    categoryId:itemdata.item.id,
                    
                }})
            }}>
            <View >
            <Text>
                {itemdata.item.title}
            </Text>
        </View>
        </TouchableOpacity>
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
