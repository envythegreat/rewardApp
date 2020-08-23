import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
const TEXT_HEIGHT = 0.70 * height;
const right = false;
export default function Onboarding() {
  return (
    <>
      <StatusBar hidden={true}/>
      <View style={styles.container}>
        <View style={styles.SliderContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>My HHHHHH</Text>
          </View>
        </View>
      
      <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'red'}} />
        <View style={{flex: 1, backgroundColor: 'snow', borderTopLeftRadius: 75}}></View>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow',
    // width
  },
  SliderContainer:{
    backgroundColor: 'red',
    height: TEXT_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer:{
    flex:1,
  },
  titleContainer: {
    // backgroundColor: 'snow',
    width,
    height: 100,
    justifyContent: 'center',
    transform: [
      {translateY: (TEXT_HEIGHT -100) /2 },
      {translateX: right ? width / 2-60 : -width / 2 +60 },
      {rotate: right ? '-90deg': '90deg'}
    ],
    borderRadius: 50
  },
  title: {
    fontSize: 80,
    color: 'black',
    textAlign: 'center',
    lineHeight: 80,
  }
});
