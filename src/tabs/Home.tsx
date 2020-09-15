import * as React from 'react';
import { View, StyleSheet } from 'react-native';
// import Container from '../component/Container';
// import { Shape2 } from '../component/icons/Shapes';
// import HeaderAuth from '../component/HeaderAuth';
import SplashSVG from '../component/icons/splash';

interface HomeProps {}
const size = 250;
const Home = (_props: HomeProps) => {
  return (
    <View style={styles.Bigcontainer}>
      <View style={styles.container}>
        <SplashSVG />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    flexDirection: "row",
    flexWrap: "wrap",
    transform: [{ rotate: "180deg" }],
  },
  Bigcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
