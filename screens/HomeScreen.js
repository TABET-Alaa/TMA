import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Text style={styles.text}>Je suis la page d'accueil</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    }
})
