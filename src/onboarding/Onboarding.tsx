import React, { useRef } from 'react';
import {View, StyleSheet, Dimensions } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import Slide, {SLIDE_HEIGHT} from './Slide';
import SubSlide from './SubSlide'
import {useValue, onScrollEvent, interpolateColor} from 'react-native-redash';
// import { useNavigation } from '@react-navigation/native';
const {width} =  Dimensions.get('window');



const slides = [
  {
    label: "Reward",
    color: "#BFEAF5",
    subTitle: "Find Your Game",
    description: "Collect Point and withdraw fund to your favorite game"
  },
  {
    label: "Watch Ads",
    color: "#BEECC4",
    subTitle: "Hear it First, Get it First",
    description: "Watch Ads, View, Download Apps. Collect Point and Get paid"
  },
  {
    label: "Get Paid",
    color: "#FFE4D9",
    subTitle: "Fast Delivery",
    description: "Get paid with a lot of ways , Games Coins , Paypal, Payonner"
  },
  {
    label: "Get Started",
    color: "#FFDDDD",
    subTitle: "Look Good, Feel Good",
    description: "Discover the latest trends in fashion and explore your personality"
  }
]


const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  // const navigation = useNavigation();
  const x = useValue(0);
  const onScroll =  onScrollEvent({x});
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_,i) => i * width),
    outputRange: slides.map(slide => slide.color)
  })
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView 
          ref={scroll}
          horizontal 
          snapToInterval={width}
          decelerationRate="fast" 
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {
            slides.map(({label}, index) => (
              <Slide key={index} right={!!(index % 2)} {...{label}} />
            ))
          } 
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}} />
        <Animated.View 
          style={[styles.footerContent, 
            {
              width: width * slides.length + 1, 
              flex: 1,
              transform: [{translateX: multiply(x, -1)}]
            }]}>
          {
            slides.map(({subTitle, description}, index) => (
              <SubSlide
                onPress={() => {
                  
                  if(scroll.current){
                    if(index === slides.length -1) {
                      alert('hhhhh')
                    }else {
                      scroll.current
                          .getNode()
                          .scrollTo({x: width *(index + 1), animated: true})
                    }
                  }
                }}
                key={index} 
                last={index === slides.length -1} {...{subTitle, description}} />
            ))
          } 
        </Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75
  },
  footer: {
    flex:1
  },
  footerContent: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 75
  }
})



export default Onboarding;