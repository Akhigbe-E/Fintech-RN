import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const NavigationBar = () => {
  return (
    <View style={[tw`flex-row rounded-3xl p-8 pb-11 justify-around`, {backgroundColor:'#2E3045'}]}>
        <Icon type="entypo" name="home" color="#ffffff" size={30} />
        <Icon type="entypo" name="wallet" color="#C0C1C6" size={30}  />
        <Icon type="entypo" name="credit-card" color="#C0C1C6" size={30}  />
        <Divider orientation="vertical" width={3} color='#424657' />
        <Icon type="feather" name="user" color="#C0C1C6" size={30}  />
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({});
