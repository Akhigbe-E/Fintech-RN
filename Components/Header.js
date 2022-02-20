import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames'

const Header = () => {
  return (
    <View style={[tw`flex-row items-center w-full justify-between pb-4`, {backgroundColor:'#FFFFFF'}]}>
        <View>
            <Text style={tw`text-base`}>Hello,</Text>
            <Text style={tw`text-3xl font-bold`}>Theos 🔱</Text>
        </View>
        <View style={tw`w-16 h-16 p-2 rounded-3xl bg-red-200`}>
          <Image style={tw`w-12 h-12`} source={require('../assets/memoji.png')} alt="memoji"/>
        </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
