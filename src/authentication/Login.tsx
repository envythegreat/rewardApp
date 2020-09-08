import React, {Component} from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Container from '../component/Container';
import Button from '../component/Button';
import TextInput from '../component/TextInput'
import CheckBox from '../component/CheckBox'
import ContainerFooter from '../component/ContainerFooter'
import HeaderAuth from '../component/HeaderAuth'
import { StackScreenProps } from '@react-navigation/stack';
import { Routes } from './Routes';
// import {withNavigation} from '@react-navigation/compat';

interface LoginProps {
  Props : StackScreenProps<Routes, 'Login'>
}
interface LoginState {
  Email: string;
  Password: string;
}
const {width} = Dimensions.get('window')
// type Props = StackScreenProps<Routes, 'Login'>

class Login extends Component<LoginProps, LoginState>{

  constructor(props: Readonly<LoginProps>){
    super(props)
    this.state = {
      Email: '',
      Password: ''
    }
  }

  handleState = (e: string, ref:string) => {
    // @ts-ignore
    this.setState({
      [ref]: e,
    })
  }
  render(){
    // const navigation =useNavigation();
    return (
      <Container footer={<ContainerFooter label="Don’t have an account?" btn=" Sign Up here" naviga="Register" />} position>
        <HeaderAuth title="Welcome back" subTitle="Use your credentials below and login to your account" />
        <View style={{justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
          <TextInput iconName="mail" placeholder="Enter your Email" refs="Email" keyboardType="email-address" handleState={this.handleState} />
          <TextInput iconName="lock" placeholder="Enter your password" refs="Password" keyboardType="default" textEntry={true} handleState={this.handleState} />
          <View style={styles.bottomLogin}>
              <View>
                <CheckBox label="Remember me" />
              </View>
              
              <TouchableOpacity onPress={
                // @ts-ignore
                () => this.props.navigation.navigate('ForgotPassword')}>
                <Text style={{color: '#2CB9B0', }}>Forgot Password?</Text>
              </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <Button label="Log into your account" variant="primary" onPress={
              // @ts-ignore
              () => this.props.navigation.navigate('Account')} />
          </View>
        </View>
      </Container>
    );
  }
}
export default Login;

const styles = StyleSheet.create({

  bottomLogin:{
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.8,
    justifyContent: 'space-between',
    marginVertical: 20
  }
});
