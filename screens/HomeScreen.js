import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
    return (
        <SafeAreaView style={tw `bg-white h-full`}>
            <View>
                <Text style={tw `p-8 text-black-400 font-bold text-xl`}> TAXI </Text>
                { /* <Image /> */}
                <NavOptions/>
            </View>
            
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    }
})
