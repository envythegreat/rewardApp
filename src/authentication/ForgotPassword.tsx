import * as React from 'react';
import { Text, StyleSheet, View, Linking, _Image } from 'react-native';
import Container from '../component/Container';
import ContainerFooter from '../component/ContainerFooter'
import HeaderAuth from '../component/HeaderAuth';
import TextInput from '../component/TextInput';
import Button from '../component/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ForgotPasswordProps {}

const footer  = (
  <View style={{}}>
    <ContainerFooter label="Back To login ?" btn=" Login here" naviga="Login" />
  </View>
)
const ForgotPassword = (_props: ForgotPasswordProps) => {
  return (
    <Container footer={footer} position>
      {/* <View style={styles.checkImg}>
        <Image source={require('../../assets/img/Bigmark.png')}/>
      </View>
      <HeaderAuth  title="Your password was successfully changed" subTitle="Close this window and login again" />
      <TouchableOpacity style={styles.closeBtn}>
        <Image source={require('../../assets/img/close.png')} />
      </TouchableOpacity> */}
      <HeaderAuth  title="Forgot password?" subTitle="Enter the email address associated with your account" />
      <View style={{justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
          <TextInput iconName="mail" placeholder="Enter your Email" refs="Email" keyboardType="email-address" />
          <View style={styles.btn}>
            <Button 
              label="Reset password"
              variant="primary"
              onPress={() => alert('bello')}
            />
          </View>
            <TouchableOpacity style={styles.help} 
              onPress={() => Linking.openURL('https://google.com')}>
              <Text style={{color: '#000'}}>Don’t work?</Text>
              <Text style={{color: '#2CB9B0'}}> Try another way</Text>
            </TouchableOpacity>
        </View>
    </Container>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {},
  btn:{alignItems:'center', marginVertical: 30},
  help:{
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 15
    // flex: 1
  },
  checkImg:{
    marginTop:50,
    alignItems:'center',
    // marginVertical: 15
  },
  closeBtn:{
    justifyContent:'center',
    alignItems:'center',
  }
});
