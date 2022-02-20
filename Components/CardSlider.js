import { View, Text, Image, FlatList, Animated, Alert } from 'react-native';
import React, { useCallback, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import Card from './Card';
import { Directions, FlingGestureHandler, State } from "react-native-gesture-handler";

const cards = [
  {id: 1, name: 'Mamba', cardNumber: '4890 **** **** 4404', balance: '35,000', bg: '#2E3045'},
  {id: 2, name: 'Chop Life', cardNumber: '4890 **** **** 1234', balance: '35,000', bg: '#FF6A37'},
  {id: 3, name: 'Dollar Card', cardNumber: '4890 **** **** 1234', balance: '35,000', bg: '#8134F8'},
  {id: 4, name: 'Mamba', cardNumber: '5890 **** **** 4404', balance: '35,000', bg: '#2E3045'},
  {id: 5, name: 'Visa', cardNumber: '5390 **** **** 1234', balance: '35,000', bg: '#FF6A37'},
  {id: 6, name: 'Total', cardNumber: '5890 **** **** 1234', balance: '35,000', bg: '#8134F8'},
]
const SPACING = 10;

const CardSlider = () => {
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const setActiveIndex = useCallback((activeIndex) => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex)
  });
  

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true
    }).start();
  })
  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.RIGHT}
      onHandlerStateChange={({nativeEvent}) => {
        if(nativeEvent.state === State.END){
          if(index === cards.length - 1) return;
          setActiveIndex(index+1)
        }
      }}
    >
    <FlingGestureHandler
      key="right"
      direction={Directions.LEFT}
      onHandlerStateChange={({nativeEvent}) => {
        if(nativeEvent.state === State.END){
          if(index ===  0) return;
          setActiveIndex(index-1)
        }
      }}
    >
        <FlatList 
          horizontal
          inverted
          scrollEnabled={false}
          removeClippedSubviews={false}
          data={cards}
          keyExtractor={({id}) => id}
          contentContainerStyle={[tw`h-64`,{
            flex: 1,
            justifyContent: 'center',
            padding: SPACING * 2
          }]}
          CellRendererComponent={({item, index, style, children, ...props}) => {
            const newStyle = [style, {zIndex: cards.length - index}]
            return(<View style={newStyle} index={index} {...props}>
              {children}
            </View>
          )}}
          renderItem={({item, index}) => {
            const inputRange = [index-1, index, index+1]
            const translateX = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [50, 0, -100]
            })
            const scale = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [0.8, 1, 1.3]
            })
            const opacity = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [1-1/3, 1, 0]
            })
            return (
            <Animated.View 
              style={{position:'absolute', left: -320/2, opacity, transform:[{translateX}, {scale}]}}>
                <Card {...item} />
            </Animated.View>
          )}}
        />
    </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default CardSlider;
