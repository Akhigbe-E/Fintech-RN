import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import tw from 'tailwind-react-native-classnames';

const beneficiaries = [
    {
        id: 1,
        image: require(`../assets/memoji.png`),
        name: "Theos Ω"
    },
    {
        id: 2,
        image: require(`../assets/memoji.png`),
        name: "Coder ∅∆"
    },
    {
        id: 3,
        image: require(`../assets/memoji.png`),
        name: "Yoyo 🥳"
    },
    {
        id: 4,
        image: require(`../assets/memoji.png`),
        name: "Bobby 😎"
    },
    {
        id: 5,
        image: require(`../assets/memoji.png`),
        name: "John 🥷🏾"
    },
]
const SavedBeneficiaries = () => {
  return (
    <View>
        <View style={tw`flex-row justify-between items-end mb-6 px-6`}>
            <Text style={[tw`font-bold text-2xl`, {color: '#2E3045'}]}>Transfer to</Text>
            <Text style={[tw`font-bold text-base`, {color:"#8F56FA"}]}>+ Add new</Text>
        </View>
            <FlatList
                style={tw`pl-4`}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={36}
                decelerationRate={'fast'}
                data={beneficiaries}
                keyExtractor={({id}) => id}
                renderItem={({item:{image, name}}) => (
                    <TouchableOpacity style={tw`pr-6 items-center flex-col`}>
                        <LinearGradient start={[0, 0.5]}
                            end={[1, 0.5]}
                            colors={['#EFC7FF', '#C5D3FD']}
                            style={{borderRadius: 27}}>
                            <View style={tw`rounded-3xl bg-white m-1`}>
                                <View style={tw`w-16 h-16 p-2 m-2 rounded-3xl bg-purple-100`}>
                                    <Image style={tw`w-12 h-12`} source={image} alt={name} />
                                </View>
                            </View>
                        </LinearGradient>
                        <Text style={tw`mt-2 text-base font-bold`}>{name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
  );
};

export default SavedBeneficiaries;

const styles = StyleSheet.create({});
