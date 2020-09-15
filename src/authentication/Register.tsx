import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../component/Container'
import ContainerFooter from '../component/ContainerFooter'
import HeaderAuth from '../component/HeaderAuth'
import TextInput from '../component/TextInput';
import Button from '../component/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { Routes } from './Routes';

interface RegisterProps {
  Props : StackScreenProps<Routes, 'Register'>
}
interface RegisterState{
  Email: string
  Password: string
  CPassword: string
}


class Register extends Component<RegisterProps, RegisterState>{
  constructor(props: Readonly<RegisterProps>){
    super(props)
    this.state = {
      Email: '',
      Password: '',
      CPassword: ''
    }
  }
  handleState = (e: string, ref:string) => {
    // @ts-ignore
    this.setState({
      [ref]: e,
    })
  }
  render(){
    return (
      <Container footer={<ContainerFooter label="Already have an account?" btn=" Login here" naviga="Login" />} isFooter>
        <HeaderAuth  title="Create account" subTitle="Let’s us know what your name, email, and your password" />
        <View style={{justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
          <TextInput iconName="mail" placeholder="Enter your Email" refs="Email" keyboardType="email-address" handleState={this.handleState} />
          <TextInput iconName="lock" placeholder="Enter your password" refs="Password" keyboardType="default" textEntry={true} handleState={this.handleState}/>
          <TextInput iconName="lock" placeholder="Confirm password" refs="Password" keyboardType="default" textEntry={true} handleState={this.handleState}/>
          <View style={styles.btn}>
            <Button 
              label="Create your account"
              variant="primary"
              // @ts-ignore
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
        </View>
      </Container>
    );
  }
};

export default Register;

const styles = StyleSheet.create({
  btn:{alignItems:'center', marginVertical: 30}
});
