import React, { ReactNode } from 'react';
import { View, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  position?: boolean;
}

const {width} = Dimensions.get('window')
const aspectRatio = 750 / 1125
const wheight = width * aspectRatio
const {height} = Dimensions.get('window')

const Container = ({children, footer, position}: ContainerProps) => {
  const bottomBorderData = position ? {borderBottomLeftRadius: 75} :  {borderBottomRightRadius: 75};
  const topBorderData = position ? {borderTopLeftRadius: 0} : {borderTopRightRadius: 0}
  const insets = useSafeAreaInsets();
  return (
    <>
    <KeyboardAwareScrollView>
    <StatusBar barStyle="dark-content" />
    <View style={[styles.container, {height}]}>
      <View style={{backgroundColor: '#FFF'}}>
        <View style={[styles.Topbox, bottomBorderData]}>
          <Image 
            source={require('../../assets/img/smoke.jpg')}
            style={{width, height: wheight,borderBottomLeftRadius: 75}} />
        </View>
      </View>
      <View style={styles.centerBox}>
        <Image
          source={require('../../assets/img/smoke.jpg')}
          style={
            {
              width,
              height:wheight,
              ...StyleSheet.absoluteFillObject,
              top:-wheight * 0.61,
            }}
        />
        
        <View style={[styles.boxOverllay, topBorderData]}>
          
            {children}
        </View>
      </View>
      <View style={styles.footerContainer} >
        {footer}
        <View  style={{height: insets.bottom}} />
      </View>
    </View>
    </KeyboardAwareScrollView>
    </>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: "#000"
  },
  Topbox:{
    overflow: 'hidden',
    height: wheight * 0.61,
  },
  centerBox: {
    flex: 1,
    overflow: 'hidden',
  },
  boxOverllay:{
    borderRadius: 75,
    backgroundColor: '#FFF',
    flex:1,
    overflow: 'hidden'
  },
  footerContainer:{
    // height: 200,
    backgroundColor: "#000",
    paddingTop: 20,
    alignItems: 'center',
  }
});
