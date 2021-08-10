import React from 'react'
import { StyleSheet, View ,Text, FlatList, TouchableOpacity} from 'react-native'
const CategoryGridTile = (props) => {
    return (
<TouchableOpacity activeOpacity={0.5} style={styles.grid} onPress={props.onSelect}>
            <View style={{...styles.container,...{backgroundColor:props.color}} }>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    grid:{
        flex:1,
        margin:15,
        height:150
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:10,
        elevation:3,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'


    },
    title:{
        // fontFamily:'open-sans',
        fontSize:18
    }
})
export default CategoryGridTile
