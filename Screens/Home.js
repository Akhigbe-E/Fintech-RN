import { FlatList, ListViewComponent, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import SavedBeneficiaries from '../Components/SavedBeneficiaries';
import RecentActivity from '../Components/RecentActivityList';
import tw from 'tailwind-react-native-classnames';
import CardSlider from '../Components/CardSlider';
import NavigationBar from '../Components/NavigationBar';

const components = [
  () => (<View style={tw`mb-8`}><CardSlider/></View>),
  ()=> (<SavedBeneficiaries/>),
  ()=> (<View style={tw`mt-10 px-4`}><RecentActivity/></View>)
]
const Home = () => {
  return (
    <FlatList 
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
      <View style={tw`px-4 bg-white`}>
        <Header/>
      </View>}
      stickyHeaderIndices={[0]}
      stick
      data={components}
      renderItem={({item}) => item()}
    />
  );
};

export default Home;

const styles = StyleSheet.create({});
