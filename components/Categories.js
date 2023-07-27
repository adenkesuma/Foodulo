import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'
import { themeColors } from '../theme'

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(null)

    return (
        <View style={{ marginTop: 20 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 14
                }}
            >
                {categories.map((category, index) => {
                    let isActive = category.id === activeCategory
                    let btnActive = isActive ? themeColors.bgColor(1) : '#eaeaea'
                    let textActive = isActive ? themeColors.bgColor(1) : '#999999'

                    return (
                        <View key={index} style={styles.boxCategory}>
                            <TouchableOpacity
                                onPress={() => setActiveCategory(category.id)}
                                style={styles.categoriesButton(btnActive)}
                            >
                                <Image 
                                    source={category.image}
                                    style={styles.categoriesImage}
                                />
                            </TouchableOpacity> 
                            <Text style={styles.categoriesText(textActive)}>
                                {category.name}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    boxCategory: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12
    },
    categoriesButton: (value) => ({
        borderRadius: 50,
        padding: 2,
        backgroundColor: value,
    }),
    categoriesImage: {
        width: 60,
        height: 60
    },
    categoriesText: (value) => ({
        marginTop: 4,
        color: value,
        fontWeight: value === '#ffffff' ? 'bold' : 'normal',
        textAlign: 'center'
    })
})

export default Categories