import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem'
const MealList = (props) => {
    const renderMealItem = itemdata => {
        return <MealItem title={itemdata.item.title} duration={itemdata.item.duration} complexity={itemdata.item.complexity}
            affordability={itemdata.item.affordability} image={itemdata.item.imageUrl} onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail', params: {
                        mealId: itemdata.item.id
                    }
                })
            }} />
    }
    return <View style={styles.screen}>
        <FlatList data={props.listData} renderItem={renderMealItem} />

    </View>
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    grid: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default MealList