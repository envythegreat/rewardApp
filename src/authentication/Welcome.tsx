import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import Slide, {SLIDE_HEIGHT} from '../onboarding/Slide';
import SubSlide from '../onboarding/SubSlide';
import Button from '../component/Button';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
  const navigation =useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slide label="Welcome" right />
      </View>
      <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: '#F2F2F2'}} />
        <View style={styles.footerContent}>
          <SubSlide 
            subTitle="Let’s get started" 
            description="Login to your account below or signup for an amazing experience"
            onPress={() => navigation.navigate('Login')}
            welcome
          />
          <Button 
            label="Join us, it’s Free"
            variant="default"
            onPress={() => alert('hello')}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider:{
    height: SLIDE_HEIGHT - 60,
    backgroundColor: '#F2F2F2',
    borderBottomRightRadius: 75
  },
  footer:{
    flex:0.80
  },
  footerContent:{
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 75,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
