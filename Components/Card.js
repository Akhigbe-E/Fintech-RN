import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const Card = ({name, balance, cardNumber, bg}) => {
  return (
    <View style={[tw`rounded-3xl p-5 h-56`, {backgroundColor:bg, width:340}]}>
        <Text style={[tw`text-xl text-white text-right font-semibold mb-14`, {}]}>$ {balance}</Text>
        <Text style={[tw`text-2xl text-white text-center w-full font-semibold mb-2`, {}]}>{cardNumber}</Text>
        <View style={tw`flex flex-row items-end`}>
            <Text style={tw`text-lg uppercase text-white ml-3 pb-1 font-semibold`}>{name}</Text>
            <Image source={require('../assets/visa.png')} alt="Visa" style={tw`w-20 h-20 -mb-4 ml-auto`}/>
        </View>
    </View>
  );
};

export default Card;
