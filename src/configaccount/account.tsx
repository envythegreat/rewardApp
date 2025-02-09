import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,} from 'react-native';
import Container from '../component/Container'
import { TouchableOpacity, } from 'react-native-gesture-handler';
import HeaderAuth from '../component/HeaderAuth';
import TextInput from '../component/TextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { Routes } from '../authentication/Routes';
// import {handleState} from '../config/functions'
// import {Feather as Icon} from "@expo/vector-icons"


interface AccountProps {
  Props : StackScreenProps<Routes, 'Account'>
}
interface AccountState{
  Username: string;
  FullName: string;
  Birthday: Date;
  Address: string;
}

class Account extends Component<AccountProps, AccountState>{

  constructor(props:  Readonly<AccountProps>){
    super(props);
    this.state = {
      Username: '',
      FullName: '',
      Birthday: new Date(),
      Address: '',

    }
  }
  handleState = (e: string, ref:string) => {
    if(ref === 'Birthday') {
      let newDate = new Date(e)
      this.setState({
        Birthday: newDate,
      })
    }
    // console.log(e)
    // @ts-ignore
    this.setState({
      [ref]: e,
    })
  }

  Footer = () => {
    return (
        <TouchableOpacity style={styles.trchOpacity} onPress={
          // @ts-ignore
          () => this.props.navigation.navigate('FlashyStyledScreen')}>
          <Text style={{textAlign: 'center', color:'#FFFFFF',lineHeight: 50}}>Press To continue</Text>
          <Image source={require('../../assets/img/icon-swipe.png')} style={styles.Imgbtn} />
          {/* <Icon name="chevron-right" /> */}
        </TouchableOpacity>
    )
  }

  render(){
    return (
      <Container footer={<this.Footer />} position isFooter>
        <HeaderAuth title="Account Configuration"/>
        <HeaderAuth subTitle="Please Enter The Required Data (*)" />
        <View style={{justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
          <TextInput iconName="at-sign" placeholder="Username *" refs="Username" keyboardType="default" handleState={this.handleState} />
          <TextInput iconName="user" placeholder="Full Name *" refs="FullName" keyboardType="default"  handleState={this.handleState}/>
          <TextInput iconName="calendar" placeholder="Birthday format (DD/MM/YYYY) *" refs="Birthday" keyboardType="number-pad" handleState={this.handleState} isDate/>
          <TextInput iconName="map-pin" placeholder="Street Address *" refs="Address" keyboardType="default" handleState={this.handleState}/>
        </View>
      </Container>
    );
  }
}


export default Account;

const styles = StyleSheet.create({
  container: {},
  trchOpacity:{
    justifyContent: 'center',
    backgroundColor: '#2CB9B0',
    height: 50,
    width: 245,
    borderRadius: 50,
    flexDirection: 'row',
  },
  Imgbtn:{
    position: 'absolute',
    right: 2,
    top: 5
  }
});
