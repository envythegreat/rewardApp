import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width, height} =  Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height; 
interface SliderProps{
  label: string;
  right?: boolean;
}


const Slide = ({label, right}: SliderProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT -100) /2 },
    {translateX: right ? width / 2-50 : -width / 2 +50 },
    {rotate: right ? '-90deg': '90deg'}
  ]
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width
  },
  title:{
    fontSize: 70,
    lineHeight: 80,
    fontFamily: 'DoHyeon',
    color: '#FFF',
    textAlign: "center",
  },
  titleContainer:{
    // backgroundColor: 'red',
    height: 100,
    justifyContent: 'center'
  }
});

export default Slide;
