import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import RecentActivity from './RecentActivity';

const activities = [
    {id: 1, name: 'Emmanuel', type: 'credit', amount: '$3,500', createdAt: 'Aug 23', card: '**** 4404', emoji:'🤑'},
    {id: 2, name: 'Spotify', type: 'debit', amount: '$300', createdAt: 'Aug 23', card: '**** 4404', emoji:'💸'},
    {id: 4, name: 'Netflix', type: 'debit', amount: '$3,500', createdAt: 'Aug 23', card: '**** 4404', emoji:'💸'},
    {id: 3, name: 'Bento', type: 'credit', amount: '$5,000', createdAt: 'Jun 25', card: '**** 4404', emoji:'🤑'},
]

const RecentActivityList = () => {
  return (
    <View>
        <View style={tw`flex-row justify-between items-center mb-6`}>
            <Text  style={[tw`font-bold text-2xl `, {color:'#3F495F'}]}>Recent activity</Text>
            <Icon type="antdesign" name="arrowright" color="#8F56FA" size={30} />
        </View>
        <FlatList
            data={activities}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
                <View style={tw`mb-5`}>
                    <RecentActivity {...item} />
                </View>
            )}
        />
    </View>
  );
};

export default RecentActivityList;
