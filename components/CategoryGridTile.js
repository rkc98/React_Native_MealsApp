import React from 'react'
import { StyleSheet, View ,Text, FlatList, TouchableOpacity, ImageBackground} from 'react-native'
const CategoryGridTile = (props) => {
    return (
<TouchableOpacity activeOpacity={0.5} style={styles.grid} onPress={props.onSelect}>
<ImageBackground source={{uri:props.color}} style={styles.bgImage} >
            <View style={{...styles.container}} >

            <Text style={styles.title}>
                {props.title}
            </Text>
            
        </View>
        </ImageBackground>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    bgImage:{
        width:"100%",
        height:"100%",
        
    },
    grid:{
        flex:1,
        margin:15,
        height:150, 
        elevation:5,
        borderRadius:10,
        overflow:'hidden'
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.1,
        shadowOffset:{
            width:2,
            height:2
        },
        shadowRadius:10,

        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'


    },
    title:{
        fontFamily:'sans-serif',
        fontSize:18,
        fontWeight:'bold',
        color:"white"
    }
})
export default CategoryGridTile
