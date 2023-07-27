import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-feather1s'
import { themeColors } from '../theme'
import Categories from '../components/Categories'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor='#ffffff'
            />

            {/* search bar */}
            <View style={styles.searchContainer}>
                <View style={styles.inputSearch}>
                    <View style={styles.searchText}>
                        <Icon 
                            name="search"
                            size={20}
                            color="#999999"
                            thin={false}
                        />
                        <TextInput
                            placeholder='Restaurant'
                            style={styles.textInput}
                        />
                    </View>

                    <View style={styles.locationInput}>
                        <Icon 
                            name="map-pin"
                            size={20}
                            color="#999999"
                            thin={false}
                        />
                        <Text style={styles.textInput}>
                            New York, NYC
                        </Text>
                    </View>
                </View>
                <View style={styles.slidersRounded}>
                    <Icon 
                        name="sliders"
                        size={20}
                        color="#ffffff"
                        thin={false}
                    />
                </View>
            </View>

            {/* main */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
            >
                {/* categories */}
                <Categories />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 8,
        marginHorizontal: 8,
        paddingHorizontal: 6,
    },
    inputSearch: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 50,
        borderColor: '#999999',
        borderWidth: 1
    },
    searchText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    textInput: {
        color: '#999999'
    },
    locationInput: {
        paddingLeft: 8,
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginHorizontal: 4,
        border: 0,
        borderLeftWidth: 1,
        borderColor: '#999999'
    },
    slidersRounded: {
        padding: 12,
        backgroundColor: themeColors.bgColor(1),
        borderRadius: 50
    }
})

export default HomeScreen