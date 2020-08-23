import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from './Slider';
import Swiper from 'react-native-swiper'


export default function Onboarding() {
  return (
    <>
      <StatusBar hidden={true}/>
      <View style={styles.container}>
        <Swiper loop={false}>
          <Slider
            Title='Reward'
            subTitle='Find Your Game' 
            description="Collect Point and withdraw fund to your favorite game" 
            direction
          />
          <Slider
            Title='Watch Ads'
            subTitle='Hear it First, Get it First' 
            description="Watch Ads, View, Download Apps. Collect Point and Get paid" 
            direction={false}
            shapes
          />
          <Slider
            Title='Get Paid'
            subTitle='Fast Delivery ' 
            description="Get paid with a lot of ways , Games Coins , Paypal, Payonner" 
            direction
          />
        </Swiper>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow',
    // width
  }
});
