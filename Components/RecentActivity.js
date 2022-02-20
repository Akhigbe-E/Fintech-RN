import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const RecentActivity = ({emoji, name, type, amount, createdAt, card}) => {
  return (
    <TouchableOpacity style={tw`pr-6 items-start flex-row justify-between`}>
        <View style={tw`flex-grow`}>
            <View style={tw`flex-row`}>
                <View style={[tw`w-14 h-14 py-2 mr-3 rounded-xl`, {backgroundColor:`${type === 'credit'?'#CDEBDD': '#ebcdcd'}`}]}>
                    <Text style={tw`text-2xl text-center`}>{emoji}</Text>
                </View>
                <View>
                    <Text style={[tw`text-lg font-bold`, {color:'#3F495F'}]}>{name}</Text>
                    <Text style={[tw`text-base text-right`, {color:`#ABAFB8`}]}>
                        From the card {card}
                    </Text>
                </View>
            </View>
        </View>

        <View>
            <Text style={[tw`text-base font-black`, {color:`${type === 'credit'? '#20B870':'#b82037'}`}]}>
                {type === 'credit'? '+ ':'-'}{amount}
            </Text>
            <Text style={[tw`text-base text-right`, {color:`#ABAFB8`}]}>
                {createdAt}
            </Text>
        </View>
    </TouchableOpacity>
  );
};

export default RecentActivity;
