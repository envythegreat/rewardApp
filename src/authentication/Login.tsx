import React, {Component} from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Container from '../component/Container';
import Button from '../component/Button';
import TextInput from '../component/TextInput'
import CheckBox from '../component/CheckBox'
import ContainerFooter from '../component/ContainerFooter'
import HeaderAuth from '../component/HeaderAuth'
import {withNavigation} from '@react-navigation/core';

interface LoginProps {}
const {width} = Dimensions.get('window')


class Login extends Component<LoginProps>{
  render(){
    // const navigation =useNavigation();
    return (
      <Container footer={<ContainerFooter label="Don’t have an account?" btn=" Sign Up here" naviga="Register" />} position>
        <HeaderAuth title="Welcome back" subTitle="Use your credentials below and login to your account" />
        <View style={{justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
          <TextInput iconName="mail" placeholder="Enter your Email" refs="Email" keyboardType="email-address" />
          <TextInput iconName="lock" placeholder="Enter your password" refs="Password" keyboardType="default" textEntry={true} />
          <View style={styles.bottomLogin}>
              <View>
                <CheckBox label="Remember me" />
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                <Text style={{color: '#2CB9B0', }}>Forgot Password?</Text>
              </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <Button label="Log into your account" variant="primary" onPress={() => this.props.navigation.navigate('Account')} />
          </View>
        </View>
      </Container>
    );
  }
}

export default withNavigation(Login);

const styles = StyleSheet.create({

  bottomLogin:{
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.8,
    justifyContent: 'space-between',
    marginVertical: 20
  }
});
