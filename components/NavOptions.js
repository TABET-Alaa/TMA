import React from 'react'
import {  Text, View , TouchableOpacity, Image, FlatList} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

const data = [
    {
        id: "123",
        title: "prenez une course",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "prenez une course",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "789",
        title: "prenez une course",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    }
];

const NavOptions = () => {
    return (
        <FlatList 
            data = {data} 
            keyExtractor = {(item) => item.id}
            horizontal 
            renderItem={( { item }) => (
                <TouchableOpacity style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <Image 
                        style= {{ width: 120, height:120, resizeMode: "contain"}}
                        source={{ uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>
                        { item.title}
                    </Text>
                    <Icon 
                        type='antdesign'
                        name = 'arrowright'
                        color='black'
                        style={tw `p-2 bg-white rounded-full w-10 mt-4`}
                    />
                </TouchableOpacity>

            )}
        />
    )
}

export default NavOptions
 