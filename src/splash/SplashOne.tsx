import { Animated, Easing, Text } from 'react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';

// import Container from '../component/Container';
import { Allshapes,} from '../component/icons/Shapes';
// import HeaderAuth from '../component/HeaderAuth';
// import HeaderAuth from '../component/HeaderAuth';
// import SplashSVG from '../component/icons/splash';

interface SplashProps {}
const Splash = (_props: SplashProps) => {
  const spinValue = new Animated.Value(0)

// First set up animation 
Animated.loop(
  Animated.timing(
    spinValue,
    {
     toValue: 1,
     duration: 2000,
     easing: Easing.linear,
     useNativeDriver: true
    }
  )
 ).start();

// Second interpolate beginning and end values (in this case 0 and 1)
const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})
  return (
    <View style={styles.Bigcontainer}>
      <Animated.View style={[
        {transform: [{rotate: spin}] },
      ]}>
        <Allshapes />
      </Animated.View>
      <View style={styles.TextM}>
        <Text style={styles.txt}>Nova Reward</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  Bigcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextM:{
    position: 'absolute',
    bottom: 100,
    justifyContent: 'center'
  },
  txt:{
    fontSize: 40,

  }
});
