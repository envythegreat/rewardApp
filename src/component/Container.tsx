import React, { ReactNode } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const {width} = Dimensions.get('window')
const aspectRatio = 750 / 1125
const height = width * aspectRatio

const Container = ({children, footer}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#FFF'}}>
        <View style={styles.Topbox}>
          <Image 
            source={require('../../assets/img/pattern.png')}
            style={{width, height,borderBottomLeftRadius: 75}} />
        </View>
      </View>
      <View style={styles.centerBox}>
        <Image
          source={require('../../assets/img/pattern.png')}
          style={
            {
              width,
              height,
              ...StyleSheet.absoluteFillObject,
              top:-height * 0.61,
            }}
        />
        <View style={styles.boxOverllay}>
          {children}
        </View>
      </View>
      <View style={styles.footerContainer} >
        {footer}
        <View  style={{height: insets.bottom}} />
      </View>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#0C0D34"
  },
  Topbox:{
    overflow: 'hidden',
    height: height * 0.61,
    borderBottomLeftRadius: 75,
  },
  centerBox: {
    flex: 1,
    overflow: 'hidden',
  },
  boxOverllay:{
    borderRadius: 75,
    borderTopLeftRadius: 0,
    backgroundColor: '#FFF',
    flex:1,
  },
  footerContainer:{
    // height: 200,
    backgroundColor: "#0C0D34",
    paddingTop: 20,
    alignItems: 'center',
  }
});
