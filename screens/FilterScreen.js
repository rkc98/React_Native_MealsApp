import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FilterScreen = () => {
    return (
<View style={styles.screen}>
        <Text>
            The Filter Screen!!
        </Text>

    </View>
    )
}
FilterScreen.navigationOptions={
    headerTitle:"Filter Meals"

}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default FilterScreen
