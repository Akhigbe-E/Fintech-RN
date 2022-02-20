import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavigationBar from './Components/NavigationBar';
import Home from './Screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[tw`pt-4`, {flex:1}]}>
        <Home/>
      </View>
      <View style={{flex:0}}>
        <NavigationBar/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 50
    // paddingHorizontal: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
