import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderAuth from '../component/HeaderAuth';

interface HomeProps {}

const Home = (_props: HomeProps) => {
  return (
    <View>
      <HeaderAuth title="Account Configuration"/>
      <HeaderAuth subTitle="Please Enter The Required Data (*)" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {}
});
