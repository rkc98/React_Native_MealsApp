import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity activeOpacity={0.5} style={styles.grid} onPress={props.onSelectMeal}>
            <View>

                <View style={{...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground source={{uri:props.image}} style={styles.bgImage} >
                    <Text style={styles.title} numberOfLines={1}>
                    {props.title}
                </Text>
                </ImageBackground>
                </View>
                <View style={{...styles.mealRow,...styles.mealDetail}}>
                    <Text>
                        {props.duration}m
                    </Text>
                    <Text>
                        {props.complexity}
                    </Text>
                    <Text>
                        {props.affordability}
                        {console.log(props.affordability)}
                    </Text>


                </View>
            </View>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mealItem:{

        height:200,
        width:"100%",
        backgroundColor:"#ccc",
        borderRadius:10,
        overflow:'hidden'


    },
    // grid: {
    //     flex: 1,
    //     margin: 15,
    //     height: 150
    // },
    // container: {
    //     flex: 1,
    //     borderRadius: 10,
    //     shadowColor: 'black',
    //     shadowOpacity: 0.26,
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowRadius: 10,
    //     elevation: 3,
    //     padding: 15,
    //     justifyContent: 'flex-end',
    //     alignItems: 'flex-end'


    // },
    bgImage:{
        width:"100%",
        height:"100%",justifyContent:'flex-end'
    },
    mealRow:{
        flexDirection:'row'

    },mealHeader:{
        height:"85%"
    },
    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        height:"15%"

    },title:{
        fontSize:20,paddingVertical:5,paddingHorizontal:10,
        color:"white",
        backgroundColor:"rgba(0,0,0,0.5)",
        textAlign:"center"
    }

})
export default MealItem
